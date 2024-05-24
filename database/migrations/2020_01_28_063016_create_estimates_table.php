<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEstimatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if(Schema::hasTable('estimates')) return;
        Schema::create('estimates', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->string('form_memo');
            $table->string('road_name');
            $table->string('road_type');
            $table->float('length');
            $table->float('breadth');
            $table->float('area');
            $table->float('amount');
            $table->float('deposit');
            $table->float('rate');
            $table->float('total');
            $table->integer('form_id');
            $table->integer('division_id');
            $table->boolean('estimate_status');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('estimates');
    }
}
