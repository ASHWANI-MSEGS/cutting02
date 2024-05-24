<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if(Schema::hasTable('payments')) return;
        Schema::create('payments', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->string('order_id')->unique();
            $table->string('tracking_id')->unique();
            $table->string('bank_ref_no')->nullable();
            $table->string('order_status')->nullable();
            $table->string('payment_mode')->nullable();
            $table->string('card_name')->nullable();
            $table->string('currency')->nullable();
            $table->string('amount')->nullable();
            $table->string('billing_name')->nullable();
            $table->string('discount_value')->nullable();
            $table->string('mer_amount')->nullable();
            $table->string('trans_date')->nullable();
            $table->string('form_memo')->nullable();
            $table->string('form_id')->nullable();
            $table->integer('division_id')->nullable();    
            $table->string('payment_status')->nullable();   
               

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('payments');
    }
}
