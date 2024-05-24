<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Report extends Model
{
    protected $fillable = [
        'form_id','from_memo','date','cdate','ac_name','ac_number','ifsc','division_id','report_status',
    ];
}
