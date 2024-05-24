<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class KolasibLocalCouncil extends Model
{
    protected $fillable =[
        'name', 'division_id','sub_div','added_by'
    ];
}
