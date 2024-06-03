<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
         $this->call(RolesTableSeeder::class);
         $this->call(UsersTableSeeder::class);
         $this->call(LocalcouncilsTableSeeder::class);
         $this->call(DistrictSeeder::class);
         $this->call(FeatureSeeder::class); // this also needs to be seeded since additional districts are addded

        // adding the local councils of the different districts

         $this->call(ChamphaiLocalCouncilSeeder::class);
         $this->call(LungleiLocalCouncilSeeder::class);
         $this->call(SaitualLocalCouncilSeeder::class);
         $this->call(MamitLocalCouncilSeeder::class);
         $this->call(KhawzawlLocalCouncilSeeder::class);
         $this->call(KolasibLocalCouncilSeeder::class);
         $this->call(LawngtlaiLocalCouncilSeeder::class);
         $this->call(SerchhipLocalCouncilSeeder::class);
         $this->call(SiahaLocalCouncilSeeder::class);
      //   $this->call(HnahthialLocalCouncilSeeder::class);
         $this->call(HmuifangDivisionSeeder::class);
         $this->call(LungleiRoadDiv2HnahthialSeeder::class);
          $this->call(NationalHighwayDivOneSeeder::class);
         $this->call(NationalHighwayDivThreeSeeder::class);
         // beneficialry
         $this->call(BeneficiaryDetailsSeeder::class);
    }
}
