<template>
    <div class="flex flex-col h-screen mt-10">
        <div class="w-full h-auto bg-white border-gray-200 rounded-t-lg rounded-b-lg md:w-2/3 lg:w-1/2 xl:w-1/3">
            <div class="px-5 py-5 col-md-8 col-md-offset-2">
                <div>
                    <div class="pt-2 pr-4 text-lg font-bold text-gray-600">Add New Local Council</div>
                    <div>
                        <br>
                        <form @submit.prevent='registerUser'>


                            <div class="relative py-3 ">
                                <label class="absolute px-2 py-2 text-xs uppercase text-textblue">Name:</label>
                                <input type="text"
                                    class="w-full px-2 pt-6 pb-1 text-gray-900 border rounded-lg focus:outline-none "
                                    placeholder="Veng hming chhu lut rawh le" v-model="localcouncil.name">

                            </div>


                            <br>

                            <div>
                                <label class="pt-2 pr-4 text-lg font-bold text-gray-600">Division:</label>
                                <br>
                                <!-- <input class="hover:text=blue=400  pr-4" type="radio" value="1" v-model="localcouncil.division_id" > Aizawl Road South
                                <input  class="hover:text-blue-400 " type="radio" value="2"  v-model="localcouncil.division_id" > Aizawl Road North
                                <input  class="hover:text-blue-400 " type="radio" value="3"  v-model="localcouncil.division_id" > Champhai Road -->

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
                                <template v-if="localcouncil.division_id === 13">Lunglei Road Div-II, Hnahthial
                                    Road</template>
                                <template v-if="localcouncil.division_id === 14">Hmuifang Division Road</template>
                                <template v-if="localcouncil.division_id === 15">National Highway Div-I Road</template>
                                <template v-if="localcouncil.division_id === 16">National Highway Div-III
                                    Road</template>

                                <br>
                            </div>
                            <br>

                            <label class="pt-2 pr-4 text-lg font-bold text-gray-600">Sub-Division:</label>
                            <div class="relative pb-2 mb-3 border rounded-lg">
                                <label for="localcouncil.sub_div"
                                    class="absolute px-4 py-2 text-sm font-light text-textblueform">Sub Division
                                </label>
                                <select v-model="localcouncil.sub_div"
                                    class="w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg appearance-none text-textgrayform focus:outline-none"
                                    :errors="errors">
                                    <option value="" class="inline-block text-textgrayform " disabled selected>Select
                                        Sub Division</option>
                                    <option value="1">Sub Division - I</option>
                                    <option value="2">Sub Division - II</option>
                                    <option value="3">Sub Division - III</option>
                                    <!-- <option v-for="localcouncil in localcouncils" :key="localcouncil.id" class="inline-block ml-2 mr-2 text-textgrayform" >{{localcouncil.name}}</option> -->
                                </select>
                            </div>
                            <br>
                            <div>
                                <div>
                                    <button type="submit"
                                        class="px-3 py-1 text-white bg-green-400 border rounded-lg hover:bg-green-300">
                                        Submit
                                    </button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    name: "LocalcouncilAdd",
    data() {
        return {
            localcouncil: {
                name: "",
                division_id: "",
                sub_div: "",
                added_by: "",

            }
        }
    },
    mounted() {
        this.localcouncil.division_id = this.$store.getters.currentUser.division_id;

    },
    methods: {
        registerUser() {
            let api_url = "";
            switch (this.localcouncil.division_id) {
                case 1:
                case 2:
                    api_url = '/api/localcouncil';
                    break;
                case 4:
                    api_url = '/api/champhai_local_councils';
                    break;
                case 5:
                    api_url = '/api/lunglei_local_councils';
                    break;
                case 6:
                    api_url = '/api/saitual_local_councils';
                    break;
                case 7:
                    api_url = '/api/mamit_local_councils';
                    break;
                case 8:
                    api_url = '/api/siaha_local_councils';
                    break;
                case 9:
                    api_url = '/api/khawzawl_local_councils';
                    break;
                case 10:
                    api_url = '/api/kolasib_local_councils';
                    break;
                case 11:
                    api_url = '/api/lawngtlai_local_councils';
                    break;
                case 12:
                    api_url = '/api/serchhip_local_councils';
                    break;
                case 13:
                    api_url = '/api/lunglei_road_div2_hnahthial';
                    break;
                case 14:
                    api_url = '/api/hmuifang_division';
                    break;
                case 15:
                    api_url = '/api/national_highway_div1';
                    break;
                case 16:
                    api_url = '/api/national_highway_div3';
                    break;
            }


            this.localcouncil.added_by = this.$store.getters.currentUser.id;
            axios.post(api_url, this.localcouncil, {
                headers: {
                    "Authorization": `Bearer ${this.$store.getters.currentUser.token}`,

                }
            })
                .then(response => {
                    // console.log(this.localcouncil.added_by, "addede by");
                    this.$router.push({ path: '/localcouncilList' });

                })
                .catch(error => {
                    console.log(error.response)
                })
        }
    }
}
</script>
