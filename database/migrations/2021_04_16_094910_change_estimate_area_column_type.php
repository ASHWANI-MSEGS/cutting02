<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeEstimateAreaColumnType extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('estimates', function (Blueprint $table) {
            $table->decimal('length', 15, 4)->change();
        });
        Schema::table('estimates', function (Blueprint $table) {
            $table->decimal('breadth', 15, 4)->change();
        });
        Schema::table('estimates', function (Blueprint $table) {
            $table->decimal('area', 15, 2)->change();
        });
        Schema::table('estimates', function (Blueprint $table) {
            $table->decimal('rate', 15, 2)->change();
        });
        Schema::table('estimates', function (Blueprint $table) {
            $table->decimal('amount', 15, 2)->change();
        });
        Schema::table('estimates', function (Blueprint $table) {
            $table->decimal('deposit', 15, 2)->change();
        });
        Schema::table('estimates', function (Blueprint $table) {
            $table->decimal('total', 15, 2)->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
