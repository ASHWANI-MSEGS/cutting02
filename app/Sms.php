<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Sms extends Model
{
       protected $fillable = [
        'phone', 'messsage', 'form_id',
    ];
}
