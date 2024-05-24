<?php

namespace App\Http\Controllers;

use App\Contact;
use App\Payment;
use Illuminate\Http\Request;
use App\Http\Resources\Contact as ContactResource;

class SearchController extends Controller
{
    public function index()
    {
        $data = request()->validate([
            'searchTerm' => 'required',
        ]);

        $contacts = Contact::search($data['searchTerm'])->get();
        
        return ContactResource::collection($contacts);
    }


    public function searchByMonth(Request $request)
    {
        $data = $request->byMonth;

        // $orderdate = explode('-', $data);
        // $month = $orderdate[1];
        // // $day   = $orderdate[1];
        // $year  = $orderdate[0];

        $time  = strtotime($data);
        // $day   = date('d',$time);
        $month = date('m',$time);
        $year  = date('Y',$time);

        if($month == 1)
        {
            $monthName = "January";
        }
        else if($month == 2)
        {
            $monthName = "February";
        }
        else if($month == 3)
        {
            $monthName = "March";
        }
        else if($month == 4)
        {
            $monthName = "April";
        }
        else if($month == 5)
        {
            $monthName = "May";
        }
        else if($month == 6)
        {
            $monthName = "June";
        }
        else if($month == 7)
        {
            $monthName = "July";
        }
        else if($month == 8)
        {
            $monthName = "August";
        }
        else if($month == 9)
        {
            $monthName = "September";
        }
        else if($month == 10)
        {
            $monthName = "October";
        }
        else if($month == 11)
        {
            $monthName = "November";
        }
        else if($month == 12)
        {
            $monthName = "December";
        }
  

        $payments_total = number_format(Payment::whereYear('created_at', '=', $year)
        ->whereMonth('created_at', '=', $month)
        ->where('order_status', 'Success')
        ->sum('amount'), 2);

        $payments_total_south = number_format(Payment::whereYear('created_at', '=', $year)
        ->whereMonth('created_at', '=', $month)
        ->where('order_status', 'Success')
        ->where('division_id', 1)
        ->sum('amount'), 2);

        $payments_total_north = number_format(Payment::whereYear('created_at', '=', $year)
        ->whereMonth('created_at', '=', $month)
        ->where('order_status', 'Success')
        ->where('division_id', 2)
        ->sum('amount'), 2);




        return response()->json([

            "payments_total" => $payments_total,
            "payments_total_north"=> $payments_total_north,
            "payments_total_south"=> $payments_total_south,
            "monthName"=> $monthName,
            "year" => $year

        ]);




    }

}
