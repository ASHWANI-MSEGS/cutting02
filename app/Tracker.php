<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tracker extends Model
{
    protected $fillable = [
        'encResponse','rcvdString','decryptValues',
    ];
}
