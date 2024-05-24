<?php

namespace App\Http\Controllers;

use App\Sms;
use Illuminate\Http\Request;

class SmsController extends Controller
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



    public function otp(Request $request){

         $mOTP = mt_rand(1000, 9999);
         //sent otp
            $client = new Client();
             $response=$client->request ('POST','https://sms.mizoram.gov.in/api', [
                 'form_params' => [
                     'api_key' => env('SMS_API_KEY'),
                     'number' => $phone_number,
                     'message' => $mOTP . ' is your OTP from eTender, MSeGS',
                 ]
             ]);
             $response = $response->getBody()->getContents();

             error_log("OTP IS: ".$mOTP);
             error_log($response);
             $departmentAll = TenderDepartment::all()->sortBy("name");
             $first = 2;
            return view ('subscribe.create',compact('mOTP', 'phone_number', 'departmentAll','first'));
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
     * @param  \App\Sms  $sms
     * @return \Illuminate\Http\Response
     */
    public function show(Sms $sms)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Sms  $sms
     * @return \Illuminate\Http\Response
     */
    public function edit(Sms $sms)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Sms  $sms
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Sms $sms)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Sms  $sms
     * @return \Illuminate\Http\Response
     */
    public function destroy(Sms $sms)
    {
        //
    }
}
