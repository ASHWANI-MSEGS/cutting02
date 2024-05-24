<?php

use Illuminate\Database\Seeder;
use App\KhawzawlLocalCouncil;

class KhawzawlLocalCouncilSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        KhawzawlLocalCouncil::truncate();

        KhawzawlLocalCouncil::create(['name' => 'Lungvar veng','division_id'=>9]);
        KhawzawlLocalCouncil::create(['name' => 'Darngawn veng','division_id'=>9]);
        KhawzawlLocalCouncil::create(['name' => 'Arro veng','division_id'=>9]);
        KhawzawlLocalCouncil::create(['name' => 'Zaingen veng','division_id'=>9]);
        KhawzawlLocalCouncil::create(['name' => 'Zuchhip veng','division_id'=>9]);
        KhawzawlLocalCouncil::create(['name' => 'Dinthar veng','division_id'=>9]);
        KhawzawlLocalCouncil::create(['name' => 'Kawnzar veng','division_id'=>9]);
        KhawzawlLocalCouncil::create(['name' => 'Vengthar','division_id'=>9]);
        KhawzawlLocalCouncil::create(['name' => 'Electric veng','division_id'=>9]);
        KhawzawlLocalCouncil::create(['name' => 'Hermon veng','division_id'=>9]);
    }
}
