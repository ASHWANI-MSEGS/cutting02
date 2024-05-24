<?php

namespace App\Http\Controllers;

use App\Feature;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FeatureController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        $feature = Feature::all();
        $security_deposit = DB::table('features')->where('feature', 'security_deposit')->where('division_id',$id)->first();
        return response()->json([
            "feature" => $feature,
            "security_deposit" => $security_deposit,
        ], 200);
        // if($id == 1){

        //     $feature = Feature::all();
        //     $security_deposit = DB::table('features')->where('feature', 'security_deposit')->where('division_id','1')->first();
        //     return response()->json([
        //         "feature" => $feature,
        //         "security_deposit" => $security_deposit,
        //     ], 200);

        // }

        // if($id == 2){

        //     $feature = Feature::all();
        //     $security_deposit = DB::table('features')->where('feature', 'security_deposit')->where('division_id','2')->first();
        //     return response()->json([
        //         "feature" => $feature,
        //         "security_deposit" => $security_deposit,
        //     ], 200);

        // }

    }

    public function securityUpdate($id)
    {
        $feature = Feature::all();

        $security_deposit = Feature::findOrFail($id);

        if($security_deposit->status == 0)
        {
            $security_deposit->status = 1;

            $security_deposit->save();

            return response()->json([
                "security_deposit"=> $security_deposit,
                "feature" => $feature,
            ]);
        }

        if($security_deposit->status == 1)
        {
            $security_deposit->status = 0;

            $security_deposit->save();

            return response()->json([
                "security_deposit"=> $security_deposit,
                "feature" => $feature,
            ]);
        }

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
     * @param  \App\Feature  $feature
     * @return \Illuminate\Http\Response
     */
    public function show(Feature $feature)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Feature  $feature
     * @return \Illuminate\Http\Response
     */
    public function edit(Feature $feature)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Feature  $feature
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Feature $feature)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Feature  $feature
     * @return \Illuminate\Http\Response
     */
    public function destroy(Feature $feature)
    {
        //
    }
}
