<template>
    <div class="relative h-screen">
        <div v-if="modalEdit" class="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-25 z-15"
            @click="modalEdit = !modalEdit">
        </div>
        <div v-if="modalDelete" class="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-25 z-15"
            @click="modalDelete = !modalDelete">
        </div>
        <!-- Edit modals -->
        <div v-if="modalEdit"
            class="absolute left-0 right-0 z-40 pb-2 ml-auto mr-auto bg-white rounded-lg shadow top-2 md:h-auto sm:w-2/3 lg:w-2/4 xl:w-1/4">
            <form @submit.prevent="editLC">
                <!-- Edit Close Button -->
                <div class="absolute top-0 right-0 ">
                    <button @click="modalEdit = !modalEdit" class="px-2 py-2 mt-4 mr-6 rounded hover:bg-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="11.877" height="11.877"
                            viewBox="0 0 11.877 11.877">
                            <g id="Group_9" data-name="Group 9" transform="translate(-1238.562 -230.423)">
                                <path id="Path_35" data-name="Path 35" d="M3285,232l8.847,8.847"
                                    transform="translate(-2045 0.015)" fill="none" stroke="#e37198"
                                    stroke-linecap="round" stroke-width="2" />
                                <path id="Path_36" data-name="Path 36" d="M0,0,8.847,8.847"
                                    transform="matrix(0.017, 1, -1, 0.017, 1248.846, 231.862)" fill="none"
                                    stroke="#e37198" stroke-linecap="round" stroke-width="2" />
                            </g>
                        </svg>
                    </button>
                </div>
                <!-- Edit Close Button Close -->

                <div class="flex justify-center my-6 text-xl font-bold text-textblueform ">Engineer Edit</div>

                <div class="relative pb-2 mx-10 mt-10 mb-3 border rounded-lg">
                    <label class="absolute px-4 py-2 font-bold text-blue-500 text-md">Name </label>
                    <input type="text"
                        class="w-full px-4 pt-6 mt-2 text-gray-500 rounded-lg text-md focus:text-gray-900 focus:outline-none"
                        v-model="engineer.name">
                </div>

                <!-- original code -->
                <!-- <div class="py-4 mx-10 mt-5 mb-3 border rounded-lg ">
                    <label class="px-4 py-2 font-bold text-blue-500 text-md">Division</label>
                        <br>
                            <input id="division_id1" class="px-4 py-2 pt-6 mt-2 ml-2 text-gray-900 rounded-lg text-md focus:text-black" type="radio" name="division_id1" value="1" v-model="engineer.division_id" > Aizawl Road South
                            <input id="division_id12" class="px-4 pt-6 mt-2 text-gray-900 rounded-lg text-md focus:text-black" type="radio" name="division_id2" value="2" v-model="engineer.division_id"> Aizawl Road North
                </div> -->
                <div class="mx-10">
                    <label class="pt-2 pr-4 text-lg font-bold text-gray-600">Division:</label>
                    <div class="relative px-1 pb-2 mb-3 border rounded-lg">
                        <label for="localcouncil.sub_div"
                            class="absolute px-4 py-2 text-sm font-light text-textblueform"> Division </label>
                        <select v-model="engineer.division_id"
                            class="w-full px-2 pt-6 mt-1 ml-1 bg-white rounded-lg appearance-none text-textgrayform focus:outline-none">
                            <!-- @change="updateDivision_id()" -->
                            <option value="" class="inline-block text-textgrayform" disabled selected>Select Division
                            </option>
                            <option value="1">Aizawl Road South</option>
                            <option value="2">Aizawl Road North</option>
                            <option value="4">Champhai Road</option>
                            <option value="5">Lunglei Road</option>
                            <option value="6">Saitual Road</option>
                            <option value="7">Mamit Road</option>
                            <option value="8">Siaha Road</option>
                            <option value="9">Khawzawl Road</option>
                            <option value="10">Kolasib Road</option>
                            <option value="11">Lawngtlai Road</option>
                            <option value="12">Serchhip Road</option>
                            <option value="13">Lunglei Road Div-II, Hnahthial Road</option>
                            <option value="14">Hmuifang Division Road</option>
                            <option value="15">National Highway Div-I Road</option>
                            <option value="16">National Highway Div-III Road</option>

                        </select>
                    </div>
                </div>

                <div class="mx-10">
                    <label class="pt-2 pr-4 text-lg font-bold text-gray-600">Sub-Division:</label>
                    <div class="relative px-1 pb-2 mb-3 border rounded-lg">
                        <label for="localcouncil.sub_div"
                            class="absolute px-4 py-2 text-sm font-light text-textblueform">Sub Division </label>
                        <select v-model="engineer.sub_div"
                            class="w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg appearance-none text-textgrayform focus:outline-none"
                            :errors="errors">
                            <option value="" class="inline-block text-textgrayform " disabled selected>Select Sub
                                Division
                            </option>
                            <option value="1">Sub Division - I</option>
                            <option value="2">Sub Division - II</option>
                            <option value="3">Sub Division - III</option>
                            <!-- <option v-for="localcouncil in localcouncils" :key="localcouncil.id" class="inline-block ml-2 mr-2 text-textgrayform" >{{localcouncil.name}}</option> -->
                        </select>
                    </div>
                </div>

                <div class="flex items-center justify-center pt-2 ">
                    <button
                        class="px-4 py-2 text-sm font-bold text-white bg-green-500 rounded hover:bg-green-400">Update</button>
                    <button class="px-4 py-1 ml-1 text-red-500 border border-red-500 rounded hover:border-red-300"
                        @click.prevent="modalEdit = !modalEdit">Cancel</button>
                </div>
                <br>
            </form>
        </div>
        <!-- Close Edit modals -->

        <!-- Start Delete Modal                  -->
        <div v-if="modalDelete"
            class="absolute left-0 right-0 z-40 ml-auto mr-auto bg-white rounded-lg shadow top-2 md:h-64 xl:h-84 sm:w-2/3 lg:w-2/4 xl:w-1/3">

            <div class="absolute top-0 right-0 ">
                <button @click="modalDelete = !modalDelete" class="px-2 py-2 mt-3 mr-6 rounded hover:bg-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11.877" height="11.877" viewBox="0 0 11.877 11.877">
                        <g id="Group_9" data-name="Group 9" transform="translate(-1238.562 -230.423)">
                            <path id="Path_35" data-name="Path 35" d="M3285,232l8.847,8.847"
                                transform="translate(-2045 0.015)" fill="none" stroke="#e37198" stroke-linecap="round"
                                stroke-width="2" />
                            <path id="Path_36" data-name="Path 36" d="M0,0,8.847,8.847"
                                transform="matrix(0.017, 1, -1, 0.017, 1248.846, 231.862)" fill="none" stroke="#e37198"
                                stroke-linecap="round" stroke-width="2" />
                        </g>
                    </svg>
                </button>
            </div>
            <p class="flex justify-center mt-8 mb-6 text-xl font-bold text-red-500">Are you sure you want to Delete?</p>
            <div class="flex items-center justify-center pt-2 ">
                <button class="px-4 py-1 ml-1 text-red-500 border border-red-500 rounded hover:border-blue-300"
                    @click="modalDelete = !modalDelete">Cancel</button>
                <button class="px-4 py-2 ml-1 text-sm font-bold text-white bg-green-500 rounded hover:bg-red-400"
                    @click="deleteLC">Delete</button>
            </div>
        </div>
        <!-- End Delete Modal -->


        <div class="flex h-auto my-3 bg-white rounded-lg shadow-lg sm:w-full md:w-3/4 lg:w-1/2 xl:w-1/3">
            <div class="flex justify-between">
                <div class="px-12 py-8">
                    <p class="my-2 font-medium text-md">Name </p>
                    <p class="my-2 font-medium text-md">Post</p>
                    <p class="my-2 font-medium text-md">Phone</p>
                    <p class="my-2 font-medium text-md">Email</p>
                    <p class="my-2 font-medium text-md">Division</p>
                    <p class="my-2 font-medium text-md">Sub-Division</p>
                    <br>
                    <button class="px-4 py-1 mr-1 text-blue-300 border rounded-lg hover:bg-gray-300 focus:outline-none"
                        @click="modalEdit = !modalEdit">
                        Edit
                    </button>

                </div>
                <div class="px-12 py-8">
                    <p class="my-2 font-light text-md">: {{ engineer.name }}</p>
                    <p class="my-2 font-light text-md">: {{ engineer.post }}</p>
                    <p class="my-2 font-light text-md">: {{ engineer.phone }}</p>
                    <p class="my-2 font-light text-md">: {{ engineer.email }}</p>
                    <template v-if="engineer.division_id == 1">
                        <p class="my-2 font-light text-md">: Aizawl Road South</p>
                    </template>
                    <template v-else-if="engineer.division_id == 2">
                        <p class="my-2 font-light text-md">: Aizawl Road North </p>
                    </template>

                    <template v-else-if="engineer.division_id == 4">
                        <p class="my-2 font-light text-md">: Champhai Road </p>
                    </template>
                    <template v-else-if="engineer.division_id == 5">
                        <p class="my-2 font-light text-md">:Lunglei Road </p>
                    </template>
                    <template v-else-if="engineer.division_id == 6">
                        <p class="my-2 font-light text-md">: Saitual Road </p>
                    </template>
                    <template v-else-if="engineer.division_id == 7">
                        <p class="my-2 font-light text-md">: Mamit Road</p>
                    </template>
                    <template v-else-if="engineer.division_id == 8">
                        <p class="my-2 font-light text-md">: Siaha Road</p>
                    </template>
                    <template v-else-if="engineer.division_id == 9">
                        <p class="my-2 font-light text-md">: Khawzawl Road </p>
                    </template>
                    <template v-else-if="engineer.division_id == 10">
                        <p class="my-2 font-light text-md">: Kolasib Road </p>
                    </template>
                    <template v-else-if="engineer.division_id == 11">
                        <p class="my-2 font-light text-md">: Lawngtlai Road</p>
                    </template>
                    <template v-else-if="engineer.division_id == 12">
                        <p class="my-2 font-light text-md">: Serchhip Road </p>
                    </template>
                    <template v-else-if="engineer.division_id == 13">
                        <p class="my-2 font-light text-md">:Lunglei Road Div-II, Hnahthial Road</p>
                    </template>
                    <template v-else-if="engineer.division_id == 14">
                        <p class="my-2 font-light text-md">: Hmuifang Division Road</p>
                    </template>
                    <template v-else-if="engineer.division_id == 15">
                        <p class="my-2 font-light text-md">: National Highway Div-I Road</p>
                    </template>
                    <template v-else-if="engineer.division_id == 16">
                        <p class="my-2 font-light text-md">: National Highway Div-III Road</p>
                    </template>

                    <p class="my-2 font-light text-md">: {{ engineer.sub_div }}</p>
                    <br>
                    <button class="px-2 py-1 mr-3 text-red-400 border rounded-lg hover:bg-gray-300 focus:outline-none"
                        @click="modalDelete = !modalDelete">
                        Delete
                    </button>

                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {

    name: "EngineerShow",


    data() {
        return {
            engineer: {
                id: '',
                name: '',
                phone: '',
                division_id: '',
                email: '',
                post: '',
                sub_div: '',
            },
            modalEdit: false,
            modalDelete: false,


        }
    },

    mounted() {

        axios.get('/api/engineerShow/' + this.$route.params.id, {
            headers: {
                "Authorization": `Bearer ${this.$store.getters.currentUser.token}`
            }
        })
            .then(response => {
                this.engineer = response.data.engineer;

            })
            .catch(error => {

            });
    },

    methods: {

        editLC: function () {
            axios.patch('/api/engineerEdit', this.engineer, {
                headers: {
                    "Authorization": `Bearer ${this.$store.getters.currentUser.token}`
                }
            })
                .then(response => {

                    this.$router.push("/engineerList")

                    this.localcouncil = response.data.localcouncil;
                    this.modalEdit = false;
                    // this.$router.push({path: '/localcouncilShow/'+this.localcouncil.id});

                    // this.$router.push("/estimateSubmitSuccess");
                })

                .catch(errors => {

                    this.errors = errors.response.data.errors;
                });

        },

        deleteLC: function () {
            axios.get('/api/engineerDelete/' + this.$route.params.id, {
                headers: {
                    "Authorization": `Bearer ${this.$store.getters.currentUser.token}`
                }
            })
                .then(response => {


                    this.modalEdit = false;
                    // this.$router.push({path: '/localcouncilShow/'+this.localcouncil.id});

                    this.$router.push("/engineerList");
                })

                .catch(errors => {

                    this.errors = errors.response.data.errors;
                });

        },

    }


}
</script>

<style scoped></style>
