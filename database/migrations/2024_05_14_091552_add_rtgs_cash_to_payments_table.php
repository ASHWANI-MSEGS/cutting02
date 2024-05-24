<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRtgsCashToPaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('payments', function (Blueprint $table) {
            $table->string('account_holder_name')->nullable();
            $table->string('bank_account_no')->nullable();
            $table->string('bank_name')->nullable();
            $table->string('branch_name')->nullable();
            $table->string('ifsc_code')->nullable();
            $table->string('rtgs_neft_no')->nullable();

            $table->string('payer_name')->nullable();
            $table->string('payer_phone')->nullable();
            $table->string('identification_type')->nullable();
            $table->string('identification_no')->nullable();
            $table->string('amount_receiver_name')->nullable();
            $table->string('amount_receiver_phone')->nullable();
            $table->string('road_location')->nullable();
            $table->string('house_no')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('payments', function (Blueprint $table) {
            //
        });
    }
}
