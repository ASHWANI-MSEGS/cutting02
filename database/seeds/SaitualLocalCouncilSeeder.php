<?php

use Illuminate\Database\Seeder;
use App\SaitualLocalCouncil;

class SaitualLocalCouncilSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        SaitualLocalCouncil::truncate();

        SaitualLocalCouncil::create(['name' => 'Dingdi veng (Saitual VC-1)','division_id'=>6,'sub_div'=>1]);
        SaitualLocalCouncil::create(['name' => 'C.I veng (Saitual VC-1)','division_id'=>6,'sub_div'=>1]);
        SaitualLocalCouncil::create(['name' => 'Kanan veng (Saitual VC-1)','division_id'=>6,'sub_div'=>1]);
        SaitualLocalCouncil::create(['name' => 'Lalmual (Saitual VC-2)','division_id'=>6,'sub_div'=>2]);
        SaitualLocalCouncil::create(['name' => 'Zonun veng (Saitual VC-2)','division_id'=>6,'sub_div'=>2]);
        SaitualLocalCouncil::create(['name' => 'Lungdawh Kawn (Saitual VC-2)','division_id'=>6,'sub_div'=>2]);
        SaitualLocalCouncil::create(['name' => 'Thlanmual veng (Saitual VC-2)','division_id'=>6,'sub_div'=>2]);
        SaitualLocalCouncil::create(['name' => 'Dinthar veng (Saitual VC-6)','division_id'=>6,'sub_div'=>3]);
        SaitualLocalCouncil::create(['name' => 'PWD veng (Saitual VC-6)','division_id'=>6,'sub_div'=>3]);
        SaitualLocalCouncil::create(['name' => 'Bethel veng (Saitual VC-6)','division_id'=>6,'sub_div'=>3]);
        SaitualLocalCouncil::create(['name' => 'Bawk veng (Saitual VC-6)','division_id'=>6,'sub_div'=>3]);
        SaitualLocalCouncil::create(['name' => 'Chawnpui veng (Saitual VC-6)','division_id'=>6,'sub_div'=>3]);
        SaitualLocalCouncil::create(['name' => 'College veng (Saitual VC-6)','division_id'=>6,'sub_div'=>3]);
        SaitualLocalCouncil::create(['name' => 'Mel veng (Keifang)','division_id'=>6,'sub_div'=>4]);
        SaitualLocalCouncil::create(['name' => 'Venghlun (Keifang)','division_id'=>6,'sub_div'=>4]);
        SaitualLocalCouncil::create(['name' => 'Police veng (Keifang)','division_id'=>6,'sub_div'=>4]);
        SaitualLocalCouncil::create(['name' => 'Vengsang (Keifang)','division_id'=>6,'sub_div'=>4]);
        SaitualLocalCouncil::create(['name' => 'Aizawl Road veng (Keifang)','division_id'=>6,'sub_div'=>4]);
        SaitualLocalCouncil::create(['name' => 'Nazaret veng (Keifang)','division_id'=>6,'sub_div'=>4]);
        SaitualLocalCouncil::create(['name' => 'Vengthar (Keifang)','division_id'=>6,'sub_div'=>4]);
        SaitualLocalCouncil::create(['name' => 'Rulchawm','division_id'=>6]);
        SaitualLocalCouncil::create(['name' => 'Ruallung','division_id'=>6]);
        SaitualLocalCouncil::create(['name' => 'Sihfa','division_id'=>6]);
    }
}
