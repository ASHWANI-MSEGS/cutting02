<?php

use Illuminate\Database\Seeder;
use App\ChamphaiLocalCouncil;



class ChamphaiLocalCouncilSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ChamphaiLocalcouncil::truncate();

        ChamphaiLocalcouncil::create(['name' => 'Vengsang','division_id'=>4]);
        ChamphaiLocalcouncil::create(['name' => 'Keifang tlang (DC Complex)','division_id'=>4]);
        ChamphaiLocalcouncil::create(['name' => 'Kahrawt','division_id'=>4]);
        ChamphaiLocalcouncil::create(['name' => 'Vengthlang','division_id'=>4]);
        ChamphaiLocalcouncil::create(['name' => 'Vengthlang North','division_id'=>4]);
        ChamphaiLocalcouncil::create(['name' => 'Venglai','division_id'=>4]);
        ChamphaiLocalcouncil::create(['name' => 'Kanan veng','division_id'=>4]);
        ChamphaiLocalcouncil::create(['name' => 'Dinthar','division_id'=>4]);
        ChamphaiLocalcouncil::create(['name' => 'Electric veng','division_id'=>4]);
        ChamphaiLocalcouncil::create(['name' => 'Bethel veng','division_id'=>4]);
        ChamphaiLocalcouncil::create(['name' => 'Zion veng','division_id'=>4]);
        ChamphaiLocalcouncil::create(['name' => 'Vengthar','division_id'=>4]);
        ChamphaiLocalcouncil::create(['name' => 'New Champhai','division_id'=>4]);
        ChamphaiLocalcouncil::create(['name' => 'Hmunhmeltha','division_id'=>4]);
        ChamphaiLocalcouncil::create(['name' => 'Zote','division_id'=>4]);
        ChamphaiLocalcouncil::create(['name' => 'Tlangsam','division_id'=>4]);
        ChamphaiLocalcouncil::create(['name' => 'Zotlang','division_id'=>4]);
        ChamphaiLocalcouncil::create(['name' => 'Ruantlang','division_id'=>4]);
    }
}
