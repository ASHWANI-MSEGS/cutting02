<?php

use Illuminate\Database\Seeder;
use App\HmuifangDivision;
class HmuifangDivisionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {//fiex the divisionid
        HmuifangDivision::truncate();

        HmuifangDivision::create(['name' => 'Hualngohmun','division_id'=>14]);
        HmuifangDivision::create(['name' => 'Melriat','division_id'=>14]);
        HmuifangDivision::create(['name' => 'Kelsih','division_id'=>14]);
        HmuifangDivision::create(['name' => 'Falkawn','division_id'=>14]);
        HmuifangDivision::create(['name' => 'Muallungthu','division_id'=>14]);
        HmuifangDivision::create(['name' => 'Tachhip','division_id'=>14]);
        HmuifangDivision::create(['name' => 'Aibawk','division_id'=>14]);
        HmuifangDivision::create(['name' => 'Sateek','division_id'=>14]);
        HmuifangDivision::create(['name' => 'Maubuang','division_id'=>14]);
        HmuifangDivision::create(['name' => 'Thiak','division_id'=>14]);
        HmuifangDivision::create(['name' => 'Sumsuih','division_id'=>14]);
        HmuifangDivision::create(['name' => 'Hmuifang','division_id'=>14]);
        HmuifangDivision::create(['name' => 'Chamring','division_id'=>14]);
        HmuifangDivision::create(['name' => 'Sialsuk','division_id'=>14]);
        HmuifangDivision::create(['name' => 'Thenzawl','division_id'=>14]);
        HmuifangDivision::create(['name' => 'Buangpui','division_id'=>14]);
        HmuifangDivision::create(['name' => 'Neihloh','division_id'=>14]);
        HmuifangDivision::create(['name' => 'Darlung','division_id'=>14]);
        HmuifangDivision::create(['name' => 'S.Sabual','division_id'=>14]);
        HmuifangDivision::create(['name' => 'Bawngthah','division_id'=>14]);
        HmuifangDivision::create(['name' => 'Samlukhai','division_id'=>14]);
        HmuifangDivision::create(['name' => 'Sailam','division_id'=>14]);
        HmuifangDivision::create(['name' => 'Lamchhip','division_id'=>14]);
        HmuifangDivision::create(['name' => 'Chawilung','division_id'=>14]);
        HmuifangDivision::create(['name' => 'Phulpui','division_id'=>14]);
    }
}










