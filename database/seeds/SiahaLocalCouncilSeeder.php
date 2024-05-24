<?php

use Illuminate\Database\Seeder;
use App\SiahaLocalCouncil;

class SiahaLocalCouncilSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        SiahaLocalCouncil::truncate();


        SiahaLocalCouncil::create(['name' => 'Siaha Vaihpi-I','division_id'=>8]);
        SiahaLocalCouncil::create(['name' => 'Siaha Vaihpi-II','division_id'=>8]);
        SiahaLocalCouncil::create(['name' => 'Siaha Vaihpi-III','division_id'=>8]);
        SiahaLocalCouncil::create(['name' => 'Siaha Vaihpi Bazar','division_id'=>8]);
        SiahaLocalCouncil::create(['name' => 'College Vaih-I','division_id'=>8]);
        SiahaLocalCouncil::create(['name' => 'College Vaih-II','division_id'=>8]);
        SiahaLocalCouncil::create(['name' => 'College Vaih-III','division_id'=>8]);
        SiahaLocalCouncil::create(['name' => 'Council Vaih','division_id'=>8]);
        SiahaLocalCouncil::create(['name' => 'N.Colony-I','division_id'=>8]);
        SiahaLocalCouncil::create(['name' => 'N.Colony-II','division_id'=>8]);
        SiahaLocalCouncil::create(['name' => 'N.Colony-III','division_id'=>8]);
        SiahaLocalCouncil::create(['name' => 'N.Colony-IV','division_id'=>8]);
        SiahaLocalCouncil::create(['name' => 'Meişavai East','division_id'=>8]);
        SiahaLocalCouncil::create(['name' => 'Meisavai West','division_id'=>8]);
        SiahaLocalCouncil::create(['name' => 'New Siaha East-I','division_id'=>8]);
        SiahaLocalCouncil::create(['name' => 'New Siaha East-II','division_id'=>8]);
        SiahaLocalCouncil::create(['name' => 'New Siaha West-I','division_id'=>8]);
        SiahaLocalCouncil::create(['name' => 'New Siaha West-II','division_id'=>8]);
        SiahaLocalCouncil::create(['name' => 'Meisatla-I','division_id'=>8]);
        SiahaLocalCouncil::create(['name' => 'Meisatla-II','division_id'=>8]);
        SiahaLocalCouncil::create(['name' => 'Siahatla-II','division_id'=>8]);
        SiahaLocalCouncil::create(['name' => 'Siahatla-II','division_id'=>8]);
        SiahaLocalCouncil::create(['name' => 'Siahatla-III','division_id'=>8]);
        SiahaLocalCouncil::create(['name' => 'ECM Vaih','division_id'=>8]);

    }
}
