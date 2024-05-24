<?php

use Illuminate\Database\Seeder;
use App\SerchhipLocalCouncil;

class SerchhipLocalCouncilSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        SerchhipLocalCouncil::truncate();

        SerchhipLocalCouncil::create(['name' => 'Bukpui','division_id'=>12]);
        SerchhipLocalCouncil::create(['name' => 'Kikawn','division_id'=>12]);
        SerchhipLocalCouncil::create(['name' => 'New Serchhip Bazar veng','division_id'=>12]);
        SerchhipLocalCouncil::create(['name' => 'New Serchhip Venglai','division_id'=>12]);
        SerchhipLocalCouncil::create(['name' => 'IOC Veng','division_id'=>12]);
        SerchhipLocalCouncil::create(['name' => 'Bilzel veng','division_id'=>12]);
        SerchhipLocalCouncil::create(['name' => 'Tlangnuam veng','division_id'=>12]);
        SerchhipLocalCouncil::create(['name' => 'P&E Veng','division_id'=>12]);
        SerchhipLocalCouncil::create(['name' => 'Leisang veng','division_id'=>12]);
        SerchhipLocalCouncil::create(['name' => 'Hmar veng','division_id'=>12]);
        SerchhipLocalCouncil::create(['name' => 'Chanmari veng','division_id'=>12]);
        SerchhipLocalCouncil::create(['name' => 'Chanmari vengthar','division_id'=>12]);
        SerchhipLocalCouncil::create(['name' => 'Chanmari Lane hnuai','division_id'=>12]);
        SerchhipLocalCouncil::create(['name' => 'AOC Veng','division_id'=>12]);
        SerchhipLocalCouncil::create(['name' => 'Venglai','division_id'=>12]);
        SerchhipLocalCouncil::create(['name' => 'Bazar veng','division_id'=>12]);
        SerchhipLocalCouncil::create(['name' => 'Bazar hnuai','division_id'=>12]);
        SerchhipLocalCouncil::create(['name' => 'Chhim veng','division_id'=>12]);
        SerchhipLocalCouncil::create(['name' => 'Field veng','division_id'=>12]);
        SerchhipLocalCouncil::create(['name' => 'Ramhlun veng','division_id'=>12]);
        SerchhipLocalCouncil::create(['name' => 'Vengchung','division_id'=>12]);
        SerchhipLocalCouncil::create(['name' => 'Saron veng','division_id'=>12]);
        SerchhipLocalCouncil::create(['name' => 'Zozam veng','division_id'=>12]);
        SerchhipLocalCouncil::create(['name' => 'Tuikhuah veng','division_id'=>12]);
        SerchhipLocalCouncil::create(['name' => 'Dinthar veng','division_id'=>12]);
        SerchhipLocalCouncil::create(['name' => 'Darnam veng','division_id'=>12]);
        SerchhipLocalCouncil::create(['name' => 'Sailiam','division_id'=>12]);
        SerchhipLocalCouncil::create(['name' => 'Agri Complex','division_id'=>12]);
        SerchhipLocalCouncil::create(['name' => 'Khawte tlang','division_id'=>12]);
        SerchhipLocalCouncil::create(['name' => 'Chhimveng Chhiahtlang','division_id'=>12]);
        SerchhipLocalCouncil::create(['name' => 'Kawnveng Chhiahtlang','division_id'=>12]);
        SerchhipLocalCouncil::create(['name' => 'Venghlun Chhiahtlang','division_id'=>12]);
        SerchhipLocalCouncil::create(['name' => 'Chanmari veng Chhiahtlang','division_id'=>12]);
        SerchhipLocalCouncil::create(['name' => 'Hmar veng Chhiahtlang','division_id'=>12]);
        SerchhipLocalCouncil::create(['name' => 'Vengchung Chhiahtlang','division_id'=>12]);
        SerchhipLocalCouncil::create(['name' => 'Jail veng','division_id'=>12]);

    }
}
