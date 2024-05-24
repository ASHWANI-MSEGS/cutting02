<?php

use Illuminate\Database\Seeder;
use App\MamitLocalCouncil;

class MamitLocalCouncilSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        MamitLocalCouncil::truncate();

        MamitLocalCouncil::create(['name' => 'Luangpawl','division_id'=>7]);
        MamitLocalCouncil::create(['name' => 'New Mamit','division_id'=>7]);
        MamitLocalCouncil::create(['name' => 'Chhim veng','division_id'=>7]);
        MamitLocalCouncil::create(['name' => 'Bazar veng','division_id'=>7]);
        MamitLocalCouncil::create(['name' => 'Venghlun','division_id'=>7]);
        MamitLocalCouncil::create(['name' => 'Hmar veng','division_id'=>7]);

    }
}
