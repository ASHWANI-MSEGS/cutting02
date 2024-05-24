<?php

use Illuminate\Database\Seeder;
use App\NationalHighwayDivThree;
class NationalHighwayDivThreeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        NationalHighwayDivThree::truncate();
        NationalHighwayDivThree::create(['name' => 'Bairabi','division_id'=>16]);
        NationalHighwayDivThree::create(['name' => 'Bilkhawthlir','division_id'=>16]);
        NationalHighwayDivThree::create(['name' => 'Vairengte','division_id'=>16]);
        NationalHighwayDivThree::create(['name' => 'Thingdawl','division_id'=>16]);

    }
}
