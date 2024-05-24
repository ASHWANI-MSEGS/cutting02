<?php

use Illuminate\Database\Seeder;
use App\LawngtlaiLocalCouncil;

class LawngtlaiLocalCouncilSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        LawngtlaiLocalCouncil::truncate();

        LawngtlaiLocalCouncil::create(['name' => 'Vengpui-I','division_id'=>11]);
        LawngtlaiLocalCouncil::create(['name' => 'Vengpui-II','division_id'=>11]);
        LawngtlaiLocalCouncil::create(['name' => 'Bazar veng','division_id'=>11]);
        LawngtlaiLocalCouncil::create(['name' => 'Chanmari','division_id'=>11]);
        LawngtlaiLocalCouncil::create(['name' => 'Bethel veng','division_id'=>11]);
        LawngtlaiLocalCouncil::create(['name' => 'AOC veng','division_id'=>11]);
        LawngtlaiLocalCouncil::create(['name' => 'Venglai','division_id'=>11]);
        LawngtlaiLocalCouncil::create(['name' => 'Electric veng','division_id'=>11]);
        LawngtlaiLocalCouncil::create(['name' => 'Salem veng (L-III)','division_id'=>11]);
        LawngtlaiLocalCouncil::create(['name' => 'College veng','division_id'=>11]);
        LawngtlaiLocalCouncil::create(['name' => 'Council veng','division_id'=>11]);
        LawngtlaiLocalCouncil::create(['name' => 'Chawnhu','division_id'=>11]);
        LawngtlaiLocalCouncil::create(['name' => 'Thingkah','division_id'=>11]);

    }
}
