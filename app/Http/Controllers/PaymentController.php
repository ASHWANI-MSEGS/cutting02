<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Payment;
use Razorpay\Api\Api;
use App\Form;
use App\Grant;
use App\Estimate;


class PaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        

        $payments = DB::table('payments')->where('payment_status',"Success")->paginate();

        return response()->json(["payments"=>$payments],200);
    }

    public function unindex()
    {
        

        $payments = DB::table('payments')->where('payment_status','0')->paginate();

        return response()->json(["payments"=>$payments],200);
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

    public function api(Request $request)
    {
        $users = DB::table('users');
        return response()->json([

            "id" => 1,
        ],201);
    }

    public function save(Request $request)

    {


        $api = new Api('rzp_test_ZZBegX2dkTiAYZ', 'oSHrR0zYySd1xQAtbRC6Havn');
        $payment = $api->payment->fetch($request->payment_id);
        $captured = $payment->capture(array('amount' => $request->amount));
        if($captured->captured == "true"){   
            
            $payment = new Payment;
            $payment->order_id = $request->order_id;
            $payment->payment_ref_id = $request->payment_id;
            $payment->amount = ($request->amount)/100;
            $payment->division_id = $request->division_id;
            $payment->form_id = $request->form_id;
            $payment->form_memo = $request->form_memo;
            $payment->payment_status = 1;  //if payment_status ==1 then payment is successful
            $payment->save();

        //Update track_status in Form Table (if track_status=0 that means payment is not successful)

            $form=Form::find($request->form_id);
            $form->track_status = 5;
            $form->save();

             
            $estimate1 = DB::table('estimates')->where('form_id',$request->form_id)->first();
            $estimate=Estimate::find($estimate1->id);
            $estimate->status=2;
            $estimate->save();

            $grant = new Grant;
            $grant->form_memo = $request->form_memo;
            $grant->form_id = $request->form_id;
            $grant->grant_status = 0;
            $grant->division_id = $form->division_id;
            $grant->save();

            // $order = Order::where('order_number',$request->order_id)->first();
            // $order->status = "Pending";
            // $order->save();
            return response()->json(['payment'=>$payment, 'success'=>'Payment Success', "grant"=>$grant]);
        }else{
            // $order = Order::where('order_number',$request->order_id)->first();
            // $order->status = "Cancelled";
            // $order->save();
            $payment = new Payment;
            $payment->order_id = $request->order_id;
            $payment->payment_ref_id = $request->payment_id;
            $payment->amount = ($request->amount)/100;
            $payment->division_id =$request->division_id;
            $payment->form_id = $request->form_id;
            $payment->form_memo = $request->form_memo;
            $payment->payment_status = 0;       //if payment_status == 0 then, payment is not successful
            $payment->save();

        //Update track_status in Form Table (if track_status=0 that means payment is not successful)

            $form=Form::find($request->form_id);
            $form->track_status = 6;
            $form->save();


            return response()->json("Not Captured");
        }


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
        //$estimate = Estimate::findOrFail($id);
        $payment = Payment::findOrFail($id);

        $form = Form::findOrFail($payment->form_id);

        $estimate = Estimate::findOrFail($form->estimate_id);

        return response()->json([
            "payment"=>$payment,
            "form" =>$form,
            "estimate" =>$estimate
        ],200);
        
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
    public function update(Request $request, $id)
    {
        //
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
