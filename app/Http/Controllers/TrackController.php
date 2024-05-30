<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Form;
use App\BeneficiaryDetails;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\dd;


class TrackController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        // $form = Form::findOrFail($memo);

// dd($request,"house");
// $checkingAsh = $request;
        $form = DB::table('forms')->where('memo',$request->number)->get();

        return response()->json([
            "form" => $form,
            // "checking"=>$checkingAsh
        ], 201);
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
    public function beneficiaryDetails($division_id)
    {

        $beneficiaryDetails = BeneficiaryDetails::where('division_id', $division_id)->orderBy('updated_at', 'ASC')->first();
        return response()->json([
            "beneficiaryDetails" => $beneficiaryDetails,

        ], 200);

    }
}
