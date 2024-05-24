<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGrantsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if(Schema::hasTable('grants')) return;
        Schema::create('grants', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->string('form_memo');
            $table->string('form_id');
            $table->string('grant_status');
            $table->string('division_id');
            $table->string('validity');
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('grants');
    }
}
