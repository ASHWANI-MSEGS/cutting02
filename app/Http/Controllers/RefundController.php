<?php

namespace App\Http\Controllers;

use App\Refund;
use App\Form;
use App\Estimate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use GuzzleHttp\Client;
use Carbon;

use App\Exports\RefundsExport;
use App\Exports\RefundExportSouth;
use App\Exports\RefundExportNorth;

use App\Exports\RefundExportChamphai;
use App\Exports\RefundExportLunglei;
use App\Exports\RefundExportSaitual;
use App\Exports\RefundExportMamit;
use App\Exports\RefundExportSiaha;
use App\Exports\RefundExportKhawzawl;
use App\Exports\RefundExportKolasib;
use App\Exports\RefundExportLawngtlai;
use App\Exports\RefundExportSerchhip;
use App\Exports\RefundExportLungleiRD2HNTL;
use App\Exports\RefundExportHmuifangDivision;
use App\Exports\RefundExportNationalHighwayDiv1;
use App\Exports\RefundExportNationalHighwayDiv3;

use Maatwebsite\Excel\Facades\Excel;

class RefundController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function indexUnrefund($division_id)
    {
        $refunds = DB::table('refunds')->where('refund_status', '1')->where('division_id', $division_id)->orderBy('updated_at', 'DESC')->paginate();

        // $southRefunds = DB::table('refunds')->where('refund_status', '1')->where('division_id', '1')->orderBy('updated_at', 'DESC')->paginate();
        // $northRefunds = DB::table('refunds')->where('refund_status', '1')->where('division_id', '2')->orderBy('updated_at', 'DESC')->paginate();

        // $refundSouthCount = DB::table('refunds')->where('division_id', '1')->where('refund_status','1')->count();
        // $refundNorthCount = DB::table('refunds')->where('division_id', '2')->where('refund_status','1')->count();

        return response()->json([
            "refunds" => $refunds,
            // "southRefunds" => $southRefunds,
            // "northRefunds" => $northRefunds,
            // "refundSouthCount" => $refundSouthCount,
            // "refundNorthCount" => $refundNorthCount,
        ]);
    }


    public function indexRefund($division_id)
    {
        $refunds = DB::table('refunds')->where('refund_status', '2')->where('division_id', $division_id)->orderBy('updated_at', 'DESC')->paginate();
        $refundIds = $refunds->pluck('id')->all();// $refundIds takes only the id coln from the $refunds table
        $reports = DB::table('reports')->whereIn ('id', $refundIds)->orderBy('updated_at', 'DESC')->paginate();


        // $southRefunds = DB::table('refunds')->where('refund_status', '2')->where('division_id', '1')->orderBy('updated_at', 'DESC')->paginate();
        // $northRefunds = DB::table('refunds')->where('refund_status', '2')->where('division_id', '2')->orderBy('updated_at', 'DESC')->paginate();

        // $refundSouthCount = DB::table('refunds')->where('division_id', '1')->where('refund_status','2')->count();
        // $refundNorthCount = DB::table('refunds')->where('division_id', '2')->where('refund_status','2')->count();

        return response()->json([
            "refunds" => $refunds,
            "reports" => $reports

            // "southRefunds" => $southRefunds,
            // "northRefunds" => $northRefunds,
            // "refundSouthCount" => $refundSouthCount,
            // "refundNorthCount" => $refundNorthCount,
        ]);
    }

    public function indexFine($division_id)
    {
        $refunds = DB::table('refunds')->where('refund_status', '3')->where('division_id', $division_id)->orderBy('updated_at', 'DESC')->paginate()   ;
        // info($refunds);
        $refundIds = $refunds->pluck('id')->all();// $refundIds takes only the id coln from the $refunds table
        // info($refundIds);

         $reports = DB::table('reports')->whereIn ('id', $refundIds)->orderBy('updated_at', 'DESC')->paginate();
        //  info($reports);

        // $southRefunds = DB::table('refunds')->where('refund_status', '3')->where('division_id', '1')->orderBy('updated_at', 'DESC')->paginate();
        // $northRefunds = DB::table('refunds')->where('refund_status', '3')->where('division_id', '2')->orderBy('updated_at', 'DESC')->paginate();

        // $fineSouthCount = DB::table('refunds')->where('division_id', '1')->where('refund_status','3')->count();
        // $fineNorthCount = DB::table('refunds')->where('division_id', '2')->where('refund_status','3')->count();

        return response()->json([
            "refunds" => $refunds,
            "reports" => $reports

            // "southRefunds" => $southRefunds,
            // "northRefunds" => $northRefunds,
            // "fineSouthCount" => $fineSouthCount,
            // "fineNorthCount" => $fineNorthCount,
        ]);
    }

    public function index()
    {
        //
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
     * @param  \App\Refund  $refund
     * @return \Illuminate\Http\Response
     */
    public function show(Refund $refund)
    {
        //
    }

    public function showRefundUnrefund($id)
    {
        $refund=Refund::findOrFail($id);
        $form=Form::findOrFail($refund->form_id);
        $estimate=Estimate::findOrFail($form->estimate_id);
        return response()->json([
            "refund" => $refund,
             "form" => $form,
              "estimate" => $estimate
              ]);
    }


    public function refundApprove(Request $request)
    {
        $refund=Refund::findOrFail($request->id);
        $refund->hdfc_code=$request->hdfc_code;
        $refund->refund_status = 2;
        $refund->save();

        $form=Form::find($refund->form_id);
        $form->track_status = 69;
        $form->save();

        //SMS 7

        try {

            $client = new Client();
            $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
              'form_params' => [
                  'api_key' => env('SMS_API_KEY'),
                  'number' => $form->phone,
                  'message' =>'Memo: '.$form->memo.',Your Security Deposit will be credited back to your a/c .DoICT',
                  'template_id'=>'1007832510252977762',
                  // 'number' => $phone_number,
                  // 'message' => $mOTP . ' is your OTP from eTender, MSeGS',
              ]
          ]);

          } catch (\Exception $e) {

              return $e->getMessage();
          }




        return response()->json([
            "refund" => $refund
        ]);

    }

    public function find(Request $request)
    {
        $refund=Refund::findOrFail($request->id);
        $refund->hdfc_code=0;
        $refund->refund_status = 3;   // Fined
        $refund->save();

        $form=Form::find($refund->form_id);
        $form->track_status = 70;
        $form->save();

        //SMS 8
        try {

            $client = new Client();
            $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
              'form_params' => [
                  'api_key' => env('SMS_API_KEY'),
                  'number' => $form->phone,
                  'message' =>'Memo: '.$form->memo.', Security Deposit Fined, Reason: '.$refund->reason.' .DoICT',
                  'template_id'=>'1007323271964674998',
                  // 'number' => $phone_number,
                  // 'message' => $mOTP . ' is your OTP from eTender, MSeGS',
              ]
          ]);

          } catch (\Exception $e) {

              return $e->getMessage();
          }

        return response()->json([
            "refund" => $refund
        ]);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Refund  $refund
     * @return \Illuminate\Http\Response
     */
    public function edit(Refund $refund)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Refund  $refund
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Refund $refund)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Refund  $refund
     * @return \Illuminate\Http\Response
     */
    public function destroy(Refund $refund)
    {
        //
    }

    public function export()
    {
        return Excel::download(new RefundsExport, 'refunds.xlsx');
    }

    public function exportRefund($id)
    {

        $today = \Carbon\Carbon::today();
        $extracedToday = $today->format('d-m-Y');
        if($id==1)
        {
            return Excel::download(new RefundExportSouth, "refundSouth-$extracedToday.xlsx");
        }
        else if($id==2)
        {
            return Excel::download(new RefundExportNorth, "refundNorth-$extracedToday.xlsx");
        }
        else if($id==4)
        {
            return Excel::download(new RefundExportChamphai, "refundChamphai-$extracedToday.xlsx");
        }
        else if($id==5)
        {
            return Excel::download(new RefundExportLunglei, "refundLunglei-$extracedToday.xlsx");
        }
        else if($id==6)
        {
            return Excel::download(new RefundExportSaitual, "refundSaitual-$extracedToday.xlsx");
        }
        else if($id==7)
        {
            return Excel::download(new RefundExportMamit, "refundMamit-$extracedToday.xlsx");
        }
        else if($id==8)
        {
            return Excel::download(new RefundExportSiaha, "refundSiaha-$extracedToday.xlsx");
        }
        else if($id==9)
        {
            return Excel::download(new RefundExportKhawzawl, "refundKhawzawl-$extracedToday.xlsx");
        }
        else if($id==10)
        {
            return Excel::download(new RefundExportKolasib, "refundKolasib-$extracedToday.xlsx");
        }
        else if($id==11)
        {
            return Excel::download(new RefundExportLawngtlai, "refundLawngtlai-$extracedToday.xlsx");
        }
        else if($id==12)
        {
            return Excel::download(new RefundExportSerchhip, "refundSerchhip-$extracedToday.xlsx");
        }
        else if($id==13)
        {
            return Excel::download(new RefundExportLungleiRD2HNTL, "refundExportLungleiRD2HNTL-$extracedToday.xlsx");
        }
        else if($id==14)
        {
            return Excel::download(new RefundExportHmuifangDivision, "refundExportHmuifangDivision-$extracedToday.xlsx");
        }
        else if($id==15)
        {
            return Excel::download(new RefundExportNationalHighwayDiv1, "refundExportNationalHighwayDiv1-$extracedToday.xlsx");
        }
        else if($id==16)
        {
            return Excel::download(new RefundExportNationalHighwayDiv3, "refundExportNationalHighwayDiv3-$extracedToday.xlsx");
        }

    }

}
