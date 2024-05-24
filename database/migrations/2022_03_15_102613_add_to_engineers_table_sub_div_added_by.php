<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddToEngineersTableSubDivAddedBy extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('engineers', function (Blueprint $table) {
            $table->integer('sub_div')->nullable();//changed from nullable to nullable()
            $table->integer('added_by')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('engineers', function (Blueprint $table) {
            //
        });
    }
}
