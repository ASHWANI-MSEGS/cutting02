<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MamitLocalCouncil extends Model
{
    protected $fillable =[
        'name', 'division_id','sub_div','added_by'

    ];
}