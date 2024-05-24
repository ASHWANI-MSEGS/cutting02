<?php

use Illuminate\Database\Seeder;
use App\District;

class DistrictSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        District::truncate();

        District::create(['name' => 'Aizawl']);
        District::create(['name' => 'Champhai']);
        District::create(['name' => 'Lunglei']);
        District::create(['name' => 'Saitual']);
        District::create(['name' => 'Mamit']);
        District::create(['name' => 'Siaha']);
        District::create(['name' => 'Khawzawl']);
        District::create(['name' => 'Kolasib']);
        District::create(['name' => 'Lawngtlai']);
        District::create(['name' => 'Serchhip']);

        District::create(['name' => 'Lunglei Road Div-II, Hnahthial']);
        District::create(['name' => 'Hmuifang Division']);
        District::create(['name' => 'National Highway Div-I']);
        District::create(['name' => 'National Highway Div-III']);
    }
}
