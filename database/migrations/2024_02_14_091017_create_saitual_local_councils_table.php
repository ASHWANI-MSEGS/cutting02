<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSaitualLocalCouncilsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('saitual_local_councils', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->integer('division_id');
            $table->integer('sub_div')->nullable(); 
            $table->integer('added_by')->nullable();
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
        Schema::dropIfExists('saitual_local_councils');
    }
}
