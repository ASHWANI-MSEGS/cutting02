<?php

namespace App\Http\Controllers;

use App\ChamphaiLocalCouncil;
use Illuminate\Http\Request;

class ChamphaiLocalCouncilController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {

            // taking the data and sending to champhaiLC()
            $localcouncils = ChamphaiLocalCouncil::all();
            return response()->json([
                "localcouncils" => $localcouncils
            ], 200);
        } catch (\Throwable $th) {
            //throw $th;
            return response()->json([
                "localcouncils" => 'error'
            ], 500);
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

        $this->validate($request,[


            'name' => 'required|max:255',
            'division_id' => 'required',
            // 'sub_div' => 'required',

            ]);

            //  create db

            $localcouncil= new ChamphaiLocalCouncil();

            $localcouncil->name=$request->name;

            $localcouncil->division_id=$request->division_id;

            $localcouncil->sub_div=$request->sub_div;

            $localcouncil->added_by=$request->added_by;

            $localcouncil->save();

            // response

            return ["message"=>"Local Council Submitted","localcouncil"=>$localcouncil];
        }


    /**
     * Display the specified resource.
     *
     * @param  \App\ChamphaiLocalCouncil  $champhaiLocalCouncil
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $localcouncil = ChamphaiLocalCouncil::findOrFail($id);

        return response()->json([
            "localcouncil" => $localcouncil
        ],200);
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\ChamphaiLocalCouncil  $champhaiLocalCouncil
     * @return \Illuminate\Http\Response
     */
    public function edit(ChamphaiLocalCouncil $champhaiLocalCouncil)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ChamphaiLocalCouncil  $champhaiLocalCouncil
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $localcouncil=ChamphaiLocalCouncil::find($request->id);
        $localcouncil->name = $request->name;
        $localcouncil->division_id = $request->division_id;
        $localcouncil->sub_div = $request->sub_div;
        $localcouncil->save();

        return response()->json([ "localcouncil" => $localcouncil],200);
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ChamphaiLocalCouncil  $champhaiLocalCouncil
     * @return \Illuminate\Http\Response
     */
    public function destroy(ChamphaiLocalCouncil $champhaiLocalCouncil)
    {
        //
    }
    public function delete($id)
    {
        $localcouncil = ChamphaiLocalCouncil::findOrFail($id);
        $localcouncil->delete();
    }
}
