<?php

namespace App\Http\Controllers;

use App\Form;

use App\Track;

use App\Engineer;
use App\Report;

use App\Localcouncil;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;

use GuzzleHttp\Client;

use App\Exports\FormsExport;

use Maatwebsite\Excel\Facades\Excel;

class FormController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $forms = Form::all();

        return response()->json([
            "forms" => $forms
        ], 200);
    }

    public function rejectedIndex($division_id)
    {

        $forms = DB::table('forms')->where('track_status', '10')->where('division_id', $division_id)->orderBy('updated_at', 'DESC')->paginate();
//         $formSouths = DB::table('forms')->where('track_status', '10')->where('division_id', '1')->orderBy('updated_at', 'DESC')->paginate();
//         // $formSouthCount = DB::table('forms')->where('track_status', '10')->where('division_id','1')->count();
//         $formNorths = DB::table('forms')->where('track_status', '10')->where('division_id', '2')->orderBy('updated_at', 'DESC')->paginate();
//     //  $formNorthCount = DB::table('forms')->where('track_status', '10')->where('division_id','2')->count();
//     //champhai
//     // $formChamphaiCount = DB::table('forms')->where('track_status', '10')->where('division_id','4')->count();
//     $formChamphai = DB::table('forms')->where('track_status', '10')->where('division_id', '4')->orderBy('updated_at', 'DESC')->paginate();
// // lunglei
// // $formLungleiCount = DB::table('forms')->where('track_status', '10')->where('division_id','5')->count();
// $formLunglei = DB::table('forms')->where('track_status', '10')->where('division_id', '5')->orderBy('updated_at', 'DESC')->paginate();
// // Saitual
// // $formSaitualCount = DB::table('forms')->where('track_status', '10')->where('division_id','6')->count();
// $formSaitual = DB::table('forms')->where('track_status', '10')->where('division_id', '6')->orderBy('updated_at', 'DESC')->paginate();
// //Mamit
// // $formMamitCount = DB::table('forms')->where('track_status', '10')->where('division_id','7')->count();
// $formMamit = DB::table('forms')->where('track_status', '10')->where('division_id', '7')->orderBy('updated_at', 'DESC')->paginate();
// //Siaha
// // $formSiahaCount = DB::table('forms')->where('track_status', '10')->where('division_id','8')->count();
// $formSiaha = DB::table('forms')->where('track_status', '10')->where('division_id', '8')->orderBy('updated_at', 'DESC')->paginate();
// //Khawzawl
// // $formKhawzawlCount = DB::table('forms')->where('track_status', '10')->where('division_id','9')->count();
// $formKhawzawl = DB::table('forms')->where('track_status', '10')->where('division_id', '9')->orderBy('updated_at', 'DESC')->paginate();
// //Kolasib
// // $formKolasibCount = DB::table('forms')->where('track_status', '10')->where('division_id','10')->count();
// $formKolasib = DB::table('forms')->where('track_status', '10')->where('division_id', '10')->orderBy('updated_at', 'DESC')->paginate();
// //Lawngtlai
// // $formLawngtlaiCount = DB::table('forms')->where('track_status', '10')->where('division_id','11')->count();
// $formLawngtlai = DB::table('forms')->where('track_status', '10')->where('division_id', '11')->orderBy('updated_at', 'DESC')->paginate();
// //Serchhip
// // $formSerchhipCount = DB::table('forms')->where('track_status', '10')->where('division_id','12')->count();
// $formSerchhip = DB::table('forms')->where('track_status', '10')->where('division_id', '12')->orderBy('updated_at', 'DESC')->paginate();
// //Hnahthial
// // $formHnahthialCount = DB::table('forms')->where('track_status', '10')->where('division_id','13')->count();
// $formHnahthial = DB::table('forms')->where('track_status', '10')->where('division_id', '13')->orderBy('updated_at', 'DESC')->paginate();

        return response()->json(
            ["forms" => $forms,
            // "formSouths" => $formSouths,
            //  "formNorths" => $formNorths,
            //  "formChamphai"=>$formChamphai,
            //   "formLunglei"=>$formLunglei,
            //  "formSaitual"=>$formSaitual,
            //  "formMamit"=>$formMamit,
            //  "formSiaha"=>$formSiaha,
            //  "formKhawzawl"=>$formKhawzawl,
            //  "formKolasib"=>$formKolasib,
            //  "formLawngtlai"=>$formLawngtlai,
            //  "formSerchhip"=>$formSerchhip,
            //  "formHnahthial"=>$formHnahthial,
        ], 200);


         //ORIGINAL CODE
        // $forms = DB::table('forms')->where('track_status', '10')->orderBy('updated_at', 'DESC')->paginate();
        // $formSouths = DB::table('forms')->where('track_status', '10')->where('division_id', '1')->orderBy('updated_at', 'DESC')->paginate();
        // $formNorths = DB::table('forms')->where('track_status', '10')->where('division_id', '2')->orderBy('updated_at', 'DESC')->paginate();
        // $formSouthCount = DB::table('forms')->where('track_status', '10')->where('division_id','1')->count();
        // $formNorthCount = DB::table('forms')->where('track_status', '10')->where('division_id','2')->count();
        // return response()->json(
        //     ["forms" => $forms,"formSouthCount" => $formSouthCount,"formNorthCount" => $formNorthCount, "formSouths" => $formSouths, "formNorths" => $formNorths
        // ], 200);

    }

    public function unapprovedIndex($division_id)
    {
        $forms = DB::table('forms')->where('status', '0')->where('division_id', $division_id)->orderBy('updated_at', 'ASC')->paginate();
//         $forms = DB::table('forms')->where('status', '0')->orderBy('updated_at', 'DESC')->paginate();
//         $formSouths = DB::table('forms')->where('status', '0')->where('division_id', '1')->orderBy('updated_at', 'DESC')->paginate();
//         // $formSouthCount = DB::table('forms')->where('status','0')->where('division_id','1')->count();
//         $formNorths = DB::table('forms')->where('status', '0')->where('division_id', '2')->orderBy('updated_at', 'DESC')->paginate();
//     //  $formNorthCount = DB::table('forms')->where('status','0')->where('division_id','2')->count();
//     //champhai
//     // $formChamphaiCount = DB::table('forms')->where('status','0')->where('division_id','4')->count();
//     $formChamphai = DB::table('forms')->where('status', '0')->where('division_id', '4')->orderBy('updated_at', 'DESC')->paginate();
// // lunglei
// // $formLungleiCount = DB::table('forms')->where('status','0')->where('division_id','5')->count();
// $formLunglei = DB::table('forms')->where('status', '0')->where('division_id', '5')->orderBy('updated_at', 'DESC')->paginate();
// // Saitual
// // $formSaitualCount = DB::table('forms')->where('status','0')->where('division_id','6')->count();
// $formSaitual = DB::table('forms')->where('status', '0')->where('division_id', '6')->orderBy('updated_at', 'DESC')->paginate();
// //Mamit
// // $formMamitCount = DB::table('forms')->where('status','0')->where('division_id','7')->count();
// $formMamit = DB::table('forms')->where('status', '0')->where('division_id', '7')->orderBy('updated_at', 'DESC')->paginate();
// //Siaha
// // $formSiahaCount = DB::table('forms')->where('status','0')->where('division_id','8')->count();
// $formSiaha = DB::table('forms')->where('status', '0')->where('division_id', '8')->orderBy('updated_at', 'DESC')->paginate();
// //Khawzawl
// // $formKhawzawlCount = DB::table('forms')->where('status','0')->where('division_id','9')->count();
// $formKhawzawl = DB::table('forms')->where('status', '0')->where('division_id', '9')->orderBy('updated_at', 'DESC')->paginate();
// //Kolasib
// // $formKolasibCount = DB::table('forms')->where('status','0')->where('division_id','10')->count();
// $formKolasib = DB::table('forms')->where('status', '0')->where('division_id', '10')->orderBy('updated_at', 'DESC')->paginate();
// //Lawngtlai
// // $formLawngtlaiCount = DB::table('forms')->where('status','0')->where('division_id','11')->count();
// $formLawngtlai = DB::table('forms')->where('status', '0')->where('division_id', '11')->orderBy('updated_at', 'DESC')->paginate();
// //Serchhip
// // $formSerchhipCount = DB::table('forms')->where('status','0')->where('division_id','12')->count();
// $formSerchhip = DB::table('forms')->where('status', '0')->where('division_id', '12')->orderBy('updated_at', 'DESC')->paginate();
// //Hnahthial
// // $formHnahthialCount = DB::table('forms')->where('status','0')->where('division_id','13')->count();
// $formHnahthial = DB::table('forms')->where('status', '0')->where('division_id', '13')->orderBy('updated_at', 'DESC')->paginate();

return response()->json(
            ["forms" => $forms,
        //   "formSouths" => $formSouths,
        //   "formNorths" => $formNorths,
        //     "formChamphai"=>$formChamphai,
        //      "formLunglei"=>$formLunglei,
        //      "formSaitual"=>$formSaitual,
        //      "formMamit"=>$formMamit,
        //      "formSiaha"=>$formSiaha,
        //      "formKhawzawl"=>$formKhawzawl,
        //      "formKolasib"=>$formKolasib,
        //     "formLawngtlai"=>$formLawngtlai,
        //      "formSerchhip"=>$formSerchhip,
        //      "formHnahthial"=>$formHnahthial
        ], 200);
    }


    public function estimateIndex($division_id)
    {
        // commenting out the formNameCount cause we can simple get count using the forms.data.length
        $forms = DB::table('forms')->where([['estimate_status','0'],['status','1']])->where('division_id', $division_id)->orderBy('updated_at', 'ASC')->paginate();
//         $formSouths = DB::table('forms')->where([['estimate_status','0'],['status','1']])->where('division_id', '1')->orderBy('updated_at', 'DESC')->paginate();
//         // $formSouthCount = DB::table('forms')->where([['estimate_status','0'],['status','1']])->where('division_id','1')->count();
//         $formNorths = DB::table('forms')->where([['estimate_status','0'],['status','1']])->where('division_id', '2')->orderBy('updated_at', 'DESC')->paginate();
//     //  $formNorthCount = DB::table('forms')->where([['estimate_status','0'],['status','1']])->where('division_id','2')->count();
//     //champhai
//     // $formChamphaiCount = DB::table('forms')->where([['estimate_status','0'],['status','1']])->where('division_id','4')->count();
//     $formChamphai = DB::table('forms')->where([['estimate_status','0'],['status','1']])->where('division_id', '4')->orderBy('updated_at', 'DESC')->paginate();
// // lunglei
// // $formLungleiCount = DB::table('forms')->where([['estimate_status','0'],['status','1']])->where('division_id','5')->count();
// $formLunglei = DB::table('forms')->where([['estimate_status','0'],['status','1']])->where('division_id', '5')->orderBy('updated_at', 'DESC')->paginate();
// // Saitual
// // $formSaitualCount = DB::table('forms')->where([['estimate_status','0'],['status','1']])->where('division_id','6')->count();
// $formSaitual = DB::table('forms')->where([['estimate_status','0'],['status','1']])->where('division_id', '6')->orderBy('updated_at', 'DESC')->paginate();
// //Mamit
// // $formMamitCount = DB::table('forms')->where([['estimate_status','0'],['status','1']])->where('division_id','7')->count();
// $formMamit = DB::table('forms')->where([['estimate_status','0'],['status','1']])->where('division_id', '7')->orderBy('updated_at', 'DESC')->paginate();
// //Siaha
// // $formSiahaCount = DB::table('forms')->where([['estimate_status','0'],['status','1']])->where('division_id','8')->count();
// $formSiaha = DB::table('forms')->where([['estimate_status','0'],['status','1']])->where('division_id', '8')->orderBy('updated_at', 'DESC')->paginate();
// //Khawzawl
// // $formKhawzawlCount = DB::table('forms')->where([['estimate_status','0'],['status','1']])->where('division_id','9')->count();
// $formKhawzawl = DB::table('forms')->where([['estimate_status','0'],['status','1']])->where('division_id', '9')->orderBy('updated_at', 'DESC')->paginate();
// //Kolasib
// // $formKolasibCount = DB::table('forms')->where([['estimate_status','0'],['status','1']])->where('division_id','10')->count();
// $formKolasib = DB::table('forms')->where([['estimate_status','0'],['status','1']])->where('division_id', '10')->orderBy('updated_at', 'DESC')->paginate();
// //Lawngtlai
// // $formLawngtlaiCount = DB::table('forms')->where([['estimate_status','0'],['status','1']])->where('division_id','11')->count();
// $formLawngtlai = DB::table('forms')->where([['estimate_status','0'],['status','1']])->where('division_id', '11')->orderBy('updated_at', 'DESC')->paginate();
// //Serchhip
// // $formSerchhipCount = DB::table('forms')->where([['estimate_status','0'],['status','1']])->where('division_id','12')->count();
// $formSerchhip = DB::table('forms')->where([['estimate_status','0'],['status','1']])->where('division_id', '12')->orderBy('updated_at', 'DESC')->paginate();
// //Hnahthial
// // $formHnahthialCount = DB::table('forms')->where([['estimate_status','0'],['status','1']])->where('division_id','13')->count();
// $formHnahthial = DB::table('forms')->where([['estimate_status','0'],['status','1']])->where('division_id', '13')->orderBy('updated_at', 'DESC')->paginate();

        return response()->json(
            ["forms" => $forms,
        //    "formSouths" => $formSouths,
        //     "formNorths" => $formNorths,
        //      "formChamphai"=>$formChamphai,
        //       "formLunglei"=>$formLunglei,
        //      "formSaitual"=>$formSaitual,
        //      "formMamit"=>$formMamit,
        //      "formSiaha"=>$formSiaha,
        //      "formKhawzawl"=>$formKhawzawl,
        //      "formKolasib"=>$formKolasib,
        //      "formLawngtlai"=>$formLawngtlai,
        //      "formSerchhip"=>$formSerchhip,
        //      "formHnahthial"=>$formHnahthial,
        ], 200);


//original code
        // $forms = DB::table('forms')->where([['estimate_status','0'],['status','1']])->orderBy('updated_at', 'DESC')->paginate();
        // $southForms = DB::table('forms')->where([['estimate_status','0'],['status','1']])->where('division_id', '1')->orderBy('updated_at', 'DESC')->paginate();
        // $northForms = DB::table('forms')->where([['estimate_status','0'],['status','1']])->where('division_id', '2')->orderBy('updated_at', 'DESC')->paginate();

        // return response()->json([
        //     "forms" => $forms,
        //     "southForms" => $southForms,
        //     "northForms" => $northForms,

        // ], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        // validate
        // return $request->rhouseno;
        // return $request->all();
        $this->validate($request,[


            'name' => 'required|max:255',
            // 'email' => 'email',
            'phone' => 'required|min:10|numeric',
            // 'length' => 'required',


            'rhouseno' => 'required',
            'rlocalcouncil_name' => 'required',
            'rcity' => 'required',
            'rdistrict' => 'required',

            'houseno' => 'required',
            'localcouncil_name' => 'required',
            'city' => 'required',
            'district' => 'required',

            'water_id' => 'required',
            'road_type' => 'required',

            'user_id' => 'required',
         // 'email' => 'required|email|max:255|unique:users',


            // 'location' => 'required',


            // 'status' => 'required',
            ]);

            //  create db

            // $localcouncils = Localcouncil::all();



            $form= new Form();

            $form->name=$request->name;

            $form->user_id=$request->user_id;

            $form->phone=$request->phone;

            $form->email=$request->email;




            $form->rhouseno=$request->rhouseno;
            $form->rlocalcouncil_name=$request->rlocalcouncil_name;
            $form->rcity=$request->rcity;
            $form->rdistrict=$request->rdistrict;

            $form->houseno=$request->houseno;
            $form->localcouncil_name=$request->localcouncil_name;
            $form->city=$request->city;
            $form->district=$request->district;
            $form->approve_by = 0;



            $form->water_id=$request->water_id;

            $form->road_type=$request->road_type;

            // $form->length=$request->length;
            $form->length=1;

            // $form->location=$request->location;

            $form->localcouncil_name=$request->localcouncil_name;

            $form->engineer_name = 'Engineer';

            $form->status= 0;

            $form->estimate_status=0;

            $form->track_status=0;

            $form->send=1;


            if($form->district == "Champhai"){
                $localcouncils = \App\ChamphaiLocalCouncil::all();// first()->pluck()

            }
            else if($form->district == "Lunglei"){
                $localcouncils = \App\LungleiLocalCouncil::all();// first()->pluck()
            }
            else if($form->district == "Saitual"){
                $localcouncils = \App\SaitualLocalCouncil::all();// first()->pluck()
            }
            else if($form->district == "Mamit"){
                $localcouncils = \App\MamitLocalCouncil::all();// first()->pluck()
            }
            else if($form->district == "Siaha"){
                $localcouncils = \App\SiahaLocalCouncil::all();// first()->pluck()
            }
            else if($form->district == "Khawzawl"){
                $localcouncils = \App\KhawzawlLocalCouncil::all();// first()->pluck()
            }
            else if($form->district == "Kolasib"){
                $localcouncils = \App\KolasibLocalCouncil::all();// first()->pluck()
            }
            else if($form->district == "Lawngtlai"){
                $localcouncils = \App\LawngtlaiLocalCouncil::all();// first()->pluck()
            }
            else if($form->district == "Serchhip"){
                $localcouncils = \App\SerchhipLocalCouncil::all();// first()->pluck()
            }
            else if($form->district == "Lunglei Road Div-II, Hnahthial"){
                $localcouncils = \App\LungleiRoadDiv2Hnahthial::all();// first()->pluck()
            }
            else if($form->district == "Hmuifang Division"){
                $localcouncils = \App\HmuifangDivision::all();// first()->pluck()
            }
            else if($form->district == "National Highway Div-I"){
                $localcouncils = \App\NationalHighwayDivOne::all();// first()->pluck()
            }
            else if($form->district == "National Highway Div-III"){
                $localcouncils = \App\NationalHighwayDivThree::all();// first()->pluck()
            }
            else{
            $localcouncils = Localcouncil::all();
            }


            foreach ($localcouncils as $p) {
                if($p->name == $request->localcouncil_name)

                $form->division_id = $p->division_id;
                $form->sub_div = $p->sub_div;

            }

            if($form->division_id == 1)
            {
                $form->memo='RS-0';
                $div= " Road South";
            }
            else if($form->division_id == 2)
            {
                $form->memo='RN-0';
                $div=" Road North";
            }
            else if($form->division_id == 4)
            {
                $form->memo='CHI-0';
                $div=" Road Champhai";
            }
            else if($form->division_id == 5)
            {
                $form->memo='LLI-0';
                $div=" Road Lunglei";
            }
            else if($form->division_id == 6)
            {
                $form->memo='STL-0';
                $div=" Road Saitual";
            }
            else if($form->division_id == 7)
            {
                $form->memo='MMT-0';
                $div=" Road Mamit";
            }
            else if($form->division_id == 8)
            {
                $form->memo='SHA-0';
                $div=" Road Siaha";
            }
            else if($form->division_id == 9)
            {
                $form->memo='KZL-0';
                $div=" Road Khawzawl";
            }
            else if($form->division_id == 10)
            {
                $form->memo='KLB-0';
                $div=" Road Kolasib";
            }
            else if($form->division_id == 11)
            {
                $form->memo='LTI-0';
                $div=" Road Lawngtlai";
            }
            else if($form->division_id == 12)
            {
                $form->memo='SCRP-0';
                $div=" Road Serchhip";
            }
            else if($form->division_id == 13)
            {
                $form->memo='LRD2-HNTL-0';
                $div="Lunglei Road Div-II, Hnahthial";
            }


            else if($form->division_id == 14)
            {
                $form->memo='HD-0';
                $div="Hmuifang Division";
            }
            else if($form->division_id == 15)
            {
                $form->memo='NHD1-0';
                $div="National Highway Div-I";
            }
            else if($form->division_id == 16)
            {
                $form->memo='NHD3-0';
                $div="National Highway Div-III";
            }

            $sub = "?";
            // dd($form);
            $form->save(); // this is here cause to retrieve/use id the data needs to be populated first then only can you use the id ... aim is to make the $form->id not blank


          $form->track_status = 1;

          $form->memo=$form->memo.$form->id;


          $form->save();


          $var1 =$form->memo.', '.$form->name.', '.$form->phone.', '.$form->localcouncil_name;
// commenting the sms for development testing


//           //SMS 1


              try {


$client = new Client();

$response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
                  'form_params' => [
                      'api_key' => env('SMS_API_KEY'),
                      'number' => $form->phone,
                      'message' =>'Your Road Cutting Form submitted successfully. Memo:'.$form->memo.'. DoICT',
                      'template_id'=>'1007188179559525584',
                      // 'number' => $phone_number,
                      // 'message' => $mOTP . ' is your OTP from eTender, MSeGS',
                    //   info($response)
                  ]
              ]);
            //   info($response);

              } catch (\Exception $e) {

                  info($e);
                  return $e->getMessage();
              }
//         // END commenting the sms for development testing




// // start commenting the sms for development testing

//           // SMS 9

          try {

            $phoneNumbers = DB::table('users')->where('division_id', $form->division_id )->where('disable_account_status', 0 )->pluck('phone')->implode(',');

            $client = new Client();
            $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
              'form_params' => [
                  'api_key' => env('SMS_API_KEY'),
                  'number' => $phoneNumbers,
                  'message' =>'Memo: '.$form->memo.', '.$form->name.', '.$form->phone.', '.$form->houseno.', '.$form->localcouncil_name.' Div:'.$div.', Sub-div: '.$sub.' has submitted Roadcutting form. DoICT',
                  'template_id'=>'1007321530081521077',
                //   'message' =>$form->name.', '.$form->phone.', Memo: '.$form->memo.' , has submitted a Road Cutting Form .DoICT',
                //   'template_id'=>'1007288255454078914',
                  // 'number' => $phone_number,
                  // 'message' => $mOTP . ' is your OTP from eTender, MSeGS',
              ]
          ]);

          } catch (\Exception $e) {

              return $e->getMessage();
          }

// END commenting the sms for development testing


// THE COMMENTS BELOW WAS ALREADY THERE
        //     $client = new Client();
        //   $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
        //     'form_params' => [
        //         'api_key' => env('SMS_API_KEY'),
        //         'number' => $form->phone,
        //         'message' => $form->memo .':Road Cutting Form submit kawn lo dawng e',
        //         // 'number' => $phone_number,
        //         // 'message' => $mOTP . ' is your OTP from eTender, MSeGS',
        //     ]
        // ]);

            // $form->track()->form_id = $form->id;

            //create Track record for this form

            // $track= new Track();

            // $track->form_id = $form->id;
            // $track->status=0;
            // $track->user_id=$form->user->id;
            // $track->estimate_id=0;

            // $track->save();

            // response
// THE COMMENTS BELOW WAS ALREADY THERE     ended
            return response()->json([
                "form" => $form

            ], 201);

            // return ["message"=>"Form Submitted","form"=>$form];
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
        $form = Form::findOrFail($id);

        return response()->json([
            "form" => $form
        ], 200);
    }

    public function showPaymentPage($id)
    {
        $form = Form::findOrFail($id);


        // pghelpdesk@hdfcbank.com
        // all of the below are the test details for merchant id
        if($form->division_id == 1){

            $merchant_id = 287264;
            $redirect_url = "http://127.0.0.1:8000/api/auth/responseHandler";
            $cancel_url = "http://127.0.0.1:8000/api/auth/responseHandler";
            //ORIGINAL CODE
            // $merchant_id = 313301;
            // $redirect_url = "https://pwdroadcutting.mizoram.gov.in/api/auth/responseHandler";
            // $cancel_url = "https://pwdroadcutting.mizoram.gov.in/api/auth/responseHandler";
            // $cancel_url = " example...http://localhost:8000/api/auth/responseHandler";


          }
          else if ($form->division_id == 2){

            $merchant_id = 287264;
            $redirect_url = "http://127.0.0.1:8000/api/auth/responseHandlerNorth";
            $cancel_url = "http://127.0.0.1:8000/api/auth/responseHandlerNorth";
            // ORIGINAL CODE
            // $merchant_id = 313302;
            // $redirect_url = "https://pwdroadcutting.mizoram.gov.in/api/auth/responseHandlerNorth";
            // $cancel_url = "https://pwdroadcutting.mizoram.gov.in/api/auth/responseHandlerNorth";

          }

          else if ($form->division_id == 4){
            $merchant_id = 287264;
            $redirect_url = "http://127.0.0.1:8000/api/auth/responseHandlerChamphai";
            $cancel_url = "http://127.0.0.1:8000/api/auth/responseHandlerChamphai";

          }
          else if ($form->division_id == 5){
            $merchant_id = 287264;
            $redirect_url = "http://127.0.0.1:8000/api/auth/responseHandlerLunglei";
            $cancel_url = "http://127.0.0.1:8000/api/auth/responseHandlerLunglei";

          }
          else if ($form->division_id == 6){
            $merchant_id = 287264;
            $redirect_url = "http://127.0.0.1:8000/api/auth/responseHandlerSaitual";
            $cancel_url = "http://127.0.0.1:8000/api/auth/responseHandlerSaitual";

          }
          else if ($form->division_id == 7){
            $merchant_id = 287264;
            // $redirect_url = " http://localhost:8000/api/auth/responseHandlerMamit"; // original code
            $redirect_url = "http://127.0.0.1:8000/api/auth/responseHandlerMamit";
            $cancel_url = "http://127.0.0.1:8000/api/auth/responseHandlerMamit";

          }
          else if ($form->division_id == 8){
            $merchant_id = 287264;
            $redirect_url = "http://127.0.0.1:8000/api/auth/responseHandlerSiaha";
            $cancel_url = "http://127.0.0.1:8000/api/auth/responseHandlerSiaha";

          }
          else if ($form->division_id == 9){
            $merchant_id = 287264;
            $redirect_url = "http://127.0.0.1:8000/api/auth/responseHandlerKhawzawl";
            $cancel_url = "http://127.0.0.1:8000/api/auth/responseHandlerKhawzawl";

          }
          else if ($form->division_id == 10){
            $merchant_id = 287264;
            $redirect_url = "http://127.0.0.1:8000/api/auth/responseHandlerKolasib";
            $cancel_url = "http://127.0.0.1:8000/api/auth/responseHandlerKolasib";

          }
          else if ($form->division_id == 11){
            $merchant_id = 287264;
            $redirect_url = "http://127.0.0.1:8000/api/auth/responseHandlerLawngtlai";
            $cancel_url = "http://127.0.0.1:8000/api/auth/responseHandlerLawngtlai";

          }
          else if ($form->division_id == 12){
            $merchant_id = 287264;
            $redirect_url = "http://127.0.0.1:8000/api/auth/responseHandlerSerchhip";
            $cancel_url = "http://127.0.0.1:8000/api/auth/responseHandlerSerchhip";

          }
          else if ($form->division_id == 13){
            $merchant_id = 287264;
            $redirect_url = "http://127.0.0.1:8000/api/auth/responseHandlerLungleiRoadDiv2Hnahthial";
            $cancel_url = "http://127.0.0.1:8000/api/auth/responseHandlerLungleiRoadDiv2Hnahthial";

          }
          else if ($form->division_id == 14){
            $merchant_id = 287264;
            $redirect_url = "http://127.0.0.1:8000/api/auth/responseHandlerHmuifang";
            $cancel_url = "http://127.0.0.1:8000/api/auth/responseHandlerHmuifang";

          }
          else if ($form->division_id == 15){
            $merchant_id = 287264;
            $redirect_url = "http://127.0.0.1:8000/api/auth/responseHandlerNationalHighwayDiv1";
            $cancel_url = "http://127.0.0.1:8000/api/auth/responseHandlerNationalHighwayDiv1";

          }

          else if ($form->division_id == 16){
            $merchant_id = 287264;
            $redirect_url = "http://127.0.0.1:8000/api/auth/responseHandlerNationalHighwayDiv3";
            $cancel_url = "http://127.0.0.1:8000/api/auth/responseHandlerNationalHighwayDiv3 ";

          }
          // once you go live this wont be required and can be removed
          else{
            $merchant_id = 23123;
            $redirect_url = "hello";
            $cancel_url = "hello";
          };
// can bbe removed ended
// added this to make the code work its just a dummy code
        return response()->json([
            "form" => $form,
            "merchant_id" => $merchant_id,
            "redirect_url" => $redirect_url,
            "cancel_url" => $cancel_url
        ], 200);
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {


        $form=Form::find($request->id);
        $form->status = 1;
        $form->track_status = 2;

        $engineer = Engineer::find($request->engineer);

        $form->engineer_name = $engineer->name;
        $form->engineer_post = $engineer->post;
        $form->engineer_phone = $engineer->phone;
        $form->engineer_id = $engineer->id;
        $form->approve_by = $request->approve_by;

        $form->save();

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

            $div="Road Champhai";
        }
        elseif($form->division_id == 5)
        {

            $div="Road Lunglei";
        }
        elseif($form->division_id == 6)
        {

            $div="Road Saitual";
        }
        elseif($form->division_id == 7)
        {

            $div="Road Mamit";
        }
        elseif($form->division_id == 8)
        {

            $div="Road Siaha";
        }
        elseif($form->division_id == 9)
        {

            $div="Road Khawzawl";
        }
        elseif($form->division_id == 10)
        {

            $div="Road Kolasib";
        }
        elseif($form->division_id == 11)
        {

            $div="Road Lawngtlai";
        }
        elseif($form->division_id == 12)
        {

            $div="Road Serchhip";
        }
        elseif($form->division_id == 13)
        {

            $div="Road Lunglei Div-II, Hnahthial";
        }
        elseif($form->division_id == 14)
        {

            $div="Road Hmuifang Division";
        }
        elseif($form->division_id == 15)
        {

            $div="Road National Highway Div-I";
        }
        elseif($form->division_id == 16)
        {

            $div="Road National Highway Div-III";
        }

        $sub = "?";

        $var1="approved your form";
        $var2="Our Engineer Ic will come soon to take estimate";
        $var3="Please contact him/her at: ";
        $var4=$form->engineer_phone;
        $var5=$form->engineer_name.", ".$form->engineer_post;



        $var6="assigned you to take Estimate for";





        //SMS 3
        try {

            $client = new Client();
            $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
              'form_params' => [
                  'api_key' => env('SMS_API_KEY'),
                  'number' => $form->phone,
                  'message' =>'EE has '.$var1.' Memo: '.$form->memo.','.$var2.', '.$var3.', '.$var4.' Div: '.$div.', Sub: '.$sub.'. Ic:'.$var5.'. DoICT',
                  'template_id'=>'1007479590761713304',
                //   'message' =>'Road Cutting Memo:'.$form->memo.' approved. Contact Site i/c '.$form->engineer_name.', '.$form->engnieer_post.', '.$form->$engineer_phone.' .DoICT',
                //   'template_id'=>'1007593732018887244',
                  // 'number' => $phone_number,
                  // 'message' => $mOTP . ' is your OTP from eTender, MSeGS',
              ]
          ]);

          } catch (\Exception $e) {

              return $e->getMessage();
          }

          //SMS 4
          try {

            $var12=" ".$form->name;

            $client = new Client();
            $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
              'form_params' => [
                  'api_key' => env('SMS_API_KEY'),
                  'number' => $engineer->phone,
                  'message' =>'EE has '.$var6.' Memo: '.$form->memo.','.$var12.', '.$form->phone.', '.$form->localcouncil_name.' Div: '.$div.', Sub: '.$sub.'. Ic:'.$var5.'. DoICT',
                  'template_id'=>'1007479590761713304',
                //   'message' =>'You are assigned to take an estimate for Memo: '.$form->memo.' .DoICT',
                //   'template_id'=>'1007866845288679697',
                  // 'number' => $phone_number,
                  // 'message' => $mOTP . ' is your OTP from eTender, MSeGS',
              ]
          ]);

          } catch (\Exception $e) {

              return $e->getMessage();
          }

        //SMS SDO
        try {

            $var7="approved form";
            $var8=$form->name.",".$form->phone.",".$form->localcouncil_name;
            $var9="SDO can now enter estimate ";
            $var10="when submitted by Ic Engineer";
            $var11=$form->engineer_name.", ".$form->engineer_post.", ".$engineer->phone;

            $phoneNumbers = DB::table('users')->where('division_id', $form->division_id )->where('role_id', 3)->where('disable_account_status', 0 )->pluck('phone')->implode(',');

            $client = new Client();
            $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
                'form_params' => [
                    'api_key' => env('SMS_API_KEY'),
                    'number' => $phoneNumbers,
                    'message' =>'EE has '.$var7.' Memo: '.$form->memo.','.$var8.', '.$var9.', '.$var10.' Div: '.$div.', Sub: '.$sub.'. Ic:'.$var11.'. DoICT',
                    'template_id'=>'1007479590761713304',
                //   'message' =>'You are assigned to take an estimate for Memo: '.$form->memo.' .DoICT',
                //   'template_id'=>'1007866845288679697',
                    // 'number' => $phone_number,
                    // 'message' => $mOTP . ' is your OTP from eTender, MSeGS',
                ]
            ]);

            } catch (\Exception $e) {

                return $e->getMessage();
            }



        return response()->json([
            "form" => $form
        ], 200);

    }
    public function rejectFromUnverified(Request $request)
    {


        $form=Form::find($request->id);
        //$form->status = 10 also means form is rejected
        $form->status = 10;
        //track_status = 10 means form is rejected
        $form->track_status = 10;
        //$form->engineer will store reason of reject
        $form->reason = $request->reason;

        $form->save();

        //SMS 2
        // uncomment after start
        try {

            $client = new Client();
            $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
              'form_params' => [
                  'api_key' => env('SMS_API_KEY'),
                  'number' => $form->phone,
                  'message' =>'Your Road Cutting Form, Memo:'.$form->memo.'  got rejected. Reason: '.$form->reason.' .DoICT',
                  'template_id'=>'1007004030956742713',
                  // 'number' => $phone_number,
                  // 'message' => $mOTP . ' is your OTP from eTender, MSeGS',
              ]
          ]);

          } catch (\Exception $e) {

              return $e->getMessage();
          }
// uncomment after start
// was already commented start
        // $client = new Client();
        //   $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
        //     'form_params' => [
        //         'api_key' => env('SMS_API_KEY'),
        //         'number' => $form->phone,
        //         'message' => $form->memo .', form reject chhan:'. $request->reason,
        //         // 'number' => $phone_number,
        //         // 'message' => $mOTP . ' is your OTP from eTender, MSeGS',
        //     ]
        // ]);
// was already commented end

        return response()->json([
            "form" => $form
        ], 200);

    }

    public function reject(Request $request)
    {
        try {
            // Report fetchin
            // form fetchin by report->form_id
            //when editing form

            //  info($request);
            // Check if Report with given ID exists
            $report = Report::find($request->id); // $request-> id is the id passed from the report to fetch in the form table

            $form = Form::find($report->form_id);
            //$form->status = 10 also means form is rejected
            $form->status = 10;
            //track_status = 10 means form is rejected
            $form->track_status = 10;


            // Check if $report exists
            if ($report) {
                //$form->engineer will store reason of reject
                if (isset($report->report_status)) {
                    // Update report_status if it exists
                    $report->report_status = 4; // 4 means the form is fined and moved from the reporting date section to the reject list sice status and track status is 10
                    $report->save();
                }

                // Set $form->reason based on $request->fine
                $form->reason = $request->fine;
            } else {
                // Set $form->reason based on $request->reason
                $form->reason = $request->reason;
            }

            // Save the form
            $form->save();

            // info($report+"am i getting reooprt");

        } catch (\Exception $e) {
            // Log the error
            // Log::error('Error processing form rejection: ' . $e->getMessage());
            return $e->getMessage();
        }
// //ori code start
// dd($request);
//         $form=Form::find($request->id);
//         //$form->status = 10 also means form is rejected
//         $form->status = 10;
//         //track_status = 10 means form is rejected
//         $form->track_status = 10;
//         //$form->engineer will store reason of reject
//         $form->reason = $request->reason;

//         $form->save();
// //ori code end
        //SMS 2
        // uncomment after start
        try {

            $client = new Client();
            $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
              'form_params' => [
                  'api_key' => env('SMS_API_KEY'),
                  'number' => $form->phone,
                  'message' =>'Your Road Cutting Form, Memo:'.$form->memo.'  got rejected. Reason: '.$form->reason.' .DoICT',
                  'template_id'=>'1007004030956742713',
                  // 'number' => $phone_number,
                  // 'message' => $mOTP . ' is your OTP from eTender, MSeGS',
              ]
          ]);

          } catch (\Exception $e) {

              return $e->getMessage();
          }
        // uncomment after end


        /// already commented start
        // $client = new Client();
        //   $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
        //     'form_params' => [
        //         'api_key' => env('SMS_API_KEY'),
        //         'number' => $form->phone,
        //         'message' => $form->memo .', form reject chhan:'. $request->reason,
        //         // 'number' => $phone_number,
        //         // 'message' => $mOTP . ' is your OTP from eTender, MSeGS',
        //     ]
        // ]);
        /// already commented end

        return response()->json([
            "form" => $form,
            "report"=>$report
        ], 200);

    }

    public function send($id)
    {
        $form=Form::find($id);
        $form->send = 1;
        $form->track_status =2;
        $form->save();

        return response()->json([
            "form"=>$form
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

    public function export()
    {
        return Excel::download(new FormsExport, 'forms.xlsx');
    }
}
