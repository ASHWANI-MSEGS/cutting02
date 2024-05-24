<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\User;
use App\Role;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::truncate();

        //Super Admin

        $superadminRole = Role::select('id')->where('name','superadmin')->first();
        $eeadminRole = Role::select('id')->where('name','eeadmin')->first();
        $operatoradminRole = Role::select('id')->where('name','operatoradmin')->first();


        $superadmin = User::create([
            'name' => 'Super Admin',
            'email'=> 'superadmin@mail.com',
            'password'=> Hash::make('password123'),
            'role_id'=> 1,
            'division_id' => 3,
            'phone' => 9158086237,
            'api_token' => Str::random(10),
        ]);


        //North
        $northoperator = User::create([
            'name' => 'Operator North',
            'email'=> 'northoperator@mail.com',
            'password'=> Hash::make('password123'),
            'role_id'=> 3,
            'division_id' => 2,
            'phone' => 9158086237,
            'api_token' => Str::random(10),
        ]);

        $northee = User::create([
            'name' => 'EE North',
            'email'=> 'northee@mail.com',
            'password'=> Hash::make('password123'),
            'role_id'=> 2,
            'division_id' => 2,
            'phone' => 9158086237,
            'api_token' => Str::random(10),
        ]);

        // South
        $southoperator = User::create([
            'name' => 'Operator South',
            'email'=> 'southoperator@mail.com',
            'password'=> Hash::make('password123'),
            'role_id'=> 3,
            'division_id' => 1,
            'phone' => 9158086237,
            'api_token' => Str::random(10),
        ]);

        $southee = User::create([
            'name' => 'EE South',
            'email'=> 'southee@mail.com',
            'password'=> Hash::make('password123'),
            'role_id'=> 2,
            'division_id' => 1,
            'phone' => 9158086237,
            'api_token' => Str::random(10),
        ]);

        $superadmin->roles()->attach($superadminRole);
        $northee->roles()->attach($eeadminRole);
        $northoperator->roles()->attach($operatoradminRole);
        $southee->roles()->attach($eeadminRole);
        $southoperator->roles()->attach($operatoradminRole);

    }
}
