<?php

namespace App\Http\Controllers;

use App\Report;
use App\Form;
use App\Grant;
use App\Refund;
use Illuminate\Support\Facades\DB;

use Illuminate\Http\Request;

class ReportController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function indexDate($division_id)
    {
        $reports = DB::table('reports')->where('report_status', '1')->where('division_id', $division_id)->orderBy('updated_at', 'ASC')->paginate();

        // $reportSouthCount = DB::table('reports')->where('division_id', '1')->where('report_status','1')->count();
        // $reportNorthCount = DB::table('reports')->where('division_id', '2')->where('report_status','1')->count();

        return response()->json([
            "reports" => $reports,
            // "reportSouthCount" => $reportSouthCount,
            // "reportNorthCount" => $reportNorthCount,
        ]);
    }

    public function indexComplete($division_id)
    {
        $reports = DB::table('reports')->where('report_status', '2')->where('division_id', $division_id)->orderBy('updated_at', 'ASC')->paginate();

        $reportSouthCount = DB::table('reports')->where('division_id', '1')->where('report_status','2')->count();
        $reportNorthCount = DB::table('reports')->where('division_id', '2')->where('report_status','2')->count();

        return response()->json([
            "reports" => $reports,
            "reportSouthCount" => $reportSouthCount,
            "reportNorthCount" => $reportNorthCount,
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
    public function reportDate(Request $request)
    {
        $this->validate($request,[
            'date' => 'required',
        ]);
        $report = new Report;

        $report->form_id = $request->form_id;

        $report->form_memo = $request->form_memo;

        $report->division_id = $request->division_id;

        $report->date = $request->date;

        $report->report_status = 1;

        $report->save();

        $form=Form::find($request->form_id);
        $form->track_status = 66;
        $form->report_id = $report->id;
        $form->save();

        $grant = DB::table('grants')->where('form_memo',$request->form_memo)->update(['grant_status'=>2]);

        return response()->json(['report'=>$report, 'success'=>'Report date success']);

    }

    public function reportCompletion(Request $request)
    {
        $this->validate($request, [
            'cdate' => 'required',
            'ac_name' => 'required',
            'ac_number' => 'required',
            'ifsc' => 'required',
        ]);

        // $report = Report::findOrFail($request->form_id);
        //$report = Report::where('form_id', $request->form_id)->first();

        $report1 = DB::table('reports')->where('form_id', $request->form_id)->first();

        $report = Report::find($report1->id);

        $report->cdate = $request->cdate;

        $report->ac_name = $request->ac_name;

        $report->ac_number = $request->ac_number;

        $report->ifsc = $request->ifsc;

        $report->report_status = 2;

        $report->save();

        $form=Form::find($request->form_id);
        $form->track_status = 67;
        $form->save();


        return response()->json(["report"=>$report,
        "form" => $form,
        "success"=>"Report completion success"
    ],201);



    }
    public function getReport($id)
    {


    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Report  $report
     * @return \Illuminate\Http\Response
     */
    public function showDate($id)
    {
        $report=Report::find($id);
        $form=Form::find($report->form_id);
        return response()->json(['report' => $report, 'form' => $form]);
    }

    public function showComplete($id)
    {
        $report=Report::find($id);
        $form=Form::find($report->form_id);
        return response()->json(['report' => $report, 'form' => $form]);
    }
//working for fine from unrefund fine
    public function reportFine(Request $request)
    {

        $report = Report::find($request->id);
        $report->report_status = 4; //4=>fined in report table
        // $report->reason = $request->reason;
        $report->save();

        $refund = new Refund;
        $refund->form_memo = $report->form_memo;
        $refund->ac_name = $report->ac_name;
        $refund->ac_number = $report->ac_number;
        $refund->ifsc = $report->ifsc;



        $estimate1 = DB::table('estimates')->where('form_id', $report->form_id)->first();

        $refund->refund_status = 3; // 3 => for fined // for refund table
        $refund->report_id = $report->id;
        $refund->division_id = $report->division_id;
        $refund->form_id = $report->form_id;
        $refund->estimate_id = $estimate1->id;
        $refund->deposit = $estimate1->deposit;
        $refund->reason = $request->fine;

        $refund->save();


        return response()->json([
             "refund" => $refund,
            "report" => $report
        ],201);

    }
    public function reportFineFormUnrefunded(Request $request){
        $refund = Refund::find($request->id);
        // info($refund);
        // return;

            $refund->refund_status = 3;
            $refund->reason = $request->fine;

            $refund->save();
            $report = Report::find($refund->report_id);
            $report -> report_status=4;
            $report ->save();



    }
//         {
// info($request);

//             $report = Report::find($request->id);

//             $report->report_status = 4; //4=>fined in report table
//             $report->save();

//             // $refund = Refund::find($report->form_id);
//             // $refund = Refund::find($request->form_idR);
//             $refund = Refund::where('form_id', $request->form_idR)->first();
//             // info($refund);
//             // $refund = new Refund;
//             $refund->reason = $request->fine;
//         $refund->form_memo = $report->form_memo;
//         $refund->ac_name = $report->ac_name;
//         $refund->ac_number = $report->ac_number;
//         $refund->ifsc = $report->ifsc;
// // $refund->reason=$report->fine;


//         $estimate1 = DB::table('estimates')->where('form_id', $report->form_id)->first();

//         $refund->refund_status = 3; // 3 => for fined
//         $refund->report_id = $report->id;
//         $refund->division_id = $report->division_id;
//         $refund->form_id = $report->form_id;
//         $refund->estimate_id = $estimate1->id;
//         $refund->deposit = $estimate1->deposit;

//         $refund->save();

//         return response()->json([
//             "refund" => $refund,
//             "report" => $report
//         ],201);

//     }

    public function reportforRefund($id)
    {
        $report = Report::find($id);
        $report->report_status = 3; // 3 => recommand for refund
        $report->save();

        $estimate1 = DB::table('estimates')->where('form_id', $report->form_id)->first();

        $refund = new Refund;
        $refund->form_memo = $report->form_memo;
        $refund->ac_name = $report->ac_name;
        $refund->ac_number = $report->ac_number;
        $refund->ifsc = $report->ifsc;

        $refund->refund_status = 1; // 1 => for refund
        $refund->report_id = $report->id;
        $refund->division_id = $report->division_id;
        $refund->form_id = $report->form_id;
        $refund->estimate_id = $estimate1->id;
        $refund->deposit = $estimate1->deposit;

        $refund->save();

        $form1=Form::find($refund->form_id);
        $form1->track_status = 68;
        $form1->save();

        return response()->json([
            "refund" => $refund,
            "report" => $report,
            "form1" => $form1
        ],201);

    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Report  $report
     * @return \Illuminate\Http\Response
     */
    public function edit(Report $report)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Report  $report
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Report $report)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Report  $report
     * @return \Illuminate\Http\Response
     */
    public function destroy(Report $report)
    {
        //
    }
}
