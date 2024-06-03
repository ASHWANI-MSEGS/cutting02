<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BeneficiaryDetails extends Model
{
    protected $fillable =[
        'beneficiary_name','division_id','beneficiary_account_no','bank_name','branch','ifsc','beneficiary_address','beneficiary_contact'
    ];
}
