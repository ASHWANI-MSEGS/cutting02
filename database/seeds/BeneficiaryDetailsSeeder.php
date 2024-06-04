<?php

use Illuminate\Database\Seeder;
use App\BeneficiaryDetails;
class BeneficiaryDetailsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        {
            // Truncate the table to start fresh
            BeneficiaryDetails::truncate();

            // Define the beneficiaries data
            $beneficiaries = [
                // Aizawl Road South
                ['beneficiary_name' => 'South1234','division_id'=>1 ,'beneficiary_account_no' => 'South1234', 'bank_name' => 'South1234', 'branch' => 'South1234', 'ifsc' => 'South1234','beneficiary_address' => 'South1234','beneficiary_contact' => 'South1234'],
                // Aizawl Road North
                ['beneficiary_name' => 'North1234','division_id'=>2 ,'beneficiary_account_no' => 'North1234', 'bank_name' => 'North1234', 'branch' => 'North1234', 'ifsc' => 'North1234','beneficiary_address' => 'North1234','beneficiary_contact' => 'North1234'],
// Champhai
                ['beneficiary_name' => 'Champhai1234','division_id'=>4  ,'beneficiary_account_no' => 'Champhai1234', 'bank_name' => 'Champhai1234', 'branch' => 'Champhai1234', 'ifsc' => 'Champhai1234','beneficiary_address' => 'Champhai1234','beneficiary_contact' => 'Champhai1234'],
//Lunglei
                ['beneficiary_name' => '12345', 'division_id'=>5 ,'beneficiary_account_no' => '12345', 'bank_name' => '12345', 'branch' => '12345', 'ifsc' => '12345','beneficiary_address' => '12345','beneficiary_contact' => '12345'],
// Siatual
                ['beneficiary_name' => '12345', 'division_id'=>6 ,'beneficiary_account_no' => '12345', 'bank_name' => '12345', 'branch' => '12345', 'ifsc' => '12345','beneficiary_address' => '12345','beneficiary_contact' => '12345'],
// Mamit12345
                ['beneficiary_name' => 'mamitnameraunak', 'division_id'=>7 ,'beneficiary_account_no' => 'maamitaccount', 'bank_name' => 'mamitbak', 'branch' => 'mamitbranch', 'ifsc' => 'ifsc12345','beneficiary_address' => 'khtala','beneficiary_contact' => '09999999999'],
// Siaha
                ['beneficiary_name' => '12345', 'division_id'=>8 ,'beneficiary_account_no' => '12345', 'bank_name' => '12345', 'branch' => '12345', 'ifsc' => '12345','beneficiary_address' => '12345','beneficiary_contact' => '12345'],
// Khawzawl
                ['beneficiary_name' => '12345','division_id'=>9, 'beneficiary_account_no' => '12345', 'bank_name' => '12345', 'branch' => '12345', 'ifsc' => '12345','beneficiary_address' => '12345','beneficiary_contact' => '12345'],
// Kolasib
                ['beneficiary_name' => '12345', 'division_id'=>10 ,'beneficiary_account_no' => '12345', 'bank_name' => '12345', 'branch' => '12345', 'ifsc' => '12345','beneficiary_address' => '12345','beneficiary_contact' => '12345'],
// Lawngtlai
                ['beneficiary_name' => '12345', 'division_id'=>11 ,'beneficiary_account_no' => '12345', 'bank_name' => '12345', 'branch' => '12345', 'ifsc' => '12345','beneficiary_address' => '12345','beneficiary_contact' => '12345'],
// Serchhip
                ['beneficiary_name' => '12345', 'division_id'=>12 ,'beneficiary_account_no' => '12345', 'bank_name' => '12345', 'branch' => '12345', 'ifsc' => '12345','beneficiary_address' => '12345','beneficiary_contact' => '12345'],
// Lunglei Road Div-III, Hnahthial
                ['beneficiary_name' => '12345','division_id'=>13 , 'beneficiary_account_no' => '12345', 'bank_name' => '12345', 'branch' => '12345', 'ifsc' => '12345','beneficiary_address' => '12345','beneficiary_contact' => '12345'],
// Hmuifang Division
                ['beneficiary_name' => '12345', 'division_id'=>14 ,'beneficiary_account_no' => '12345', 'bank_name' => '12345', 'branch' => '12345', 'ifsc' => '12345','beneficiary_address' => '12345','beneficiary_contact' => '12345'],
// National Highway Div-I
                ['beneficiary_name' => '12345', 'division_id'=>15 ,'beneficiary_account_no' => '12345', 'bank_name' => '12345', 'branch' => '12345', 'ifsc' => '12345','beneficiary_address' => '12345','beneficiary_contact' => '12345'],
      // National Highway Div-III
      ['beneficiary_name' => '12345', 'division_id'=>16 ,'beneficiary_account_no' => '12345', 'bank_name' => '12345', 'branch' => '12345', 'ifsc' => '12345','beneficiary_address' => '12345','beneficiary_contact' => '12345'],

            ];

            // Loop through each beneficiary and create the record
            foreach ($beneficiaries as $beneficiary) {
                BeneficiaryDetails::create([
                    'beneficiary_name' => $beneficiary['beneficiary_name'],
                    'division_id' => $beneficiary['division_id'],
                    'beneficiary_account_no' => $beneficiary['beneficiary_account_no'],
                    'bank_name' => $beneficiary['bank_name'],
                    'branch' => $beneficiary['branch'],
                    'ifsc' => $beneficiary['ifsc'],
                    'beneficiary_address' => $beneficiary['beneficiary_address'],
                    'beneficiary_contact' => $beneficiary['beneficiary_contact'],
                ]);
            }
        }
    }











}

