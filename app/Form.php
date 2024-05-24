<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
// use Laravel\Scout\Searchable;
use App\User;
use App\Localcouncil;
use App\Estimate;
use App\Track;


class Form extends Model
{

    // use Searchable;
    
    protected $fillable = [
        'name', 'email', 'user_id','phone','water_id','road_type','length','location','status','localcouncil_id','memo','division_id','estimate_status','track_status','estimate_id'
    ];


    public function user()
    {
        $this->belongsTo('\App\User');
    }

    public function estimate()
    {
        $this->belongsTo('\App\Estimate');
    }

    public function track()
    {
        $this->belongsTo('App\Track');
    }
   

}
