<?php

use Illuminate\Database\Seeder;
use App\LungleiRoadDiv2Hnahthial;
class LungleiRoadDiv2HnahthialSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        LungleiRoadDiv2Hnahthial::truncate();

        LungleiRoadDiv2Hnahthial::create(['name' => 'Chanmari','division_id'=>13]);
        LungleiRoadDiv2Hnahthial::create(['name' => 'Lungleng veng','division_id'=>13]);
        LungleiRoadDiv2Hnahthial::create(['name' => 'Model veng','division_id'=>13]);
        LungleiRoadDiv2Hnahthial::create(['name' => 'Peniel','division_id'=>13]);
        LungleiRoadDiv2Hnahthial::create(['name' => 'Venglai','division_id'=>13]);
        LungleiRoadDiv2Hnahthial::create(['name' => 'Bazar','division_id'=>13]);
        LungleiRoadDiv2Hnahthial::create(['name' => 'Kanaan veng','division_id'=>13]);
        LungleiRoadDiv2Hnahthial::create(['name' => 'Electric veng','division_id'=>13]);
    }
}
