<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFormsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if(Schema::hasTable('forms')) return;
        Schema::create('forms', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('user_id');
            $table->string('name')->nullable();
            $table->string('email')->nullable();
            $table->string('phone')->nullable();


            $table->string('rhouseno')->nullable();
            $table->string('rlocalcouncil_name')->nullable(); 
            $table->string('rcity')->nullable();
            $table->string('rdistrict')->nullable();

            $table->string('houseno')->nullable();
            $table->string('localcouncil_name')->nullable(); 
            $table->string('city')->nullable();
            $table->string('district')->nullable();


            $table->integer('water_id')->nullable();
            $table->integer('road_type')->nullable();
            $table->string('length')->nullable();
            $table->string('location')->nullable();

            $table->integer('division_id')->nullable();
            $table->boolean('status')->nullable();
            $table->string('memo')->nullable();

            $table->string('engineer_id')->nullable();
            $table->string('engineer_post')->nullable();
            $table->string('engineer_name')->nullable();
            $table->string('engineer_phone')->nullable();
            
            $table->boolean('estimate_status')->nullable();
            $table->integer('track_status')->nullable();
            $table->integer('send')->nullable();

            $table->string('estimate_id')->nullable();
            $table->string('payment_id')->nullable();
            $table->string('report_id')->nullable();
            $table->string('grant_id')->nullable();


            $table->string('reason')->nullable();
            
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
        Schema::dropIfExists('forms');
    }
}
