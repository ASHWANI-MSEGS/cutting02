<template>
    <div>
        <div v-if="loading">
    <!-- <PulseLoader class="object-center h-full " /> -->
        </div>

        <div v-else>
                <div v-if="localcouncils.length === 0">
                     <p>No list of Local Council Yet<router-link to="/form">   Add New Local Council</router-link></p>
                </div>



                <div class="w-full px-2 py-2 mx-3 mt-3 text-white rounded-t-lg bg-tableheader ">
                    <div class="flex flex-row justify-between">
                        <div class="pt-2 pr-2 text-xs font-bold uppercase ">Local Council</div>
                        <div class="pt-2 pr-2 text-xs font-bold uppercase ">Division</div>
                        <div class="pt-2 pr-2 text-xs font-bold uppercase ">Sub-Division</div>
                    </div>
                </div>


                <div v-for="localcouncil in localcouncils" :key="localcouncil.id" class="w-full px-2 py-2 mx-3 bg-white border-b hover:bg-tablehover">
                    <router-link :to="'/localcouncilShow/' +localcouncil.id" class="flex flex-row justify-between">
                        <div>{{localcouncil.name}}</div>
                        <div>
                            <template v-if="localcouncil.division_id === 1"> Road South Division</template>
                            <template v-if="localcouncil.division_id === 2"> Road North Division</template>
                            <template v-if="localcouncil.division_id == 4"> Champhai Road</template>
                            <template v-if="localcouncil.division_id === 5"> Lunglei Road</template>
                            <template v-if="localcouncil.division_id === 6"> Saitual Road</template>
                            <template v-if="localcouncil.division_id === 7"> Mamit Road</template>
                            <template v-if="localcouncil.division_id === 8"> Siaha Road</template>
                            <template v-if="localcouncil.division_id === 9"> Khawzawl Road</template>
                            <template v-if="localcouncil.division_id === 10"> Kolasib Road</template>
                            <template v-if="localcouncil.division_id === 11"> Lawngtlai Road</template>
                            <template v-if="localcouncil.division_id === 12"> Serchhip Road</template>
                            <template v-if="localcouncil.division_id === 13">Lunglei Road Div-II, Hnahthial Road</template>
                            <template v-if="localcouncil.division_id === 14">Hmuifang Division Road</template>
                            <template v-if="localcouncil.division_id === 15">National Highway Div-I Road</template>
                            <template v-if="localcouncil.division_id === 16">National Highway Div-III Road</template>

                        </div>
                        <div>{{localcouncil.sub_div}}</div>
                    </router-link>

                </div>



        </div>

    </div>
</template>

<script>

// import PulseLoader from '../components/PulseLoader';
export default {

    name: "LocalCouncilList",

    data: function(){
        return{
            loading: false,
            localcouncils:'',

        }
    },

    mounted(){
let api_url = "";
let userDivisionId = this.$store.getters.currentUser.division_id;


switch(userDivisionId){
    case 1:
    case 2:
        api_url = '/api/auth/localcouncil';
        break;
    case 4:
        api_url = '/api/auth/champhai_local_councils';
        break;
    case 5:
        api_url = '/api/auth/lunglei_local_councils';
        break;
    case 6:
        api_url = '/api/auth/saitual_local_councils';
        break;
    case 7:
        api_url = '/api/auth/mamit_local_councils';
        break;
    case 8:
        api_url = '/api/auth/siaha_local_councils';
        break;
    case 9:
        api_url = '/api/auth/khawzawl_local_councils';
        break;
    case 10:
        api_url = '/api/auth/kolasib_local_councils';
        break;
    case 11:
        api_url = '/api/auth/lawngtlai_local_councils';
        break;
    case 12:
        api_url = '/api/auth/serchhip_local_councils';
        break;
        case 13:
        api_url = '/api/auth/lunglei_road_div2_hnahthial';
        break;
    case 14:
        api_url = '/api/auth/hmuifang_division';
        break;
    case 15:
        api_url = '/api/auth/national_highway_div1';
        break;
    case 16:
        api_url = '/api/auth/national_highway_div3';
        break;
}
        axios.get(api_url)
        .then(response=>{
            this.localcouncils= response.data.localcouncils;
        })
        .catch(error=>{
             this.loading = true;

        });

    }


}
</script>

<style scoped>
</style>
