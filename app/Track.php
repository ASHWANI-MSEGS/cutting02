<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Form;
use Laravel\Scout\Searchable;

class Track extends Model
{
    protected $fillable = [
        'form_id', 'status', 'user_id','estimate_id',
    ];


    public function form()
    {
        return $this->hasOne('App\Form');
    }


}
