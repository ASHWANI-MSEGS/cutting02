<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Form;

use App\Track;

use App\Estimate;

use App\Payment;

use App\Localcouncil;

use App\Engineer;

use App\Refund;

use Illuminate\Support\Facades\DB;



class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function App($id)
    {
            //Forms

        if($id == 1)
        {

                $formUnverified = DB::table('forms')->where('status','0')->where('division_id','1')->count();
                if($formUnverified > 9)
                {
                    $formUnverified ="9+";
                }

                $estimateUnapprove = DB::table('estimates')->where('estimate_status', '0')->where('division_id', '1')->count();
                if($estimateUnapprove > 9)
                {
                    $estimateUnapprove = "9+";
                }


                $unestimate = DB::table('forms')->where('track_status', '2')->where('division_id', '1')->count();
                if($unestimate > 9)
                {
                    $unestimate ="9+";
                }

                $ungranted = DB::table('grants')->where('grant_status', '0')->where('division_id', '1')->count();
                if($ungranted > 9)
                {
                    $ungranted ="9+";
                }


                $reportComplete = DB::table('reports')->where('division_id', '1')->where('report_status','2')->count();
                if($reportComplete > 9)
                {
                    $reportComplete ="9+";
                }

                $tobeRefunded = DB::table('refunds')->where('division_id', '1')->where('refund_status','1')->count();
                if($tobeRefunded > 9)
                {
                    $tobeRefunded ="9+";
                }




            return response()->json([

                "formUnverified" => $formUnverified,
                "estimateUnapprove" => $estimateUnapprove,

                "unestimate" => $unestimate,
                "ungranted" => $ungranted,
                "reportComplete" => $reportComplete,
                "tobeRefunded" => $tobeRefunded,



            ], 200);



        }

        else if($id == 2)
            {
                $formUnverified = DB::table('forms')->where('status','0')->where('division_id', '2')->count();
                if($formUnverified > 9)
                {
                    $formUnverified ="9+";
                }

                $estimateUnapprove = DB::table('estimates')->where('estimate_status', '0')->where('division_id', '2')->count();
                if($estimateUnapprove > 9)
                {
                    $estimateUnapprove = "9+";
                }


                $unestimate = DB::table('forms')->where('track_status', '2')->where('division_id', '2')->count();
                if($unestimate > 9)
                {
                    $unestimate ="9+";
                }

                $ungranted = DB::table('grants')->where('grant_status', '0')->where('division_id', '2')->count();
                if($ungranted > 9)
                {
                    $ungranted ="9+";
                }


                $reportComplete = DB::table('reports')->where('division_id', '2')->where('report_status','2')->count();
                if($reportComplete > 9)
                {
                    $reportComplete ="9+";
                }

                $tobeRefunded = DB::table('refunds')->where('division_id', '2')->where('refund_status','1')->count();
                if($tobeRefunded > 9)
                {
                    $tobeRefunded ="9+";
                }








            return response()->json([



                "formUnverified" => $formUnverified,
                "estimateUnapprove" => $estimateUnapprove,

                "unestimate" => $unestimate,
                "ungranted" => $ungranted,
                "reportComplete" => $reportComplete,
                "tobeRefunded" => $tobeRefunded,


            ], 200);

        }



    }



    public function index($id)
    {

try {
    //Forms
    $formCountUn = DB::table('forms')->where('status','0')->where('division_id',$id)->count();// not being used
    $formCountAp = DB::table('forms')->where('status','1')->where('division_id',$id)->count();// not being used

   $formSubmitTotal=null;
   $formRejectedTotal=null;
   $estimateCountUn=null;
   $estimateCount=null;
   $estimateAmount=null;
   $estimateDeposit=null;
   $estimateTotal=null;

if($id==3){
  //Form Submitted Percentage
  $formSubmitTotal = DB::table('forms')->count();
  $formRejectedTotal = DB::table('forms')->where('status', '10')->count();


  //Estimate
  $estimateCountUn = DB::table('estimates')->where('estimate_status','0')->count();
  $estimateCount = DB::table('estimates')->where('estimate_status','1')->count();


  $estimateAmount = number_format(DB::table('estimates')->where('estimate_status','2')->sum('amount'),2);
  $estimateDeposit = number_format(DB::table('estimates')->where('estimate_status','2')->sum('deposit'),2);
  $estimateTotal= number_format(DB::table('estimates')->where('estimate_status','2')->sum('total'),2);

}else{
      //Form Submitted Percentage
      $formSubmitTotal = DB::table('forms')->where('division_id', $id)->count();
      $formRejectedTotal = DB::table('forms')->where('division_id', $id)->where('status', '10')->count();


      //Estimate
      $estimateCountUn = DB::table('estimates')->where('estimate_status','0')->where('division_id',$id)->count();
      $estimateCount = DB::table('estimates')->where('estimate_status','1')->where('division_id',$id)->count();


      $estimateAmount = number_format(DB::table('estimates')->where('division_id',$id)->where('estimate_status','2')->sum('amount'),2);
      $estimateDeposit = number_format(DB::table('estimates')->where('division_id',$id)->where('estimate_status','2')->sum('deposit'),2);
      $estimateTotal= number_format(DB::table('estimates')->where('division_id',$id)->where('estimate_status','2')->sum('total'),2);

}




    $paymentReceived=null;
    //Payment
    if($id==3){
    $paymentReceived = number_format(DB::table('payments')->whereIn('order_status', ['Success', 'Manual Online','Cheque Manual Online','Cash Manual Online'])->sum('amount'),2); // need to add  manual and cheque and  cash
// info($paymentReceived."payemtn");
    }else{
    // $paymentReceived = number_format(DB::table('payments')->where('division_id',$id)->where('order_status','Success')->where('order_status','Cheque Manual Online')->sum('amount'),2); //original code
    $paymentReceived = number_format(DB::table('payments')->where('division_id',$id)->whereIn('order_status', ['Success', 'Manual Online','Cheque Manual Online','Cash Manual Online'])->sum('amount'),2); // need to add  manual and cheque and  cash
}


    //Localcouncil
    $localcouncilSouthno = DB::table('localcouncils')->where('division_id',1)->count();
    $localcouncilNorthno = DB::table('localcouncils')->where('division_id',2)->count();
    $localcouncilNo = null;

    if($id==4){
        $localcouncilNo = DB::table('champhai_local_councils')->where('division_id',$id)->count();
    }
    if($id==5){
        $localcouncilNo = DB::table('lunglei_local_councils')->where('division_id',$id)->count();
    }
    if($id==6){
        $localcouncilNo = DB::table('saitual_local_councils')->where('division_id',$id)->count();
    }
    if($id==7){
        $localcouncilNo = DB::table('mamit_local_councils')->where('division_id',$id)->count();
    }
    if($id==8){
        $localcouncilNo = DB::table('siaha_local_councils')->where('division_id',$id)->count();
    }
    if($id==9){
        $localcouncilNo = DB::table('khawzawl_local_councils')->where('division_id',$id)->count();
    }
    if($id==10){
        $localcouncilNo = DB::table('kolasib_local_councils')->where('division_id',$id)->count();
    }
    if($id==11){
        $localcouncilNo = DB::table('lawngtlai_local_councils')->where('division_id',$id)->count();
    }
    if($id==12){
        $localcouncilNo = DB::table('serchhip_local_councils')->where('division_id',$id)->count();
    }
    if($id==13){
        $localcouncilNo = DB::table('lunglei_road_div2_hnahthials')->where('division_id',$id)->count();
    }
    if($id==14){
        $localcouncilNo = DB::table('hmuifang_divisions')->where('division_id',$id)->count();
    }
    if($id==15){
        $localcouncilNo = DB::table('national_highway_div_ones')->where('division_id',$id)->count();
    }
    if($id==16){
        $localcouncilNo = DB::table('national_highway_div_threes')->where('division_id',$id)->count();
    }

    // $localcouncilNorthno = DB::table('localcouncils')->where('division_id',$id)->count();


    //Engineer
    $engineerSouthno = DB::table('engineers')->where('division_id',1)->count();
    $engineerNorthno = DB::table('engineers')->where('division_id',2)->count();
    $engineerNo=null;
    if($id==3){
    $engineerNo = DB::table('engineers')->count();

    }else{

        $engineerNo = DB::table('engineers')->where('division_id',$id)->count();
    }
    // $engineerNorthno = DB::table('engineers')->where('division_id',$id)->count();


    //Deposit

   $depositRefunded=null;
   $depositTobeRefunded=null;
   $depositFine=null;
   $depositReturnedNo=null;
   $depositTobeReturNo=null;
if($id==3){
    $depositRefunded = number_format(DB::table('refunds')->where('refund_status','2')->sum('deposit'),2);
    $depositTobeRefunded = number_format(DB::table('refunds')->where('refund_status','1')->sum('deposit'),2);
    $depositFine = number_format(DB::table('refunds')->where('refund_status','3')->sum('deposit'),2);

    $depositReturnedNo = DB::table('refunds')->where('refund_status','2')->count();
    $depositTobeReturNo = DB::table('refunds')->where('refund_status','1')->count();

}
else{

    $depositRefunded = number_format(DB::table('refunds')->where('division_id',$id)->where('refund_status','2')->sum('deposit'),2);
    $depositTobeRefunded = number_format(DB::table('refunds')->where('division_id',$id)->where('refund_status','1')->sum('deposit'),2);
    $depositFine = number_format(DB::table('refunds')->where('division_id',$id)->where('refund_status','3')->sum('deposit'),2);

    $depositReturnedNo = DB::table('refunds')->where('division_id',$id)->where('refund_status','2')->count();
    $depositTobeReturNo = DB::table('refunds')->where('division_id',$id)->where('refund_status','1')->count();
}






return response()->json([




    "formCountUn" => $formCountUn,

    "formCountAp" => $formCountAp,

    "formSubmitTotal" => $formSubmitTotal,

    "formRejectedTotal" => $formRejectedTotal,

    "estimateCountUn" => $estimateCountUn,

    "estimateCount" => $estimateCount,

    "estimateAmount" => $estimateAmount,

    "estimateDeposit" => $estimateDeposit,

    "estimateTotal" => $estimateTotal,

    "paymentReceived" => $paymentReceived,

    "localcouncilSouthno" => $localcouncilSouthno,

    "localcouncilNorthno" => $localcouncilNorthno,
    "localcouncilNo" => $localcouncilNo,


    // "engineerSouthno" => $id == 2 ? $engineerSouthno : '',
    "engineerSouthno" => $engineerSouthno,

    "engineerNorthno" => $engineerNorthno,
    "engineerNo" => $engineerNo,



    "depositRefunded" => $depositRefunded,

    "depositTobeRefunded" => $depositTobeRefunded,

    "depositFine" => $depositFine,

    "depositReturnedNo" => $depositReturnedNo,

    "depositTobeReturNo" => $depositTobeReturNo,

], 200);


} catch (\Throwable $th) {
    //throw $th;
    info($th);
}



    }

    public function amountDetailsIndex($division_id, $selectedYear)
    {
        // $returnedSelectedYear =null;
        // return  now()->year."this is the year";
        $currentYear = date('Y');

        $currentMonth = date('m');


        $payment = Payment::all();
        $refund = Refund::all();

        $payments_total = [];
        $payments_count = [];
        $deposit_returned_total = [];
        $deposit_returned_count = [];
        $deposit_fine_total = [];
        $deposit_fine_count = [];
        $estimateAmount = [];
        $withoutSD=[];

        if($division_id==3){
              for($i = 1; $i<=12; $i++){

            $payments_total[$i] = Payment::whereYear('created_at', $selectedYear)
                ->whereMonth('trans_date', $i)
            ->whereIn('order_status', ['Success', 'Manual Online','Cheque Manual Online','Cash Manual Online'])
                ->sum(('amount'), 2);

                $withoutSD[$i]=  (($payments_total[$i]/11)*10)*.2;

            $payments_count[$i] = Payment::whereYear('created_at', $selectedYear)
                ->whereMonth('trans_date', $i)
                ->whereIn('order_status', ['Success', 'Manual Online','Cheque Manual Online','Cash Manual Online'])
                ->count();

            $deposit_returned_total[$i] = number_format(Refund::whereYear('updated_at', $selectedYear)
                ->whereMonth('updated_at', $i)
                ->where('refund_status', '2')
                ->sum('deposit'), 2);

            $deposit_returned_count[$i] = Refund::whereYear('updated_at', $selectedYear)
                ->whereMonth('updated_at', $i)
                ->where('refund_status', 2)
                ->count();

            $deposit_fine_total[$i] = number_format(Refund::whereYear('updated_at', $selectedYear)
                ->whereMonth('updated_at', $i)
                ->where('refund_status', 3)
                ->sum('deposit'), 2);

            $deposit_fine_count[$i] = Refund::whereYear('updated_at', $selectedYear)
                ->whereMonth('updated_at', $i)
                ->where('refund_status', 3)
                ->count();
        }
    }
    else{
        for($i = 1; $i<=12; $i++){


            $payments_total[$i] = Payment::whereYear('created_at', $selectedYear)
                ->whereMonth('trans_date', $i)
                 ->where('division_id', $division_id)
            ->whereIn('order_status', ['Success', 'Manual Online','Cheque Manual Online','Cash Manual Online'])
                ->sum(('amount'), 2);

$withoutSD[$i]=  (($payments_total[$i]/11)*10)*.2;

            $payments_count[$i] = Payment::whereYear('created_at', $selectedYear)
                ->whereMonth('trans_date', $i)
                 ->where('division_id', $division_id)
                ->whereIn('order_status', ['Success', 'Manual Online','Cheque Manual Online','Cash Manual Online'])
                ->count();

            $deposit_returned_total[$i] = number_format(Refund::whereYear('updated_at', $selectedYear)
                ->whereMonth('updated_at', $i)
                 ->where('division_id', $division_id)
                ->where('refund_status', '2')
                ->sum('deposit'), 2);

            $deposit_returned_count[$i] = Refund::whereYear('updated_at', $selectedYear)
                ->whereMonth('updated_at', $i)
                 ->where('division_id', $division_id)
                ->where('refund_status', 2)
                ->count();

            $deposit_fine_total[$i] = number_format(Refund::whereYear('updated_at', $selectedYear)
                ->whereMonth('updated_at', $i)
                 ->where('division_id', $division_id)
                ->where('refund_status', 3)
                ->sum('deposit'), 2);

            $deposit_fine_count[$i] = Refund::whereYear('updated_at', $selectedYear)
                ->whereMonth('updated_at', $i)
                 ->where('division_id', $division_id)
                ->where('refund_status', 3)
                ->count();
        }
    }





// dd($payments_total);
    return response()->json([


        "payments_total" => $payments_total,
        "payments_count" => $payments_count,
        "deposit_returned_total" => $deposit_returned_total,
        "deposit_returned_count" => $deposit_returned_count,
        "deposit_fine_total" => $deposit_fine_total,
        "deposit_fine_count" => $deposit_fine_count,
        "withoutSD"=>$withoutSD,

// "returnedSelectedYear"=>$returnedSelectedYear
        ]);






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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
