<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Grant extends Model
{
    protected $fillable = [
        'form_memo','form_id','grant_status','division_id','validity','granted_by'
    ];

    public function user() {
        return $this->belongsTo(User::class, 'granted_by');
    }
}


