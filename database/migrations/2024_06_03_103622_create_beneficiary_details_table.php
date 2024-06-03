<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBeneficiaryDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('beneficiary_details', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('beneficiary_name');
            $table->string('division_id');
            $table->string('beneficiary_account_no');
            $table->string('bank_name');
            $table->string('branch');
            $table->string('ifsc');
            $table->string('beneficiary_address');
            $table->string('beneficiary_contact');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('beneficiary_details');
    }
}
