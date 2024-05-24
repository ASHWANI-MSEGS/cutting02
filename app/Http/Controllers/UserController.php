<?php

namespace App\Http\Controllers;

use App\User;
use App\Role;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;


class UserController extends Controller
{

    public function register(Request $request)
    {
        // validate


        $this->validate($request,[
        'name' => 'required|max:255',
        // 'email' => 'required|email',
        'email' => 'required|email|max:255|unique:users',
        'password' => 'required|min:6',
        'phone' => 'required|min:10|numeric'
        ]);
        //  create db
            $user= new User();
            $user->name=$request->name;
            $user->email=$request->email;
            $user->phone=$request->phone;
            $user->password=bcrypt($request->password);
            $user->role_id=4;
            $user->division_id=0;
            $user->sub_div = $request->sub_div;
            $user->created_by = $request->created_by;

        $user->api_token=Str::random(32);

        $user->save();

       $form1 = User::find(1)->form;

       return ["message"=>"User Created","user"=>$user];

    }

    public function create(Request $request)
    {
        $superadminRole = Role::select('id')->where('name','superadmin')->first();
        $eeadminRole = Role::select('id')->where('name','eeadmin')->first();
        $operatoradminRole = Role::select('id')->where('name','operatoradmin')->first();

        $this->validate($request,[
        'name' => 'required|max:255',
        'email' => 'required|email|max:255|unique:users',
        'password' => 'required|min:6',
        'phone' => 'required|min:10|numeric'
        ]);

            $user= User::create([
           'name' => $request->name,
           'phone' => $request->phone,
           'password' => bcrypt($request->password),
           'email' => $request->email,
           'role_id' => $request->role_id,
           'division_id' => $request->division_id,

           'api_token' => Str::random(32),
           'sub_div' => $request->sub_div,
           'created_by' => $request->created_by

           ]);

        if($request->role_id == 1)
            $user->roles()->attach($superadminRole);
        if($request->role_id == 2)
            $user->roles()->attach($eeadminRole);
        if($request->role_id == 3)
            $user->roles()->attach($operatoradminRole);


            return response()->json([
                "user" => $user
            ]);

    }

    public function index($division_id)
    {
        // $users = User::all()->paginate(1);
        // $users = DB::table('users')->get();
        if($division_id==3){
            $users = DB::table('users')->orderBy('id', 'ASC')->paginate();
            return response()->json([
                "users"=>$users

            ],200);
        }
        else{
            $users = DB::table('users')->where('division_id',$division_id)->orderBy('id', 'ASC')->paginate(); /// ori

            return response()->json([
                "users"=>$users

            ],200);
        }
    }

    public function updatePassword(Request $request)
    {

        $user=User::find($request->id);


        request()->validate([
            'newpassword' => ['required','min:6']
        ]);



        if(Hash::check($request['oldpassword'], $user->password))
        {

            if(Hash::check($request['newpassword'], $user->password))
            {
                return response()->json([

                    "user" => $user
                ],409);

            }

            else {


                $user->password= Hash::make($request['newpassword']);

                $user->update();

                return response()->json([
                    "user"=>$user
                ],201);




            }
        }

    }

    public function destroy($id)
    {
        $user = User::find($id);
        $user->delete();

        $status_user= "deleted";

        return response()->json([

            "status_user" => $status_user
        ]);
    }

    public function disableUser($id)
    {

// info($id);
        $disable_account = User::findOrFail($id);
        info($disable_account);

        if($disable_account->disable_account_status == 0)
        {
            $disable_account->disable_account_status = 1;

            $disable_account->save();

            return response()->json([
                "disable_account" => $disable_account,
            ]);
        }
        elseif($disable_account->disable_account_status == 1)
        {
            $disable_account->disable_account_status = 0;

            $disable_account->save();

            return response()->json([
                "disable_account" => $disable_account,
            ]);
        }
    }

    public function checkIfUserDisabled($email){

// return "ashwani ";
        $user = User::where('email', $email)->first();
        // info($user);
        // return $user;
        if($user->disable_account_status == 0){
            return response()->json([
                "status"=>false

            ],200);
            // return response()->json(['isdisabled' => false]);
            // return false;
        }
        else{
            // return response()->json(['isdisabled' => true]);
            // return true;
            return response()->json([
                "status"=>true

            ],200);
        }
    }



}
