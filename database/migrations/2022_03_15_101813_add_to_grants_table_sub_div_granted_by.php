<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddToGrantsTableSubDivGrantedBy extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('grants', function (Blueprint $table) {
            $table->integer('sub_div')->nullable();//changed from nullable to nullable()
            $table->integer('granted_by')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('grants', function (Blueprint $table) {
            //
        });
    }
}
