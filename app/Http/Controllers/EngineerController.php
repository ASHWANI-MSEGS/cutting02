<?php

namespace App\Http\Controllers;

use App\Engineer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EngineerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    // public function index()
    // {
    //     $engineers = Engineer::orderBy('name','ASC')->paginate();

    //     return response()->json([
    //         "engineers" => $engineers
    //     ],201);

    // }
    public function index($division_id)
    {
        if($division_id == 1)
        {
            $engineers = Engineer::where('division_id','1')->orderBy('name','ASC')->paginate();
        }
        elseif($division_id == 2)
        {
            $engineers = Engineer::where('division_id','2')->orderBy('name','ASC')->paginate();
        }
        elseif($division_id == 3)
        {
            $engineers = Engineer::orderBy('name','ASC')->paginate();
        }

        elseif($division_id == 4)
        {
            $engineers = Engineer::where('division_id','4')->orderBy('name','ASC')->paginate();
        }
        elseif($division_id == 5)
        {
            $engineers = Engineer::where('division_id','5')->orderBy('name','ASC')->paginate();
        }
        elseif($division_id == 6)
        {
            $engineers = Engineer::where('division_id','6')->orderBy('name','ASC')->paginate();
        }
        elseif($division_id == 7)
        {
            $engineers = Engineer::where('division_id','7')->orderBy('name','ASC')->paginate();
        }
        elseif($division_id == 8)
        {
            $engineers = Engineer::where('division_id','8')->orderBy('name','ASC')->paginate();
        }
        elseif($division_id == 9)
        {
            $engineers = Engineer::where('division_id','9')->orderBy('name','ASC')->paginate();
        }
        elseif($division_id == 10)
        {
            $engineers = Engineer::where('division_id','10')->orderBy('name','ASC')->paginate();
        }
        elseif($division_id == 11)
        {
            $engineers = Engineer::where('division_id','11')->orderBy('name','ASC')->paginate();
        }
        elseif($division_id == 12)
        {
            $engineers = Engineer::where('division_id','12')->orderBy('name','ASC')->paginate();
        }
        elseif($division_id == 13)
        {
            $engineers = Engineer::where('division_id','13')->orderBy('name','ASC')->paginate();
        }
        elseif($division_id == 14)
        {
            $engineers = Engineer::where('division_id','14')->orderBy('name','ASC')->paginate();
        }
        elseif($division_id == 15)
        {
            $engineers = Engineer::where('division_id','15')->orderBy('name','ASC')->paginate();
        }
        elseif($division_id == 16)
        {
            $engineers = Engineer::where('division_id','16')->orderBy('name','ASC')->paginate();
        }

        return response()->json([
            "engineers" => $engineers
        ],201);
    }


// not being used
    public function southList()
    {
        $engineers = DB::table('engineers')->where('division_id','1')->orderBy('name','ASC')->get();

        return response()->json([
            "engineers" => $engineers
        ],201);
    }
// not being used
    public function northList()
    {
        $engineers = DB::table('engineers')->where('division_id','2')->orderBy('name','ASC')->get();

        return response()->json([
            "engineers" => $engineers
        ],201);
    }

    public function engineerList($division_id)
    {
        if($division_id == 1)
        {
            $engineers = Engineer::where('division_id','1')->orderBy('name','ASC')->get();
        }
        elseif($division_id == 2)
        {
            $engineers = Engineer::where('division_id','2')->orderBy('name','ASC')->get();
        }
        elseif($division_id == 3)
        {
            $engineers = Engineer::orderBy('name','ASC')->get();
        }

        elseif($division_id == 4)
        {
            $engineers = Engineer::where('division_id','4')->orderBy('name','ASC')->get();
        }
        elseif($division_id == 5)
        {
            $engineers = Engineer::where('division_id','5')->orderBy('name','ASC')->get();
        }
        elseif($division_id == 6)
        {
            $engineers = Engineer::where('division_id','6')->orderBy('name','ASC')->get();
        }
        elseif($division_id == 7)
        {
            $engineers = Engineer::where('division_id','7')->orderBy('name','ASC')->get();
        }
        elseif($division_id == 8)
        {
            $engineers = Engineer::where('division_id','8')->orderBy('name','ASC')->get();
        }
        elseif($division_id == 9)
        {
            $engineers = Engineer::where('division_id','9')->orderBy('name','ASC')->get();
        }
        elseif($division_id == 10)
        {
            $engineers = Engineer::where('division_id','10')->orderBy('name','ASC')->get();
        }
        elseif($division_id == 11)
        {
            $engineers = Engineer::where('division_id','11')->orderBy('name','ASC')->get();
        }
        elseif($division_id == 12)
        {
            $engineers = Engineer::where('division_id','12')->orderBy('name','ASC')->get();
        }
        elseif($division_id == 13)
        {
            $engineers = Engineer::where('division_id','13')->orderBy('name','ASC')->get();
        }
        elseif($division_id == 14)
        {
            $engineers = Engineer::where('division_id','14')->orderBy('name','ASC')->get();
        }
        elseif($division_id == 15)
        {
            $engineers = Engineer::where('division_id','15')->orderBy('name','ASC')->get();
        }
        elseif($division_id == 16)
        {
            $engineers = Engineer::where('division_id','16')->orderBy('name','ASC')->get();
        }

        return response()->json([
            "engineers" => $engineers
        ],201);
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        //validate
        $this->validate($request,[
            'name' => 'required',
            'phone' => 'required',
            'email' => 'email',
            'post' => 'required',
            'division_id' => 'required'

        ]);

        $engineer = new Engineer();

        $engineer->name = $request->name;
        $engineer->phone = $request->phone;
        $engineer->email = $request->email;
        $engineer->post = $request->post;
        $engineer->division_id = $request->division_id;
        $engineer->added_by = $request->added_by;

        if($request->sub_div != null)
        {
            $engineer->sub_div = $request->sub_div;
        }
        else{
            $engineer->sub_div = 0;
        }

        $engineer->save();

        return response()->json([
            "engineer" => $engineer
        ], 201);


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
     * @param  \App\Engineer  $engineer
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $engineer = Engineer::find($id);

        return response()->json([
            "engineer" => $engineer
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Engineer  $engineer
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request)
    {
        info($request);
        $engineer = Engineer::find($request->id);

        $engineer->name = $request->name;
        $engineer->phone = $request->phone;
        $engineer->email = $request->email;
        $engineer->post = $request->post;
        $engineer->division_id = $request->division_id;
        $engineer->sub_div = $request->sub_div;
        $engineer->save();

        return response()->json([
            "engineer" => $engineer
        ],201);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Engineer  $engineer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Engineer $engineer)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Engineer  $engineer
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $engineer = Engineer::find($id);
        $engineer->delete();

        $status_engg = "deleted";

        return response()->json([

            "status_engg" => $status_engg
        ]);
    }


}
