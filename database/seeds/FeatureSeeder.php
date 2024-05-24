<?php

use Illuminate\Database\Seeder;
use App\Feature;

class FeatureSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Feature::truncate();

        Feature::create([
            'feature' => 'security_deposit',
            'status' => '0',
            'division_id' => '1',
            ]);

        Feature::create([
            'feature' => 'security_deposit',
            'status' => '0',
            'division_id' => '2',
            ]);
        Feature::create([
            'feature' => 'security_deposit',
            'status' => '0',
            'division_id' => '4',
            ]);
        Feature::create([
            'feature' => 'security_deposit',
            'status' => '0',
            'division_id' => '5',
            ]);
        Feature::create([
            'feature' => 'security_deposit',
            'status' => '0',
            'division_id' => '6',
            ]);
        Feature::create([
            'feature' => 'security_deposit',
            'status' => '0',
            'division_id' => '7',
            ]);
        Feature::create([
            'feature' => 'security_deposit',
            'status' => '0',
            'division_id' => '8',
            ]);
        Feature::create([
            'feature' => 'security_deposit',
            'status' => '0',
            'division_id' => '9',
            ]);
        Feature::create([
            'feature' => 'security_deposit',
            'status' => '0',
            'division_id' => '10',
            ]);
        Feature::create([
            'feature' => 'security_deposit',
            'status' => '0',
            'division_id' => '11',
            ]);
        Feature::create([
            'feature' => 'security_deposit',
            'status' => '0',
            'division_id' => '12',
            ]);
        Feature::create([
            'feature' => 'security_deposit',
            'status' => '0',
            'division_id' => '13',
            ]);
        Feature::create([
            'feature' => 'security_deposit',
            'status' => '0',
            'division_id' => '14',
            ]);
        Feature::create([
            'feature' => 'security_deposit',
            'status' => '0',
            'division_id' => '15',
            ]);
        Feature::create([
            'feature' => 'security_deposit',
            'status' => '0',
            'division_id' => '16',
            ]);
    }
}
