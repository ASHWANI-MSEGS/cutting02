<?php

namespace App\Http\Controllers;

use App;

use App\User;
use App\Payment;
use App\Grant;
use App\Form;
use App\Estimate;
use App\Tracker;
use Illuminate\Http\Request;
use App\Crypto;
use Redirect;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str; // added by ash
use GuzzleHttp\Client;
use DateTime;
use Illuminate\Support\Facades\dd;


class HDFCPaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($division_id)
    {
        $payments = DB::table('payments')->where('payment_status',"1")->where('division_id', $division_id)->orderBy('updated_at', 'DESC')->paginate();

        // $southPayments = DB::table('payments')->where('payment_status',"1")->where('division_id', "1")->orderBy('updated_at', 'DESC')->paginate();

        // $northPayments = DB::table('payments')->where('payment_status',"1")->where('division_id', "2")->orderBy('updated_at', 'DESC')->paginate();

        // // champhai
        // $champhaiPayments = DB::table('payments')->where('payment_status',"1")->where('division_id', "4")->orderBy('updated_at', 'DESC')->paginate();
        // $lungleiPayments = DB::table('payments')->where('payment_status',"1")->where('division_id', "5")->orderBy('updated_at', 'DESC')->paginate();
        // $saitualPayments = DB::table('payments')->where('payment_status',"1")->where('division_id', "6")->orderBy('updated_at', 'DESC')->paginate();
        // $mamitPayments = DB::table('payments')->where('payment_status',"1")->where('division_id', "7")->orderBy('updated_at', 'DESC')->paginate();
        // $siahaPayments = DB::table('payments')->where('payment_status',"1")->where('division_id', "8")->orderBy('updated_at', 'DESC')->paginate();
        // $khawzawlPayments = DB::table('payments')->where('payment_status',"1")->where('division_id', "9")->orderBy('updated_at', 'DESC')->paginate();
        // $kolasibPayments = DB::table('payments')->where('payment_status',"1")->where('division_id', "10")->orderBy('updated_at', 'DESC')->paginate();
        // $lawngtlaiPayments = DB::table('payments')->where('payment_status',"1")->where('division_id', "11")->orderBy('updated_at', 'DESC')->paginate();
        // $serchhipPayments = DB::table('payments')->where('payment_status',"1")->where('division_id', "12")->orderBy('updated_at', 'DESC')->paginate();
        // $hnahthialPayments = DB::table('payments')->where('payment_status',"1")->where('division_id', "13")->orderBy('updated_at', 'DESC')->paginate();

        return response()->json([
            "payments"=>$payments,
            // "southPayments" => $southPayments,
            // "northPayments" => $northPayments,

            // "champhaiPayments" => $champhaiPayments,
            // "lungleiPayments" => $lungleiPayments,
            // "saitualPayments" => $saitualPayments,
            // "mamitPayments" => $mamitPayments,
            // "siahaPayments" => $siahaPayments,
            // "khawzawlPayments" => $khawzawlPayments,
            // "kolasibPayments" => $kolasibPayments,
            // "lawngtlaiPayments" => $lawngtlaiPayments,
            // "serchhipPayments" => $serchhipPayments,
            // "hnahthialPayments" => $hnahthialPayments,

        ],200);
    }

    public function unindex($division_id)
    {
        $payments = DB::table('payments')->where('payment_status',"2")->where('division_id', $division_id)->orderBy('updated_at', 'DESC')->paginate();

        // $southPayments = DB::table('payments')->where('payment_status',"2")->where('division_id', "1")->orderBy('updated_at', 'DESC')->paginate();

        // $northPayments = DB::table('payments')->where('payment_status',"2")->where('division_id', "2")->orderBy('updated_at', 'DESC')->paginate();

        //   // champhai
        //   $champhaiPayments = DB::table('payments')->where('payment_status',"2")->where('division_id', "4")->orderBy('updated_at', 'DESC')->paginate();
        //   $lungleiPayments = DB::table('payments')->where('payment_status',"2")->where('division_id', "5")->orderBy('updated_at', 'DESC')->paginate();
        //   $saitualPayments = DB::table('payments')->where('payment_status',"2")->where('division_id', "6")->orderBy('updated_at', 'DESC')->paginate();
        //   $mamitPayments = DB::table('payments')->where('payment_status',"2")->where('division_id', "7")->orderBy('updated_at', 'DESC')->paginate();
        //   $siahaPayments = DB::table('payments')->where('payment_status',"2")->where('division_id', "8")->orderBy('updated_at', 'DESC')->paginate();
        //   $khawzawlPayments = DB::table('payments')->where('payment_status',"2")->where('division_id', "9")->orderBy('updated_at', 'DESC')->paginate();
        //   $kolasibPayments = DB::table('payments')->where('payment_status',"2")->where('division_id', "10")->orderBy('updated_at', 'DESC')->paginate();
        //   $lawngtlaiPayments = DB::table('payments')->where('payment_status',"2")->where('division_id', "11")->orderBy('updated_at', 'DESC')->paginate();
        //   $serchhipPayments = DB::table('payments')->where('payment_status',"2")->where('division_id', "12")->orderBy('updated_at', 'DESC')->paginate();
        //   $hnahthialPayments = DB::table('payments')->where('payment_status',"2")->where('division_id', "13")->orderBy('updated_at', 'DESC')->paginate();

        return response()->json([
            "payments"=>$payments,
            // "southPayments" => $southPayments,
            // "northPayments" => $northPayments,

            // "champhaiPayments" => $champhaiPayments,
            // "lungleiPayments" => $lungleiPayments,
            // "saitualPayments" => $saitualPayments,
            // "mamitPayments" => $mamitPayments,
            // "siahaPayments" => $siahaPayments,
            // "khawzawlPayments" => $khawzawlPayments,
            // "kolasibPayments" => $kolasibPayments,
            // "lawngtlaiPayments" => $lawngtlaiPayments,
            // "serchhipPayments" => $serchhipPayments,
            // "hnahthialPayments" => $hnahthialPayments,
        ],200);
    }

    public function pendingIndex()
    {
        $payments = DB::table('forms')->where('track_status', 4)->orWhere('track_status', 55)->paginate();

        return response()->json(["payments" => $payments], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        error_reporting(0);


info($request."               starting request");
        // $merchant_data=' ';

        $form= Form::findOrFail($request->billing_notes);
        //Aizawl Road South
        if($form->division_id == 1)
        {
            {
                $working_key='CD3FD4BE24DFFA51E95F2075C8F66534';//tesitng
             $access_code='AVWI97HL35BF50IWFB';//tesitng
            }
        }
        // { ORIGINAL CODE
        // $working_key='D7B25E568B99B45AA2A8499E3E8B3988';//Shared by CCAVENUES
        // $access_code='AVVP00IA44BL01PVLB';//Shar
        // } ORIGINAL CODE END

        //Aizawl Road North
        if($form->division_id == 2)
        {
            $working_key='CD3FD4BE24DFFA51E95F2075C8F66534';//tesitng
         $access_code='AVWI97HL35BF50IWFB';//tesitng
        }
        // { ORIGINAL CODE
        // $working_key='520CC013A0ECFCF48E424D7BBC360E1B';//Shared by CCAVENUES
        // $access_code='AVFQ00IA44BL09QFLB';//Shar
        // } ORIGINAL CODE END

        // $merchant_data='';
        // $working_key='130CB2942C6C0D0101E770B9BBEA4235';//Shared by CCAVENUES
        // $access_code='AVIJ96HJ19BU63JIUB';//Shared by CCAVENUES

    //     $merchant_data='2';
	// $working_key='E2B122A0140C55090B17A284925A0465';//Shared by CCAVENUES
	// $access_code='AVVM67DI04BP90MVPB';//Shared by CCAVENUES

        //  $mt =  $request->toArray();

        // $st= json_encode($request);
        if($form->division_id == 4)
        {
            $working_key='CD3FD4BE24DFFA51E95F2075C8F66534';//tesitng
         $access_code='AVWI97HL35BF50IWFB';//tesitng
        } if($form->division_id == 5)
        {
            $working_key='CD3FD4BE24DFFA51E95F2075C8F66534';//tesitng
         $access_code='AVWI97HL35BF50IWFB';//tesitng
        } if($form->division_id == 6)
        {
            $working_key='CD3FD4BE24DFFA51E95F2075C8F66534';//tesitng
         $access_code='AVWI97HL35BF50IWFB';//tesitng
        } if($form->division_id == 7)
        {
            $working_key='CD3FD4BE24DFFA51E95F2075C8F66534';//tesitng
         $access_code='AVWI97HL35BF50IWFB';//tesitng
        } if($form->division_id == 8)
        {
            $working_key='CD3FD4BE24DFFA51E95F2075C8F66534';//tesitng
         $access_code='AVWI97HL35BF50IWFB';//tesitng
        } if($form->division_id == 9)
        {
            $working_key='CD3FD4BE24DFFA51E95F2075C8F66534';//tesitng
         $access_code='AVWI97HL35BF50IWFB';//tesitng
        } if($form->division_id == 10)
        {
            $working_key='CD3FD4BE24DFFA51E95F2075C8F66534';//tesitng
         $access_code='AVWI97HL35BF50IWFB';//tesitng
        } if($form->division_id == 11)
        {
            $working_key='CD3FD4BE24DFFA51E95F2075C8F66534';//tesitng
         $access_code='AVWI97HL35BF50IWFB';//tesitng
        } if($form->division_id == 12)
        {
            $working_key='CD3FD4BE24DFFA51E95F2075C8F66534';//tesitng
         $access_code='AVWI97HL35BF50IWFB';//tesitng
        } if($form->division_id == 13)
        {
            $working_key='CD3FD4BE24DFFA51E95F2075C8F66534';//tesitng
         $access_code='AVWI97HL35BF50IWFB';//tesitng
        } if($form->division_id == 14)
        {
            $working_key='CD3FD4BE24DFFA51E95F2075C8F66534';//tesitng
         $access_code='AVWI97HL35BF50IWFB';//tesitng
        } if($form->division_id == 15)
        {
            $working_key='CD3FD4BE24DFFA51E95F2075C8F66534';//tesitng
         $access_code='AVWI97HL35BF50IWFB';//tesitng
        } if($form->division_id == 16)
        {
            $working_key='CD3FD4BE24DFFA51E95F2075C8F66534';//tesitng
         $access_code='AVWI97HL35BF50IWFB';//tesitng
        }












        $unique = Payment::orderBy('order_id', 'desc')->first()->order_id;

        foreach ($request->all() as $key => $value){
            $merchant_data.=$key.'='.$value.'&';

        }

        // if($unique != null){
        //     $unique1=$unique+1;
        //     $merchant_data.='order_id='.$unique1.'&';
        // }
        // if ($unique == null){
        //     $unique1 = 1;
        //     $merchant_data.='order_id='.$unique1.'&';
        // }
        $current_timestamp = \Carbon\Carbon::now()->timestamp;
        $merchant_data.='order_id='.$current_timestamp.'&';



        // dd($request->all());

        // dd($request->all());


        // dd($merchant_data);

        $encrypted_data=$this->encrypt($merchant_data,$working_key);

            // dd($encrypted_data);


        $decrypted_data=$this->decrypt($encrypted_data,$working_key);

        // echo($decrypted_data);
        //  dd($decrypted_data);

        $tracker = new Tracker;
        $tracker->encrypted_data = $encrypted_data;
        $tracker->encResponse = 9;
        $tracker->rcvdString= 0;
        $tracker->decryptValues= 0;
        $tracker->save();

        $form = Form::findOrFail($request->billing_notes);

        if($form->track_status == 5)
        {
            // return \Redirect::to('https://pwdroadcutting.mizoram.gov.in/paymentPage/'.$form->id); original code
            // return \Redirect::to('http://localhost:8000/paymentPage/'.$form->id); // for local
            return \Redirect::to('http://localhost:8000/paymentPage/'.$form->id); // for local

        }

        return response()->json([
            "encrypted_data" => $encrypted_data,
            "access_code" => $access_code,
            "decrypted_data" => $decrypted_data
        ], 201);


    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

     //South Response Handler
    public function responseH(Request $request)
    {
// original code
            // $workingKey='D7B25E568B99B45AA2A8499E3E8B3988';		//Working Key should be provided here.
            // $access_code='AVVP00IA44BL01PVLB';
            //original code end
            $workingKey='CD3FD4BE24DFFA51E95F2075C8F66534';		////testing credentials.
            $access_code='AVWI97HL35BF50IWFB'; //testing credentials
            $encResponse = $request->encResp;			//This is the response sent by the CCAvenue Server
            $rcvdString=$this->decrypt($encResponse,$workingKey);		//Crypto Decryption used as per the specified working key.
            $order_status="";
            $decryptValues=explode('&', $rcvdString);
            $dataSize=sizeof($decryptValues);

            for($i = 0; $i < $dataSize; $i++)
            {
                $information=explode('=',$decryptValues[$i]);
                if($i==0)
                $order_id=$information[1];
                if($i==1)
                $tracking_id=$information[1];
                if($i==2)
                $bank_ref_no=$information[1];
                if($i==3)
                $order_status=$information[1];
                if($i==5)
                $payment_mode=$information[1];
                if($i==6)
                $card_name=$information[1];
                if($i==9)
                $currency=$information[1];
                if($i==10)
                $amount=$information[1];

                if($i==11)
                $billing_name=$information[1];



                if($i==34)
                $discount_value=$information[1];
                if($i==35)
                $mer_amount=$information[1];

                if($i==39)
                $billing_notes=$information[1];

                // dd($billing_notes);

                if($i==40)
                $trans_date=$information[1];


            }      // Convert the trans_date to Y-m-d H:i:s format
    $dateTime = DateTime::createFromFormat('d/m/Y H:i:s', $trans_date);
    $formattedTransDate = $dateTime ? $dateTime->format('Y-m-d H:i:s') : null;




            // if (App::environment('local')) {
            //     $tracker = new Tracker;
            //     $tracker->encrypted_data = 1;
            //     $tracker->encResponse = $encResponse;
            //     $tracker->rcvdString= $rcvdString;
            //     $tracker->decryptValues= $decryptValues;
            //     $tracker->save();
            // }

            //  dd($decryptValues);
            if($order_status == "Aborted")
            {
                $payment = new Payment;
                $payment->order_id = $order_id;
                $payment->tracking_id = $tracking_id;
                $payment->bank_ref_no = $bank_ref_no;
                $payment->order_status = $order_status;
                $payment->payment_mode = $payment_mode;
                $payment->card_name = $card_name;
                $payment->currency = $currency;
                $payment->amount = $amount;
                $payment->billing_name = $billing_name;
                $payment->discount_value = $discount_value;
                $payment->mer_amount = $mer_amount;
               $payment->trans_date = $formattedTransDate;
                $payment->form_id = $billing_notes;
                $payment->payment_status = 2;  //if payment_status ==2 then payment is not successful
                $payment->sub_div = 0;
                $payment->save();




                $form1 = Form::findOrFail($payment->form_id);
                $form1->track_status = 55;
                $form1->payment_id = $payment->id;
                $form1->save();
                $payment1 = DB::table('payments')->where('id',$payment->id)->update(['division_id'=>$form1->division_id]);
                $payment2 = DB::table('payments')->where('id',$payment->id)->update(['form_memo'=>$form1->memo]);
                $payment3 = DB::table('payments')->where('id',$payment->id)->update(['sub_div'=>$form1->sub_div]);

                // $form = Form::where('memo', $form_memo)->first();
                // return \Redirect::to('https://pwdroadcutting.mizoram.gov.in/paymentPage/'.$form1->id);
                return \Redirect::to('http://localhost:8000/paymentPage/'.$form1->id);

            }

            if($order_status == "Success")
            {
                $payment = new Payment;
                $payment->order_id = $order_id;
                $payment->tracking_id = $tracking_id;
                $payment->bank_ref_no = $bank_ref_no;
                $payment->order_status = $order_status;
                $payment->payment_mode = $payment_mode;
                $payment->card_name = $card_name;
                $payment->currency = $currency;
                $payment->amount = $amount;
                $payment->billing_name = $billing_name;
                $payment->discount_value = $discount_value;
                $payment->mer_amount = $mer_amount;
               $payment->trans_date = $formattedTransDate;
                $payment->form_id = $billing_notes;
                $payment->payment_status = 1;  //if payment_status ==1 then payment is successful
                $payment->sub_div = 0;
                $payment->save();

                // $data = DB::table('buy_card_transactions')->where(array('transaction_id' => $key))->first();
                // $form = DB::table('forms')->where('memo',$form_id)->update(['track_status' => 5]);
                // $form = Form::where('memo', $billing_notes)->first();
                $form1 = Form::findOrFail($payment->form_id);
                $form1->track_status = 5;
                $form1->payment_id = $payment->id;
                $form1->save();

                $form_memo=$form1->memo;

                $paymentUpdate = Payment::find($payment->id);
                $paymentUpdate->form_memo = $form1->memo;
                $paymentUpdate->division_id = $form1->division_id;
                $paymentUpdate->sub_div = $form1->sub_div;
                $paymentUpdate->save();
                // $payment1 = DB::table('payments')->where('id', $payment->id)->update(['division_id'=> $form1->division_id]);
                $estimate1 = DB::table('estimates')->where('form_memo',$form1->memo)->update(['estimate_status'=>2]);
                // $estimate=Estimate::where('form_memo', $form_memo)->first();
                // $estimate->status=2;
                // $estimate->save();

                $grant = new Grant;
                $grant->form_memo = $form_memo;
                $grant->form_id = $form1->id;
                $grant->grant_status = 0;
                $grant->validity = 0;
                $grant->division_id = $form1->division_id;

                //new by LTP with help of Fanai
                $grant->sub_div = $form1->sub_div;
               $grant->granted_by = 1;


                $grant->save();

                $form1->grant_id = $grant->id;
                $form1->save();
// commenting originnal for testing start
                //SMS 6
            //        try {

            //      $client = new Client();
            //      $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
            //        'form_params' => [
            //            'api_key' => env('SMS_API_KEY'),
            //            'number' => $form1->phone,
            //            'message' =>'Memo: '.$form1->memo.', We received your  payment Rs. '.$paymentUpdate->amount.' .DoICT',
            //            'template_id'=>'3214321',
            //            // 'number' => $phone_number,
            //            // 'message' => $mOTP . ' is your OTP from eTender, MSeGS',
            //        ]
            //    ]);

            //    } catch (\Exception $e) {

            //        return $e->getMessage();
            //    }

            //     //SMS to EE after successful payment

            //     try {

            //     $phoneNumbers = DB::table('users')->where('division_id', $form1->division_id)->where('role_id', 2)->where('disable_account_status', 0 )->pluck('phone')->implode(',');

            //     $client = new Client();
            //     $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
            //         'form_params' => [
            //             'api_key' => env('SMS_API_KEY'),
            //             'number' => $phoneNumbers,
            //             'message' =>'Memo: '.$form1->memo.', '.$form1->name.' completed payment. Login to portal for granting Roadcutting Permission .DoICT',
            //             'template_id'=>'1007431101812136669',

            //         ]
            //     ]);

            //     } catch (\Exception $e) {


            //     }
// commenting originnal for testing end
            }

            else{

                $payment = new Payment;
                $payment->order_id = $order_id;
                $payment->tracking_id = $tracking_id;
                $payment->bank_ref_no = $bank_ref_no;
                $payment->order_status = $order_status;
                $payment->payment_mode = $payment_mode;
                $payment->card_name = $card_name;
                $payment->currency = $currency;
                $payment->amount = $amount;
                $payment->billing_name = $billing_name;
                $payment->discount_value = $discount_value;
                $payment->mer_amount = $mer_amount;
               $payment->trans_date = $formattedTransDate;
                $payment->form_id = $billing_notes;
                $payment->payment_status = 2;  //if payment_status ==2 then payment is not successful
                $payment->sub_div = 0;
                $payment->save();




                $form1 = Form::findOrFail($payment->form_id);
                $form1->track_status = 55;
                $form1->payment_id = $payment->id;
                $form1->save();
                $payment1 = DB::table('payments')->where('id',$payment->id)->update(['division_id'=>$form1->division_id]);
                $payment2 = DB::table('payments')->where('id',$payment->id)->update(['form_memo'=>$form1->memo]);
                $payment3 = DB::table('payments')->where('id',$payment->id)->update(['sub_div'=>$form1->sub_div]);


            }



            //  if (App::environment('local')) {
            //     return \Redirect::to('http://localhost:8000/paymentHandler/'.$form1->id);
            //  }


            //  return \Redirect::to('http://localhost:8000/paymentHandler/'.$payment->id); original
            return \Redirect::to('http://localhost:8000/paymentHandler/'.$payment->id);


            //return \Redirect::to('/paymentHandler/'.$payment->id);
        //    return response()->json([
        //        "rcvdString" => $rcvdString,
        //    ], 201);
        }

     //North Response Handler
     public function responseHNorth(Request $request)
     {

// original code start
        //  $workingKey='520CC013A0ECFCF48E424D7BBC360E1B';		//Working Key should be provided here.
        //  $access_code='AVFQ00IA44BL09QFLB';
         //original code eng
         $workingKey='CD3FD4BE24DFFA51E95F2075C8F66534';		//testing credentailss.
          $access_code='AVWI97HL35BF50IWFB'; //testing credentailss
         $encResponse = $request->encResp;			//This is the response sent by the CCAvenue Server
         $rcvdString=$this->decrypt($encResponse,$workingKey);		//Crypto Decryption used as per the specified working key.
         $order_status="";
         $decryptValues=explode('&', $rcvdString);
         $dataSize=sizeof($decryptValues);

         for($i = 0; $i < $dataSize; $i++)
         {
             $information=explode('=',$decryptValues[$i]);
             if($i==0)
             $order_id=$information[1];
             if($i==1)
             $tracking_id=$information[1];
             if($i==2)
             $bank_ref_no=$information[1];
             if($i==3)
             $order_status=$information[1];
             if($i==5)
             $payment_mode=$information[1];
             if($i==6)
             $card_name=$information[1];
             if($i==9)
             $currency=$information[1];
             if($i==10)
             $amount=$information[1];

             if($i==11)
             $billing_name=$information[1];



             if($i==34)
             $discount_value=$information[1];
             if($i==35)
             $mer_amount=$information[1];

             if($i==39)
             $billing_notes=$information[1];

             // dd($billing_notes);

                   if($i==40)
                $trans_date=$information[1];


            }      // Convert the trans_date to Y-m-d H:i:s format
    $dateTime = DateTime::createFromFormat('d/m/Y H:i:s', $trans_date);
    $formattedTransDate = $dateTime ? $dateTime->format('Y-m-d H:i:s') : null;




         // if (App::environment('local')) {
         //     $tracker = new Tracker;
         //     $tracker->encrypted_data = 1;
         //     $tracker->encResponse = $encResponse;
         //     $tracker->rcvdString= $rcvdString;
         //     $tracker->decryptValues= $decryptValues;
         //     $tracker->save();
         // }

         //  dd($decryptValues);
         if($order_status == "Aborted")
         {
             $payment = new Payment;
             $payment->order_id = $order_id;
             $payment->tracking_id = $tracking_id;
             $payment->bank_ref_no = $bank_ref_no;
             $payment->order_status = $order_status;
             $payment->payment_mode = $payment_mode;
             $payment->card_name = $card_name;
             $payment->currency = $currency;
             $payment->amount = $amount;
             $payment->billing_name = $billing_name;
             $payment->discount_value = $discount_value;
             $payment->mer_amount = $mer_amount;
            $payment->trans_date = $formattedTransDate;
             $payment->form_id = $billing_notes;
             $payment->payment_status = 2;  //if payment_status ==2 then payment is not successful
             $payment->sub_div = 0;
             $payment->save();




             $form1 = Form::findOrFail($payment->form_id);
             $form1->track_status = 55;
             $form1->payment_id = $payment->id;
             $form1->save();
             $payment1 = DB::table('payments')->where('id',$payment->id)->update(['division_id'=>$form1->division_id]);
             $payment2 = DB::table('payments')->where('id',$payment->id)->update(['form_memo'=>$form1->memo]);
             $payment3 = DB::table('payments')->where('id',$payment->id)->update(['sub_div'=>$form1->sub_div]);

             // $form = Form::where('memo', $form_memo)->first();
             return \Redirect::to('http://localhost:8000/paymentPage/'.$form1->id);
             // original code
            //  return \Redirect::to('https://pwdroadcutting.mizoram.gov.in/paymentPage/'.$form1->id);
// original code end
         }

         if($order_status == "Success")
         {
             $payment = new Payment;
             $payment->order_id = $order_id;
             $payment->tracking_id = $tracking_id;
             $payment->bank_ref_no = $bank_ref_no;
             $payment->order_status = $order_status;
             $payment->payment_mode = $payment_mode;
             $payment->card_name = $card_name;
             $payment->currency = $currency;
             $payment->amount = $amount;
             $payment->billing_name = $billing_name;
             $payment->discount_value = $discount_value;
             $payment->mer_amount = $mer_amount;
            $payment->trans_date = $formattedTransDate;
             $payment->form_id = $billing_notes;
             $payment->payment_status = 1;  //if payment_status ==1 then payment is successful
             $payment->sub_div = 0;
             $payment->save();

             // $data = DB::table('buy_card_transactions')->where(array('transaction_id' => $key))->first();
             // $form = DB::table('forms')->where('memo',$form_id)->update(['track_status' => 5]);
             // $form = Form::where('memo', $billing_notes)->first();
             $form1 = Form::findOrFail($payment->form_id);
             $form1->track_status = 5;
             $form1->payment_id = $payment->id;
             $form1->save();

             $form_memo=$form1->memo;

             $paymentUpdate = Payment::find($payment->id);
             $paymentUpdate->form_memo = $form1->memo;
             $paymentUpdate->division_id = $form1->division_id;
             $paymentUpdate->sub_div = $form1->sub_div;
             $paymentUpdate->save();
             // $payment1 = DB::table('payments')->where('id', $payment->id)->update(['division_id'=> $form1->division_id]);
             $estimate1 = DB::table('estimates')->where('form_memo',$form1->memo)->update(['estimate_status'=>2]);
             // $estimate=Estimate::where('form_memo', $form_memo)->first();
             // $estimate->status=2;
             // $estimate->save();

             $grant = new Grant;
             $grant->form_memo = $form_memo;
             $grant->form_id = $form1->id;
             $grant->grant_status = 0;
             $grant->validity = 0;
             $grant->division_id = $form1->division_id;

            //new by LTP with help of Fanai
            $grant->sub_div = $form1->sub_div;
           $grant->granted_by = 1;
             $grant->save();

             $form1->grant_id = $grant->id;
             $form1->save();
// commenting for testing original code start
             //SMS 6
            //  try {

            //      $client = new Client();
            //      $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
            //        'form_params' => [
            //            'api_key' => env('SMS_API_KEY'),
            //            'number' => $form1->phone,
            //            'message' =>'Memo: '.$form1->memo.', We received your  payment Rs. '.$paymentUpdate->amount.' .DoICT',
            //            'template_id'=>'3214321',
            //            // 'number' => $phone_number,
            //            // 'message' => $mOTP . ' is your OTP from eTender, MSeGS',
            //        ]
            //    ]);

            //    } catch (\Exception $e) {

            //        return $e->getMessage();
            //    }

            //     //SMS to EE after successful payment

            //     try {

            //     $phoneNumbers = DB::table('users')->where('division_id', $form1->division_id)->where('role_id', 2)->where('disable_account_status', 0 )->pluck('phone')->implode(',');

            //     $client = new Client();
            //     $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
            //         'form_params' => [
            //             'api_key' => env('SMS_API_KEY'),
            //             'number' => $phoneNumbers,
            //             'message' =>'Memo: '.$form1->memo.', '.$form1->name.' completed payment. Login to portal for granting Roadcutting Permission .DoICT',
            //             'template_id'=>'1007431101812136669',

            //         ]
            //     ]);

            //     } catch (\Exception $e) {


            //     }
// commenting for testing original code start
         }

         else{

             $payment = new Payment;
             $payment->order_id = $order_id;
             $payment->tracking_id = $tracking_id;
             $payment->bank_ref_no = $bank_ref_no;
             $payment->order_status = $order_status;
             $payment->payment_mode = $payment_mode;
             $payment->card_name = $card_name;
             $payment->currency = $currency;
             $payment->amount = $amount;
             $payment->billing_name = $billing_name;
             $payment->discount_value = $discount_value;
             $payment->mer_amount = $mer_amount;
            $payment->trans_date = $formattedTransDate;
             $payment->form_id = $billing_notes;
             $payment->payment_status = 2;  //if payment_status ==2 then payment is not successful
             $payment->sub_div = 0;
             $payment->save();




             $form1 = Form::findOrFail($payment->form_id);
             $form1->track_status = 55;
             $form1->payment_id = $payment->id;
             $form1->save();
             $payment1 = DB::table('payments')->where('id',$payment->id)->update(['division_id'=>$form1->division_id]);
             $payment2 = DB::table('payments')->where('id',$payment->id)->update(['form_memo'=>$form1->memo]);
             $payment3 = DB::table('payments')->where('id',$payment->id)->update(['sub_div'=>$form1->sub_div]);


         }



         //  if (App::environment('local')) {
         //     return \Redirect::to('http://localhost:8000/paymentHandler/'.$form1->id);
         //  }


        //   return \Redirect::to('http://localhost:8000/paymentHandler/'.$payment->id); //original
         return \Redirect::to('http://localhost:8000/paymentHandler/'.$payment->id);
         //return \Redirect::to('/paymentHandler/'.$payment->id);
     //    return response()->json([
     //        "rcvdString" => $rcvdString,
     //    ], 201);
     }

// champhai
public function responseHandlerChamphai(Request $request)
{


    $workingKey='CD3FD4BE24DFFA51E95F2075C8F66534';		//Working Key should be provided here.
    $access_code='AVWI97HL35BF50IWFB';
    $encResponse = $request->encResp;			//This is the response sent by the CCAvenue Server
    $rcvdString=$this->decrypt($encResponse,$workingKey);		//Crypto Decryption used as per the specified working key.
    $order_status="";
    $decryptValues=explode('&', $rcvdString);
    $dataSize=sizeof($decryptValues);

    for($i = 0; $i < $dataSize; $i++)
    {
        $information=explode('=',$decryptValues[$i]);
        if($i==0)
        $order_id=$information[1];
        if($i==1)
        $tracking_id=$information[1];
        if($i==2)
        $bank_ref_no=$information[1];
        if($i==3)
        $order_status=$information[1];
        if($i==5)
        $payment_mode=$information[1];
        if($i==6)
        $card_name=$information[1];
        if($i==9)
        $currency=$information[1];
        if($i==10)
        $amount=$information[1];

        if($i==11)
        $billing_name=$information[1];



        if($i==34)
        $discount_value=$information[1];
        if($i==35)
        $mer_amount=$information[1];

        if($i==39)
        $billing_notes=$information[1];

        // dd($billing_notes);

        if($i==40)
        $trans_date=$information[1];


    }

// Convert the trans_date to Y-m-d H:i:s format
$dateTime = DateTime::createFromFormat('d/m/Y H:i:s', $trans_date);
$formattedTransDate = $dateTime ? $dateTime->format('Y-m-d H:i:s') : null;


    // if (App::environment('local')) {
    //     $tracker = new Tracker;
    //     $tracker->encrypted_data = 1;
    //     $tracker->encResponse = $encResponse;
    //     $tracker->rcvdString= $rcvdString;
    //     $tracker->decryptValues= $decryptValues;
    //     $tracker->save();
    // }

    //  dd($decryptValues);
    if($order_status == "Aborted")
    {
        $payment = new Payment;
        $payment->order_id = $order_id;
        $payment->tracking_id = $tracking_id;
        $payment->bank_ref_no = $bank_ref_no;
        $payment->order_status = $order_status;
        $payment->payment_mode = $payment_mode;
        $payment->card_name = $card_name;
        $payment->currency = $currency;
        $payment->amount = $amount;
        $payment->billing_name = $billing_name;
        $payment->discount_value = $discount_value;
        $payment->mer_amount = $mer_amount;
       $payment->trans_date = $formattedTransDate;
        $payment->form_id = $billing_notes;
        $payment->payment_status = 2;  //if payment_status ==2 then payment is not successful
        $payment->sub_div = 0;
        $payment->save();




        $form1 = Form::findOrFail($payment->form_id);
        $form1->track_status = 55;
        $form1->payment_id = $payment->id;
        $form1->save();
        $payment1 = DB::table('payments')->where('id',$payment->id)->update(['division_id'=>$form1->division_id]);
        $payment2 = DB::table('payments')->where('id',$payment->id)->update(['form_memo'=>$form1->memo]);
        $payment3 = DB::table('payments')->where('id',$payment->id)->update(['sub_div'=>$form1->sub_div]);

        // $form = Form::where('memo', $form_memo)->first();
        return \Redirect::to('http://localhost:8000/paymentPage/'.$form1->id);
        // original code
       //  return \Redirect::to('https://pwdroadcutting.mizoram.gov.in/paymentPage/'.$form1->id);
// original code end
    }

    if($order_status == "Success")
    {
        $payment = new Payment;
        $payment->order_id = $order_id;
        $payment->tracking_id = $tracking_id;
        $payment->bank_ref_no = $bank_ref_no;
        $payment->order_status = $order_status;
        $payment->payment_mode = $payment_mode;
        $payment->card_name = $card_name;
        $payment->currency = $currency;
        $payment->amount = $amount;
        $payment->billing_name = $billing_name;
        $payment->discount_value = $discount_value;
        $payment->mer_amount = $mer_amount;
       $payment->trans_date = $formattedTransDate;
        $payment->form_id = $billing_notes;
        $payment->payment_status = 1;  //if payment_status ==1 then payment is successful
        $payment->sub_div = 0;
        $payment->save();

        // $data = DB::table('buy_card_transactions')->where(array('transaction_id' => $key))->first();
        // $form = DB::table('forms')->where('memo',$form_id)->update(['track_status' => 5]);
        // $form = Form::where('memo', $billing_notes)->first();
        $form1 = Form::findOrFail($payment->form_id);
        $form1->track_status = 5;
        $form1->payment_id = $payment->id;
        $form1->save();

        $form_memo=$form1->memo;

        $paymentUpdate = Payment::find($payment->id);
        $paymentUpdate->form_memo = $form1->memo;
        $paymentUpdate->division_id = $form1->division_id;
        $paymentUpdate->sub_div = $form1->sub_div;
        $paymentUpdate->save();
        // $payment1 = DB::table('payments')->where('id', $payment->id)->update(['division_id'=> $form1->division_id]);
        $estimate1 = DB::table('estimates')->where('form_memo',$form1->memo)->update(['estimate_status'=>2]);
        // $estimate=Estimate::where('form_memo', $form_memo)->first();
        // $estimate->status=2;
        // $estimate->save();

        $grant = new Grant;
        $grant->form_memo = $form_memo;
        $grant->form_id = $form1->id;
        $grant->grant_status = 0;
        $grant->validity = 0;
        $grant->division_id = $form1->division_id;

       //new by LTP with help of Fanai
       $grant->sub_div = $form1->sub_div;
      $grant->granted_by = 1;
        $grant->save();

        $form1->grant_id = $grant->id;
        $form1->save();

        // commenting for testing original code start
        //SMS 6
        // try {

        //     $client = new Client();
        //     $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
        //       'form_params' => [
        //           'api_key' => env('SMS_API_KEY'),
        //           'number' => $form1->phone,
        //           'message' =>'Memo: '.$form1->memo.', We received your  payment Rs. '.$paymentUpdate->amount.' .DoICT',
        //           'template_id'=>'3214321',
        //           // 'number' => $phone_number,
        //           // 'message' => $mOTP . ' is your OTP from eTender, MSeGS',
        //       ]
        //   ]);

        //   } catch (\Exception $e) {

        //       return $e->getMessage();
        //   }

        //    //SMS to EE after successful payment

        //    try {

        //    $phoneNumbers = DB::table('users')->where('division_id', $form1->division_id)->where('role_id', 2)->where('disable_account_status', 0 )->pluck('phone')->implode(',');

        //    $client = new Client();
        //    $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
        //        'form_params' => [
        //            'api_key' => env('SMS_API_KEY'),
        //            'number' => $phoneNumbers,
        //            'message' =>'Memo: '.$form1->memo.', '.$form1->name.' completed payment. Login to portal for granting Roadcutting Permission .DoICT',
        //            'template_id'=>'1007431101812136669',

        //        ]
        //    ]);

        //    } catch (\Exception $e) {


        //    }
// commenting for testing original code end

    }

    else{

        $payment = new Payment;
        $payment->order_id = $order_id;
        $payment->tracking_id = $tracking_id;
        $payment->bank_ref_no = $bank_ref_no;
        $payment->order_status = $order_status;
        $payment->payment_mode = $payment_mode;
        $payment->card_name = $card_name;
        $payment->currency = $currency;
        $payment->amount = $amount;
        $payment->billing_name = $billing_name;
        $payment->discount_value = $discount_value;
        $payment->mer_amount = $mer_amount;
       $payment->trans_date = $formattedTransDate;
        $payment->form_id = $billing_notes;
        $payment->payment_status = 2;  //if payment_status ==2 then payment is not successful
        $payment->sub_div = 0;
        $payment->save();




        $form1 = Form::findOrFail($payment->form_id);
        $form1->track_status = 55;
        $form1->payment_id = $payment->id;
        $form1->save();
        $payment1 = DB::table('payments')->where('id',$payment->id)->update(['division_id'=>$form1->division_id]);
        $payment2 = DB::table('payments')->where('id',$payment->id)->update(['form_memo'=>$form1->memo]);
        $payment3 = DB::table('payments')->where('id',$payment->id)->update(['sub_div'=>$form1->sub_div]);


    }



    //  if (App::environment('local')) {
    //     return \Redirect::to('http://localhost:8000/paymentHandler/'.$form1->id);
    //  }

    //   return \Redirect::to('http://localhost:8000/paymentHandler/'.$payment->id); //original
    return \Redirect::to('http://localhost:8000/paymentHandler/'.$payment->id);

    //return \Redirect::to('/paymentHandler/'.$payment->id);
//    return response()->json([
//        "rcvdString" => $rcvdString,
//    ], 201);
}

// lunglei
public function responseHandlerLunglei(Request $request)
{


    $workingKey='CD3FD4BE24DFFA51E95F2075C8F66534';		//Working Key should be provided here.
    $access_code='AVWI97HL35BF50IWFB';
    $encResponse = $request->encResp;			//This is the response sent by the CCAvenue Server
    $rcvdString=$this->decrypt($encResponse,$workingKey);		//Crypto Decryption used as per the specified working key.
    $order_status="";
    $decryptValues=explode('&', $rcvdString);
    $dataSize=sizeof($decryptValues);

    for($i = 0; $i < $dataSize; $i++)
    {
        $information=explode('=',$decryptValues[$i]);
        if($i==0)
        $order_id=$information[1];
        if($i==1)
        $tracking_id=$information[1];
        if($i==2)
        $bank_ref_no=$information[1];
        if($i==3)
        $order_status=$information[1];
        if($i==5)
        $payment_mode=$information[1];
        if($i==6)
        $card_name=$information[1];
        if($i==9)
        $currency=$information[1];
        if($i==10)
        $amount=$information[1];

        if($i==11)
        $billing_name=$information[1];



        if($i==34)
        $discount_value=$information[1];
        if($i==35)
        $mer_amount=$information[1];

        if($i==39)
        $billing_notes=$information[1];

        // dd($billing_notes);

        if($i==40)
        $trans_date=$information[1];


    }

// Convert the trans_date to Y-m-d H:i:s format
$dateTime = DateTime::createFromFormat('d/m/Y H:i:s', $trans_date);
$formattedTransDate = $dateTime ? $dateTime->format('Y-m-d H:i:s') : null;


    // if (App::environment('local')) {
    //     $tracker = new Tracker;
    //     $tracker->encrypted_data = 1;
    //     $tracker->encResponse = $encResponse;
    //     $tracker->rcvdString= $rcvdString;
    //     $tracker->decryptValues= $decryptValues;
    //     $tracker->save();
    // }

    //  dd($decryptValues);
    if($order_status == "Aborted")
    {
        $payment = new Payment;
        $payment->order_id = $order_id;
        $payment->tracking_id = $tracking_id;
        $payment->bank_ref_no = $bank_ref_no;
        $payment->order_status = $order_status;
        $payment->payment_mode = $payment_mode;
        $payment->card_name = $card_name;
        $payment->currency = $currency;
        $payment->amount = $amount;
        $payment->billing_name = $billing_name;
        $payment->discount_value = $discount_value;
        $payment->mer_amount = $mer_amount;
       $payment->trans_date = $formattedTransDate;
        $payment->form_id = $billing_notes;
        $payment->payment_status = 2;  //if payment_status ==2 then payment is not successful
        $payment->sub_div = 0;
        $payment->save();




        $form1 = Form::findOrFail($payment->form_id);
        $form1->track_status = 55;
        $form1->payment_id = $payment->id;
        $form1->save();
        $payment1 = DB::table('payments')->where('id',$payment->id)->update(['division_id'=>$form1->division_id]);
        $payment2 = DB::table('payments')->where('id',$payment->id)->update(['form_memo'=>$form1->memo]);
        $payment3 = DB::table('payments')->where('id',$payment->id)->update(['sub_div'=>$form1->sub_div]);

        // $form = Form::where('memo', $form_memo)->first();
        return \Redirect::to('http://localhost:8000/paymentPage/'.$form1->id);
        // original code
       //  return \Redirect::to('https://pwdroadcutting.mizoram.gov.in/paymentPage/'.$form1->id);
// original code end
    }

    if($order_status == "Success")
    {
        $payment = new Payment;
        $payment->order_id = $order_id;
        $payment->tracking_id = $tracking_id;
        $payment->bank_ref_no = $bank_ref_no;
        $payment->order_status = $order_status;
        $payment->payment_mode = $payment_mode;
        $payment->card_name = $card_name;
        $payment->currency = $currency;
        $payment->amount = $amount;
        $payment->billing_name = $billing_name;
        $payment->discount_value = $discount_value;
        $payment->mer_amount = $mer_amount;
       $payment->trans_date = $formattedTransDate;
        $payment->form_id = $billing_notes;
        $payment->payment_status = 1;  //if payment_status ==1 then payment is successful
        $payment->sub_div = 0;
        $payment->save();

        // $data = DB::table('buy_card_transactions')->where(array('transaction_id' => $key))->first();
        // $form = DB::table('forms')->where('memo',$form_id)->update(['track_status' => 5]);
        // $form = Form::where('memo', $billing_notes)->first();
        $form1 = Form::findOrFail($payment->form_id);
        $form1->track_status = 5;
        $form1->payment_id = $payment->id;
        $form1->save();

        $form_memo=$form1->memo;

        $paymentUpdate = Payment::find($payment->id);
        $paymentUpdate->form_memo = $form1->memo;
        $paymentUpdate->division_id = $form1->division_id;
        $paymentUpdate->sub_div = $form1->sub_div;
        $paymentUpdate->save();
        // $payment1 = DB::table('payments')->where('id', $payment->id)->update(['division_id'=> $form1->division_id]);
        $estimate1 = DB::table('estimates')->where('form_memo',$form1->memo)->update(['estimate_status'=>2]);
        // $estimate=Estimate::where('form_memo', $form_memo)->first();
        // $estimate->status=2;
        // $estimate->save();

        $grant = new Grant;
        $grant->form_memo = $form_memo;
        $grant->form_id = $form1->id;
        $grant->grant_status = 0;
        $grant->validity = 0;
        $grant->division_id = $form1->division_id;

       //new by LTP with help of Fanai
       $grant->sub_div = $form1->sub_div;
      $grant->granted_by = 1;
        $grant->save();

        $form1->grant_id = $grant->id;
        $form1->save();

        // commenting for testing original code start
        //SMS 6
        // try {

        //     $client = new Client();
        //     $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
        //       'form_params' => [
        //           'api_key' => env('SMS_API_KEY'),
        //           'number' => $form1->phone,
        //           'message' =>'Memo: '.$form1->memo.', We received your  payment Rs. '.$paymentUpdate->amount.' .DoICT',
        //           'template_id'=>'3214321',
        //           // 'number' => $phone_number,
        //           // 'message' => $mOTP . ' is your OTP from eTender, MSeGS',
        //       ]
        //   ]);

        //   } catch (\Exception $e) {

        //       return $e->getMessage();
        //   }

        //    //SMS to EE after successful payment

        //    try {

        //    $phoneNumbers = DB::table('users')->where('division_id', $form1->division_id)->where('role_id', 2)->where('disable_account_status', 0 )->pluck('phone')->implode(',');

        //    $client = new Client();
        //    $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
        //        'form_params' => [
        //            'api_key' => env('SMS_API_KEY'),
        //            'number' => $phoneNumbers,
        //            'message' =>'Memo: '.$form1->memo.', '.$form1->name.' completed payment. Login to portal for granting Roadcutting Permission .DoICT',
        //            'template_id'=>'1007431101812136669',

        //        ]
        //    ]);

        //    } catch (\Exception $e) {


        //    }
// commenting for testing original code end

    }

    else{

        $payment = new Payment;
        $payment->order_id = $order_id;
        $payment->tracking_id = $tracking_id;
        $payment->bank_ref_no = $bank_ref_no;
        $payment->order_status = $order_status;
        $payment->payment_mode = $payment_mode;
        $payment->card_name = $card_name;
        $payment->currency = $currency;
        $payment->amount = $amount;
        $payment->billing_name = $billing_name;
        $payment->discount_value = $discount_value;
        $payment->mer_amount = $mer_amount;
       $payment->trans_date = $formattedTransDate;
        $payment->form_id = $billing_notes;
        $payment->payment_status = 2;  //if payment_status ==2 then payment is not successful
        $payment->sub_div = 0;
        $payment->save();




        $form1 = Form::findOrFail($payment->form_id);
        $form1->track_status = 55;
        $form1->payment_id = $payment->id;
        $form1->save();
        $payment1 = DB::table('payments')->where('id',$payment->id)->update(['division_id'=>$form1->division_id]);
        $payment2 = DB::table('payments')->where('id',$payment->id)->update(['form_memo'=>$form1->memo]);
        $payment3 = DB::table('payments')->where('id',$payment->id)->update(['sub_div'=>$form1->sub_div]);


    }



    //  if (App::environment('local')) {
    //     return \Redirect::to('http://localhost:8000/paymentHandler/'.$form1->id);
    //  }


     return \Redirect::to('http://localhost:8000/paymentHandler/'.$payment->id);
    //return \Redirect::to('/paymentHandler/'.$payment->id);
//    return response()->json([
//        "rcvdString" => $rcvdString,
//    ], 201);
}


//saitual
public function responseHandlerSaitual(Request $request)
{


    $workingKey='CD3FD4BE24DFFA51E95F2075C8F66534';		//Working Key should be provided here.
    $access_code='AVWI97HL35BF50IWFB';
    $encResponse = $request->encResp;			//This is the response sent by the CCAvenue Server
    $rcvdString=$this->decrypt($encResponse,$workingKey);		//Crypto Decryption used as per the specified working key.
    $order_status="";
    $decryptValues=explode('&', $rcvdString);
    $dataSize=sizeof($decryptValues);

    for($i = 0; $i < $dataSize; $i++)
    {
        $information=explode('=',$decryptValues[$i]);
        if($i==0)
        $order_id=$information[1];
        if($i==1)
        $tracking_id=$information[1];
        if($i==2)
        $bank_ref_no=$information[1];
        if($i==3)
        $order_status=$information[1];
        if($i==5)
        $payment_mode=$information[1];
        if($i==6)
        $card_name=$information[1];
        if($i==9)
        $currency=$information[1];
        if($i==10)
        $amount=$information[1];

        if($i==11)
        $billing_name=$information[1];



        if($i==34)
        $discount_value=$information[1];
        if($i==35)
        $mer_amount=$information[1];

        if($i==39)
        $billing_notes=$information[1];

        // dd($billing_notes);

        if($i==40)
        $trans_date=$information[1];


    }

// Convert the trans_date to Y-m-d H:i:s format
$dateTime = DateTime::createFromFormat('d/m/Y H:i:s', $trans_date);
$formattedTransDate = $dateTime ? $dateTime->format('Y-m-d H:i:s') : null;


    // if (App::environment('local')) {
    //     $tracker = new Tracker;
    //     $tracker->encrypted_data = 1;
    //     $tracker->encResponse = $encResponse;
    //     $tracker->rcvdString= $rcvdString;
    //     $tracker->decryptValues= $decryptValues;
    //     $tracker->save();
    // }

    //  dd($decryptValues);
    if($order_status == "Aborted")
    {
        $payment = new Payment;
        $payment->order_id = $order_id;
        $payment->tracking_id = $tracking_id;
        $payment->bank_ref_no = $bank_ref_no;
        $payment->order_status = $order_status;
        $payment->payment_mode = $payment_mode;
        $payment->card_name = $card_name;
        $payment->currency = $currency;
        $payment->amount = $amount;
        $payment->billing_name = $billing_name;
        $payment->discount_value = $discount_value;
        $payment->mer_amount = $mer_amount;
       $payment->trans_date = $formattedTransDate;
        $payment->form_id = $billing_notes;
        $payment->payment_status = 2;  //if payment_status ==2 then payment is not successful
        $payment->sub_div = 0;
        $payment->save();




        $form1 = Form::findOrFail($payment->form_id);
        $form1->track_status = 55;
        $form1->payment_id = $payment->id;
        $form1->save();
        $payment1 = DB::table('payments')->where('id',$payment->id)->update(['division_id'=>$form1->division_id]);
        $payment2 = DB::table('payments')->where('id',$payment->id)->update(['form_memo'=>$form1->memo]);
        $payment3 = DB::table('payments')->where('id',$payment->id)->update(['sub_div'=>$form1->sub_div]);

        // $form = Form::where('memo', $form_memo)->first();
        return \Redirect::to('http://localhost:8000/paymentPage/'.$form1->id);
        // original code
       //  return \Redirect::to('https://pwdroadcutting.mizoram.gov.in/paymentPage/'.$form1->id);
// original code end
    }

    if($order_status == "Success")
    {
        $payment = new Payment;
        $payment->order_id = $order_id;
        $payment->tracking_id = $tracking_id;
        $payment->bank_ref_no = $bank_ref_no;
        $payment->order_status = $order_status;
        $payment->payment_mode = $payment_mode;
        $payment->card_name = $card_name;
        $payment->currency = $currency;
        $payment->amount = $amount;
        $payment->billing_name = $billing_name;
        $payment->discount_value = $discount_value;
        $payment->mer_amount = $mer_amount;
       $payment->trans_date = $formattedTransDate;
        $payment->form_id = $billing_notes;
        $payment->payment_status = 1;  //if payment_status ==1 then payment is successful
        $payment->sub_div = 0;
        $payment->save();

        // $data = DB::table('buy_card_transactions')->where(array('transaction_id' => $key))->first();
        // $form = DB::table('forms')->where('memo',$form_id)->update(['track_status' => 5]);
        // $form = Form::where('memo', $billing_notes)->first();
        $form1 = Form::findOrFail($payment->form_id);
        $form1->track_status = 5;
        $form1->payment_id = $payment->id;
        $form1->save();

        $form_memo=$form1->memo;

        $paymentUpdate = Payment::find($payment->id);
        $paymentUpdate->form_memo = $form1->memo;
        $paymentUpdate->division_id = $form1->division_id;
        $paymentUpdate->sub_div = $form1->sub_div;
        $paymentUpdate->save();
        // $payment1 = DB::table('payments')->where('id', $payment->id)->update(['division_id'=> $form1->division_id]);
        $estimate1 = DB::table('estimates')->where('form_memo',$form1->memo)->update(['estimate_status'=>2]);
        // $estimate=Estimate::where('form_memo', $form_memo)->first();
        // $estimate->status=2;
        // $estimate->save();

        $grant = new Grant;
        $grant->form_memo = $form_memo;
        $grant->form_id = $form1->id;
        $grant->grant_status = 0;
        $grant->validity = 0;
        $grant->division_id = $form1->division_id;

       //new by LTP with help of Fanai
       $grant->sub_div = $form1->sub_div;
      $grant->granted_by = 1;
        $grant->save();

        $form1->grant_id = $grant->id;
        $form1->save();
//// commenting for testing original code start
        //SMS 6
        // try {

        //     $client = new Client();
        //     $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
        //       'form_params' => [
        //           'api_key' => env('SMS_API_KEY'),
        //           'number' => $form1->phone,
        //           'message' =>'Memo: '.$form1->memo.', We received your  payment Rs. '.$paymentUpdate->amount.' .DoICT',
        //           'template_id'=>'3214321',
        //           // 'number' => $phone_number,
        //           // 'message' => $mOTP . ' is your OTP from eTender, MSeGS',
        //       ]
        //   ]);

        //   } catch (\Exception $e) {

        //       return $e->getMessage();
        //   }

        //    //SMS to EE after successful payment

        //    try {

        //    $phoneNumbers = DB::table('users')->where('division_id', $form1->division_id)->where('role_id', 2)->where('disable_account_status', 0 )->pluck('phone')->implode(',');

        //    $client = new Client();
        //    $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
        //        'form_params' => [
        //            'api_key' => env('SMS_API_KEY'),
        //            'number' => $phoneNumbers,
        //            'message' =>'Memo: '.$form1->memo.', '.$form1->name.' completed payment. Login to portal for granting Roadcutting Permission .DoICT',
        //            'template_id'=>'1007431101812136669',

        //        ]
        //    ]);

        //    } catch (\Exception $e) {


        //    }
      //  commenting for testing original code end
    }

    else{

        $payment = new Payment;
        $payment->order_id = $order_id;
        $payment->tracking_id = $tracking_id;
        $payment->bank_ref_no = $bank_ref_no;
        $payment->order_status = $order_status;
        $payment->payment_mode = $payment_mode;
        $payment->card_name = $card_name;
        $payment->currency = $currency;
        $payment->amount = $amount;
        $payment->billing_name = $billing_name;
        $payment->discount_value = $discount_value;
        $payment->mer_amount = $mer_amount;
       $payment->trans_date = $formattedTransDate;
        $payment->form_id = $billing_notes;
        $payment->payment_status = 2;  //if payment_status ==2 then payment is not successful
        $payment->sub_div = 0;
        $payment->save();




        $form1 = Form::findOrFail($payment->form_id);
        $form1->track_status = 55;
        $form1->payment_id = $payment->id;
        $form1->save();
        $payment1 = DB::table('payments')->where('id',$payment->id)->update(['division_id'=>$form1->division_id]);
        $payment2 = DB::table('payments')->where('id',$payment->id)->update(['form_memo'=>$form1->memo]);
        $payment3 = DB::table('payments')->where('id',$payment->id)->update(['sub_div'=>$form1->sub_div]);


    }



    //  if (App::environment('local')) {
    //     return \Redirect::to('http://localhost:8000/paymentHandler/'.$form1->id);
    //  }


     return \Redirect::to('http://localhost:8000/paymentHandler/'.$payment->id);
    //return \Redirect::to('/paymentHandler/'.$payment->id);
//    return response()->json([
//        "rcvdString" => $rcvdString,
//    ], 201);
}



// mamit
public function responseHandlerMamit(Request $request)
{


    $workingKey='CD3FD4BE24DFFA51E95F2075C8F66534';		//Working Key should be provided here.
    $access_code='AVWI97HL35BF50IWFB';
    $encResponse = $request->encResp;			//This is the response sent by the CCAvenue Server
    $rcvdString=$this->decrypt($encResponse,$workingKey);		//Crypto Decryption used as per the specified working key.
    $order_status="";
    $decryptValues=explode('&', $rcvdString);
    $dataSize=sizeof($decryptValues);

    for($i = 0; $i < $dataSize; $i++)
    {
        $information=explode('=',$decryptValues[$i]);
        if($i==0)
        $order_id=$information[1];
        if($i==1)
        $tracking_id=$information[1];
        if($i==2)
        $bank_ref_no=$information[1];
        if($i==3)
        $order_status=$information[1];
        if($i==5)
        $payment_mode=$information[1];
        if($i==6)
        $card_name=$information[1];
        if($i==9)
        $currency=$information[1];
        if($i==10)
        $amount=$information[1];

        if($i==11)
        $billing_name=$information[1];



        if($i==34)
        $discount_value=$information[1];
        if($i==35)
        $mer_amount=$information[1];

        if($i==39)
        $billing_notes=$information[1];

        // dd($billing_notes);

        if($i==40)
        $trans_date=$information[1];


    }
// Convert the trans_date to Y-m-d H:i:s format
$dateTime = DateTime::createFromFormat('d/m/Y H:i:s', $trans_date);
$formattedTransDate = $dateTime ? $dateTime->format('Y-m-d H:i:s') : null;



    // if (App::environment('local')) {
    //     $tracker = new Tracker;
    //     $tracker->encrypted_data = 1;
    //     $tracker->encResponse = $encResponse;
    //     $tracker->rcvdString= $rcvdString;
    //     $tracker->decryptValues= $decryptValues;
    //     $tracker->save();
    // }

    //  dd($decryptValues);
    if($order_status == "Aborted")
    {
        $payment = new Payment;
        $payment->order_id = $order_id;
        $payment->tracking_id = $tracking_id;
        $payment->bank_ref_no = $bank_ref_no;
        $payment->order_status = $order_status;
        $payment->payment_mode = $payment_mode;
        $payment->card_name = $card_name;
        $payment->currency = $currency;
        $payment->amount = $amount;
        $payment->billing_name = $billing_name;
        $payment->discount_value = $discount_value;
        $payment->mer_amount = $mer_amount;
       $payment->trans_date = $formattedTransDate;
        $payment->form_id = $billing_notes;
        $payment->payment_status = 2;  //if payment_status ==2 then payment is not successful
        $payment->sub_div = 0;
        $payment->save();




        $form1 = Form::findOrFail($payment->form_id);
        $form1->track_status = 55;
        $form1->payment_id = $payment->id;
        $form1->save();
        $payment1 = DB::table('payments')->where('id',$payment->id)->update(['division_id'=>$form1->division_id]);
        $payment2 = DB::table('payments')->where('id',$payment->id)->update(['form_memo'=>$form1->memo]);
        $payment3 = DB::table('payments')->where('id',$payment->id)->update(['sub_div'=>$form1->sub_div]);

        // $form = Form::where('memo', $form_memo)->first();
        return \Redirect::to('http://localhost:8000/paymentPage/'.$form1->id);
        // original code
       //  return \Redirect::to('https://pwdroadcutting.mizoram.gov.in/paymentPage/'.$form1->id);
// original code end
    }

    if($order_status == "Success")
    {
        $payment = new Payment;
        $payment->order_id = $order_id;
        $payment->tracking_id = $tracking_id;
        $payment->bank_ref_no = $bank_ref_no;
        $payment->order_status = $order_status;
        $payment->payment_mode = $payment_mode;
        $payment->card_name = $card_name;
        $payment->currency = $currency;
        $payment->amount = $amount;
        $payment->billing_name = $billing_name;
        $payment->discount_value = $discount_value;
        $payment->mer_amount = $mer_amount;
       $payment->trans_date = $formattedTransDate;
        $payment->form_id = $billing_notes;
        $payment->payment_status = 1;  //if payment_status ==1 then payment is successful
        $payment->sub_div = 0;
        $payment->save();

        // $data = DB::table('buy_card_transactions')->where(array('transaction_id' => $key))->first();
        // $form = DB::table('forms')->where('memo',$form_id)->update(['track_status' => 5]);
        // $form = Form::where('memo', $billing_notes)->first();
        $form1 = Form::findOrFail($payment->form_id);
        $form1->track_status = 5;
        $form1->payment_id = $payment->id;
        $form1->save();

        $form_memo=$form1->memo;

        $paymentUpdate = Payment::find($payment->id);
        $paymentUpdate->form_memo = $form1->memo;
        $paymentUpdate->division_id = $form1->division_id;
        $paymentUpdate->sub_div = $form1->sub_div;
        $paymentUpdate->save();
        // $payment1 = DB::table('payments')->where('id', $payment->id)->update(['division_id'=> $form1->division_id]);
        $estimate1 = DB::table('estimates')->where('form_memo',$form1->memo)->update(['estimate_status'=>2]);
        // $estimate=Estimate::where('form_memo', $form_memo)->first();
        // $estimate->status=2;
        // $estimate->save();

        $grant = new Grant;
        $grant->form_memo = $form_memo;
        $grant->form_id = $form1->id;
        $grant->grant_status = 0;
        $grant->validity = 0;
        $grant->division_id = $form1->division_id;

       //new by LTP with help of Fanai
       $grant->sub_div = $form1->sub_div;
      $grant->granted_by = 1;
        $grant->save();

        $form1->grant_id = $grant->id;
        $form1->save();
// comment start
        ////SMS 6
        // try {

        //     $client = new Client();
        //     $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
        //       'form_params' => [
        //           'api_key' => env('SMS_API_KEY'),
        //           'number' => $form1->phone,
        //           'message' =>'Memo: '.$form1->memo.', We received your  payment Rs. '.$paymentUpdate->amount.' .DoICT',
        //           'template_id'=>'3214321',
        //           // 'number' => $phone_number,
        //           // 'message' => $mOTP . ' is your OTP from eTender, MSeGS',
        //       ]
        //   ]);

        //   } catch (\Exception $e) {

        //       return $e->getMessage();
        //   }

        //    //SMS to EE after successful payment

        //    try {

        //    $phoneNumbers = DB::table('users')->where('division_id', $form1->division_id)->where('role_id', 2)->where('disable_account_status', 0 )->pluck('phone')->implode(',');

        //    $client = new Client();
        //    $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
        //        'form_params' => [
        //            'api_key' => env('SMS_API_KEY'),
        //            'number' => $phoneNumbers,
        //            'message' =>'Memo: '.$form1->memo.', '.$form1->name.' completed payment. Login to portal for granting Roadcutting Permission .DoICT',
        //            'template_id'=>'1007431101812136669',

        //        ]
        //    ]);

        //    } catch (\Exception $e) {


        //    }
// comment end

    }

    else{

        $payment = new Payment;
        $payment->order_id = $order_id;
        $payment->tracking_id = $tracking_id;
        $payment->bank_ref_no = $bank_ref_no;
        $payment->order_status = $order_status;
        $payment->payment_mode = $payment_mode;
        $payment->card_name = $card_name;
        $payment->currency = $currency;
        $payment->amount = $amount;
        $payment->billing_name = $billing_name;
        $payment->discount_value = $discount_value;
        $payment->mer_amount = $mer_amount;
       $payment->trans_date = $formattedTransDate;
        $payment->form_id = $billing_notes;
        $payment->payment_status = 2;  //if payment_status ==2 then payment is not successful
        $payment->sub_div = 0;
        $payment->save();




        $form1 = Form::findOrFail($payment->form_id);
        $form1->track_status = 55;
        $form1->payment_id = $payment->id;
        $form1->save();
        $payment1 = DB::table('payments')->where('id',$payment->id)->update(['division_id'=>$form1->division_id]);
        $payment2 = DB::table('payments')->where('id',$payment->id)->update(['form_memo'=>$form1->memo]);
        $payment3 = DB::table('payments')->where('id',$payment->id)->update(['sub_div'=>$form1->sub_div]);


    }



    //  if (App::environment('local')) {
    //     return \Redirect::to('http://localhost:8000/paymentHandler/'.$form1->id);
    //  }


     return \Redirect::to('http://localhost:8000/paymentHandler/'.$payment->id);
    //return \Redirect::to('/paymentHandler/'.$payment->id);
//    return response()->json([
//        "rcvdString" => $rcvdString,
//    ], 201);
}


// siaha
public function responseHandlerSiaha(Request $request)
{


    $workingKey='CD3FD4BE24DFFA51E95F2075C8F66534';		//Working Key should be provided here.
    $access_code='AVWI97HL35BF50IWFB';
    $encResponse = $request->encResp;			//This is the response sent by the CCAvenue Server
    $rcvdString=$this->decrypt($encResponse,$workingKey);		//Crypto Decryption used as per the specified working key.
    $order_status="";
    $decryptValues=explode('&', $rcvdString);
    $dataSize=sizeof($decryptValues);

    for($i = 0; $i < $dataSize; $i++)
    {
        $information=explode('=',$decryptValues[$i]);
        if($i==0)
        $order_id=$information[1];
        if($i==1)
        $tracking_id=$information[1];
        if($i==2)
        $bank_ref_no=$information[1];
        if($i==3)
        $order_status=$information[1];
        if($i==5)
        $payment_mode=$information[1];
        if($i==6)
        $card_name=$information[1];
        if($i==9)
        $currency=$information[1];
        if($i==10)
        $amount=$information[1];

        if($i==11)
        $billing_name=$information[1];



        if($i==34)
        $discount_value=$information[1];
        if($i==35)
        $mer_amount=$information[1];

        if($i==39)
        $billing_notes=$information[1];

        // dd($billing_notes);

        if($i==40)
        $trans_date=$information[1];


    }
// Convert the trans_date to Y-m-d H:i:s format
$dateTime = DateTime::createFromFormat('d/m/Y H:i:s', $trans_date);
$formattedTransDate = $dateTime ? $dateTime->format('Y-m-d H:i:s') : null;



    // if (App::environment('local')) {
    //     $tracker = new Tracker;
    //     $tracker->encrypted_data = 1;
    //     $tracker->encResponse = $encResponse;
    //     $tracker->rcvdString= $rcvdString;
    //     $tracker->decryptValues= $decryptValues;
    //     $tracker->save();
    // }

    //  dd($decryptValues);
    if($order_status == "Aborted")
    {
        $payment = new Payment;
        $payment->order_id = $order_id;
        $payment->tracking_id = $tracking_id;
        $payment->bank_ref_no = $bank_ref_no;
        $payment->order_status = $order_status;
        $payment->payment_mode = $payment_mode;
        $payment->card_name = $card_name;
        $payment->currency = $currency;
        $payment->amount = $amount;
        $payment->billing_name = $billing_name;
        $payment->discount_value = $discount_value;
        $payment->mer_amount = $mer_amount;
       $payment->trans_date = $formattedTransDate;
        $payment->form_id = $billing_notes;
        $payment->payment_status = 2;  //if payment_status ==2 then payment is not successful
        $payment->sub_div = 0;
        $payment->save();




        $form1 = Form::findOrFail($payment->form_id);
        $form1->track_status = 55;
        $form1->payment_id = $payment->id;
        $form1->save();
        $payment1 = DB::table('payments')->where('id',$payment->id)->update(['division_id'=>$form1->division_id]);
        $payment2 = DB::table('payments')->where('id',$payment->id)->update(['form_memo'=>$form1->memo]);
        $payment3 = DB::table('payments')->where('id',$payment->id)->update(['sub_div'=>$form1->sub_div]);

        // $form = Form::where('memo', $form_memo)->first();
        return \Redirect::to('http://localhost:8000/paymentPage/'.$form1->id);
        // original code
       //  return \Redirect::to('https://pwdroadcutting.mizoram.gov.in/paymentPage/'.$form1->id);
// original code end
    }

    if($order_status == "Success")
    {
        $payment = new Payment;
        $payment->order_id = $order_id;
        $payment->tracking_id = $tracking_id;
        $payment->bank_ref_no = $bank_ref_no;
        $payment->order_status = $order_status;
        $payment->payment_mode = $payment_mode;
        $payment->card_name = $card_name;
        $payment->currency = $currency;
        $payment->amount = $amount;
        $payment->billing_name = $billing_name;
        $payment->discount_value = $discount_value;
        $payment->mer_amount = $mer_amount;
       $payment->trans_date = $formattedTransDate;
        $payment->form_id = $billing_notes;
        $payment->payment_status = 1;  //if payment_status ==1 then payment is successful
        $payment->sub_div = 0;
        $payment->save();

        // $data = DB::table('buy_card_transactions')->where(array('transaction_id' => $key))->first();
        // $form = DB::table('forms')->where('memo',$form_id)->update(['track_status' => 5]);
        // $form = Form::where('memo', $billing_notes)->first();
        $form1 = Form::findOrFail($payment->form_id);
        $form1->track_status = 5;
        $form1->payment_id = $payment->id;
        $form1->save();

        $form_memo=$form1->memo;

        $paymentUpdate = Payment::find($payment->id);
        $paymentUpdate->form_memo = $form1->memo;
        $paymentUpdate->division_id = $form1->division_id;
        $paymentUpdate->sub_div = $form1->sub_div;
        $paymentUpdate->save();
        // $payment1 = DB::table('payments')->where('id', $payment->id)->update(['division_id'=> $form1->division_id]);
        $estimate1 = DB::table('estimates')->where('form_memo',$form1->memo)->update(['estimate_status'=>2]);
        // $estimate=Estimate::where('form_memo', $form_memo)->first();
        // $estimate->status=2;
        // $estimate->save();

        $grant = new Grant;
        $grant->form_memo = $form_memo;
        $grant->form_id = $form1->id;
        $grant->grant_status = 0;
        $grant->validity = 0;
        $grant->division_id = $form1->division_id;

       //new by LTP with help of Fanai
       $grant->sub_div = $form1->sub_div;
      $grant->granted_by = 1;
        $grant->save();

        $form1->grant_id = $grant->id;
        $form1->save();
// comment start
        ////SMS 6
        // try {

        //     $client = new Client();
        //     $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
        //       'form_params' => [
        //           'api_key' => env('SMS_API_KEY'),
        //           'number' => $form1->phone,
        //           'message' =>'Memo: '.$form1->memo.', We received your  payment Rs. '.$paymentUpdate->amount.' .DoICT',
        //           'template_id'=>'3214321',
        //           // 'number' => $phone_number,
        //           // 'message' => $mOTP . ' is your OTP from eTender, MSeGS',
        //       ]
        //   ]);

        //   } catch (\Exception $e) {

        //       return $e->getMessage();
        //   }

        //    //SMS to EE after successful payment

        //    try {

        //    $phoneNumbers = DB::table('users')->where('division_id', $form1->division_id)->where('role_id', 2)->where('disable_account_status', 0 )->pluck('phone')->implode(',');

        //    $client = new Client();
        //    $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
        //        'form_params' => [
        //            'api_key' => env('SMS_API_KEY'),
        //            'number' => $phoneNumbers,
        //            'message' =>'Memo: '.$form1->memo.', '.$form1->name.' completed payment. Login to portal for granting Roadcutting Permission .DoICT',
        //            'template_id'=>'1007431101812136669',

        //        ]
        //    ]);

        //    } catch (\Exception $e) {


        //    }
// comment end


    }

    else{

        $payment = new Payment;
        $payment->order_id = $order_id;
        $payment->tracking_id = $tracking_id;
        $payment->bank_ref_no = $bank_ref_no;
        $payment->order_status = $order_status;
        $payment->payment_mode = $payment_mode;
        $payment->card_name = $card_name;
        $payment->currency = $currency;
        $payment->amount = $amount;
        $payment->billing_name = $billing_name;
        $payment->discount_value = $discount_value;
        $payment->mer_amount = $mer_amount;
       $payment->trans_date = $formattedTransDate;
        $payment->form_id = $billing_notes;
        $payment->payment_status = 2;  //if payment_status ==2 then payment is not successful
        $payment->sub_div = 0;
        $payment->save();




        $form1 = Form::findOrFail($payment->form_id);
        $form1->track_status = 55;
        $form1->payment_id = $payment->id;
        $form1->save();
        $payment1 = DB::table('payments')->where('id',$payment->id)->update(['division_id'=>$form1->division_id]);
        $payment2 = DB::table('payments')->where('id',$payment->id)->update(['form_memo'=>$form1->memo]);
        $payment3 = DB::table('payments')->where('id',$payment->id)->update(['sub_div'=>$form1->sub_div]);


    }



    //  if (App::environment('local')) {
    //     return \Redirect::to('http://localhost:8000/paymentHandler/'.$form1->id);
    //  }


     return \Redirect::to('http://localhost:8000/paymentHandler/'.$payment->id);
    //return \Redirect::to('/paymentHandler/'.$payment->id);
//    return response()->json([
//        "rcvdString" => $rcvdString,
//    ], 201);
}


//khawZawl
public function responseHandlerKhawzawl(Request $request)
{


    $workingKey='CD3FD4BE24DFFA51E95F2075C8F66534';		//Working Key should be provided here.
    $access_code='AVWI97HL35BF50IWFB';
    $encResponse = $request->encResp;			//This is the response sent by the CCAvenue Server
    $rcvdString=$this->decrypt($encResponse,$workingKey);		//Crypto Decryption used as per the specified working key.
    $order_status="";
    $decryptValues=explode('&', $rcvdString);
    $dataSize=sizeof($decryptValues);

    for($i = 0; $i < $dataSize; $i++)
    {
        $information=explode('=',$decryptValues[$i]);
        if($i==0)
        $order_id=$information[1];
        if($i==1)
        $tracking_id=$information[1];
        if($i==2)
        $bank_ref_no=$information[1];
        if($i==3)
        $order_status=$information[1];
        if($i==5)
        $payment_mode=$information[1];
        if($i==6)
        $card_name=$information[1];
        if($i==9)
        $currency=$information[1];
        if($i==10)
        $amount=$information[1];

        if($i==11)
        $billing_name=$information[1];



        if($i==34)
        $discount_value=$information[1];
        if($i==35)
        $mer_amount=$information[1];

        if($i==39)
        $billing_notes=$information[1];

        // dd($billing_notes);

        if($i==40)
        $trans_date=$information[1];


    }
// Convert the trans_date to Y-m-d H:i:s format
$dateTime = DateTime::createFromFormat('d/m/Y H:i:s', $trans_date);
$formattedTransDate = $dateTime ? $dateTime->format('Y-m-d H:i:s') : null;



    // if (App::environment('local')) {
    //     $tracker = new Tracker;
    //     $tracker->encrypted_data = 1;
    //     $tracker->encResponse = $encResponse;
    //     $tracker->rcvdString= $rcvdString;
    //     $tracker->decryptValues= $decryptValues;
    //     $tracker->save();
    // }

    //  dd($decryptValues);
    if($order_status == "Aborted")
    {
        $payment = new Payment;
        $payment->order_id = $order_id;
        $payment->tracking_id = $tracking_id;
        $payment->bank_ref_no = $bank_ref_no;
        $payment->order_status = $order_status;
        $payment->payment_mode = $payment_mode;
        $payment->card_name = $card_name;
        $payment->currency = $currency;
        $payment->amount = $amount;
        $payment->billing_name = $billing_name;
        $payment->discount_value = $discount_value;
        $payment->mer_amount = $mer_amount;
       $payment->trans_date = $formattedTransDate;
        $payment->form_id = $billing_notes;
        $payment->payment_status = 2;  //if payment_status ==2 then payment is not successful
        $payment->sub_div = 0;
        $payment->save();




        $form1 = Form::findOrFail($payment->form_id);
        $form1->track_status = 55;
        $form1->payment_id = $payment->id;
        $form1->save();
        $payment1 = DB::table('payments')->where('id',$payment->id)->update(['division_id'=>$form1->division_id]);
        $payment2 = DB::table('payments')->where('id',$payment->id)->update(['form_memo'=>$form1->memo]);
        $payment3 = DB::table('payments')->where('id',$payment->id)->update(['sub_div'=>$form1->sub_div]);

        // $form = Form::where('memo', $form_memo)->first();
        return \Redirect::to('http://localhost:8000/paymentPage/'.$form1->id);
        // original code
       //  return \Redirect::to('https://pwdroadcutting.mizoram.gov.in/paymentPage/'.$form1->id);
// original code end
    }

    if($order_status == "Success")
    {
        $payment = new Payment;
        $payment->order_id = $order_id;
        $payment->tracking_id = $tracking_id;
        $payment->bank_ref_no = $bank_ref_no;
        $payment->order_status = $order_status;
        $payment->payment_mode = $payment_mode;
        $payment->card_name = $card_name;
        $payment->currency = $currency;
        $payment->amount = $amount;
        $payment->billing_name = $billing_name;
        $payment->discount_value = $discount_value;
        $payment->mer_amount = $mer_amount;
       $payment->trans_date = $formattedTransDate;
        $payment->form_id = $billing_notes;
        $payment->payment_status = 1;  //if payment_status ==1 then payment is successful
        $payment->sub_div = 0;
        $payment->save();

        // $data = DB::table('buy_card_transactions')->where(array('transaction_id' => $key))->first();
        // $form = DB::table('forms')->where('memo',$form_id)->update(['track_status' => 5]);
        // $form = Form::where('memo', $billing_notes)->first();
        $form1 = Form::findOrFail($payment->form_id);
        $form1->track_status = 5;
        $form1->payment_id = $payment->id;
        $form1->save();

        $form_memo=$form1->memo;

        $paymentUpdate = Payment::find($payment->id);
        $paymentUpdate->form_memo = $form1->memo;
        $paymentUpdate->division_id = $form1->division_id;
        $paymentUpdate->sub_div = $form1->sub_div;
        $paymentUpdate->save();
        // $payment1 = DB::table('payments')->where('id', $payment->id)->update(['division_id'=> $form1->division_id]);
        $estimate1 = DB::table('estimates')->where('form_memo',$form1->memo)->update(['estimate_status'=>2]);
        // $estimate=Estimate::where('form_memo', $form_memo)->first();
        // $estimate->status=2;
        // $estimate->save();

        $grant = new Grant;
        $grant->form_memo = $form_memo;
        $grant->form_id = $form1->id;
        $grant->grant_status = 0;
        $grant->validity = 0;
        $grant->division_id = $form1->division_id;

       //new by LTP with help of Fanai
       $grant->sub_div = $form1->sub_div;
      $grant->granted_by = 1;
        $grant->save();

        $form1->grant_id = $grant->id;
        $form1->save();
// comment start
        ////SMS 6
        // try {

        //     $client = new Client();
        //     $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
        //       'form_params' => [
        //           'api_key' => env('SMS_API_KEY'),
        //           'number' => $form1->phone,
        //           'message' =>'Memo: '.$form1->memo.', We received your  payment Rs. '.$paymentUpdate->amount.' .DoICT',
        //           'template_id'=>'3214321',
        //           // 'number' => $phone_number,
        //           // 'message' => $mOTP . ' is your OTP from eTender, MSeGS',
        //       ]
        //   ]);

        //   } catch (\Exception $e) {

        //       return $e->getMessage();
        //   }

        //    //SMS to EE after successful payment

        //    try {

        //    $phoneNumbers = DB::table('users')->where('division_id', $form1->division_id)->where('role_id', 2)->where('disable_account_status', 0 )->pluck('phone')->implode(',');

        //    $client = new Client();
        //    $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
        //        'form_params' => [
        //            'api_key' => env('SMS_API_KEY'),
        //            'number' => $phoneNumbers,
        //            'message' =>'Memo: '.$form1->memo.', '.$form1->name.' completed payment. Login to portal for granting Roadcutting Permission .DoICT',
        //            'template_id'=>'1007431101812136669',

        //        ]
        //    ]);

        //    } catch (\Exception $e) {


        //    }
// comment end
    }

    else{

        $payment = new Payment;
        $payment->order_id = $order_id;
        $payment->tracking_id = $tracking_id;
        $payment->bank_ref_no = $bank_ref_no;
        $payment->order_status = $order_status;
        $payment->payment_mode = $payment_mode;
        $payment->card_name = $card_name;
        $payment->currency = $currency;
        $payment->amount = $amount;
        $payment->billing_name = $billing_name;
        $payment->discount_value = $discount_value;
        $payment->mer_amount = $mer_amount;
       $payment->trans_date = $formattedTransDate;
        $payment->form_id = $billing_notes;
        $payment->payment_status = 2;  //if payment_status ==2 then payment is not successful
        $payment->sub_div = 0;
        $payment->save();




        $form1 = Form::findOrFail($payment->form_id);
        $form1->track_status = 55;
        $form1->payment_id = $payment->id;
        $form1->save();
        $payment1 = DB::table('payments')->where('id',$payment->id)->update(['division_id'=>$form1->division_id]);
        $payment2 = DB::table('payments')->where('id',$payment->id)->update(['form_memo'=>$form1->memo]);
        $payment3 = DB::table('payments')->where('id',$payment->id)->update(['sub_div'=>$form1->sub_div]);


    }



    //  if (App::environment('local')) {
    //     return \Redirect::to('http://localhost:8000/paymentHandler/'.$form1->id);
    //  }


     return \Redirect::to('http://localhost:8000/paymentHandler/'.$payment->id);
    //return \Redirect::to('/paymentHandler/'.$payment->id);
//    return response()->json([
//        "rcvdString" => $rcvdString,
//    ], 201);
}


//kolasib
public function responseHandlerKolasib(Request $request)
{


    $workingKey='CD3FD4BE24DFFA51E95F2075C8F66534';		//Working Key should be provided here.
    $access_code='AVWI97HL35BF50IWFB';
    $encResponse = $request->encResp;			//This is the response sent by the CCAvenue Server
    $rcvdString=$this->decrypt($encResponse,$workingKey);		//Crypto Decryption used as per the specified working key.
    $order_status="";
    $decryptValues=explode('&', $rcvdString);
    $dataSize=sizeof($decryptValues);

    for($i = 0; $i < $dataSize; $i++)
    {
        $information=explode('=',$decryptValues[$i]);
        if($i==0)
        $order_id=$information[1];
        if($i==1)
        $tracking_id=$information[1];
        if($i==2)
        $bank_ref_no=$information[1];
        if($i==3)
        $order_status=$information[1];
        if($i==5)
        $payment_mode=$information[1];
        if($i==6)
        $card_name=$information[1];
        if($i==9)
        $currency=$information[1];
        if($i==10)
        $amount=$information[1];

        if($i==11)
        $billing_name=$information[1];



        if($i==34)
        $discount_value=$information[1];
        if($i==35)
        $mer_amount=$information[1];

        if($i==39)
        $billing_notes=$information[1];

        // dd($billing_notes);

        if($i==40)
        $trans_date=$information[1];


    }

// Convert the trans_date to Y-m-d H:i:s format
$dateTime = DateTime::createFromFormat('d/m/Y H:i:s', $trans_date);
$formattedTransDate = $dateTime ? $dateTime->format('Y-m-d H:i:s') : null;


    // if (App::environment('local')) {
    //     $tracker = new Tracker;
    //     $tracker->encrypted_data = 1;
    //     $tracker->encResponse = $encResponse;
    //     $tracker->rcvdString= $rcvdString;
    //     $tracker->decryptValues= $decryptValues;
    //     $tracker->save();
    // }

    //  dd($decryptValues);
    if($order_status == "Aborted")
    {
        $payment = new Payment;
        $payment->order_id = $order_id;
        $payment->tracking_id = $tracking_id;
        $payment->bank_ref_no = $bank_ref_no;
        $payment->order_status = $order_status;
        $payment->payment_mode = $payment_mode;
        $payment->card_name = $card_name;
        $payment->currency = $currency;
        $payment->amount = $amount;
        $payment->billing_name = $billing_name;
        $payment->discount_value = $discount_value;
        $payment->mer_amount = $mer_amount;
       $payment->trans_date = $formattedTransDate;
        $payment->form_id = $billing_notes;
        $payment->payment_status = 2;  //if payment_status ==2 then payment is not successful
        $payment->sub_div = 0;
        $payment->save();




        $form1 = Form::findOrFail($payment->form_id);
        $form1->track_status = 55;
        $form1->payment_id = $payment->id;
        $form1->save();
        $payment1 = DB::table('payments')->where('id',$payment->id)->update(['division_id'=>$form1->division_id]);
        $payment2 = DB::table('payments')->where('id',$payment->id)->update(['form_memo'=>$form1->memo]);
        $payment3 = DB::table('payments')->where('id',$payment->id)->update(['sub_div'=>$form1->sub_div]);

        // $form = Form::where('memo', $form_memo)->first();
        return \Redirect::to('http://localhost:8000/paymentPage/'.$form1->id);
        // original code
       //  return \Redirect::to('https://pwdroadcutting.mizoram.gov.in/paymentPage/'.$form1->id);
// original code end
    }

    if($order_status == "Success")
    {
        $payment = new Payment;
        $payment->order_id = $order_id;
        $payment->tracking_id = $tracking_id;
        $payment->bank_ref_no = $bank_ref_no;
        $payment->order_status = $order_status;
        $payment->payment_mode = $payment_mode;
        $payment->card_name = $card_name;
        $payment->currency = $currency;
        $payment->amount = $amount;
        $payment->billing_name = $billing_name;
        $payment->discount_value = $discount_value;
        $payment->mer_amount = $mer_amount;
       $payment->trans_date = $formattedTransDate;
        $payment->form_id = $billing_notes;
        $payment->payment_status = 1;  //if payment_status ==1 then payment is successful
        $payment->sub_div = 0;
        $payment->save();

        // $data = DB::table('buy_card_transactions')->where(array('transaction_id' => $key))->first();
        // $form = DB::table('forms')->where('memo',$form_id)->update(['track_status' => 5]);
        // $form = Form::where('memo', $billing_notes)->first();
        $form1 = Form::findOrFail($payment->form_id);
        $form1->track_status = 5;
        $form1->payment_id = $payment->id;
        $form1->save();

        $form_memo=$form1->memo;

        $paymentUpdate = Payment::find($payment->id);
        $paymentUpdate->form_memo = $form1->memo;
        $paymentUpdate->division_id = $form1->division_id;
        $paymentUpdate->sub_div = $form1->sub_div;
        $paymentUpdate->save();
        // $payment1 = DB::table('payments')->where('id', $payment->id)->update(['division_id'=> $form1->division_id]);
        $estimate1 = DB::table('estimates')->where('form_memo',$form1->memo)->update(['estimate_status'=>2]);
        // $estimate=Estimate::where('form_memo', $form_memo)->first();
        // $estimate->status=2;
        // $estimate->save();

        $grant = new Grant;
        $grant->form_memo = $form_memo;
        $grant->form_id = $form1->id;
        $grant->grant_status = 0;
        $grant->validity = 0;
        $grant->division_id = $form1->division_id;

       //new by LTP with help of Fanai
       $grant->sub_div = $form1->sub_div;
      $grant->granted_by = 1;
        $grant->save();

        $form1->grant_id = $grant->id;
        $form1->save();
// comment start
        ////SMS 6
        // try {

        //     $client = new Client();
        //     $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
        //       'form_params' => [
        //           'api_key' => env('SMS_API_KEY'),
        //           'number' => $form1->phone,
        //           'message' =>'Memo: '.$form1->memo.', We received your  payment Rs. '.$paymentUpdate->amount.' .DoICT',
        //           'template_id'=>'3214321',
        //           // 'number' => $phone_number,
        //           // 'message' => $mOTP . ' is your OTP from eTender, MSeGS',
        //       ]
        //   ]);

        //   } catch (\Exception $e) {

        //       return $e->getMessage();
        //   }

        //    //SMS to EE after successful payment

        //    try {

        //    $phoneNumbers = DB::table('users')->where('division_id', $form1->division_id)->where('role_id', 2)->where('disable_account_status', 0 )->pluck('phone')->implode(',');

        //    $client = new Client();
        //    $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
        //        'form_params' => [
        //            'api_key' => env('SMS_API_KEY'),
        //            'number' => $phoneNumbers,
        //            'message' =>'Memo: '.$form1->memo.', '.$form1->name.' completed payment. Login to portal for granting Roadcutting Permission .DoICT',
        //            'template_id'=>'1007431101812136669',

        //        ]
        //    ]);

        //    } catch (\Exception $e) {


        //    }
// comment end
    }

    else{

        $payment = new Payment;
        $payment->order_id = $order_id;
        $payment->tracking_id = $tracking_id;
        $payment->bank_ref_no = $bank_ref_no;
        $payment->order_status = $order_status;
        $payment->payment_mode = $payment_mode;
        $payment->card_name = $card_name;
        $payment->currency = $currency;
        $payment->amount = $amount;
        $payment->billing_name = $billing_name;
        $payment->discount_value = $discount_value;
        $payment->mer_amount = $mer_amount;
       $payment->trans_date = $formattedTransDate;
        $payment->form_id = $billing_notes;
        $payment->payment_status = 2;  //if payment_status ==2 then payment is not successful
        $payment->sub_div = 0;
        $payment->save();




        $form1 = Form::findOrFail($payment->form_id);
        $form1->track_status = 55;
        $form1->payment_id = $payment->id;
        $form1->save();
        $payment1 = DB::table('payments')->where('id',$payment->id)->update(['division_id'=>$form1->division_id]);
        $payment2 = DB::table('payments')->where('id',$payment->id)->update(['form_memo'=>$form1->memo]);
        $payment3 = DB::table('payments')->where('id',$payment->id)->update(['sub_div'=>$form1->sub_div]);


    }



    //  if (App::environment('local')) {
    //     return \Redirect::to('http://localhost:8000/paymentHandler/'.$form1->id);
    //  }


     return \Redirect::to('http://localhost:8000/paymentHandler/'.$payment->id);
    //return \Redirect::to('/paymentHandler/'.$payment->id);
//    return response()->json([
//        "rcvdString" => $rcvdString,
//    ], 201);
}

// lawngtlai
public function responseHandlerLawngtlai(Request $request)
{


    $workingKey='CD3FD4BE24DFFA51E95F2075C8F66534';		//Working Key should be provided here.
    $access_code='AVWI97HL35BF50IWFB';
    $encResponse = $request->encResp;			//This is the response sent by the CCAvenue Server
    $rcvdString=$this->decrypt($encResponse,$workingKey);		//Crypto Decryption used as per the specified working key.
    $order_status="";
    $decryptValues=explode('&', $rcvdString);
    $dataSize=sizeof($decryptValues);

    for($i = 0; $i < $dataSize; $i++)
    {
        $information=explode('=',$decryptValues[$i]);
        if($i==0)
        $order_id=$information[1];
        if($i==1)
        $tracking_id=$information[1];
        if($i==2)
        $bank_ref_no=$information[1];
        if($i==3)
        $order_status=$information[1];
        if($i==5)
        $payment_mode=$information[1];
        if($i==6)
        $card_name=$information[1];
        if($i==9)
        $currency=$information[1];
        if($i==10)
        $amount=$information[1];

        if($i==11)
        $billing_name=$information[1];



        if($i==34)
        $discount_value=$information[1];
        if($i==35)
        $mer_amount=$information[1];

        if($i==39)
        $billing_notes=$information[1];

        // dd($billing_notes);

        if($i==40)
        $trans_date=$information[1];


    }

// Convert the trans_date to Y-m-d H:i:s format
$dateTime = DateTime::createFromFormat('d/m/Y H:i:s', $trans_date);
$formattedTransDate = $dateTime ? $dateTime->format('Y-m-d H:i:s') : null;


    // if (App::environment('local')) {
    //     $tracker = new Tracker;
    //     $tracker->encrypted_data = 1;
    //     $tracker->encResponse = $encResponse;
    //     $tracker->rcvdString= $rcvdString;
    //     $tracker->decryptValues= $decryptValues;
    //     $tracker->save();
    // }

    //  dd($decryptValues);
    if($order_status == "Aborted")
    {
        $payment = new Payment;
        $payment->order_id = $order_id;
        $payment->tracking_id = $tracking_id;
        $payment->bank_ref_no = $bank_ref_no;
        $payment->order_status = $order_status;
        $payment->payment_mode = $payment_mode;
        $payment->card_name = $card_name;
        $payment->currency = $currency;
        $payment->amount = $amount;
        $payment->billing_name = $billing_name;
        $payment->discount_value = $discount_value;
        $payment->mer_amount = $mer_amount;
       $payment->trans_date = $formattedTransDate;
        $payment->form_id = $billing_notes;
        $payment->payment_status = 2;  //if payment_status ==2 then payment is not successful
        $payment->sub_div = 0;
        $payment->save();




        $form1 = Form::findOrFail($payment->form_id);
        $form1->track_status = 55;
        $form1->payment_id = $payment->id;
        $form1->save();
        $payment1 = DB::table('payments')->where('id',$payment->id)->update(['division_id'=>$form1->division_id]);
        $payment2 = DB::table('payments')->where('id',$payment->id)->update(['form_memo'=>$form1->memo]);
        $payment3 = DB::table('payments')->where('id',$payment->id)->update(['sub_div'=>$form1->sub_div]);

        // $form = Form::where('memo', $form_memo)->first();
        return \Redirect::to('http://localhost:8000/paymentPage/'.$form1->id);
        // original code
       //  return \Redirect::to('https://pwdroadcutting.mizoram.gov.in/paymentPage/'.$form1->id);
// original code end
    }

    if($order_status == "Success")
    {
        $payment = new Payment;
        $payment->order_id = $order_id;
        $payment->tracking_id = $tracking_id;
        $payment->bank_ref_no = $bank_ref_no;
        $payment->order_status = $order_status;
        $payment->payment_mode = $payment_mode;
        $payment->card_name = $card_name;
        $payment->currency = $currency;
        $payment->amount = $amount;
        $payment->billing_name = $billing_name;
        $payment->discount_value = $discount_value;
        $payment->mer_amount = $mer_amount;
       $payment->trans_date = $formattedTransDate;
        $payment->form_id = $billing_notes;
        $payment->payment_status = 1;  //if payment_status ==1 then payment is successful
        $payment->sub_div = 0;
        $payment->save();

        // $data = DB::table('buy_card_transactions')->where(array('transaction_id' => $key))->first();
        // $form = DB::table('forms')->where('memo',$form_id)->update(['track_status' => 5]);
        // $form = Form::where('memo', $billing_notes)->first();
        $form1 = Form::findOrFail($payment->form_id);
        $form1->track_status = 5;
        $form1->payment_id = $payment->id;
        $form1->save();

        $form_memo=$form1->memo;

        $paymentUpdate = Payment::find($payment->id);
        $paymentUpdate->form_memo = $form1->memo;
        $paymentUpdate->division_id = $form1->division_id;
        $paymentUpdate->sub_div = $form1->sub_div;
        $paymentUpdate->save();
        // $payment1 = DB::table('payments')->where('id', $payment->id)->update(['division_id'=> $form1->division_id]);
        $estimate1 = DB::table('estimates')->where('form_memo',$form1->memo)->update(['estimate_status'=>2]);
        // $estimate=Estimate::where('form_memo', $form_memo)->first();
        // $estimate->status=2;
        // $estimate->save();

        $grant = new Grant;
        $grant->form_memo = $form_memo;
        $grant->form_id = $form1->id;
        $grant->grant_status = 0;
        $grant->validity = 0;
        $grant->division_id = $form1->division_id;

       //new by LTP with help of Fanai
       $grant->sub_div = $form1->sub_div;
      $grant->granted_by = 1;
        $grant->save();

        $form1->grant_id = $grant->id;
        $form1->save();
// comment start

        ////SMS 6
        // try {

        //     $client = new Client();
        //     $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
        //       'form_params' => [
        //           'api_key' => env('SMS_API_KEY'),
        //           'number' => $form1->phone,
        //           'message' =>'Memo: '.$form1->memo.', We received your  payment Rs. '.$paymentUpdate->amount.' .DoICT',
        //           'template_id'=>'3214321',
        //           // 'number' => $phone_number,
        //           // 'message' => $mOTP . ' is your OTP from eTender, MSeGS',
        //       ]
        //   ]);

        //   } catch (\Exception $e) {

        //       return $e->getMessage();
        //   }

        //    //SMS to EE after successful payment

        //    try {

        //    $phoneNumbers = DB::table('users')->where('division_id', $form1->division_id)->where('role_id', 2)->where('disable_account_status', 0 )->pluck('phone')->implode(',');

        //    $client = new Client();
        //    $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
        //        'form_params' => [
        //            'api_key' => env('SMS_API_KEY'),
        //            'number' => $phoneNumbers,
        //            'message' =>'Memo: '.$form1->memo.', '.$form1->name.' completed payment. Login to portal for granting Roadcutting Permission .DoICT',
        //            'template_id'=>'1007431101812136669',

        //        ]
        //    ]);

        //    } catch (\Exception $e) {


        //    }
// comment end

    }

    else{

        $payment = new Payment;
        $payment->order_id = $order_id;
        $payment->tracking_id = $tracking_id;
        $payment->bank_ref_no = $bank_ref_no;
        $payment->order_status = $order_status;
        $payment->payment_mode = $payment_mode;
        $payment->card_name = $card_name;
        $payment->currency = $currency;
        $payment->amount = $amount;
        $payment->billing_name = $billing_name;
        $payment->discount_value = $discount_value;
        $payment->mer_amount = $mer_amount;
       $payment->trans_date = $formattedTransDate;
        $payment->form_id = $billing_notes;
        $payment->payment_status = 2;  //if payment_status ==2 then payment is not successful
        $payment->sub_div = 0;
        $payment->save();




        $form1 = Form::findOrFail($payment->form_id);
        $form1->track_status = 55;
        $form1->payment_id = $payment->id;
        $form1->save();
        $payment1 = DB::table('payments')->where('id',$payment->id)->update(['division_id'=>$form1->division_id]);
        $payment2 = DB::table('payments')->where('id',$payment->id)->update(['form_memo'=>$form1->memo]);
        $payment3 = DB::table('payments')->where('id',$payment->id)->update(['sub_div'=>$form1->sub_div]);


    }



    //  if (App::environment('local')) {
    //     return \Redirect::to('http://localhost:8000/paymentHandler/'.$form1->id);
    //  }


     return \Redirect::to('http://localhost:8000/paymentHandler/'.$payment->id);
    //return \Redirect::to('/paymentHandler/'.$payment->id);
//    return response()->json([
//        "rcvdString" => $rcvdString,
//    ], 201);
}


// serchhip
public function responseHandlerSerchhip(Request $request)
{


    $workingKey='CD3FD4BE24DFFA51E95F2075C8F66534';		//Working Key should be provided here.
    $access_code='AVWI97HL35BF50IWFB';
    $encResponse = $request->encResp;			//This is the response sent by the CCAvenue Server
    $rcvdString=$this->decrypt($encResponse,$workingKey);		//Crypto Decryption used as per the specified working key.
    $order_status="";
    $decryptValues=explode('&', $rcvdString);
    $dataSize=sizeof($decryptValues);

    for($i = 0; $i < $dataSize; $i++)
    {
        $information=explode('=',$decryptValues[$i]);
        if($i==0)
        $order_id=$information[1];
        if($i==1)
        $tracking_id=$information[1];
        if($i==2)
        $bank_ref_no=$information[1];
        if($i==3)
        $order_status=$information[1];
        if($i==5)
        $payment_mode=$information[1];
        if($i==6)
        $card_name=$information[1];
        if($i==9)
        $currency=$information[1];
        if($i==10)
        $amount=$information[1];

        if($i==11)
        $billing_name=$information[1];



        if($i==34)
        $discount_value=$information[1];
        if($i==35)
        $mer_amount=$information[1];

        if($i==39)
        $billing_notes=$information[1];

        // dd($billing_notes);

        if($i==40)
        $trans_date=$information[1];


    }

// Convert the trans_date to Y-m-d H:i:s format
$dateTime = DateTime::createFromFormat('d/m/Y H:i:s', $trans_date);
$formattedTransDate = $dateTime ? $dateTime->format('Y-m-d H:i:s') : null;


    // if (App::environment('local')) {
    //     $tracker = new Tracker;
    //     $tracker->encrypted_data = 1;
    //     $tracker->encResponse = $encResponse;
    //     $tracker->rcvdString= $rcvdString;
    //     $tracker->decryptValues= $decryptValues;
    //     $tracker->save();
    // }

    //  dd($decryptValues);
    if($order_status == "Aborted")
    {
        $payment = new Payment;
        $payment->order_id = $order_id;
        $payment->tracking_id = $tracking_id;
        $payment->bank_ref_no = $bank_ref_no;
        $payment->order_status = $order_status;
        $payment->payment_mode = $payment_mode;
        $payment->card_name = $card_name;
        $payment->currency = $currency;
        $payment->amount = $amount;
        $payment->billing_name = $billing_name;
        $payment->discount_value = $discount_value;
        $payment->mer_amount = $mer_amount;
       $payment->trans_date = $formattedTransDate;
        $payment->form_id = $billing_notes;
        $payment->payment_status = 2;  //if payment_status ==2 then payment is not successful
        $payment->sub_div = 0;
        $payment->save();




        $form1 = Form::findOrFail($payment->form_id);
        $form1->track_status = 55;
        $form1->payment_id = $payment->id;
        $form1->save();
        $payment1 = DB::table('payments')->where('id',$payment->id)->update(['division_id'=>$form1->division_id]);
        $payment2 = DB::table('payments')->where('id',$payment->id)->update(['form_memo'=>$form1->memo]);
        $payment3 = DB::table('payments')->where('id',$payment->id)->update(['sub_div'=>$form1->sub_div]);

        // $form = Form::where('memo', $form_memo)->first();
        return \Redirect::to('http://localhost:8000/paymentPage/'.$form1->id);
        // original code
       //  return \Redirect::to('https://pwdroadcutting.mizoram.gov.in/paymentPage/'.$form1->id);
// original code end
    }

    if($order_status == "Success")
    {
        $payment = new Payment;
        $payment->order_id = $order_id;
        $payment->tracking_id = $tracking_id;
        $payment->bank_ref_no = $bank_ref_no;
        $payment->order_status = $order_status;
        $payment->payment_mode = $payment_mode;
        $payment->card_name = $card_name;
        $payment->currency = $currency;
        $payment->amount = $amount;
        $payment->billing_name = $billing_name;
        $payment->discount_value = $discount_value;
        $payment->mer_amount = $mer_amount;
       $payment->trans_date = $formattedTransDate;
        $payment->form_id = $billing_notes;
        $payment->payment_status = 1;  //if payment_status ==1 then payment is successful
        $payment->sub_div = 0;
        $payment->save();

        // $data = DB::table('buy_card_transactions')->where(array('transaction_id' => $key))->first();
        // $form = DB::table('forms')->where('memo',$form_id)->update(['track_status' => 5]);
        // $form = Form::where('memo', $billing_notes)->first();
        $form1 = Form::findOrFail($payment->form_id);
        $form1->track_status = 5;
        $form1->payment_id = $payment->id;
        $form1->save();

        $form_memo=$form1->memo;

        $paymentUpdate = Payment::find($payment->id);
        $paymentUpdate->form_memo = $form1->memo;
        $paymentUpdate->division_id = $form1->division_id;
        $paymentUpdate->sub_div = $form1->sub_div;
        $paymentUpdate->save();
        // $payment1 = DB::table('payments')->where('id', $payment->id)->update(['division_id'=> $form1->division_id]);
        $estimate1 = DB::table('estimates')->where('form_memo',$form1->memo)->update(['estimate_status'=>2]);
        // $estimate=Estimate::where('form_memo', $form_memo)->first();
        // $estimate->status=2;
        // $estimate->save();

        $grant = new Grant;
        $grant->form_memo = $form_memo;
        $grant->form_id = $form1->id;
        $grant->grant_status = 0;
        $grant->validity = 0;
        $grant->division_id = $form1->division_id;

       //new by LTP with help of Fanai
       $grant->sub_div = $form1->sub_div;
      $grant->granted_by = 1;
        $grant->save();

        $form1->grant_id = $grant->id;
        $form1->save();
// comment start

        ////SMS 6
        // try {

        //     $client = new Client();
        //     $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
        //       'form_params' => [
        //           'api_key' => env('SMS_API_KEY'),
        //           'number' => $form1->phone,
        //           'message' =>'Memo: '.$form1->memo.', We received your  payment Rs. '.$paymentUpdate->amount.' .DoICT',
        //           'template_id'=>'3214321',
        //           // 'number' => $phone_number,
        //           // 'message' => $mOTP . ' is your OTP from eTender, MSeGS',
        //       ]
        //   ]);

        //   } catch (\Exception $e) {

        //       return $e->getMessage();
        //   }

        //    //SMS to EE after successful payment

        //    try {

        //    $phoneNumbers = DB::table('users')->where('division_id', $form1->division_id)->where('role_id', 2)->where('disable_account_status', 0 )->pluck('phone')->implode(',');

        //    $client = new Client();
        //    $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
        //        'form_params' => [
        //            'api_key' => env('SMS_API_KEY'),
        //            'number' => $phoneNumbers,
        //            'message' =>'Memo: '.$form1->memo.', '.$form1->name.' completed payment. Login to portal for granting Roadcutting Permission .DoICT',
        //            'template_id'=>'1007431101812136669',

        //        ]
        //    ]);

        //    } catch (\Exception $e) {


        //    }
// comment end


    }

    else{

        $payment = new Payment;
        $payment->order_id = $order_id;
        $payment->tracking_id = $tracking_id;
        $payment->bank_ref_no = $bank_ref_no;
        $payment->order_status = $order_status;
        $payment->payment_mode = $payment_mode;
        $payment->card_name = $card_name;
        $payment->currency = $currency;
        $payment->amount = $amount;
        $payment->billing_name = $billing_name;
        $payment->discount_value = $discount_value;
        $payment->mer_amount = $mer_amount;
       $payment->trans_date = $formattedTransDate;
        $payment->form_id = $billing_notes;
        $payment->payment_status = 2;  //if payment_status ==2 then payment is not successful
        $payment->sub_div = 0;
        $payment->save();




        $form1 = Form::findOrFail($payment->form_id);
        $form1->track_status = 55;
        $form1->payment_id = $payment->id;
        $form1->save();
        $payment1 = DB::table('payments')->where('id',$payment->id)->update(['division_id'=>$form1->division_id]);
        $payment2 = DB::table('payments')->where('id',$payment->id)->update(['form_memo'=>$form1->memo]);
        $payment3 = DB::table('payments')->where('id',$payment->id)->update(['sub_div'=>$form1->sub_div]);


    }



    //  if (App::environment('local')) {
    //     return \Redirect::to('http://localhost:8000/paymentHandler/'.$form1->id);
    //  }


     return \Redirect::to('http://localhost:8000/paymentHandler/'.$payment->id);
    //return \Redirect::to('/paymentHandler/'.$payment->id);
//    return response()->json([
//        "rcvdString" => $rcvdString,
//    ], 201);
}



//lunglei div 2
public function responseHandlerLungleiRoadDiv2Hnahthial(Request $request)
{


    $workingKey='CD3FD4BE24DFFA51E95F2075C8F66534';		//Working Key should be provided here.
    $access_code='AVWI97HL35BF50IWFB';
    $encResponse = $request->encResp;			//This is the response sent by the CCAvenue Server
    $rcvdString=$this->decrypt($encResponse,$workingKey);		//Crypto Decryption used as per the specified working key.
    $order_status="";
    $decryptValues=explode('&', $rcvdString);
    $dataSize=sizeof($decryptValues);

    for($i = 0; $i < $dataSize; $i++)
    {
        $information=explode('=',$decryptValues[$i]);
        if($i==0)
        $order_id=$information[1];
        if($i==1)
        $tracking_id=$information[1];
        if($i==2)
        $bank_ref_no=$information[1];
        if($i==3)
        $order_status=$information[1];
        if($i==5)
        $payment_mode=$information[1];
        if($i==6)
        $card_name=$information[1];
        if($i==9)
        $currency=$information[1];
        if($i==10)
        $amount=$information[1];

        if($i==11)
        $billing_name=$information[1];



        if($i==34)
        $discount_value=$information[1];
        if($i==35)
        $mer_amount=$information[1];

        if($i==39)
        $billing_notes=$information[1];

        // dd($billing_notes);

        if($i==40)
        $trans_date=$information[1];


    }

// Convert the trans_date to Y-m-d H:i:s format
$dateTime = DateTime::createFromFormat('d/m/Y H:i:s', $trans_date);
$formattedTransDate = $dateTime ? $dateTime->format('Y-m-d H:i:s') : null;


    // if (App::environment('local')) {
    //     $tracker = new Tracker;
    //     $tracker->encrypted_data = 1;
    //     $tracker->encResponse = $encResponse;
    //     $tracker->rcvdString= $rcvdString;
    //     $tracker->decryptValues= $decryptValues;
    //     $tracker->save();
    // }

    //  dd($decryptValues);
    if($order_status == "Aborted")
    {
        $payment = new Payment;
        $payment->order_id = $order_id;
        $payment->tracking_id = $tracking_id;
        $payment->bank_ref_no = $bank_ref_no;
        $payment->order_status = $order_status;
        $payment->payment_mode = $payment_mode;
        $payment->card_name = $card_name;
        $payment->currency = $currency;
        $payment->amount = $amount;
        $payment->billing_name = $billing_name;
        $payment->discount_value = $discount_value;
        $payment->mer_amount = $mer_amount;
       $payment->trans_date = $formattedTransDate;
        $payment->form_id = $billing_notes;
        $payment->payment_status = 2;  //if payment_status ==2 then payment is not successful
        $payment->sub_div = 0;
        $payment->save();




        $form1 = Form::findOrFail($payment->form_id);
        $form1->track_status = 55;
        $form1->payment_id = $payment->id;
        $form1->save();
        $payment1 = DB::table('payments')->where('id',$payment->id)->update(['division_id'=>$form1->division_id]);
        $payment2 = DB::table('payments')->where('id',$payment->id)->update(['form_memo'=>$form1->memo]);
        $payment3 = DB::table('payments')->where('id',$payment->id)->update(['sub_div'=>$form1->sub_div]);

        // $form = Form::where('memo', $form_memo)->first();
        return \Redirect::to('http://localhost:8000/paymentPage/'.$form1->id);
        // original code
       //  return \Redirect::to('https://pwdroadcutting.mizoram.gov.in/paymentPage/'.$form1->id);
// original code end
    }

    if($order_status == "Success")
    {
        $payment = new Payment;
        $payment->order_id = $order_id;
        $payment->tracking_id = $tracking_id;
        $payment->bank_ref_no = $bank_ref_no;
        $payment->order_status = $order_status;
        $payment->payment_mode = $payment_mode;
        $payment->card_name = $card_name;
        $payment->currency = $currency;
        $payment->amount = $amount;
        $payment->billing_name = $billing_name;
        $payment->discount_value = $discount_value;
        $payment->mer_amount = $mer_amount;
       $payment->trans_date = $formattedTransDate;
        $payment->form_id = $billing_notes;
        $payment->payment_status = 1;  //if payment_status ==1 then payment is successful
        $payment->sub_div = 0;
        $payment->save();

        // $data = DB::table('buy_card_transactions')->where(array('transaction_id' => $key))->first();
        // $form = DB::table('forms')->where('memo',$form_id)->update(['track_status' => 5]);
        // $form = Form::where('memo', $billing_notes)->first();
        $form1 = Form::findOrFail($payment->form_id);
        $form1->track_status = 5;
        $form1->payment_id = $payment->id;
        $form1->save();

        $form_memo=$form1->memo;

        $paymentUpdate = Payment::find($payment->id);
        $paymentUpdate->form_memo = $form1->memo;
        $paymentUpdate->division_id = $form1->division_id;
        $paymentUpdate->sub_div = $form1->sub_div;
        $paymentUpdate->save();
        // $payment1 = DB::table('payments')->where('id', $payment->id)->update(['division_id'=> $form1->division_id]);
        $estimate1 = DB::table('estimates')->where('form_memo',$form1->memo)->update(['estimate_status'=>2]);
        // $estimate=Estimate::where('form_memo', $form_memo)->first();
        // $estimate->status=2;
        // $estimate->save();

        $grant = new Grant;
        $grant->form_memo = $form_memo;
        $grant->form_id = $form1->id;
        $grant->grant_status = 0;
        $grant->validity = 0;
        $grant->division_id = $form1->division_id;

       //new by LTP with help of Fanai
       $grant->sub_div = $form1->sub_div;
      $grant->granted_by = 1;
        $grant->save();

        $form1->grant_id = $grant->id;
        $form1->save();
// comment start

        ////SMS 6
        // try {

        //     $client = new Client();
        //     $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
        //       'form_params' => [
        //           'api_key' => env('SMS_API_KEY'),
        //           'number' => $form1->phone,
        //           'message' =>'Memo: '.$form1->memo.', We received your  payment Rs. '.$paymentUpdate->amount.' .DoICT',
        //           'template_id'=>'3214321',
        //           // 'number' => $phone_number,
        //           // 'message' => $mOTP . ' is your OTP from eTender, MSeGS',
        //       ]
        //   ]);

        //   } catch (\Exception $e) {

        //       return $e->getMessage();
        //   }

        //    //SMS to EE after successful payment

        //    try {

        //    $phoneNumbers = DB::table('users')->where('division_id', $form1->division_id)->where('role_id', 2)->where('disable_account_status', 0 )->pluck('phone')->implode(',');

        //    $client = new Client();
        //    $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
        //        'form_params' => [
        //            'api_key' => env('SMS_API_KEY'),
        //            'number' => $phoneNumbers,
        //            'message' =>'Memo: '.$form1->memo.', '.$form1->name.' completed payment. Login to portal for granting Roadcutting Permission .DoICT',
        //            'template_id'=>'1007431101812136669',

        //        ]
        //    ]);

        //    } catch (\Exception $e) {


        //    }
// comment end

    }

    else{

        $payment = new Payment;
        $payment->order_id = $order_id;
        $payment->tracking_id = $tracking_id;
        $payment->bank_ref_no = $bank_ref_no;
        $payment->order_status = $order_status;
        $payment->payment_mode = $payment_mode;
        $payment->card_name = $card_name;
        $payment->currency = $currency;
        $payment->amount = $amount;
        $payment->billing_name = $billing_name;
        $payment->discount_value = $discount_value;
        $payment->mer_amount = $mer_amount;
       $payment->trans_date = $formattedTransDate;
        $payment->form_id = $billing_notes;
        $payment->payment_status = 2;  //if payment_status ==2 then payment is not successful
        $payment->sub_div = 0;
        $payment->save();




        $form1 = Form::findOrFail($payment->form_id);
        $form1->track_status = 55;
        $form1->payment_id = $payment->id;
        $form1->save();
        $payment1 = DB::table('payments')->where('id',$payment->id)->update(['division_id'=>$form1->division_id]);
        $payment2 = DB::table('payments')->where('id',$payment->id)->update(['form_memo'=>$form1->memo]);
        $payment3 = DB::table('payments')->where('id',$payment->id)->update(['sub_div'=>$form1->sub_div]);


    }



    //  if (App::environment('local')) {
    //     return \Redirect::to('http://localhost:8000/paymentHandler/'.$form1->id);
    //  }


     return \Redirect::to('http://localhost:8000/paymentHandler/'.$payment->id);
    //return \Redirect::to('/paymentHandler/'.$payment->id);
//    return response()->json([
//        "rcvdString" => $rcvdString,
//    ], 201);
}

//hmuifang
public function responseHandlerHmuifang(Request $request)
{


    $workingKey='CD3FD4BE24DFFA51E95F2075C8F66534';		//Working Key should be provided here.
    $access_code='AVWI97HL35BF50IWFB';
    $encResponse = $request->encResp;			//This is the response sent by the CCAvenue Server
    $rcvdString=$this->decrypt($encResponse,$workingKey);		//Crypto Decryption used as per the specified working key.
    $order_status="";
    $decryptValues=explode('&', $rcvdString);
    $dataSize=sizeof($decryptValues);

    for($i = 0; $i < $dataSize; $i++)
    {
        $information=explode('=',$decryptValues[$i]);
        if($i==0)
        $order_id=$information[1];
        if($i==1)
        $tracking_id=$information[1];
        if($i==2)
        $bank_ref_no=$information[1];
        if($i==3)
        $order_status=$information[1];
        if($i==5)
        $payment_mode=$information[1];
        if($i==6)
        $card_name=$information[1];
        if($i==9)
        $currency=$information[1];
        if($i==10)
        $amount=$information[1];

        if($i==11)
        $billing_name=$information[1];



        if($i==34)
        $discount_value=$information[1];
        if($i==35)
        $mer_amount=$information[1];

        if($i==39)
        $billing_notes=$information[1];

        // dd($billing_notes);

        if($i==40)
        $trans_date=$information[1];


    }

// Convert the trans_date to Y-m-d H:i:s format
$dateTime = DateTime::createFromFormat('d/m/Y H:i:s', $trans_date);
$formattedTransDate = $dateTime ? $dateTime->format('Y-m-d H:i:s') : null;


    // if (App::environment('local')) {
    //     $tracker = new Tracker;
    //     $tracker->encrypted_data = 1;
    //     $tracker->encResponse = $encResponse;
    //     $tracker->rcvdString= $rcvdString;
    //     $tracker->decryptValues= $decryptValues;
    //     $tracker->save();
    // }

    //  dd($decryptValues);
    if($order_status == "Aborted")
    {
        $payment = new Payment;
        $payment->order_id = $order_id;
        $payment->tracking_id = $tracking_id;
        $payment->bank_ref_no = $bank_ref_no;
        $payment->order_status = $order_status;
        $payment->payment_mode = $payment_mode;
        $payment->card_name = $card_name;
        $payment->currency = $currency;
        $payment->amount = $amount;
        $payment->billing_name = $billing_name;
        $payment->discount_value = $discount_value;
        $payment->mer_amount = $mer_amount;
       $payment->trans_date = $formattedTransDate;
        $payment->form_id = $billing_notes;
        $payment->payment_status = 2;  //if payment_status ==2 then payment is not successful
        $payment->sub_div = 0;
        $payment->save();




        $form1 = Form::findOrFail($payment->form_id);
        $form1->track_status = 55;
        $form1->payment_id = $payment->id;
        $form1->save();
        $payment1 = DB::table('payments')->where('id',$payment->id)->update(['division_id'=>$form1->division_id]);
        $payment2 = DB::table('payments')->where('id',$payment->id)->update(['form_memo'=>$form1->memo]);
        $payment3 = DB::table('payments')->where('id',$payment->id)->update(['sub_div'=>$form1->sub_div]);

        // $form = Form::where('memo', $form_memo)->first();
        return \Redirect::to('http://localhost:8000/paymentPage/'.$form1->id);
        // original code
       //  return \Redirect::to('https://pwdroadcutting.mizoram.gov.in/paymentPage/'.$form1->id);
// original code end
    }

    if($order_status == "Success")
    {
        $payment = new Payment;
        $payment->order_id = $order_id;
        $payment->tracking_id = $tracking_id;
        $payment->bank_ref_no = $bank_ref_no;
        $payment->order_status = $order_status;
        $payment->payment_mode = $payment_mode;
        $payment->card_name = $card_name;
        $payment->currency = $currency;
        $payment->amount = $amount;
        $payment->billing_name = $billing_name;
        $payment->discount_value = $discount_value;
        $payment->mer_amount = $mer_amount;
       $payment->trans_date = $formattedTransDate;
        $payment->form_id = $billing_notes;
        $payment->payment_status = 1;  //if payment_status ==1 then payment is successful
        $payment->sub_div = 0;
        $payment->save();

        // $data = DB::table('buy_card_transactions')->where(array('transaction_id' => $key))->first();
        // $form = DB::table('forms')->where('memo',$form_id)->update(['track_status' => 5]);
        // $form = Form::where('memo', $billing_notes)->first();
        $form1 = Form::findOrFail($payment->form_id);
        $form1->track_status = 5;
        $form1->payment_id = $payment->id;
        $form1->save();

        $form_memo=$form1->memo;

        $paymentUpdate = Payment::find($payment->id);
        $paymentUpdate->form_memo = $form1->memo;
        $paymentUpdate->division_id = $form1->division_id;
        $paymentUpdate->sub_div = $form1->sub_div;
        $paymentUpdate->save();
        // $payment1 = DB::table('payments')->where('id', $payment->id)->update(['division_id'=> $form1->division_id]);
        $estimate1 = DB::table('estimates')->where('form_memo',$form1->memo)->update(['estimate_status'=>2]);
        // $estimate=Estimate::where('form_memo', $form_memo)->first();
        // $estimate->status=2;
        // $estimate->save();

        $grant = new Grant;
        $grant->form_memo = $form_memo;
        $grant->form_id = $form1->id;
        $grant->grant_status = 0;
        $grant->validity = 0;
        $grant->division_id = $form1->division_id;

       //new by LTP with help of Fanai
       $grant->sub_div = $form1->sub_div;
       $grant->granted_by = 1;/// TODO
        $grant->save();

        $form1->grant_id = $grant->id;
        $form1->save();
// comment start

        ////SMS 6
        // try {

        //     $client = new Client();
        //     $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
        //       'form_params' => [
        //           'api_key' => env('SMS_API_KEY'),
        //           'number' => $form1->phone,
        //           'message' =>'Memo: '.$form1->memo.', We received your  payment Rs. '.$paymentUpdate->amount.' .DoICT',
        //           'template_id'=>'3214321',
        //           // 'number' => $phone_number,
        //           // 'message' => $mOTP . ' is your OTP from eTender, MSeGS',
        //       ]
        //   ]);

        //   } catch (\Exception $e) {

        //       return $e->getMessage();
        //   }

        //    //SMS to EE after successful payment

        //    try {

        //    $phoneNumbers = DB::table('users')->where('division_id', $form1->division_id)->where('role_id', 2)->where('disable_account_status', 0 )->pluck('phone')->implode(',');

        //    $client = new Client();
        //    $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
        //        'form_params' => [
        //            'api_key' => env('SMS_API_KEY'),
        //            'number' => $phoneNumbers,
        //            'message' =>'Memo: '.$form1->memo.', '.$form1->name.' completed payment. Login to portal for granting Roadcutting Permission .DoICT',
        //            'template_id'=>'1007431101812136669',

        //        ]
        //    ]);

        //    } catch (\Exception $e) {


        //    }
// comment eend

    }

    else{

        $payment = new Payment;
        $payment->order_id = $order_id;
        $payment->tracking_id = $tracking_id;
        $payment->bank_ref_no = $bank_ref_no;
        $payment->order_status = $order_status;
        $payment->payment_mode = $payment_mode;
        $payment->card_name = $card_name;
        $payment->currency = $currency;
        $payment->amount = $amount;
        $payment->billing_name = $billing_name;
        $payment->discount_value = $discount_value;
        $payment->mer_amount = $mer_amount;
       $payment->trans_date = $formattedTransDate;
        $payment->form_id = $billing_notes;
        $payment->payment_status = 2;  //if payment_status ==2 then payment is not successful
        $payment->sub_div = 0;
        $payment->save();




        $form1 = Form::findOrFail($payment->form_id);
        $form1->track_status = 55;
        $form1->payment_id = $payment->id;
        $form1->save();
        $payment1 = DB::table('payments')->where('id',$payment->id)->update(['division_id'=>$form1->division_id]);
        $payment2 = DB::table('payments')->where('id',$payment->id)->update(['form_memo'=>$form1->memo]);
        $payment3 = DB::table('payments')->where('id',$payment->id)->update(['sub_div'=>$form1->sub_div]);


    }



    //  if (App::environment('local')) {
    //     return \Redirect::to('http://localhost:8000/paymentHandler/'.$form1->id);
    //  }


     return \Redirect::to('http://localhost:8000/paymentHandler/'.$payment->id);
    //return \Redirect::to('/paymentHandler/'.$payment->id);
//    return response()->json([
//        "rcvdString" => $rcvdString,
//    ], 201);
}


// nd 1
public function responseHandlerNationalHighwayDiv1(Request $request)
{


    $workingKey='CD3FD4BE24DFFA51E95F2075C8F66534';		//Working Key should be provided here.
    $access_code='AVWI97HL35BF50IWFB';
    $encResponse = $request->encResp;			//This is the response sent by the CCAvenue Server
    $rcvdString=$this->decrypt($encResponse,$workingKey);		//Crypto Decryption used as per the specified working key.
    $order_status="";
    $decryptValues=explode('&', $rcvdString);
    $dataSize=sizeof($decryptValues);

    for($i = 0; $i < $dataSize; $i++)
    {
        $information=explode('=',$decryptValues[$i]);
        if($i==0)
        $order_id=$information[1];
        if($i==1)
        $tracking_id=$information[1];
        if($i==2)
        $bank_ref_no=$information[1];
        if($i==3)
        $order_status=$information[1];
        if($i==5)
        $payment_mode=$information[1];
        if($i==6)
        $card_name=$information[1];
        if($i==9)
        $currency=$information[1];
        if($i==10)
        $amount=$information[1];

        if($i==11)
        $billing_name=$information[1];



        if($i==34)
        $discount_value=$information[1];
        if($i==35)
        $mer_amount=$information[1];

        if($i==39)
        $billing_notes=$information[1];

        // dd($billing_notes);

        if($i==40)
        $trans_date=$information[1];


    }

// Convert the trans_date to Y-m-d H:i:s format
$dateTime = DateTime::createFromFormat('d/m/Y H:i:s', $trans_date);
$formattedTransDate = $dateTime ? $dateTime->format('Y-m-d H:i:s') : null;


    // if (App::environment('local')) {
    //     $tracker = new Tracker;
    //     $tracker->encrypted_data = 1;
    //     $tracker->encResponse = $encResponse;
    //     $tracker->rcvdString= $rcvdString;
    //     $tracker->decryptValues= $decryptValues;
    //     $tracker->save();
    // }

    //  dd($decryptValues);
    if($order_status == "Aborted")
    {
        $payment = new Payment;
        $payment->order_id = $order_id;
        $payment->tracking_id = $tracking_id;
        $payment->bank_ref_no = $bank_ref_no;
        $payment->order_status = $order_status;
        $payment->payment_mode = $payment_mode;
        $payment->card_name = $card_name;
        $payment->currency = $currency;
        $payment->amount = $amount;
        $payment->billing_name = $billing_name;
        $payment->discount_value = $discount_value;
        $payment->mer_amount = $mer_amount;
       $payment->trans_date = $formattedTransDate;
        $payment->form_id = $billing_notes;
        $payment->payment_status = 2;  //if payment_status ==2 then payment is not successful
        $payment->sub_div = 0;
        $payment->save();




        $form1 = Form::findOrFail($payment->form_id);
        $form1->track_status = 55;
        $form1->payment_id = $payment->id;
        $form1->save();
        $payment1 = DB::table('payments')->where('id',$payment->id)->update(['division_id'=>$form1->division_id]);
        $payment2 = DB::table('payments')->where('id',$payment->id)->update(['form_memo'=>$form1->memo]);
        $payment3 = DB::table('payments')->where('id',$payment->id)->update(['sub_div'=>$form1->sub_div]);

        // $form = Form::where('memo', $form_memo)->first();
        return \Redirect::to('http://localhost:8000/paymentPage/'.$form1->id);
        // original code
       //  return \Redirect::to('https://pwdroadcutting.mizoram.gov.in/paymentPage/'.$form1->id);
// original code end
    }

    if($order_status == "Success")
    {
        $payment = new Payment;
        $payment->order_id = $order_id;
        $payment->tracking_id = $tracking_id;
        $payment->bank_ref_no = $bank_ref_no;
        $payment->order_status = $order_status;
        $payment->payment_mode = $payment_mode;
        $payment->card_name = $card_name;
        $payment->currency = $currency;
        $payment->amount = $amount;
        $payment->billing_name = $billing_name;
        $payment->discount_value = $discount_value;
        $payment->mer_amount = $mer_amount;
       $payment->trans_date = $formattedTransDate;
        $payment->form_id = $billing_notes;
        $payment->payment_status = 1;  //if payment_status ==1 then payment is successful
        $payment->sub_div = 0;
        $payment->save();

        // $data = DB::table('buy_card_transactions')->where(array('transaction_id' => $key))->first();
        // $form = DB::table('forms')->where('memo',$form_id)->update(['track_status' => 5]);
        // $form = Form::where('memo', $billing_notes)->first();
        $form1 = Form::findOrFail($payment->form_id);
        $form1->track_status = 5;
        $form1->payment_id = $payment->id;
        $form1->save();

        $form_memo=$form1->memo;

        $paymentUpdate = Payment::find($payment->id);
        $paymentUpdate->form_memo = $form1->memo;
        $paymentUpdate->division_id = $form1->division_id;
        $paymentUpdate->sub_div = $form1->sub_div;
        $paymentUpdate->save();
        // $payment1 = DB::table('payments')->where('id', $payment->id)->update(['division_id'=> $form1->division_id]);
        $estimate1 = DB::table('estimates')->where('form_memo',$form1->memo)->update(['estimate_status'=>2]);
        // $estimate=Estimate::where('form_memo', $form_memo)->first();
        // $estimate->status=2;
        // $estimate->save();

        $grant = new Grant;
        $grant->form_memo = $form_memo;
        $grant->form_id = $form1->id;
        $grant->grant_status = 0;
        $grant->validity = 0;
        $grant->division_id = $form1->division_id;

       //new by LTP with help of Fanai
       $grant->sub_div = $form1->sub_div;
      $grant->granted_by = 1;
        $grant->save();

        $form1->grant_id = $grant->id;
        $form1->save();

        // commenting for testing original code start
        //SMS 6
        // try {

        //     $client = new Client();
        //     $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
        //       'form_params' => [
        //           'api_key' => env('SMS_API_KEY'),
        //           'number' => $form1->phone,
        //           'message' =>'Memo: '.$form1->memo.', We received your  payment Rs. '.$paymentUpdate->amount.' .DoICT',
        //           'template_id'=>'3214321',
        //           // 'number' => $phone_number,
        //           // 'message' => $mOTP . ' is your OTP from eTender, MSeGS',
        //       ]
        //   ]);

        //   } catch (\Exception $e) {

        //       return $e->getMessage();
        //   }

        //    //SMS to EE after successful payment

        //    try {

        //    $phoneNumbers = DB::table('users')->where('division_id', $form1->division_id)->where('role_id', 2)->where('disable_account_status', 0 )->pluck('phone')->implode(',');

        //    $client = new Client();
        //    $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
        //        'form_params' => [
        //            'api_key' => env('SMS_API_KEY'),
        //            'number' => $phoneNumbers,
        //            'message' =>'Memo: '.$form1->memo.', '.$form1->name.' completed payment. Login to portal for granting Roadcutting Permission .DoICT',
        //            'template_id'=>'1007431101812136669',

        //        ]
        //    ]);

        //    } catch (\Exception $e) {


        //    }
// commenting for testing original code end

    }

    else{

        $payment = new Payment;
        $payment->order_id = $order_id;
        $payment->tracking_id = $tracking_id;
        $payment->bank_ref_no = $bank_ref_no;
        $payment->order_status = $order_status;
        $payment->payment_mode = $payment_mode;
        $payment->card_name = $card_name;
        $payment->currency = $currency;
        $payment->amount = $amount;
        $payment->billing_name = $billing_name;
        $payment->discount_value = $discount_value;
        $payment->mer_amount = $mer_amount;
       $payment->trans_date = $formattedTransDate;
        $payment->form_id = $billing_notes;
        $payment->payment_status = 2;  //if payment_status ==2 then payment is not successful
        $payment->sub_div = 0;
        $payment->save();




        $form1 = Form::findOrFail($payment->form_id);
        $form1->track_status = 55;
        $form1->payment_id = $payment->id;
        $form1->save();
        $payment1 = DB::table('payments')->where('id',$payment->id)->update(['division_id'=>$form1->division_id]);
        $payment2 = DB::table('payments')->where('id',$payment->id)->update(['form_memo'=>$form1->memo]);
        $payment3 = DB::table('payments')->where('id',$payment->id)->update(['sub_div'=>$form1->sub_div]);


    }



    //  if (App::environment('local')) {
    //     return \Redirect::to('http://localhost:8000/paymentHandler/'.$form1->id);
    //  }


     return \Redirect::to('http://localhost:8000/paymentHandler/'.$payment->id);
    //return \Redirect::to('/paymentHandler/'.$payment->id);
//    return response()->json([
//        "rcvdString" => $rcvdString,
//    ], 201);
}

//nd 3
public function responseHandlerNationalHighwayDiv3(Request $request)
{


    $workingKey='CD3FD4BE24DFFA51E95F2075C8F66534';		//Working Key should be provided here.
    $access_code='AVWI97HL35BF50IWFB';
    $encResponse = $request->encResp;			//This is the response sent by the CCAvenue Server
    $rcvdString=$this->decrypt($encResponse,$workingKey);		//Crypto Decryption used as per the specified working key.
    $order_status="";
    $decryptValues=explode('&', $rcvdString);
    $dataSize=sizeof($decryptValues);

    for($i = 0; $i < $dataSize; $i++)
    {
        $information=explode('=',$decryptValues[$i]);
        if($i==0)
        $order_id=$information[1];
        if($i==1)
        $tracking_id=$information[1];
        if($i==2)
        $bank_ref_no=$information[1];
        if($i==3)
        $order_status=$information[1];
        if($i==5)
        $payment_mode=$information[1];
        if($i==6)
        $card_name=$information[1];
        if($i==9)
        $currency=$information[1];
        if($i==10)
        $amount=$information[1];

        if($i==11)
        $billing_name=$information[1];



        if($i==34)
        $discount_value=$information[1];
        if($i==35)
        $mer_amount=$information[1];

        if($i==39)
        $billing_notes=$information[1];

        // dd($billing_notes);

        if($i==40)
        $trans_date=$information[1];


    }

// Convert the trans_date to Y-m-d H:i:s format
$dateTime = DateTime::createFromFormat('d/m/Y H:i:s', $trans_date);
$formattedTransDate = $dateTime ? $dateTime->format('Y-m-d H:i:s') : null;


    // if (App::environment('local')) {
    //     $tracker = new Tracker;
    //     $tracker->encrypted_data = 1;
    //     $tracker->encResponse = $encResponse;
    //     $tracker->rcvdString= $rcvdString;
    //     $tracker->decryptValues= $decryptValues;
    //     $tracker->save();
    // }

    //  dd($decryptValues);
    if($order_status == "Aborted")
    {
        $payment = new Payment;
        $payment->order_id = $order_id;
        $payment->tracking_id = $tracking_id;
        $payment->bank_ref_no = $bank_ref_no;
        $payment->order_status = $order_status;
        $payment->payment_mode = $payment_mode;
        $payment->card_name = $card_name;
        $payment->currency = $currency;
        $payment->amount = $amount;
        $payment->billing_name = $billing_name;
        $payment->discount_value = $discount_value;
        $payment->mer_amount = $mer_amount;
       $payment->trans_date = $formattedTransDate;
        $payment->form_id = $billing_notes;
        $payment->payment_status = 2;  //if payment_status ==2 then payment is not successful
        $payment->sub_div = 0;
        $payment->save();




        $form1 = Form::findOrFail($payment->form_id);
        $form1->track_status = 55;
        $form1->payment_id = $payment->id;
        $form1->save();
        $payment1 = DB::table('payments')->where('id',$payment->id)->update(['division_id'=>$form1->division_id]);
        $payment2 = DB::table('payments')->where('id',$payment->id)->update(['form_memo'=>$form1->memo]);
        $payment3 = DB::table('payments')->where('id',$payment->id)->update(['sub_div'=>$form1->sub_div]);

        // $form = Form::where('memo', $form_memo)->first();
        return \Redirect::to('http://localhost:8000/paymentPage/'.$form1->id);
        // original code
       //  return \Redirect::to('https://pwdroadcutting.mizoram.gov.in/paymentPage/'.$form1->id);
// original code end
    }

    if($order_status == "Success")
    {
        $payment = new Payment;
        $payment->order_id = $order_id;
        $payment->tracking_id = $tracking_id;
        $payment->bank_ref_no = $bank_ref_no;
        $payment->order_status = $order_status;
        $payment->payment_mode = $payment_mode;
        $payment->card_name = $card_name;
        $payment->currency = $currency;
        $payment->amount = $amount;
        $payment->billing_name = $billing_name;
        $payment->discount_value = $discount_value;
        $payment->mer_amount = $mer_amount;
       $payment->trans_date = $formattedTransDate;
        $payment->form_id = $billing_notes;
        $payment->payment_status = 1;  //if payment_status ==1 then payment is successful
        $payment->sub_div = 0;
        $payment->save();

        // $data = DB::table('buy_card_transactions')->where(array('transaction_id' => $key))->first();
        // $form = DB::table('forms')->where('memo',$form_id)->update(['track_status' => 5]);
        // $form = Form::where('memo', $billing_notes)->first();
        $form1 = Form::findOrFail($payment->form_id);
        $form1->track_status = 5;
        $form1->payment_id = $payment->id;
        $form1->save();

        $form_memo=$form1->memo;

        $paymentUpdate = Payment::find($payment->id);
        $paymentUpdate->form_memo = $form1->memo;
        $paymentUpdate->division_id = $form1->division_id;
        $paymentUpdate->sub_div = $form1->sub_div;
        $paymentUpdate->save();
        // $payment1 = DB::table('payments')->where('id', $payment->id)->update(['division_id'=> $form1->division_id]);
        $estimate1 = DB::table('estimates')->where('form_memo',$form1->memo)->update(['estimate_status'=>2]);
        // $estimate=Estimate::where('form_memo', $form_memo)->first();
        // $estimate->status=2;
        // $estimate->save();

        $grant = new Grant;
        $grant->form_memo = $form_memo;
        $grant->form_id = $form1->id;
        $grant->grant_status = 0;
        $grant->validity = 0;
        $grant->division_id = $form1->division_id;

       //new by LTP with help of Fanai
       $grant->sub_div = $form1->sub_div;
      $grant->granted_by = 1;
        $grant->save();

        $form1->grant_id = $grant->id;
        $form1->save();

        // commenting for testing original code start
        //SMS 6
        // try {

        //     $client = new Client();
        //     $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
        //       'form_params' => [
        //           'api_key' => env('SMS_API_KEY'),
        //           'number' => $form1->phone,
        //           'message' =>'Memo: '.$form1->memo.', We received your  payment Rs. '.$paymentUpdate->amount.' .DoICT',
        //           'template_id'=>'3214321',
        //           // 'number' => $phone_number,
        //           // 'message' => $mOTP . ' is your OTP from eTender, MSeGS',
        //       ]
        //   ]);

        //   } catch (\Exception $e) {

        //       return $e->getMessage();
        //   }

        //    //SMS to EE after successful payment

        //    try {

        //    $phoneNumbers = DB::table('users')->where('division_id', $form1->division_id)->where('role_id', 2)->where('disable_account_status', 0 )->pluck('phone')->implode(',');

        //    $client = new Client();
        //    $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
        //        'form_params' => [
        //            'api_key' => env('SMS_API_KEY'),
        //            'number' => $phoneNumbers,
        //            'message' =>'Memo: '.$form1->memo.', '.$form1->name.' completed payment. Login to portal for granting Roadcutting Permission .DoICT',
        //            'template_id'=>'1007431101812136669',

        //        ]
        //    ]);

        //    } catch (\Exception $e) {


        //    }
// commenting for testing original code end

    }

    else{

        $payment = new Payment;
        $payment->order_id = $order_id;
        $payment->tracking_id = $tracking_id;
        $payment->bank_ref_no = $bank_ref_no;
        $payment->order_status = $order_status;
        $payment->payment_mode = $payment_mode;
        $payment->card_name = $card_name;
        $payment->currency = $currency;
        $payment->amount = $amount;
        $payment->billing_name = $billing_name;
        $payment->discount_value = $discount_value;
        $payment->mer_amount = $mer_amount;
       $payment->trans_date = $formattedTransDate;
        $payment->form_id = $billing_notes;
        $payment->payment_status = 2;  //if payment_status ==2 then payment is not successful
        $payment->sub_div = 0;
        $payment->save();




        $form1 = Form::findOrFail($payment->form_id);
        $form1->track_status = 55;
        $form1->payment_id = $payment->id;
        $form1->save();
        $payment1 = DB::table('payments')->where('id',$payment->id)->update(['division_id'=>$form1->division_id]);
        $payment2 = DB::table('payments')->where('id',$payment->id)->update(['form_memo'=>$form1->memo]);
        $payment3 = DB::table('payments')->where('id',$payment->id)->update(['sub_div'=>$form1->sub_div]);


    }



    //  if (App::environment('local')) {
    //     return \Redirect::to('http://localhost:8000/paymentHandler/'.$form1->id);
    //  }


     return \Redirect::to('http://localhost:8000/paymentHandler/'.$payment->id);
    //return \Redirect::to('/paymentHandler/'.$payment->id);
//    return response()->json([
//        "rcvdString" => $rcvdString,
//    ], 201);
}






















// manual payment online
    public function manualOnlinePayment(Request $request)
    {
// dd($request);
         $payment = new Payment;
         $payment->bank_ref_no = $request->ref_no;
         $payment->payment_mode = $request->method;
         $payment->amount = $request->amount;
         $payment->trans_date = $request->date;
         $payment->form_id = $request->form_id;
         $payment->card_name = $request->bank_name;

         $payment->order_status = "Manual Online";

         $payment->order_id = $request->ref_no;
         $payment->tracking_id = $request->ref_no;




         $payment->currency = "Online";

         $payment->billing_name = "";
         $payment->discount_value = "";
         $payment->mer_amount = "";

         $payment->sub_div = 0;



         $payment->payment_status = 1;  //if payment_status ==1 then payment is successful
         $payment->save();

         // $data = DB::table('buy_card_transactions')->where(array('transaction_id' => $key))->first();
         // $form = DB::table('forms')->where('memo',$form_id)->update(['track_status' => 5]);
         // $form = Form::where('memo', $billing_notes)->first();
         $form1 = Form::findOrFail($payment->form_id);
         $form1->track_status = 5;
         $form1->payment_id = $payment->id;
         $form1->save();

         $form_memo=$form1->memo;

         $paymentUpdate = Payment::find($payment->id);
         $paymentUpdate->form_memo = $form1->memo;
         $paymentUpdate->division_id = $form1->division_id;
         $paymentUpdate->sub_div = $form1->sub_div;
         $paymentUpdate->save();
         // $payment1 = DB::table('payments')->where('id', $payment->id)->update(['division_id'=> $form1->division_id]);
         $estimate1 = DB::table('estimates')->where('form_memo',$form1->memo)->update(['estimate_status'=>2]);
         // $estimate=Estimate::where('form_memo', $form_memo)->first();
         // $estimate->status=2;
         // $estimate->save();

         $grant = new Grant;
         $grant->form_memo = $form_memo;
         $grant->form_id = $form1->id;
         $grant->grant_status = 0;
         $grant->validity = 0;
         $grant->division_id = $form1->division_id;

        //new by LTP with help of Fanai
        $grant->sub_div = $form1->sub_div;
       $grant->granted_by = 1;
        //
         $grant->save();

         $form1->grant_id = $grant->id;
         $form1->save();

//          //SMS 6
//          try {
// // UNCOMMENT IT WHEN YOU ARE GONNA LIVE
//              $client = new Client ();
//              $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
//                'form_params' => [
//                    'api_key' => env('SMS_API_KEY'),
//                    'number' => $form1->phone,
//                    'message' =>'Memo: '.$form1->memo.', We received your  payment Rs. '.$paymentUpdate->amount.' .DoICT',
//                    'template_id'=>'1007856011249564657',
//                    // 'number' => $phone_number,
//                    // 'message' => $mOTP . ' is your OTP from eTender, MSeGS',
//                ]
//            ]);
// // UNCOMMENT IT WHEN YOU ARE GONNA LIVE
//            } catch (\Exception $e) {

//                return $e->getMessage();
//            }

//            //SMS to EE after successful payment

//            try {
// // UNCOMMENT IT WHEN YOU ARE GONNA LIVE
//              $phoneNumbers = DB::table('users')->where('division_id', $form1->division_id)->where('role_id', 2)->where('disable_account_status', 0 )->pluck('phone')->implode(',');

//              $client = new Client();
//              $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
//                'form_params' => [
//                    'api_key' => env('SMS_API_KEY'),
//                    'number' => $phoneNumbers,
//                    'message' =>'Memo: '.$form1->memo.', '.$form1->name.' completed payment. Login to portal for granting Roadcutting Permission .DoICT',
//                    'template_id'=>'1007431101812136669',

//                ]
//            ]);
// // UNCOMMENT IT WHEN YOU ARE GONNA LIVE
//            } catch (\Exception $e) {

//             return $e->getMessage();
//            }

           return response()->json([
            "paymentUpdate" => $paymentUpdate
        ], 200);

    }
// Manual RTGS

public function manualOnlinePaymentRTGS(Request $request)
    {
// dd($request);
// return "hello";
         $payment = new Payment;

         $payment->form_id = $request->form_id;//
         $payment->amount = $request->total_amount;//

         $payment->bank_name = $request->bank_name;// needed to be made
         $payment->account_holder_name = $request->account_holder_name;// needed to be made
         $payment->bank_account_no = $request->bank_account_no;// needed to be made
         $payment->branch_name = $request->branch_name;// needed to be made
         $payment->ifsc_code = $request->ifsc_code;// needed to be made
         $payment->rtgs_neft_no = $request->rtgs_neft_no;// needed to be made
         $payment->trans_date = $request->cheque_date;//

         $payment->bank_ref_no = "";//
         $payment->payment_mode = $request->payment_mode;//
         $payment->card_name = "";

         $payment->order_status = "Cheque Manual Online";

         $payment->order_id = "PWD-".++\Carbon\Carbon::now()->timestamp;
         $payment->tracking_id = "RTNE-".\Carbon\Carbon::now()->timestamp;




         $payment->currency = "RTGS/NEFT";

         $payment->billing_name = "";
         $payment->discount_value = "";
         $payment->mer_amount = "";

         $payment->sub_div = 0;



         $payment->payment_status = 1;  //if payment_status ==1 then payment is successful
         $payment->save();

         // $data = DB::table('buy_card_transactions')->where(array('transaction_id' => $key))->first();
         // $form = DB::table('forms')->where('memo',$form_id)->update(['track_status' => 5]);
         // $form = Form::where('memo', $billing_notes)->first();
         $form1 = Form::findOrFail($payment->form_id);
         $form1->track_status = 5;
         $form1->payment_id = $payment->id;
         $form1->save();

         $form_memo=$form1->memo;

         $paymentUpdate = Payment::find($payment->id);
         $paymentUpdate->form_memo = $form1->memo;
         $paymentUpdate->division_id = $form1->division_id;
         $paymentUpdate->sub_div = $form1->sub_div;
         $paymentUpdate->save();
         // $payment1 = DB::table('payments')->where('id', $payment->id)->update(['division_id'=> $form1->division_id]);
         $estimate1 = DB::table('estimates')->where('form_memo',$form1->memo)->update(['estimate_status'=>2]);
         // $estimate=Estimate::where('form_memo', $form_memo)->first();
         // $estimate->status=2;
         // $estimate->save();

         $grant = new Grant;
         $grant->form_memo = $form_memo;
         $grant->form_id = $form1->id;
         $grant->grant_status = 0;
         $grant->validity = 0;
         $grant->division_id = $form1->division_id;

        //new by LTP with help of Fanai
        $grant->sub_div = $form1->sub_div;
       $grant->granted_by = 1;
        //
         $grant->save();

         $form1->grant_id = $grant->id;
         $form1->save();

//          //SMS 6
//          try {
// // UNCOMMENT IT WHEN YOU ARE GONNA LIVE
//              $client = new Client ();
//              $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
//                'form_params' => [
//                    'api_key' => env('SMS_API_KEY'),
//                    'number' => $form1->phone,
//                    'message' =>'Memo: '.$form1->memo.', We received your  payment Rs. '.$paymentUpdate->amount.' .DoICT',
//                    'template_id'=>'1007856011249564657',
//                    // 'number' => $phone_number,
//                    // 'message' => $mOTP . ' is your OTP from eTender, MSeGS',
//                ]
//            ]);
// // UNCOMMENT IT WHEN YOU ARE GONNA LIVE
//            } catch (\Exception $e) {

//                return $e->getMessage();
//            }

//            //SMS to EE after successful payment

//            try {
// // UNCOMMENT IT WHEN YOU ARE GONNA LIVE
//              $phoneNumbers = DB::table('users')->where('division_id', $form1->division_id)->where('role_id', 2)->where('disable_account_status', 0 )->pluck('phone')->implode(',');

//              $client = new Client();
//              $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
//                'form_params' => [
//                    'api_key' => env('SMS_API_KEY'),
//                    'number' => $phoneNumbers,
//                    'message' =>'Memo: '.$form1->memo.', '.$form1->name.' completed payment. Login to portal for granting Roadcutting Permission .DoICT',
//                    'template_id'=>'1007431101812136669',

//                ]
//            ]);
// // UNCOMMENT IT WHEN YOU ARE GONNA LIVE
//            } catch (\Exception $e) {

//             return $e->getMessage();
//            }

           return response()->json([
            "paymentUpdate" => $paymentUpdate
        ], 200);

    }
// Manual RTGS end



// Cash MManual online
public function manualOnlinePaymentCash(Request $request)
    {
// dd($request);

         $payment = new Payment;

         $payment->form_id = $request->form_id;// 1
         $payment->amount = $request->total_amount;// 1
         $payment->amount_receiver_name = $request->amount_receiver_name;// needed to be made 1
         $payment->amount_receiver_phone = $request->amount_receiver_phone;// needed to be made
         $payment->payer_name = $request->payer_name;// needed to be made
         $payment->payer_phone = $request->payer_phone;// needed to be made

         $payment->identification_type = $request->identification_type;// needed to be made
         $payment->identification_no = $request->identification_no;// needed to be made identification_no
         $payment->trans_date = $request->cash_pay_date;//
         $payment->road_location = $request->road_location;//
         $payment->house_no = $request->house_no;//


         $payment->bank_ref_no = "";//
         $payment->payment_mode = "Cash Payment";//
         $payment->card_name = "";

         $payment->order_status = "Cash Manual Online";

        //  $payment->order_id = "ORDER-CASH-".Str::random(5).rand(1000, 9999).Str::random(3);
         $payment->order_id = "PWD-".++\Carbon\Carbon::now()->timestamp;
         $payment->tracking_id = "CASH-".\Carbon\Carbon::now()->timestamp;




         $payment->currency = "Cash INR";

         $payment->billing_name = "";
         $payment->discount_value = "";
         $payment->mer_amount = "";

         $payment->sub_div = 0;



         $payment->payment_status = 1;  //if payment_status ==1 then payment is successful
         $payment->save();

         // $data = DB::table('buy_card_transactions')->where(array('transaction_id' => $key))->first();
         // $form = DB::table('forms')->where('memo',$form_id)->update(['track_status' => 5]);
         // $form = Form::where('memo', $billing_notes)->first();
         $form1 = Form::findOrFail($payment->form_id);
         $form1->track_status = 5;
         $form1->payment_id = $payment->id;
         $form1->save();

         $form_memo=$form1->memo;

         $paymentUpdate = Payment::find($payment->id);
         $paymentUpdate->form_memo = $form1->memo;
         $paymentUpdate->division_id = $form1->division_id;
         $paymentUpdate->sub_div = $form1->sub_div;
         $paymentUpdate->save();
         // $payment1 = DB::table('payments')->where('id', $payment->id)->update(['division_id'=> $form1->division_id]);
         $estimate1 = DB::table('estimates')->where('form_memo',$form1->memo)->update(['estimate_status'=>2]);
         // $estimate=Estimate::where('form_memo', $form_memo)->first();
         // $estimate->status=2;
         // $estimate->save();

         $grant = new Grant;
         $grant->form_memo = $form_memo;
         $grant->form_id = $form1->id;
         $grant->grant_status = 0;
         $grant->validity = 0;
         $grant->division_id = $form1->division_id;

        //new by LTP with help of Fanai
        $grant->sub_div = $form1->sub_div;
       $grant->granted_by = 1;
        //
         $grant->save();

         $form1->grant_id = $grant->id;
         $form1->save();

//          //SMS 6
//          try {
// // UNCOMMENT IT WHEN YOU ARE GONNA LIVE
//              $client = new Client ();
//              $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
//                'form_params' => [
//                    'api_key' => env('SMS_API_KEY'),
//                    'number' => $form1->phone,
//                    'message' =>'Memo: '.$form1->memo.', We received your  payment Rs. '.$paymentUpdate->amount.' .DoICT',
//                    'template_id'=>'1007856011249564657',
//                    // 'number' => $phone_number,
//                    // 'message' => $mOTP . ' is your OTP from eTender, MSeGS',
//                ]
//            ]);
// // UNCOMMENT IT WHEN YOU ARE GONNA LIVE
//            } catch (\Exception $e) {

//                return $e->getMessage();
//            }

//            //SMS to EE after successful payment

//            try {
// // UNCOMMENT IT WHEN YOU ARE GONNA LIVE
//              $phoneNumbers = DB::table('users')->where('division_id', $form1->division_id)->where('role_id', 2)->where('disable_account_status', 0 )->pluck('phone')->implode(',');

//              $client = new Client();
//              $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
//                'form_params' => [
//                    'api_key' => env('SMS_API_KEY'),
//                    'number' => $phoneNumbers,
//                    'message' =>'Memo: '.$form1->memo.', '.$form1->name.' completed payment. Login to portal for granting Roadcutting Permission .DoICT',
//                    'template_id'=>'1007431101812136669',

//                ]
//            ]);
// // UNCOMMENT IT WHEN YOU ARE GONNA LIVE
//            } catch (\Exception $e) {

//             return $e->getMessage();
//            }

           return response()->json([
            "paymentUpdate" => $paymentUpdate
        ], 200);

    }
// Cash Manual Online end




    public function encryptTrackingId(Request $request)
    {

        //How to call this api
        // pwdroadcutting.mizoram.gov.in/api/auth/encryptTrackingId?tracking_id=Enter tracking_id here

        $workingKey='130CB2942C6C0D0101E770B9BBEA4235';		//Working Key should be provided here.
        $access_code='AVIJ96HJ19BU63JIUB';

        $merchant_json_data =
        array(

                'reference_no' => $request->tracking_id
            );

        $merchant_data = json_encode($merchant_json_data);
        $encrypted_data = $this->encrypt($merchant_data, $workingKey);

        dd($encrypted_data);

    }




    public function decrytResponse(Request $request)
    {
        //How to call this api
        // pwdroadcutting.mizoram.gov.in/api/auth/decrytResponse?enc_response=Enter tracking_id here

        $workingKey='130CB2942C6C0D0101E770B9BBEA4235';		//Working Key should be provided here.
        $access_code='AVIJ96HJ19BU63JIUB';
        $decodetur=$request->enc_response;
        $dec=$this->decrypt($decodetur,$workingKey);
        dd($dec);
    }

    public function apiTest(Request $request)
    {
        $workingKey='130CB2942C6C0D0101E770B9BBEA4235';		//Working Key should be provided here.
        $access_code='AVIJ96HJ19BU63JIUB';

        $merchant_json_data =
        array(

                'reference_no' => $request->tracking_id
            );

        $merchant_data = json_encode($merchant_json_data);
        $encrypted_data = $this->encrypt($merchant_data, $workingKey);

        $client = new \GuzzleHttp\Client();
        $body[] = $encrypted_data;
        $url = "https://logintest.ccavenue.com/apis/servlet/DoWebTrans?access_code=AVIJ96HJ19BU63JIUB&command=orderStatusTracker&request_type=JSON&response_type=JSON&version=1.2&enc_request=";
        $url= $url.$encrypted_data;
        // $response = $client->request("POST", $url, ['form_params'=>$body]);
        $response = $client->request("POST", $url);

        dd($response->getBody()->read(10000));

        // $decodetur=$response;
        // $dec=$this->decrypt($decodetur,$workingKey);
        // dd($dec);



    }


    public function apiTestFull(Request $request)
    {
        $workingKey='130CB2942C6C0D0101E770B9BBEA4235';		//Working Key should be provided here.
        $access_code='AVIJ96HJ19BU63JIUB';


        $merchant_json_data =
        array(

                'reference_no' => $request->tracking_id
            );

        $merchant_data = json_encode($merchant_json_data);
        $encrypted_data = $this->encrypt($merchant_data, $workingKey);

        $client = new \GuzzleHttp\Client();
        $body[] = $encrypted_data;
        $url = "https://logintest.ccavenue.com/apis/servlet/DoWebTrans?access_code=AVIJ96HJ19BU63JIUB&command=orderStatusTracker&request_type=JSON&response_type=JSON&version=1.2&enc_request=";
        $url= $url.$encrypted_data;
        // $response = $client->request("POST", $url, ['form_params'=>$body]);
        $response = $client->request("POST", $url);

        // dd($response->getBody()->read(10000));

        $decodetur=$response->getBody()->read(10000);
        $dec=$this->decrypt($decodetur,$workingKey);
        dd($dec);



    }

    public function apiResponse(Request $request)
    {

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Payment  $payment
     * @return \Illuminate\Http\Response
     */
    public function show(Payment $payment)
    {
        //
    }

    public function showPaymentHandler($id)
    {
        //$estimate = Estimate::findOrFail($id);
        $payment = Payment::findOrFail($id);

        $form = Form::findOrFail($payment->form_id);

        $estimate = Estimate::findOrFail($form->estimate_id);

        return response()->json([
            "payment"=>$payment,
            "form"=>$form,
            "estimate"=>$estimate,
        ],200);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Payment  $payment
     * @return \Illuminate\Http\Response
     */
    public function edit(Payment $payment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Payment  $payment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Payment $payment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Payment  $payment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Payment $payment)
    {
        //
    }




    // CRYPTO
    public function encrypt($plainText,$key)
	{
		$key = $this->hextobin(md5($key));
		$initVector = pack("C*", 0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f);
		$openMode = openssl_encrypt($plainText, 'AES-128-CBC', $key, OPENSSL_RAW_DATA, $initVector);
		$encryptedText = bin2hex($openMode);
		return $encryptedText;
	}

	public function decrypt($encryptedText,$key)
	{
		$key = $this->hextobin(md5($key));
		$initVector = pack("C*", 0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f);
		$encryptedText = $this->hextobin($encryptedText);
		$decryptedText = openssl_decrypt($encryptedText, 'AES-128-CBC', $key, OPENSSL_RAW_DATA, $initVector);
		return $decryptedText;
	}
	//*********** Padding Function *********************

	 public function pkcs5_pad ($plainText, $blockSize)
	{
	    $pad = $blockSize - (strlen($plainText) % $blockSize);
	    return $plainText . str_repeat(chr($pad), $pad);
	}

	//********** Hexadecimal to Binary function for php 4.0 version ********

	public function hextobin($hexString)
   	 {
        $length = strlen($hexString);
        $binString="";
        $count=0;
        while($count<$length)
        {
            $subString =substr($hexString,$count,2);
            $packedString = pack("H*",$subString);
            if ($count==0)
        {
            $binString=$packedString;
        }

        else
        {
            $binString.=$packedString;
        }

        $count+=2;
        }
        return $binString;
    }

}
