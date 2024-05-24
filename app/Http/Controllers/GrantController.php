<?php

namespace App\Http\Controllers;

use App\Grant;
use App\Form;
use App\Estimate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use GuzzleHttp\Client;

class GrantController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($divsion_id)
    {
        $grants = Grant::where('grant_status','1')->where('division_id', $divsion_id)->orderBy('updated_at', 'DESC')->with('user')->paginate();
        //  dd($grants);
// $officials_name = DB::table('users')->where('id',$granted_by)->pluck('name')->first();
// $officials_name = DB::table('users')->where('id',$granted_by)->first();
// $phoneNumbers = DB::table('users')->where('division_id', $grant->division_id )->pluck('phone')->implode(',');
        // $southGrants = DB::table('grants')->where('grant_status','1')->where('division_id', '1')->orderBy('updated_at', 'DESC')->paginate();

        // $northGrants = DB::table('grants')->where('grant_status','1')->where('division_id', '2')->orderBy('updated_at', 'DESC')->paginate();

        return response()->json([
            "grants"=>$grants,
            // "officials_name"=>$officials_name
            // "southGrants"=>$southGrants,
            // "northGrants"=>$northGrants
        ],200);
    }

    public function allindex($divsion_id)
    {
        $grants = Grant::where('grant_status','2')->where('division_id', $divsion_id)->orderBy('updated_at', 'DESC')->with('user')->paginate();

        // $southGrants = DB::table('grants')->where('grant_status','2')->where('division_id', '1')->orderBy('updated_at', 'DESC')->paginate();

        // $northGrants = DB::table('grants')->where('grant_status','2')->where('division_id', '2')->orderBy('updated_at', 'DESC')->paginate();

        return response()->json([
            "grants"=>$grants,
            // "southGrants"=>$southGrants,
            // "northGrants"=>$northGrants
        ],200);
    }

    public function unindex($divsion_id)
    {
        $grants = DB::table('grants')->where('grant_status','0')->where('division_id',$divsion_id)->orderBy('updated_at', 'DESC')->paginate();
// info($grants);
        // $southGrants = DB::table('grants')->where('grant_status','0')->where('division_id', '1')->orderBy('updated_at', 'DESC')->paginate();

        // $northGrants = DB::table('grants')->where('grant_status','0')->where('division_id', '2')->orderBy('updated_at', 'DESC')->paginate();

        // $champhaiGrants = DB::table('grants')->where('grant_status','0')->where('division_id', '4')->orderBy('updated_at', 'DESC')->paginate();
        // $lungleiGrants = DB::table('grants')->where('grant_status','0')->where('division_id', '5')->orderBy('updated_at', 'DESC')->paginate();
        // $saitualGrants = DB::table('grants')->where('grant_status','0')->where('division_id', '6')->orderBy('updated_at', 'DESC')->paginate();
        // $mamitGrants = DB::table('grants')->where('grant_status','0')->where('division_id', '7')->orderBy('updated_at', 'DESC')->paginate();
        // $siahaGrants = DB::table('grants')->where('grant_status','0')->where('division_id', '8')->orderBy('updated_at', 'DESC')->paginate();
        // $khawzawlGrants = DB::table('grants')->where('grant_status','0')->where('division_id', '9')->orderBy('updated_at', 'DESC')->paginate();
        // $kolasibGrants = DB::table('grants')->where('grant_status','0')->where('division_id', '10')->orderBy('updated_at', 'DESC')->paginate();
        // $lawngtlaiGrants = DB::table('grants')->where('grant_status','0')->where('division_id', '11')->orderBy('updated_at', 'DESC')->paginate();
        // $serchhipGrants = DB::table('grants')->where('grant_status','0')->where('division_id', '12')->orderBy('updated_at', 'DESC')->paginate();
        // $hnahthialGrants = DB::table('grants')->where('grant_status','0')->where('division_id', '13')->orderBy('updated_at', 'DESC')->paginate();

        return response()->json([
            "grants"=>$grants,
            // "southGrants"=>$southGrants,
            // "northGrants"=>$northGrants,

            // "champhaiGrants"=>$champhaiGrants,
            // "lungleiGrants"=>$lungleiGrants,
            // "saitualGrants"=>$saitualGrants,
            // "mamitGrants"=>$mamitGrants,
            // "siahaGrants"=>$siahaGrants,
            // "khawzawlGrants"=>$khawzawlGrants,
            // "kolasibGrants"=>$kolasibGrants,
            // "lawngtlaiGrants"=>$lawngtlaiGrants,
            // "serchhipGrants"=>$serchhipGrants,
            // "hnahthialGrants"=>$hnahthialGrants,
        ],200);
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Grant  $grant
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $grant = Grant::findOrFail($id);

        $form = Form::findOrFail($grant->form_id);

        $estimate = DB::table('estimates')->where('form_id', $form->id)->first();

        return response()->json(["grant"=>$grant, "form" => $form, "estimate"=> $estimate ],200);
    }

    public function permissionShow($id)
    {
        $form = Form::find($id);

        $grant = Grant::find($form->grant_id);

        $estimate = DB::table('estimates')->where('form_id', $form->id)->first();

        return response()->json(["grant"=>$grant, "form" => $form, "estimate"=> $estimate ],200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Grant  $grant
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request)
    {


        $grant = Grant::findOrFail($request->id);

        $form = Form::findOrFail($grant->form_id);

        $grant->grant_status = 1;

        $grant->validity = $request->validity;
        $grant->granted_by = $request->grantedby; // additional added by ash

        $grant->save();

        $form->track_status = 6;
        $form->grant_id = $grant->id;

        $form->save();
// TODO
        if($form->division_id == 1)
        {
            $div= "Road South";
        }
        elseif($form->division_id == 2)
        {
            $div="Road North";
        }
        elseif($form->division_id == 4)
        {
            $div="Champhai Road";
        }
        elseif($form->division_id == 5)
        {
            $div="Lunglei Road";
        }
        elseif($form->division_id == 6)
        {
            $div="Saitual Road";
        }
        elseif($form->division_id == 7)
        {
            $div="Mamit Road";
        }
        elseif($form->division_id == 8)
        {
            $div="Siaha Road";
        }
        elseif($form->division_id == 9)
        {
            $div="Khawzawl Road";
        }
        elseif($form->division_id == 10)
        {
            $div="Kolasib Road";
        }
        elseif($form->division_id == 11)
        {
            $div="Lawngtlai Road";
        }
        elseif($form->division_id == 12)
        {
            $div="Serchhip Road";
        }
        elseif($form->division_id == 13)
        {
            $div="Lunglei Road Div-II, Hnahthial Road";
        }
        elseif($form->division_id == 14)
        {
            $div="Hmuifang Division Road";
        }
        elseif($form->division_id == 15)
        {
            $div="National Highway Div-I Road";
        }
        elseif($form->division_id == 16)
        {
            $div="National Highway Div-III Road";
        }

        $sub = "?,Validity:".$grant->validity;
        $var1=$form->phone.", ".$form->localcouncil_name;

                 // SMS 5

                //  try {

                //     $client = new Client();
                //     $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
                //       'form_params' => [
                //           'api_key' => env('SMS_API_KEY'),
                //           'number' => $form->phone,
                //           'message' =>'Memo No: '.$form->memo.', Permission Granted for Road Cutting, Valid till: '.$grant->validity.' .DoICT',
                //           'template_id'=>'1007185925158604160',
                //           // 'number' => $phone_number,
                //           // 'message' => $mOTP . ' is your OTP from eTender, MSeGS',
                //       ]
                //   ]);

                //   } catch (\Exception $e) {

                //       return $e->getMessage();
                //   }


                //   // SMS to SDO and EE

                //   try {

                //     $phoneNumbers = DB::table('users')->where('division_id', $grant->division_id )->where('disable_account_status', 0 )->pluck('phone')->implode(',');

                //     $client = new Client();
                //     $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
                //       'form_params' => [
                //           'api_key' => env('SMS_API_KEY'),
                //           'number' => $phoneNumbers,
                //           'message' =>'EE has granted permission for Memo: '.$form->memo.', '.$form->name.', '.$var1.', Div: '.$div.'. Sub: '.$sub.'. DoICT',
                //           'template_id'=>'1007880438505280942',
                //         //   'message' =>'Memo No: '.$form->memo.', Permission Granted for Road Cutting, Valid till: '.$grant->validity.' .DoICT',
                //         //   'template_id'=>'1007185925158604160',
                //           // 'number' => $phone_number,
                //           // 'message' => $mOTP . ' is your OTP from eTender, MSeGS',
                //       ]
                //   ]);

                //   } catch (\Exception $e) {

                //       return $e->getMessage();
                //   }


                //   //SMS to JE or SA


                //   try {

                //     $phoneNumbers = DB::table('engineers')->where('division_id', $grant->division_id )->where('disable_account_status', 0 )->pluck('phone')->implode(',');

                //     $client = new Client();
                //     $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
                //       'form_params' => [
                //           'api_key' => env('SMS_API_KEY'),
                //           'number' => $phoneNumbers,
                //           'message' =>'EE has granted permission for Memo: '.$form->memo.', '.$form->name.', '.$var1.', Div: '.$div.'. Sub: '.$sub.'. DoICT',
                //           'template_id'=>'1007880438505280942',
                //         //   'message' =>'Memo No: '.$form->memo.', Permission Granted for Road Cutting, Valid till: '.$grant->validity.' .DoICT',
                //         //   'template_id'=>'1007185925158604160',
                //           // 'number' => $phone_number,
                //           // 'message' => $mOTP . ' is your OTP from eTender, MSeGS',
                //       ]
                //   ]);

                //   } catch (\Exception $e) {

                //       return $e->getMessage();
                //   }



        return response()->json([
            "grant" => $grant,
            "form" => $form
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Grant  $grant
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Grant $grant)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Grant  $grant
     * @return \Illuminate\Http\Response
     */
    public function destroy(Grant $grant)
    {
        //
    }
}
