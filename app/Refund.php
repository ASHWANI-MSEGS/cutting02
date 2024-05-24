<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Refund extends Model
{
    protected $fillable = [
        'form_id','estimate_id','report_id','refund_status','deposit','reason','division_id','hdfc_code','ac_name','ac_number','ifsc','form_memo',
    ];
}
