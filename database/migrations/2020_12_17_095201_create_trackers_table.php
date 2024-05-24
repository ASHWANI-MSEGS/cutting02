<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTrackersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if(Schema::hasTable('trackers')) return;
        Schema::create('trackers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->longText('encResponse')->nullable();
            $table->longText('rcvdString')->nullable();
            $table->longText('decryptValues')->nullable();
            $table->longText('encrypted_data')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('trackers');
    }
}
