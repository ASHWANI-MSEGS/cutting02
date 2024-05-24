<?php

namespace App\Http\Controllers;

use App\Localcouncil;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;

class LocalcouncilController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $localcouncils = LocalCouncil::all();
        $localcouncils = DB::table('localcouncils')->orderBy('name','asc')->get();
        return response()->json([
            "localcouncils" => $localcouncils
        ], 200);
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

            $localcouncil= new Localcouncil();

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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $localcouncil = Localcouncil::findOrFail($id);

        return response()->json([
            "localcouncil" => $localcouncil
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
    public function update(Request $request)
    {
        $localcouncil=Localcouncil::find($request->id);
        $localcouncil->name = $request->name;
        $localcouncil->division_id = $request->division_id;
        $localcouncil->sub_div = $request->sub_div;
        $localcouncil->save();

        return response()->json([ "localcouncil" => $localcouncil],200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        $localcouncil = Localcouncil::findOrFail($id);
        $localcouncil->delete();
    }
}
