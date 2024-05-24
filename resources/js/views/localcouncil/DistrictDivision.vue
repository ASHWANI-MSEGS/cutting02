<template>
    <div>
        <div v-if="loading">
            <!-- <PulseLoader class="object-center h-full " /> -->
        </div>

        <!-- <div v-else>
                <div v-if="localcouncils.length === 0">
                     <p>No list of Local Council Yet<router-link to="/form">   Add New Local Council</router-link></p>
                </div> -->


        <div class="w-full px-2 py-2 mx-3 mt-3 text-white rounded-t-lg bg-tableheader ">
            <div class="flex flex-row justify-center">
                <div class="pt-2 pr-2 text-xs font-bold uppercase">Division</div>
            </div>
        </div>


        <div>
            <ul class="list-disc">
                <li @click="updateValueDistrict(1)"
                    class="px-5 py-2 mt-4 mb-2 text-sm font-medium text-center text-white rounded-lg cursor-pointer bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-700 me-2">
                    Road South Division
                </li>
                <li @click="updateValueDistrict(2)"
                    class="px-5 py-2 mb-2 text-sm font-medium text-center text-white rounded-lg cursor-pointer bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-700 me-2">
                    Road North Division
                </li>
                <li @click="updateValueDistrict(4)"
                    class="px-5 py-2 mb-2 text-sm font-medium text-center text-white rounded-lg cursor-pointer bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-700 me-2">
                    Champhai Road
                </li>
                <li @click="updateValueDistrict(5)"
                    class="px-5 py-2 mb-2 text-sm font-medium text-center text-white rounded-lg cursor-pointer bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-700 me-2">
                    Lunglei Road
                </li>
                <li @click="updateValueDistrict(6)"
                    class="px-5 py-2 mb-2 text-sm font-medium text-center text-white rounded-lg cursor-pointer bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-700 me-2">
                    Saitual Road
                </li>
                <li @click="updateValueDistrict(7)"
                    class="px-5 py-2 mb-2 text-sm font-medium text-center text-white rounded-lg cursor-pointer bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-700 me-2">
                    Mamit Road
                </li>
                <li @click="updateValueDistrict(8)"
                    class="px-5 py-2 mb-2 text-sm font-medium text-center text-white rounded-lg cursor-pointer bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-700 me-2">
                    Siaha Road
                </li>
                <li @click="updateValueDistrict(9)"
                    class="px-5 py-2 mb-2 text-sm font-medium text-center text-white rounded-lg cursor-pointer bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-700 me-2">
                    Khawzawl Road
                </li>
                <li @click="updateValueDistrict(10)"
                    class="px-5 py-2 mb-2 text-sm font-medium text-center text-white rounded-lg cursor-pointer bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-700 me-2">
                    Kolasib Road
                </li>
                <li @click="updateValueDistrict(11)"
                    class="px-5 py-2 mb-2 text-sm font-medium text-center text-white rounded-lg cursor-pointer bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-700 me-2">
                    Lawngtlai Road
                </li>
                <li @click="updateValueDistrict(12)"
                    class="px-5 py-2 mb-2 text-sm font-medium text-center text-white rounded-lg cursor-pointer bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-700 me-2">
                    Serchhip Road
                </li>
                <li @click="updateValueDistrict(13)"
                    class="px-5 py-2 mb-2 text-sm font-medium text-center text-white rounded-lg cursor-pointer bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-700 me-2">
                    Road Div-II, Hnahthial Road
                </li>
                <li @click="updateValueDistrict(14)"
                    class="px-5 py-2 mb-2 text-sm font-medium text-center text-white rounded-lg cursor-pointer bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-700 me-2">
                    Hmuifang Division Road
                </li>
                <li @click="updateValueDistrict(15)"
                    class="px-5 py-2 mb-2 text-sm font-medium text-center text-white rounded-lg cursor-pointer bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-700 me-2">
                    National Highway Div-I Road
                </li>
                <li @click="updateValueDistrict(16)"
                    class="px-5 py-2 mb-2 text-sm font-medium text-center text-white rounded-lg cursor-pointer bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 me-2">
                    National Highway Div-III Road 
                </li>
                <!-- Add more list items as needed -->
            </ul>









        </div>

    </div>
</template>

<script>

// import PulseLoader from '../components/PulseLoader';
export default {

    name: "AdminLocalCouncilList",

    data: function () {
        return {
            loading: false,
            localcouncils: '',
            valueDistrict: '',

        }
    },
    methods: {
        updateValueDistrict(newValue) {
            this.valueDistrict = newValue;
            console.log(this.valueDistrict);
            this.districtLocalCouncil();
        },
        districtLocalCouncil() {
            console.log("jasdljfaslkdfj")
            this.$router.push({ path: `/adminlocalcouncilList/${this.valueDistrict}` })
            // axios.get("/adminlocalcouncilList", this.valueDistrict, {
            //     headers: {
            //         "Authorization": `Bearer ${this.$store.getters.currentUser.token}`,

            //     }
            // })
            //     .then(response => {
            //         // console.log(this.localcouncil.added_by, "addede by");
            //         // this.$router.push({ path: '/localcouncilList' });

            //     })
            //     .catch(error => {
            //         console.log(error.response)
            //     })
        }
    }

    //     mounted(){
    // let api_url = "";
    // let userDivisionId = this.$store.getters.currentUser.division_id;


    // switch(userDivisionId){
    //     case 1:
    //     case 2:
    //         api_url = '/api/auth/localcouncil';
    //         break;
    //     case 4:
    //         api_url = '/api/auth/champhai_local_councils';
    //         break;
    //     case 5:
    //         api_url = '/api/auth/lunglei_local_councils';
    //         break;
    //     case 6:
    //         api_url = '/api/auth/saitual_local_councils';
    //         break;
    //     case 7:
    //         api_url = '/api/auth/mamit_local_councils';
    //         break;
    //     case 8:
    //         api_url = '/api/auth/siaha_local_councils';
    //         break;
    //     case 9:
    //         api_url = '/api/auth/khawzawl_local_councils';
    //         break;
    //     case 10:
    //         api_url = '/api/auth/kolasib_local_councils';
    //         break;
    //     case 11:
    //         api_url = '/api/auth/lawngtlai_local_councils';
    //         break;
    //     case 12:
    //         api_url = '/api/auth/serchhip_local_councils';
    //         break;
    //         case 13:
    //         api_url = '/api/auth/lunglei_road_div2_hnahthial';
    //         break;
    //     case 14:
    //         api_url = '/api/auth/hmuifang_division';
    //         break;
    //     case 15:
    //         api_url = '/api/auth/national_highway_div1';
    //         break;
    //     case 16:
    //         api_url = '/api/auth/national_highway_div3';
    //         break;
    // }
    //         axios.get(api_url)
    //         .then(response=>{
    //             this.localcouncils= response.data.localcouncils;
    //         })
    //         .catch(error=>{
    //              this.loading = true;

    //         });

    //     }


}
</script>

<style scoped></style>
