<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Estimate;
use App\Form;
use App\Feature;
use App\User;
use Illuminate\Support\Facades\DB;
use GuzzleHttp\Client;

class EstimateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $estimates = Estimate::all();

        return response()->json([
            "estimates" => $estimates
        ], 200);
    }



    public function approvedIndex($division_id)
    {
        $estimates = DB::table('estimates')->where('estimate_status','1')->where('division_id', $division_id)->orderBy('updated_at', 'DESC')->paginate();
//         $southEstimates = DB::table('estimates')->where('estimate_status','1')->where('division_id', '1')->orderBy('updated_at', 'DESC')->paginate();
//         $northEstimates = DB::table('estimates')->where('estimate_status','1')->where('division_id', '2')->orderBy('updated_at', 'DESC')->paginate();
//         // $formSouthCount = DB::table('estimates')->where('estimate_status','1')->where('division_id','1')->count();
//         // $formNorthCount = DB::table('estimates')->where('estimate_status','1')->where('division_id','2')->count();

//            //champhai
//     // $formChamphaiCount = DB::table('estimates')->where('estimate_status','1')->where('division_id','4')->count();
//     $champhaiEstimates = DB::table('estimates')->where('estimate_status', '1')->where('division_id', '4')->orderBy('updated_at', 'DESC')->paginate();
// // lunglei
// // $formLungleiCount = DB::table('estimates')->where('estimate_status','1')->where('division_id','5')->count();
// $lungleiEstimates = DB::table('estimates')->where('estimate_status', '1')->where('division_id', '5')->orderBy('updated_at', 'DESC')->paginate();
// // Saitual
// // $formSaitualCount = DB::table('estimates')->where('estimate_status','1')->where('division_id','6')->count();
// $saitualEstimates = DB::table('estimates')->where('estimate_status', '1')->where('division_id', '6')->orderBy('updated_at', 'DESC')->paginate();
// //Mamit
// // $formMamitCount = DB::table('estimates')->where('estimate_status','1')->where('division_id','7')->count();
// $mamitEstimates = DB::table('estimates')->where('estimate_status', '1')->where('division_id', '7')->orderBy('updated_at', 'DESC')->paginate();
// //Siaha
// // $formSiahaCount = DB::table('estimates')->where('estimate_status','1')->where('division_id','8')->count();
// $siahaEstimates = DB::table('estimates')->where('estimate_status', '1')->where('division_id', '8')->orderBy('updated_at', 'DESC')->paginate();
// //Khawzawl
// // $formKhawzawlCount = DB::table('estimates')->where('estimate_status','1')->where('division_id','9')->count();
// $khawzawlEstimates = DB::table('estimates')->where('estimate_status', '1')->where('division_id', '9')->orderBy('updated_at', 'DESC')->paginate();
// //Kolasib
// // $formKolasibCount = DB::table('estimates')->where('estimate_status','1')->where('division_id','10')->count();
// $kolasibEstimates = DB::table('estimates')->where('estimate_status', '1')->where('division_id', '10')->orderBy('updated_at', 'DESC')->paginate();
// //Lawngtlai
// // $formLawngtlaiCount = DB::table('estimates')->where('estimate_status','1')->where('division_id','11')->count();
// $lawngtlaiEstimates = DB::table('estimates')->where('estimate_status', '1')->where('division_id', '11')->orderBy('updated_at', 'DESC')->paginate();
// //Serchhip
// // $formSerchhipCount = DB::table('estimates')->where('estimate_status','1')->where('division_id','12')->count();
// $serchhipEstimates = DB::table('estimates')->where('estimate_status', '1')->where('division_id', '12')->orderBy('updated_at', 'DESC')->paginate();
// //Hnahthial
// // $formHnahthialCount = DB::table('estimates')->where('estimate_status','1')->where('division_id','13')->count();
// $hnahthialEstimates = DB::table('estimates')->where('estimate_status', '1')->where('division_id', '13')->orderBy('updated_at', 'DESC')->paginate();



        return response()->json([
            "estimates" => $estimates,
            // "southEstimates" => $southEstimates,
            // "northEstimates" => $northEstimates,

            //  "champhaiEstimates"=>$champhaiEstimates,
            //  "lungleiEstimates"=>$lungleiEstimates,
            // "saitualEstimates"=>$saitualEstimates,
            // "mamitEstimates"=>$mamitEstimates,
            // "siahaEstimates"=>$siahaEstimates,
            // "khawzawlEstimates"=>$khawzawlEstimates,
            // "kolasibEstimates"=>$kolasibEstimates,
            // "lawngtlaiEstimates"=>$lawngtlaiEstimates,
            // "serchhipEstimates"=>$serchhipEstimates,
            //  "hnahthialEstimates"=>$hnahthialEstimates,

        ], 200);
    }


    public function unapprovedIndex($divison_id)
    {
        // $estimates = DB::table('estimates')->where('status','0')->get();
        $estimates = DB::table('estimates')->where('estimate_status','0')->where('division_id', $divison_id)->orderBy('updated_at', 'ASC')->paginate();
//         $southEstimates = DB::table('estimates')->where('estimate_status','0')->where('division_id', '1')->orderBy('updated_at', 'DESC')->paginate();
//         $northEstimates = DB::table('estimates')->where('estimate_status','0')->where('division_id', '2')->orderBy('updated_at', 'DESC')->paginate();
//         // $formSouthCount = DB::table('estimates')->where('estimate_status','0')->where('division_id','1')->count();
//         // $formNorthCount = DB::table('estimates')->where('estimate_status','0')->where('division_id','2')->count();

//         //champhai
//     // $formChamphaiCount = DB::table('estimates')->where('estimate_status','0')->where('division_id','4')->count();
//     $champhaiEstimates = DB::table('estimates')->where('estimate_status', '0')->where('division_id', '4')->orderBy('updated_at', 'DESC')->paginate();
// // lunglei
// // $formLungleiCount = DB::table('estimates')->where('estimate_status','0')->where('division_id','5')->count();
// $lungleiEstimates = DB::table('estimates')->where('estimate_status', '0')->where('division_id', '5')->orderBy('updated_at', 'DESC')->paginate();
// // Saitual
// // $formSaitualCount = DB::table('estimates')->where('estimate_status','0')->where('division_id','6')->count();
// $saitualEstimates = DB::table('estimates')->where('estimate_status', '0')->where('division_id', '6')->orderBy('updated_at', 'DESC')->paginate();
// //Mamit
// // $formMamitCount = DB::table('estimates')->where('estimate_status','0')->where('division_id','7')->count();
// $mamitEstimates = DB::table('estimates')->where('estimate_status', '0')->where('division_id', '7')->orderBy('updated_at', 'DESC')->paginate();
// //Siaha
// // $formSiahaCount = DB::table('estimates')->where('estimate_status','0')->where('division_id','8')->count();
// $siahaEstimates = DB::table('estimates')->where('estimate_status', '0')->where('division_id', '8')->orderBy('updated_at', 'DESC')->paginate();
// //Khawzawl
// // $formKhawzawlCount = DB::table('estimates')->where('estimate_status','0')->where('division_id','9')->count();
// $khawzawlEstimates = DB::table('estimates')->where('estimate_status', '0')->where('division_id', '9')->orderBy('updated_at', 'DESC')->paginate();
// //Kolasib
// // $formKolasibCount = DB::table('estimates')->where('estimate_status','0')->where('division_id','10')->count();
// $kolasibEstimates = DB::table('estimates')->where('estimate_status', '0')->where('division_id', '10')->orderBy('updated_at', 'DESC')->paginate();
// //Lawngtlai
// // $formLawngtlaiCount = DB::table('estimates')->where('estimate_status','0')->where('division_id','11')->count();
// $lawngtlaiEstimates = DB::table('estimates')->where('estimate_status', '0')->where('division_id', '11')->orderBy('updated_at', 'DESC')->paginate();
// //Serchhip
// // $formSerchhipCount = DB::table('estimates')->where('estimate_status','0')->where('division_id','12')->count();
// $serchhipEstimates = DB::table('estimates')->where('estimate_status', '0')->where('division_id', '12')->orderBy('updated_at', 'DESC')->paginate();
// //Hnahthial
// // $formHnahthialCount = DB::table('estimates')->where('estimate_status','0')->where('division_id','13')->count();
// $hnahthialEstimates = DB::table('estimates')->where('estimate_status', '0')->where('division_id', '13')->orderBy('updated_at', 'DESC')->paginate();


        return response()->json([
            "estimates" => $estimates,
            // "southEstimates" => $southEstimates,
            // "northEstimates" => $northEstimates,

            //  "champhaiEstimates"=>$champhaiEstimates,
            //  "lungleiEstimates"=>$lungleiEstimates,
            // "saitualEstimates"=>$saitualEstimates,
            // "mamitEstimates"=>$mamitEstimates,
            // "siahaEstimates"=>$siahaEstimates,
            // "khawzawlEstimates"=>$khawzawlEstimates,
            // "kolasibEstimates"=>$kolasibEstimates,
            // "lawngtlaiEstimates"=>$lawngtlaiEstimates,
            // "serchhipEstimates"=>$serchhipEstimates,
            // "hnahthialEstimates"=>$hnahthialEstimates,

        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $this->validate($request,[

            'road_name' => 'required',
            'road_type' => 'required',
            'length' => 'numeric|required',
            'breadth' => 'numeric|required',
            'area' => 'numeric|required',
            'rate' => 'numeric|required',
            'amount' => 'numeric|required',
            'total' => 'numeric|required',
            'form_id' => 'required',

            ]);

            //  create db

            $estimate= new Estimate();

            $estimate->road_name=$request->road_name;

            $estimate->road_type=$request->road_type;

            $estimate->length=$request->length;

            $estimate->breadth=$request->breadth;

            $estimate->area=$request->area;

            $estimate->rate=$request->rate;

            $estimate->amount=$request->amount;

            $estimate->deposit=$request->deposit;

            $estimate->total=$request->total;

            $estimate->form_id=$request->form_id;

            $estimate->division_id=$request->division_id;


            $estimate->estimate_status= 0;

            $form=Form::find($request->form_id);

            $estimate->form_memo = $form->memo;

            $estimate->sub_div = $form->sub_div;
            $estimate->enter_by = $request->enter_by;
            $estimate->approve_by = 0;

            if(!empty(DB::table('estimates')->where('form_memo',$estimate->form_memo)->value('form_memo')))
            {

                return response()->json([
                    "estimate" => $estimate,
                    "message" => "fail"
                ], 200);

            }

            $estimate->save();

            //Form estimate_status Update

            $form=Form::find($request->form_id);

            $form->estimate_status = 1;

            // Update track_status in forms table

            $form->track_status = 3;

            $form->estimate_id = $estimate->id;

            $form->save();

 // uncomment after start
            try {

                $var1=$form->memo.", Road Name: ".$estimate->road_name.", Road Type: ".$estimate->road_type;

                $phoneNumbers = DB::table('users')->where('division_id', $form->division_id )->where('role_id', 2)->where('disable_account_status', 0 )->pluck('phone')->implode(',');

                $client = new Client();
                $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
                  'form_params' => [
                      'api_key' => env('SMS_API_KEY'),
                      'number' => $phoneNumbers,
                      'message' =>'Memo: '.$var1.', SDO has submitted Roadcutting Estimate to EE .DoICT',
                      'template_id'=>'1007442804569166348',
                      // 'number' => $phone_number,
                      // 'message' => $mOTP . ' is your OTP from eTender, MSeGS',
                  ]
              ]);

              } catch (\Exception $e) {

                  return $e->getMessage();
              }
// uncomment after start

            // response
            return ["message"=>"Success","estimate"=>$estimate];
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $estimate = Estimate::findOrFail($id);

        $security_deposit = DB::table('features')->where('feature','security_deposit')->where('division_id', $estimate->division_id)->first();

        $form = Form::find($estimate->form_id);

        return response()->json([
            "estimate" => $estimate,
            "form" => $form,
            "security_deposit" => $security_deposit
        ], 200);
    }


    public function findByForm($id)
    {

        $estimate = DB::table('estimates')->where('form_id',$id)->first();

        return response()->json([
            "estimate" => $estimate
        ], 200);
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request)
    {

        $this->validate($request,[


            'length' => 'numeric|required|max:255',
            'breadth' => 'numeric|required|max:255',
            'area' => 'numeric|required',
            'rate' => 'numeric|required',
            'amount' => 'numeric|required',
            'total' => 'numeric|required',
            'form_id' => 'required',

            ]);
        $estimate=Estimate::find($request->id);

        $estimate->road_name=$request->road_name;

        $estimate->road_type=$request->road_type;

        $estimate->length=$request->length;

        $estimate->breadth=$request->breadth;

        $estimate->area=$request->area;

        $estimate->rate=$request->rate;

        $estimate->amount=$request->amount;


        if($request->total == $request->amount){
            $estimate->deposit=0;
        }
        else{
        $estimate->deposit=$request->deposit;
        }

        $estimate->total=$request->total;

        $estimate->estimate_status = 1;

        $estimate->save();


        $form=Form::find($estimate->form_id);

        $form->status = 2;

        $form->track_status = 4;

        $form->save();

        return response()->json([
            "estimate" => $estimate
        ], 200);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update($id)
    {
        $estimate=Estimate::find($id);
        $estimate->estimate_status = 1;

        $estimate->save();


        $form=Form::find($estimate->form_id);

        $form->status = 2;

        $form->track_status = 4;

        $form->save();

        return response()->json([
            "estimate" => $estimate
        ], 200);

    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
