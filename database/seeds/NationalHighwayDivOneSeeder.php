<?php

use Illuminate\Database\Seeder;
use App\NationalHighwayDivOne;
class NationalHighwayDivOneSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        NationalHighwayDivOne::truncate();

        NationalHighwayDivOne::create(['name' => 'Rangvamual','division_id'=>15]);
        NationalHighwayDivOne::create(['name' => 'Phunchawng','division_id'=>15]);
        NationalHighwayDivOne::create(['name' => 'Lengpui','division_id'=>15]);
        NationalHighwayDivOne::create(['name' => 'Sairang','division_id'=>15]);
        NationalHighwayDivOne::create(['name' => 'Rengte','division_id'=>15]);
        NationalHighwayDivOne::create(['name' => 'Nghalchawm','division_id'=>15]);
        NationalHighwayDivOne::create(['name' => 'Sihhmui','division_id'=>15]);
    }
}
