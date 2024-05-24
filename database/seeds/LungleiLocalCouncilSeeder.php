<?php

use Illuminate\Database\Seeder;
use App\LungleiLocalCouncil;

class LungleiLocalCouncilSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        LungleiLocalCouncil::truncate();

        LungleiLocalCouncil::create(['name' => 'Theiriat','division_id'=>5]);
        LungleiLocalCouncil::create(['name' => 'Lunglawn','division_id'=>5]);
        LungleiLocalCouncil::create(['name' => 'Salem veng','division_id'=>5]);
        LungleiLocalCouncil::create(['name' => 'Farm veng','division_id'=>5]);
        LungleiLocalCouncil::create(['name' => 'Ramthar','division_id'=>5]);
        LungleiLocalCouncil::create(['name' => 'Chanmari','division_id'=>5]);
        LungleiLocalCouncil::create(['name' => 'Venglai','division_id'=>5]);
        LungleiLocalCouncil::create(['name' => 'Electric veng','division_id'=>5]);
        LungleiLocalCouncil::create(['name' => 'Bazar veng','division_id'=>5]);
        LungleiLocalCouncil::create(['name' => 'Rahsi veng','division_id'=>5]);
        LungleiLocalCouncil::create(['name' => 'Sazaikawn','division_id'=>5]);
        LungleiLocalCouncil::create(['name' => 'Venghlun','division_id'=>5]);
        LungleiLocalCouncil::create(['name' => 'College veng','division_id'=>5]);
        LungleiLocalCouncil::create(['name' => 'Zohnuai','division_id'=>5]);
        LungleiLocalCouncil::create(['name' => 'Serkawn','division_id'=>5]);
        LungleiLocalCouncil::create(['name' => 'Zotlang','division_id'=>5]);
        LungleiLocalCouncil::create(['name' => 'Pukpui','division_id'=>5]);

    }
}
