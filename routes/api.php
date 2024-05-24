<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('/checkIfUserDisabled/{email}', 'UserController@checkIfUserDisabled');
Route::group([

    'prefix' => 'auth'

], function ($router) {

    //AuthController
    Route::post('/login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

    Route::post('/contacts', 'ContactsController@store');

    //UserController
    Route::post('/registerr','UserController@register');
    Route::get('/userList/{division_id}', 'UserController@index');

    Route::patch('/updatePassword','UserController@updatePassword');

    //FormController
    Route::post('/form','FormController@create');
    Route::get('/form/list', 'FormController@index');
    Route::get('/form/list/{show}', 'FormController@show');
    // Route::get('/form/listUnapproved', 'FormController@unapprovedIndex'); //commented out by previous
    Route::get('/form/listEstimate/{division_id}', 'FormController@estimateIndex');

    Route::patch('/form/list', 'FormController@update');
    Route::patch('/form/reject', 'FormController@reject');
    Route::patch('/form/rejectFromUnverified', 'FormController@rejectFromUnverified');
    Route::get('/form/listPayment/{show}', 'FormController@show');
    Route::get('/showPaymentPage/{show}', 'FormController@showPaymentPage');
    Route::patch('/form/list2/{show}', 'FormController@send');


    //LocalcouncilController
    Route::get('/localcouncil','LocalcouncilController@index');
    //added other Local Council Controller
    Route::get('/champhai_local_councils','ChamphaiLocalCouncilController@index');

    Route::get('/lunglei_local_councils','LungleiLocalCouncilController@index');

    Route::get('/saitual_local_councils','SaitualLocalCouncilController@index');

    Route::get('/mamit_local_councils','MamitLocalCouncilController@index');

    Route::get('/siaha_local_councils','SiahaLocalCouncilController@index');

    Route::get('/khawzawl_local_councils','KhawzawlLocalCouncilController@index');

    Route::get('/kolasib_local_councils','KolasibLocalCouncilController@index');

    Route::get('/lawngtlai_local_councils','LawngtlaiLocalCouncilController@index');

    Route::get('/serchhip_local_councils','SerchhipLocalCouncilController@index');

    Route::get('/lunglei_road_div2_hnahthial','LungleiRoadDiv2HnahthialController@index');
    Route::get('/hmuifang_division','HmuifangDivisionController@index');
    Route::get('/national_highway_div1','NationalHighwayDivOneController@index');
    Route::get('/national_highway_div3','NationalHighwayDivThreeController@index');

//showing
    Route::get('/localcouncilShow/{show}', 'LocalcouncilController@show');

    Route::get('/champhai_local_councilsShow/{show}','ChamphaiLocalCouncilController@show');

    Route::get('/lunglei_local_councilsShow/{show}','LungleiLocalCouncilController@show');

    Route::get('/saitual_local_councilsShow/{show}','SaitualLocalCouncilController@show');

    Route::get('/mamit_local_councilsShow/{show}','MamitLocalCouncilController@show');

    Route::get('/siaha_local_councilsShow/{show}','SiahaLocalCouncilController@show');

    Route::get('/khawzawl_local_councilsShow/{show}','KhawzawlLocalCouncilController@show');

    Route::get('/kolasib_local_councilsShow/{show}','KolasibLocalCouncilController@show');

    Route::get('/lawngtlai_local_councilsShow/{show}','LawngtlaiLocalCouncilController@show');

    Route::get('/serchhip_local_councilsShow/{show}','SerchhipLocalCouncilController@show');

    Route::get('/lunglei_road_div2_hnahthialsShow/{show}','LungleiRoadDiv2HnahthialController@show');
    Route::get('/hmuifang_divisionsShow/{show}','HmuifangDivisionController@show');
    Route::get('/national_highway_div1sShow/{show}','NationalHighwayDivOneController@show');
    Route::get('/national_highway_div3sShow/{show}','NationalHighwayDivThreeController@show');


    //DistrictController
    Route::get('/district','DistrictController@index');

    Route::post('searchForm','SearchFormController@index');

    //Estimate Controller

    Route::get('/estimateShowunprotected/{show}','EstimateController@show');

    Route::patch('/estimateStatus/{show}', 'EstimateController@update');
    Route::get('/estimatedlist','EstimateController@index');

    Route::get('/estimateapprovedlist/{division_id}', 'EstimateController@approvedIndex');
//need this for the search functionality start
    // Route::get('/estimateapprovedlist/{division_id}', 'EstimateController@approvedIndex');
    // Route::get('/estimateapprovedlist', 'EstimateController@approvedIndex');             this one specifically
//need this for the search functionality end

    Route::get('/estimateFindByForm/{show}', 'EstimateController@findByForm');


    Route::post('/track', 'TrackController@show');

    //PaymentController
    Route::post('/cryptoRequest', 'HDFCPaymentController@create');

    Route::post('/responseHandler', 'HDFCPaymentController@responseH');
    Route::post('/responseHandlerNorth', 'HDFCPaymentController@responseHNorth');
    // adding the routes for the response after payment for the rest of the divisions
    Route::post('/responseHandlerChamphai', 'HDFCPaymentController@responseHandlerChamphai');
    Route::post('/responseHandlerLunglei', 'HDFCPaymentController@responseHandlerLunglei');
    Route::post('/responseHandlerSaitual', 'HDFCPaymentController@responseHandlerSaitual');
    Route::post('/responseHandlerMamit', 'HDFCPaymentController@responseHandlerMamit');
    Route::post('/responseHandlerSiaha', 'HDFCPaymentController@responseHandlerSiaha');
    Route::post('/responseHandlerKhawzawl', 'HDFCPaymentController@responseHandlerKhawzawl');
    Route::post('/responseHandlerKolasib', 'HDFCPaymentController@responseHandlerKolasib');
    Route::post('/responseHandlerLawngtlai', 'HDFCPaymentController@responseHandlerLawngtlai');
    Route::post('/responseHandlerSerchhip', 'HDFCPaymentController@responseHandlerSerchhip');
    Route::post('/responseHandlerLungleiRoadDiv2Hnahthial', 'HDFCPaymentController@responseHandlerLungleiRoadDiv2Hnahthial');
    Route::post('/responseHandlerHmuifang', 'HDFCPaymentController@responseHandlerHmuifang');
    Route::post('/responseHandlerNationalHighwayDiv1', 'HDFCPaymentController@responseHandlerNationalHighwayDiv1');
    Route::post('/responseHandlerNationalHighwayDiv3', 'HDFCPaymentController@responseHandlerNationalHighwayDiv3');


    Route::get('/showPaymentHandlerHDFC/{id}', 'HDFCPaymentController@showPaymentHandler');

    Route::get('/paymentSuccessList/{division_id}','HDFCPaymentController@index');

    Route::get('/paymentUnsuccessList/{division_id}','HDFCPaymentController@unindex');

    Route::get('/paymentPendingList', 'HDFCPaymentController@pendingIndex');

    Route::post('/payment', 'PaymentController@api');
    Route::post('/save-payment','PaymentController@save');
    Route::get('/findPayment/{id}', 'PaymentController@show');
    // Route::get('/paymentSuccessList','PaymentController@index');
    // Route::get('/paymentUnsuccessList','PaymentController@unindex');

    //GrantController

    Route::get('/grant/{id}', 'GrantController@show');
    Route::post('/granted', 'GrantController@edit');

    //Permission download
    Route::get('/permissionShow/{id}', 'GrantController@permissionShow');


    //Report
    Route::post('/reportDate', 'ReportController@reportDate');
    Route::post('/reportCompletion', 'ReportController@reportCompletion');

    Route::get('/reportDateSuccess/{id}', 'ReportController@showDate');
    Route::get('/reportCompleteSuccess/{id}', 'ReportController@showComplete');


    //api

    Route::get('/encryptTrackingId', 'HDFCPaymentController@encryptTrackingId');

    Route::get('/decrytResponse', 'HDFCPaymentController@decrytResponse');

    Route::get('/apiTest', 'HDFCPaymentController@apiTest');
    Route::get('/apiTestFull', 'HDFCPaymentController@apiTestFull');



    //Excel

    Route::get('/formExcel', 'FormController@export');
    Route::get('/refundExcel', 'RefundController@export');
        //Excel
        Route::get('/exportRefund/{id}', 'RefundController@exportRefund');



});


Route::group(['middleware' => 'jwt.auth'], function($router){

    //User
    Route::get('/userDelete/{id}', 'UserController@destroy');
    Route::get('/disableUser/{id}', 'UserController@disableUser');

    //DashboardController
    Route::get('/dashboard/{id}', 'DashboardController@index');

    Route::get('/App/{id}', 'DashboardController@App');

    Route::get('/amountDetails/{id}/{selectedYear}', 'DashboardController@amountDetailsIndex');

    Route::post('/createUser', 'UserController@create');

    //FormController
    Route::get('/form/listUnapproved/{division_id}', 'FormController@unapprovedIndex');
    Route::get('/form/rejectedList/{division_id}', 'FormController@rejectedIndex');


    //EstimateController
    Route::post('/estimateSubmit', 'EstimateController@create');
    Route::patch('/estimateEditApprove','EstimateController@edit');
// incase of payment failure but the amount is deducted we can enter the details manually 
    Route::post('/manualOnlinePayment', 'HDFCPaymentController@manualOnlinePayment');
    // form manual RTGS
    Route::post('/manualOnlinePaymentRTGS', 'HDFCPaymentController@manualOnlinePaymentRTGS');
    // form manual Cash
    Route::post('/manualOnlinePaymentCash', 'HDFCPaymentController@manualOnlinePaymentCash');

    Route::get('/estimateunapprovedlist/{division_id}', 'EstimateController@unapprovedIndex');
    Route::get('/estimateShow/{show}','EstimateController@show');

    //GrantController
    Route::get('/grantedList/{divison_id}', 'GrantController@index');
    Route::get('/allgrantedList/{division_id}', 'GrantController@allindex');
    Route::get('/ungrantedList/{division_id}', 'GrantController@unindex');

    //LocalcouncilController
    Route::post('/localcouncil','LocalcouncilController@store');
    // other local councils for districts
    //added other Local Council Controller
    Route::post('/champhai_local_councils','ChamphaiLocalCouncilController@store');

    Route::post('/lunglei_local_councils','LungleiLocalCouncilController@store');

    Route::post('/saitual_local_councils','SaitualLocalCouncilController@store');

    Route::post('/mamit_local_councils','MamitLocalCouncilController@store');

    Route::post('/siaha_local_councils','SiahaLocalCouncilController@store');

    Route::post('/khawzawl_local_councils','KhawzawlLocalCouncilController@store');

    Route::post('/kolasib_local_councils','KolasibLocalCouncilController@store');

    Route::post('/lawngtlai_local_councils','LawngtlaiLocalCouncilController@store');

    Route::post('/serchhip_local_councils','SerchhipLocalCouncilController@store');

    Route::post('/lunglei_road_div2_hnahthial','LungleiRoadDiv2HnahthialController@store');
    Route::post('/hmuifang_division','HmuifangDivisionController@store');
    Route::post('/national_highway_div1','NationalHighwayDivOneController@store');
    Route::post('/national_highway_div3','NationalHighwayDivThreeController@store');

// update
    Route::patch('/localcouncilUpdate', 'LocalcouncilController@update');
    Route::patch('/champhai_local_councilsUpdate','ChamphaiLocalCouncilController@update');

    Route::patch('/lunglei_local_councilsUpdate','LungleiLocalCouncilController@update');

    Route::patch('/saitual_local_councilsUpdate','SaitualLocalCouncilController@update');

    Route::patch('/mamit_local_councilsUpdate','MamitLocalCouncilController@update');

    Route::patch('/siaha_local_councilsUpdate','SiahaLocalCouncilController@update');

    Route::patch('/khawzawl_local_councilsUpdate','KhawzawlLocalCouncilController@update');

    Route::patch('/kolasib_local_councilsUpdate','KolasibLocalCouncilController@update');

    Route::patch('/lawngtlai_local_councilsUpdate','LawngtlaiLocalCouncilController@update');

    Route::patch('/serchhip_local_councilsUpdate','SerchhipLocalCouncilController@update');

    Route::patch('/lunglei_road_div2_hnahthialsUpdate','LungleiRoadDiv2HnahthialController@update');
    Route::patch('/hmuifang_divisionsUpdate','HmuifangDivisionController@update');
    Route::patch('/national_highway_div1sUpdate','NationalHighwayDivOneController@update');
    Route::patch('/national_highway_div3sUpdate','NationalHighwayDivThreeController@update');



    Route::get('/localcouncilDelete/{id}','LocalcouncilController@delete');
    Route::get('/champhai_local_councilsDelete/{id}','ChamphaiLocalCouncilController@delete');

    Route::get('/lunglei_local_councilsDelete/{id}','LungleiLocalCouncilController@delete');

    Route::get('/saitual_local_councilsDelete/{id}','SaitualLocalCouncilController@delete');

    Route::get('/mamit_local_councilsDelete/{id}','MamitLocalCouncilController@delete');

    Route::get('/siaha_local_councilsDelete/{id}','SiahaLocalCouncilController@delete');

    Route::get('/khawzawl_local_councilsDelete/{id}','KhawzawlLocalCouncilController@delete');

    Route::get('/kolasib_local_councilsDelete/{id}','KolasibLocalCouncilController@delete');

    Route::get('/lawngtlai_local_councilsDelete/{id}','LawngtlaiLocalCouncilController@delete');

    Route::get('/serchhip_local_councilsDelete/{id}','SerchhipLocalCouncilController@delete');

    Route::get('/lunglei_road_div2_hnahthialsDelete/{id}','LungleiRoadDiv2HnahthialController@delete');
    Route::get('/hmuifang_divisionsDelete/{id}','HmuifangDivisionController@delete');
    Route::get('/national_highway_div1sDelete/{id}','NationalHighwayDivOneController@delete');
    Route::get('/national_highway_div3sDelete/{id}','NationalHighwayDivThreeController@delete');




    //Engineer
    Route::get('/engineerList/{division_id}','EngineerController@index');
    Route::get('/engineerListDiv/{division_id}','EngineerController@engineerList');
    Route::post('/engineerAdd', 'EngineerController@create');
    Route::get('/engineerShow/{id}', 'EngineerController@show');
    Route::patch('/engineerEdit', 'EngineerController@edit');
    Route::get('/engineerDelete/{id}', 'EngineerController@destroy');

    //Report
    Route::get('/reportDateList/{division_id}', 'ReportController@indexDate');
    Route::get('/reportCompleteList/{division_id}', 'ReportController@indexComplete');
    Route::get('/reportDateShow/{id}','ReportController@showDate');
    Route::get('/reportCompleteShow/{id}','ReportController@showComplete');
    Route::get('/reportforRefund/{id}', 'ReportController@reportforRefund');


    Route::post('/reportFine', 'ReportController@reportFine');
    Route::post('/reportFineFormUnrefunded', 'ReportController@reportFineFormUnrefunded');
    Route::get('/reportforRefund/{id}', 'ReportController@reportforRefund');

    //Refund
    Route::get('/refundUnrefundList/{division_id}', 'RefundController@indexUnrefund');
    Route::get('/refundUnrefundShow/{id}', 'RefundController@showRefundUnrefund');
    Route::patch('/refundApprove', 'RefundController@refundApprove');
    Route::get('/refundrefundList/{division_id}', 'RefundController@indexRefund');
    Route::get('/fineList/{division_id}', 'RefundController@indexFine');
    // Route::get('/refundRefundedShow/{id}', 'RefundController@refundRefundedShow');


    Route::get('/featureShow/{id}', 'FeatureController@index');
    Route::get('/securityUpdate/{id}', 'FeatureController@securityUpdate');

    //Search
    Route::post('/searchbyMonth', 'SearchController@searchByMonth');



});


Route::group([

    'prefix' => 'api'

],



    function ($router) {

    Route::get('/contacts', 'ContactsController@index');
    Route::get('/contacts/{contact}', 'ContactsController@show');
    Route::delete('/contacts/{contact}', 'ContactsController@destroy');
    Route::post('/contacts', 'ContactsController@store');
    Route::post('search', 'SearchController@index');





});

// Route::middleware('auth:api')->group(function () {

//     Route::get('/contacts', 'ContactsController@index');
//     Route::get('/contacts/{contact}', 'ContactsController@show');
//     Route::delete('/contacts/{contact}', 'ContactsController@destroy');
//     Route::post('/contacts', 'ContactsController@store');
//     Route::post('search', 'SearchController@index');

// });




