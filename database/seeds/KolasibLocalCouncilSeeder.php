<?php

use Illuminate\Database\Seeder;
use App\KolasibLocalCouncil;

class KolasibLocalCouncilSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        KolasibLocalCouncil::truncate();

        KolasibLocalCouncil::create(['name' => 'Rengtekawn','division_id'=>10]);
        KolasibLocalCouncil::create(['name' => 'New Builum','division_id'=>10]);
        KolasibLocalCouncil::create(['name' => 'Tuitha veng','division_id'=>10]);
        KolasibLocalCouncil::create(['name' => 'Hebron','division_id'=>10]);
        KolasibLocalCouncil::create(['name' => 'Saidan','division_id'=>10]);
        KolasibLocalCouncil::create(['name' => 'Hmar veng','division_id'=>10]);
        KolasibLocalCouncil::create(['name' => 'Tumpui','division_id'=>10]);
        KolasibLocalCouncil::create(['name' => 'Electric veng','division_id'=>10]);
        KolasibLocalCouncil::create(['name' => 'Venglai','division_id'=>10]);
        KolasibLocalCouncil::create(['name' => 'Venglai East','division_id'=>10]);
        KolasibLocalCouncil::create(['name' => 'Project veng','division_id'=>10]);
        KolasibLocalCouncil::create(['name' => 'College veng','division_id'=>10]);
        KolasibLocalCouncil::create(['name' => 'Diakkawn','division_id'=>10]);
        KolasibLocalCouncil::create(['name' => 'Diakkawn Salem veng','division_id'=>10]);
        KolasibLocalCouncil::create(['name' => 'Diakkawn Galili','division_id'=>10]);
        KolasibLocalCouncil::create(['name' => 'Diakkawn Bazar veng','division_id'=>10]);
        KolasibLocalCouncil::create(['name' => 'Diakkawn Highway','division_id'=>10]);
        KolasibLocalCouncil::create(['name' => 'Diakkawn Thlanmual Road','division_id'=>10]);
        KolasibLocalCouncil::create(['name' => 'New Diakkawn','division_id'=>10]);
        KolasibLocalCouncil::create(['name' => 'New Diakkawn Challui','division_id'=>10]);
        KolasibLocalCouncil::create(['name' => 'Vengthar','division_id'=>10]);
        KolasibLocalCouncil::create(['name' => 'Vengthar Highway','division_id'=>10]);
        KolasibLocalCouncil::create(['name' => 'Vengthar Soil mual','division_id'=>10]);
        KolasibLocalCouncil::create(['name' => 'Vengthar Bethel mual','division_id'=>10]);
        KolasibLocalCouncil::create(['name' => 'Vengthar ICAR Road','division_id'=>10]);
        KolasibLocalCouncil::create(['name' => 'Vengthar Dinthar','division_id'=>10]);
        KolasibLocalCouncil::create(['name' => 'Khuangpuilam','division_id'=>10]);

    }
}
