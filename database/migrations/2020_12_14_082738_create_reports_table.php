<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReportsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if(Schema::hasTable('reports')) return;
        Schema::create('reports', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->string('form_id')->nullable();
            $table->string('form_memo')->nullable();
            $table->string('division_id')->nullable();
            $table->string('date')->nullable();
            $table->string('cdate')->nullable();
            $table->string('ac_name')->nullable();
            $table->string('ac_number')->nullable();
            $table->string('ifsc')->nullable();
            $table->string('report_status')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reports');
    }
}
