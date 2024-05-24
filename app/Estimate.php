<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Form;

class Estimate extends Model
{
    protected $fillable = [
        'road_name','road_type','form_memo','length', 'breadth','amount','deposit', 'area','rate','total','form_id','division_id','estimate_status','approve_by','enter_by','sub_div',
    ];

    
    


    public function form()
    {
        $this->hasOne('\App\Form');
    }
}
