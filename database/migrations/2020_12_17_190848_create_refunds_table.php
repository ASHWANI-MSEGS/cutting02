<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRefundsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if(Schema::hasTable('refunds')) return;
        Schema::create('refunds', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->string('form_memo')->nullable();
            $table->integer('form_id')->nullable();
            $table->integer('estimate_id')->nullable();
            $table->integer('report_id')->nullable();
            $table->string('refund_status')->nullable();
            $table->float('deposit')->nullable();
            $table->string('reason')->nullable();
            $table->string('division_id')->nullable();
            $table->string('hdfc_code')->nullable();
            $table->string('ac_name')->nullable();
            $table->string('ac_number')->nullable();
            $table->string('ifsc')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('refunds');
    }
}
