<template>

<div class="relative h-screen">
    <div v-if="modalEdit" class="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-25 z-15" @click="modalEdit = ! modalEdit">
    </div>
    <div v-if="modalDelete" class="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-25 z-15" @click="modalA = ! modalEdit">
    </div>
            <!-- Edit modals -->
    <div v-if="modalEdit" class="absolute left-0 right-0 z-40 h-auto ml-auto mr-auto bg-white rounded-lg shadow top-2 sm:w-2/3 lg:w-2/4 xl:w-1/4">
        <form @submit.prevent="editLC">
            <!-- Edit Close Button -->
                <div  class="absolute top-0 right-0 ">
                    <button @click="modalEdit = ! modalEdit" class="px-2 py-2 mt-4 mr-6 rounded hover:bg-gray-200">
                        <svg  xmlns="http://www.w3.org/2000/svg" width="11.877" height="11.877" viewBox="0 0 11.877 11.877">
                                        <g id="Group_9" data-name="Group 9" transform="translate(-1238.562 -230.423)">
                                        <path id="Path_35" data-name="Path 35" d="M3285,232l8.847,8.847" transform="translate(-2045 0.015)" fill="none" stroke="#e37198" stroke-linecap="round" stroke-width="2"/>
                                            <path id="Path_36" data-name="Path 36" d="M0,0,8.847,8.847" transform="matrix(0.017, 1, -1, 0.017, 1248.846, 231.862)" fill="none" stroke="#e37198" stroke-linecap="round" stroke-width="2"/>
                                            </g>
                        </svg>
                    </button>
                </div>
            <!-- Edit Close Button Close -->

            <div class="flex justify-center my-6 text-xl font-bold text-textblueform ">Local Council Edit </div>

            <div  class="relative pb-2 mx-10 mt-10 mb-3 border rounded-lg">
                <label class="absolute px-4 py-2 font-bold text-blue-500 text-md">Local Council</label>
                <input type="text" class="w-full px-4 pt-6 mt-2 text-gray-500 rounded-lg text-md focus:text-gray-900 focus:outline-none "  v-model="localcouncil.name" >
            </div>

            <div class="py-4 mx-10 mt-5 mb-3 border rounded-lg ">
                <label class="px-4 py-2 font-bold text-blue-500 text-md">Division</label>
                    <p  class="w-full px-4 pt-1 mt-2 text-gray-500 rounded-lg text-md focus:text-grey-900 focus:outline-none " >
                    <template v-if="localcouncil.division_id === 1"> Road South Division</template>
                    <template v-if="localcouncil.division_id === 2"> Road North Division</template>
                            <template v-if="localcouncil.division_id == 4"> Champhai Road</template>
                            <template v-if="localcouncil.division_id === 5"> Lunglei Road</template>
                            <template v-if="localcouncil.division_id === 6"> Saitual Road</template>
                            <template v-if="localcouncil.division_id === 7"> Mamit Road</template>
                            <template v-if="localcouncil.division_id === 8"> Siaha Road</template>
                            <template  v-if="localcouncil.division_id === 9"> Khawzawl Road</template>
                            <template v-if="localcouncil.division_id === 10"> Kolasib Road</template>
                            <template v-if="localcouncil.division_id === 11"> Lawngtlai Road</template>
                            <template v-if="localcouncil.division_id === 12"> Serchhip Road</template>
                            <template v-if="localcouncil.division_id === 13">Lunglei Road Div-II, Hnahthial Road</template>
                            <template v-if="localcouncil.division_id === 14">Hmuifang Division Road</template>
                            <template v-if="localcouncil.division_id === 15">National Highway Div-I Road</template>
                            <template v-if="localcouncil.division_id === 16">National Highway Div-III Road</template>

                        </p>
                        <!-- <input id="division_id1" class="px-4 py-2 pt-6 mt-2 ml-2 text-gray-900 rounded-lg text-md focus:text-black" type="radio" name="division_id1" value="1" v-model="localcouncil.division_id" > Aizawl Road South
                        <input id="division_id12" class="px-4 pt-6 mt-2 text-gray-900 rounded-lg text-md focus:text-black" type="radio" name="division_id2" value="2" v-model="localcouncil.division_id"> Aizawl Road North -->
                        <!-- <input type="text" class="w-full px-4 pt-6 mt-2 text-gray-500 rounded-lg text-md focus:text-gray-900 focus:outline-none "  v-model="localcouncil.division_id" > -->
                    </div>


            <div  class="relative pb-2 mx-10 mt-10 mb-3 border rounded-lg" >
                <label for="localcouncil.sub_div" class="absolute px-4 py-2 text-sm font-light text-textblueform">Sub Division </label>
                <select v-model="localcouncil.sub_div" class="w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg appearance-none text-textgrayform focus:outline-none" :errors="errors">
                    <option value="" class="inline-block text-textgrayform " disabled selected>Select Sub Division</option>
                    <option value="1">Sub Division - I</option>
                    <option value="2">Sub Division - II</option>
                    <option value="3">Sub Division - III</option>
                </select>
            </div>

            <div class="flex items-center justify-center pt-2 ">
                <button type="submit" class="px-4 py-2 text-sm font-bold text-white bg-green-500 rounded hover:bg-green-400"  >Update</button>
                <button class="px-4 py-1 ml-1 text-red-500 border border-red-500 rounded hover:border-red-300" @click.prevent="modalEdit = ! modalEdit">Cancel</button>
            </div>
            <br>
        </form>
    </div>
    <!-- Close Edit modals -->

        <!-- Start Delete Modal                  -->
    <div v-if="modalDelete" class="absolute left-0 right-0 z-40 ml-auto mr-auto bg-white rounded-lg shadow top-2 md:h-64 xl:h-84 sm:w-2/3 lg:w-2/4 xl:w-1/3">

        <div  class="absolute top-0 right-0 ">
            <button @click="modalDelete = ! modalDelete" class="px-2 py-2 mt-3 mr-6 rounded hover:bg-gray-200">
                <svg  xmlns="http://www.w3.org/2000/svg" width="11.877" height="11.877" viewBox="0 0 11.877 11.877">
                            <g id="Group_9" data-name="Group 9" transform="translate(-1238.562 -230.423)">
                            <path id="Path_35" data-name="Path 35" d="M3285,232l8.847,8.847" transform="translate(-2045 0.015)" fill="none" stroke="#e37198" stroke-linecap="round" stroke-width="2"/>
                                <path id="Path_36" data-name="Path 36" d="M0,0,8.847,8.847" transform="matrix(0.017, 1, -1, 0.017, 1248.846, 231.862)" fill="none" stroke="#e37198" stroke-linecap="round" stroke-width="2"/>
                                </g>
                </svg>
            </button>
        </div>
        <p class="flex justify-center mt-8 mb-6 text-xl font-bold text-red-500">Are you sure you want to Delete this Local Council?</p>


        <div class="flex items-center justify-center pt-2 ">
            <button class="px-4 py-1 ml-1 text-red-500 border border-red-500 rounded hover:border-blue-300" @click="modalDelete = ! modalDelete">Cancel</button>
            <button class="px-4 py-2 ml-1 text-sm font-bold text-white bg-green-500 rounded hover:bg-red-400" @click="deleteLC">Delete</button>
        </div>
    </div>
                     <!-- End Delete Modal -->
                     <a href="#" class="text-blue-400" @click="$router.back()">
                     << Back
                     </a>

    <div class="w-full h-auto mt-3 bg-white rounded-lg shadow-lg md:w-3/4 lg:w-2/3 xl:1/3">
        <div class="py-4">
            <div class="flex justify-center">
                <p class="text-lg font-medium">Local Council Details</p>
            </div>
            <div class="flex justify-center ">
                <div class="mx-4 my-4">
                    <p class="font-light text-md">Local Council </p>
                    <p class="font-light text-md">Division </p>
                    <p class="font-light text-md">Sub Division </p>
                    <button class="px-4 py-1 mr-1 text-blue-300 border rounded-lg hover:bg-gray-300 focus:outline-none" @click="modalEdit = ! modalEdit">
                    Edit
                    </button>
                </div>

                <div class="mx-4 my-4">
                    <p class="font-light text-md">: {{localcouncil.name}}</p>
                    <template v-if="localcouncil.division_id === 1">
                        <p class="font-light text-md">: Aizawl Road South Division</p>
                    </template>
                    <template v-else-if="localcouncil.division_id === 2">
                        <p class="font-light text-md">: Aizawl Road North Division</p>
                    </template>
                    <template v-if="localcouncil.division_id == 4">
                        <p class="font-light text-md">:Champhai Road</p>
                    </template>
                            <template v-if="localcouncil.division_id === 5">
                                <p class="font-light text-md">:Lunglei Road</p>
                            </template>
                            <template v-if="localcouncil.division_id === 6">
                                <p class="font-light text-md">:Saitual Road</p>
                            </template>
                            <template v-if="localcouncil.division_id === 7">
                                <p class="font-light text-md">:Mamit Road</p>
                            </template>
                            <template v-if="localcouncil.division_id === 8">
                                <p class="font-light text-md">:Siaha Road</p>
                            </template>
                            <template v-if="localcouncil.division_id === 9">
                                <p class="font-light text-md">:Khawzawl Road</p>
                            </template>
                            <template v-if="localcouncil.division_id === 10">
                                 <p class="font-light text-md">:Kolasib Road</p>
                            </template>
                            <template v-if="localcouncil.division_id === 11">
                                <p class="font-light text-md">:Lawngtlai Road</p>
                            </template>
                            <template v-if="localcouncil.division_id === 12">
                                <p class="font-light text-md">:Serchhip Road</p>

                            </template>
                            <template v-if="localcouncil.division_id === 13"> <p class="font-light text-md">:Lunglei Road Div-II, Hnahthial Road</p></template>
                            <template v-if="localcouncil.division_id === 14"> <p class="font-light text-md">:Hmuifang Division Road</p></template>
                            <template v-if="localcouncil.division_id === 15"> <p class="font-light text-md">:National Highway Div-I Road</p></template>
                            <template v-if="localcouncil.division_id === 16"> <p class="font-light text-md">:National Highway Div-III Road</p></template>


                    <p class="font-light text-md">: {{localcouncil.sub_div}}</p>

                    <button class="px-2 py-1 mr-3 text-red-400 border rounded-lg hover:bg-gray-300 focus:outline-none" @click="modalDelete = ! modalDelete">
                        Delete
                    </button>
                </div>
            </div>
        </div>

    </div>

</div>
</template>

<script>

export default {

    name: "LocalCouncilShow",


    data(){
        return{
            localcouncil:{},
            modalEdit: false,
            modalDelete: false,


        }
    },

    mounted(){
        let userDivisionId = this.$store.getters.currentUser.division_id;

        let api_url ="";
switch(userDivisionId){
    case 1:
    case 2:
        api_url = '/api/auth/localcouncilShow/';
        break;
    case 4:
        api_url = '/api/auth/champhai_local_councilsShow/';
        break;
    case 5:
        api_url = '/api/auth/lunglei_local_councilsShow/';
        break;
    case 6:
        api_url = '/api/auth/saitual_local_councilsShow/';
        break;
    case 7:
        api_url = '/api/auth/mamit_local_councilsShow/';
        break;
    case 8:
        api_url = '/api/auth/siaha_local_councilsShow/';
        break;
    case 9:
        api_url = '/api/auth/khawzawl_local_councilsShow/';
        break;
    case 10:
        api_url = '/api/auth/kolasib_local_councilsShow/';
        break;
    case 11:
        api_url = '/api/auth/lawngtlai_local_councilsShow/';
        break;
    case 12:
        api_url = '/api/auth/serchhip_local_councilsShow/';
        break;
    case 13:
        api_url = '/api/auth/hnahthial_local_councilsShow/';
        break;
        case 13:
        api_url = '/api/auth/lunglei_road_div2_hnahthialsShow/';
        break;
    case 14:
        api_url = '/api/auth/hmuifang_divisionsShow/';
        break;
    case 15:
        api_url = '/api/auth/national_highway_div1sShow/';
        break;
    case 16:
        api_url = '/api/auth/national_highway_div3sShow/';
        break;
}
console.log(api_url)
        axios.get(api_url+ this.$route.params.id)
        .then(response=>{
            console.log(this.$route.params.id);
            this.localcouncil= response.data.localcouncil;
console.log(this.localcouncil, "list it");
        })
        .catch(error=>{

        });
    },

    methods: {

        editLC: function(){
            let userDivisionId = this.$store.getters.currentUser.division_id;

let api_url ="";
switch(userDivisionId){
case 1:
case 2:
api_url = '/api/localcouncilUpdate';
break;
case 4:
api_url = '/api/champhai_local_councilsUpdate';
break;
case 5:
api_url = '/api/lunglei_local_councilsUpdate';
break;
case 6:
api_url = '/api/saitual_local_councilsUpdate';
break;
case 7:
api_url = '/api/mamit_local_councilsUpdate';
break;
case 8:
api_url = '/api/siaha_local_councilsUpdate';
break;
case 9:
api_url = '/api/khawzawl_local_councilsUpdate';
break;
case 10:
api_url = '/api/kolasib_local_councilsUpdate';
break;
case 11:
api_url = '/api/lawngtlai_local_councilsUpdate';
break;
case 12:
api_url = '/api/serchhip_local_councilsUpdate';
break;
case 13:
api_url = '/api/lunglei_road_div2_hnahthialsUpdate';
        break;
    case 14:
        api_url = '/api/hmuifang_divisionsUpdate';
        break;
    case 15:
        api_url = '/api/national_highway_div1sUpdate';
        break;
    case 16:
        api_url = '/api/national_highway_div3sUpdate';
        break;
}
            axios.patch(api_url,this.localcouncil, {
                headers: {
                    "Authorization": `Bearer ${this.$store.getters.currentUser.token}`
                }
            })
            .then(response=>{

                this.localcouncil= response.data.localcouncil;
                this.modalEdit = false;
                // this.$router.push({path: '/localcouncilShow/'+this.localcouncil.id});

                // this.$router.push("/estimateSubmitSuccess");
            })

            .catch(errors=>{

              this.errors = errors.response.data.errors;
         });

        },

        deleteLC: function(){
            let userDivisionId = this.$store.getters.currentUser.division_id;

let api_url ="";
switch(userDivisionId){
case 1:
case 2:
api_url = '/api/localcouncilDelete/';
break;
case 4:
api_url = '/api/champhai_local_councilsDelete/';
break;
case 5:
api_url = '/api/lunglei_local_councilsDelete/';
break;
case 6:
api_url = '/api/saitual_local_councilsDelete/';
break;
case 7:
api_url = '/api/mamit_local_councilsDelete/';
break;
case 8:
api_url = '/api/siaha_local_councilsDelete/';
break;
case 9:
api_url = '/api/khawzawl_local_councilsDelete/';
break;
case 10:
api_url = '/api/kolasib_local_councilsDelete/';
break;
case 11:
api_url = '/api/lawngtlai_local_councilsDelete/';
break;
case 12:
api_url = '/api/serchhip_local_councilsDelete/';
break;
case 13:
api_url = '/api/hnahthial_local_councilsDelete/';
break;
}
            axios.get(api_url+ this.localcouncil.id, {
                headers: {
                    "Authorization": `Bearer ${this.$store.getters.currentUser.token}`
                }
            })
            .then(response=>{


                this.modalEdit = false;
                // this.$router.push({path: '/localcouncilShow/'+this.localcouncil.id});

                 this.$router.push("/localcouncilList");
            })

            .catch(errors=>{

              this.errors = errors.response.data.errors;
         });

        },

    }


}
</script>

<style scoped>
</style>
