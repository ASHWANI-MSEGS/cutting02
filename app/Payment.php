<?php

namespace App;
// use Laravel\Scout\Searchable;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    //
    protected $fillable = [
        'order_id', 'tracking_id', 'bank_ref_no','order_status','payment_mode','card_name','currency','amount',
        'billing_name','discount_value','mer_amount','trans_date','form_memo','division_id','payment_status','sub_div',
    ];
}
