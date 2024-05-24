<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Localcouncil extends Model
{
    protected $fillable = [
        'name', 'division_id','sub_div','added_by'
    ];


}
