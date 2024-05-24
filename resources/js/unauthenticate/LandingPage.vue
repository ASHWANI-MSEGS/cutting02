<template>
    <div class="relative">
        <template v-if="loading">
            <PulseLoader class="object-center h-screen " />
        </template>

        <template v-else>
            <!-- Success Modals Close-na BG -->
            <div v-if="!showSuccess" @click="clearSuccess"
                class="absolute top-0 bottom-0 left-0 right-0 z-20 bg-black opacity-75 shadow-4">
            </div>
            <!-- Success Modals Close-na BG Close-na -->

            <!-- Success Modals -->
            <div v-if="!showSuccess"
                class="absolute left-0 right-0 z-40 w-5/6 h-auto ml-auto mr-auto bg-gray-200 rounded-lg shadow top-2 md:h-84">
                <br>
                <!-- Success Close Button -->
                <div class="absolute top-0 right-0">
                    <button @click="clearSuccess" class="mt-6 mr-6">
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
                <!-- Success Close Button Close -->

                <div
                    class="absolute left-0 right-0 flex flex-col items-center justify-center h-auto ml-auto mr-auto top-2 w-92">
                    <div class="flex justify-center h-24 rounded-t-lg bg-successcyan w-92">
                    </div>

                    <div class="flex justify-center text-xl font-bold text-blue-600 ">
                        Successs
                    </div>
                </div>

            </div>
            <!-- Close Success Modals -->

            <!--Road Cutting Header Hnuai Body ( for md screen and above) -->
            <div class="flex items-center justify-between w-screen h-auto md:px-32 xl:px-64 bg-homeblue md:pb-12 md:pt-12">
                <div class="hidden w-1/2 max-w-full mt-24 md:block md:px-1 md:pb-12 lg:pb-24 md:w-4/5 lg:w-4/5 ">
                    <p class="text-2xl font-bold leading-tight text-white sm:mt-8 sm:text-4xl md:text-4xl">PWD
                        <br class="hidden lg:inline"> <span class="text-white md:text-3xl">Apply For Road Cutting</span>
                    </p>
                    <br>
                    <p class="pt-2 text-white">I awmhmun atangin Road Cutting Permit i dil thei e</p>

                    <div class="flex ">

                        <button @click="scrollMeTo('formPort')"
                            class="flex items-center px-5 pt-1 pb-2 mt-4 text-sm text-white rounded-lg shadow bg-buttonpink hover:bg-red-500 sm:mt-6 focus:outline-none">
                            Apply
                        </button>
                        <button @click="scrollMeTo('trackPort')"
                            class="flex items-center px-5 py-2 mt-4 ml-4 text-sm text-white border rounded-lg shadow border-1 hover:text-white-600 sm:mt-6 hover:bg-blue-800 border-gray focus:outline-none">
                            Track
                        </button>
                    </div>

                </div>

                <div class="hidden mb-8 lg:block md:relative xl:mb-8 ">
                    <Logolg />
                </div>
                <div class="hidden mb-8 md:block lg:hidden md:relative ">
                    <Logomd />
                </div>
            </div>
            <!-- Close of Header Hnuai Body (for md screen and above) -->
            <!-- Road Cutting Header Hnuai Body (for sm  untill md) -->
            <div class="block w-screen px-12 pt-4 md:hidden bg-homeblue h-72 ">
                <div>
                    <center>
                        <div class="pb-2">
                            <Logosm />
                        </div>
                    </center>

                    <div class="">
                        <center>
                            <p class="text-2xl font-bold leading-tight text-white sm:text-4xl lg:text-3xl">PWD Road Cutting
                            </p>
                        </center>

                        <div class="flex justify-center mt-3">

                            <button @click="scrollMeTo('formPort')"
                                class="flex items-center px-5 py-2 text-sm text-white rounded-lg shadow bg-buttonpink hover:bg-red-500 focus:outline-none">
                                Apply
                            </button>
                            <button @click="scrollMeTo('trackPort')"
                                class="flex items-center px-5 py-2 ml-4 text-sm text-white border-red-400 rounded-lg shadow border-1 hover:text-white-600 hover:bg-blue-800 focus:outline-none">
                                Track
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Close of Header Hnuai Body (for sm untill md) -->

            <!-- Middle Body  -->
            <div class="flex justify-center h-auto bg-gray-200 z-5">

                <!-- Absolute positioning for Form  -->
                <form @submit.prevent="submitForm"
                    class="left-0 right-0 z-10 w-4/5 h-auto px-2 py-2 mb-12 -mt-4 bg-white rounded-lg shadow md:-mt-12 -top-2 xl:w-3/5 lg:py-6 lg:px-12 ">
                    <div class="font-family:'Segoe UI' text-2xl text-center text-textblue font-semibold  mb-4">Road Cutting
                        Form </div>

                    <br>

                    <div ref="formPort" class="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                        <InputFieldForm name="name" label="Hming Pum" :errors="errors"
                            placeholder="I hming Pum chhu lut rawh le" @update:field="form.name = $event" />

                        <InputFieldForm name="email" label="Email" :errors="errors"
                            placeholder="I Email Id chhu lut rawh le" @update:field="form.email = $event" />
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                        <InputFieldForm name="phone" label="Phone no." :errors="errors"
                            placeholder="I mobile number chhu lut rawh le" @update:field="form.phone = $event" />

                        <!-- <InputFieldForm name="length" label="Kawng(Road) tan tur sei zawng" :errors="errors" placeholder="Meter zatin chhu lut rawh le" @update:field="form.length=$event" /> -->
                    </div>

                    <!-- for Residence Address -->
                    <div class="px-6 py-1 mb-6 border rounded">
                        <p class="px-1 pt-1 pb-2 text-lg font-normal text-textblueform">Residence address</p>

                        <div class="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                            <InputFieldForm name="rhouseno" label="House No. " :errors="errors" placeholder="House number"
                                @update:field="form.rhouseno = $event" />

                            <InputFieldForm name="rcity" label="City/Town/Village" :errors="errors"
                                placeholder="City/Town/Village" @update:field="form.rcity = $event" />


                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 md:gap-4">


                            <div>
                                <div class="relative pb-2 pr-1 mb-3 border rounded-lg test">
                                    <label for="form.district"
                                        class="absolute px-4 py-2 text-sm font-normal text-textblueform">District</label>
                                    <select v-model="form.rdistrict" @change="updateDistrictR()"
                                        class="w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg cursor-pointer text-textgrayform focus:outline-none"
                                        :errors="errors">
                                        <option value="" class="inline-block text-textgrayform " disabled selected>In
                                            district awmna select la</option>
                                        <option v-for="district in districts"
                                            class="inline-block ml-2 mr-2 text-textgrayform" :key="district.id">
                                            {{ district.name }} </option>
                                    </select>
                                </div>
                                <p class="pb-4 text-sm text-red-600" v-text="errorDistrictR()">Error Here</p>
                            </div>
                            <div>
                                <div class="relative pb-2 pr-1 mb-3 border rounded-lg test">
                                    <label for="form.rlocalcouncil_name"
                                        class="absolute px-4 py-2 text-sm font-normal text-textblueform">Locality/Street/Veng</label>
                                    <select v-model="form.rlocalcouncil_name" @change="updateLr()"
                                        class="w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg text-textgrayform focus:outline-none"
                                        :errors="errors">
                                        <option value="" class="inline-block text-textgrayform " disabled selected>In Local
                                            Council awmna thlang rawh le</option>
                                        <option v-for="localcouncil in localcouncilsR"
                                            class="inline-block ml-2 mr-2 text-textgrayform" :key="localcouncil.id">
                                            {{ localcouncil.name }} </option>
                                    </select>
                                </div>
                                <p class="pb-4 text-sm text-red-600" v-text="errorLocalMr()">Error Here</p>
                            </div>

                        </div>
                    </div>
                    <!-- Close for Residence Address -->
                    <!-- Road cutna hmuntur address -->
                    <div class="px-6 py-1 mb-6 border rounded">
                        <div class="flex my-2 justiy-start">
                            <p class="px-1 pt-1 pb-2 text-lg font-normal text-textblueform">Location for cutting/road cut-na
                                tur hmun <button @click.prevent="sameAddress"
                                    class="px-2 py-2 ml-1 border rounded-lg text-textblueform border-textblueform hover:text-blue-500 focus:outline-none">Same
                                    as Residential Address</button>
                            </p>
                            <!-- <button @click.prevent="sameAddress" class="flex items-center px-5 py-1 ml-2 text-blue-700 border border-blue-700 rounded-lg hover:text-blue-500 focus:outline-none">
                                    Same as residence address
                            </button> -->
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 md:gap-4">

                            <div>
                                <div class="relative pb-2 mb-3 border rounded-lg test">
                                    <label for="houseno"
                                        class="absolute px-4 py-2 text-sm font-normal text-textblueform">House
                                        Number</label>
                                    <input type="text" @input="updateHouse()"
                                        class="w-full px-4 pt-6 mt-1 rounded-lg text-textgrayform focus:outline-none "
                                        placeholder="House number" v-model="form.houseno">
                                </div>
                                <p class="pb-4 text-sm text-red-600" v-text="errorHouseNumber()">Error Here</p>

                            </div>
                            <!--
                            <InputFieldForm name="form.houseno" label="House No. " :errors="errors" placeholder="House number" @update:field="form.houseno=$event" /> -->

                            <div>
                                <div class="relative pb-2 mb-3 border rounded-lg test">
                                    <label for="houseno"
                                        class="absolute px-4 py-2 text-sm font-normal text-textblueform">City/Town/Village</label>
                                    <input type="text" @input="updateCity()"
                                        class="w-full px-4 pt-6 mt-1 rounded-lg text-textgrayform focus:outline-none "
                                        placeholder="City/Town/Village" v-model="form.city">
                                </div>
                                <p class="pb-4 text-sm text-red-600" v-text="errorCity()">Error Here</p>
                            </div>

                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                            <div>
                                <div class="relative pb-2 pr-1 mb-3 border rounded-lg test">
                                    <label for="form.district"
                                        class="absolute px-4 py-2 text-sm font-normal text-textblueform">District</label>
                                    <select v-model="form.district" @change="updateDistrict()"
                                        class="w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg cursor-pointer text-textgrayform focus:outline-none"
                                        :errors="errors">
                                        <option value="" class="inline-block text-textgrayform " disabled selected>In
                                            district awmna select la</option>
                                        <option v-for="district in districts"
                                            class="inline-block ml-2 mr-2 text-textgrayform" :key="district.id">
                                            {{ district.name }} </option>
                                    </select>
                                </div>
                                <p class="pb-4 text-sm text-red-600" v-text="errorDistrict()">Error Here</p>



                            </div>
                            <!-- <InputFieldForm name="form.city" label="City/Town/Village/Khua" :errors="errors" placeholder="City/Town/Village" @update:field="form.city=$event" /> -->

                            <div>
                                <div class="relative pb-2 pr-1 mb-3 border rounded-lg test">
                                    <label for="form.localcouncil_name"
                                        class="absolute px-4 py-2 text-sm font-normal text-textblueform t">Locality/Street/Veng</label>
                                    <select v-model="form.localcouncil_name" @change="updateL()"
                                        class="w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg cursor-pointer text-textgrayform focus:outline-none"
                                        :errors="errors">
                                        <option value="" class="inline-block text-textgrayform " disabled selected>In Local
                                            Council awmna thlang rawh le</option>
                                        <option v-for="localcouncil in localcouncils"
                                            class="inline-block ml-2 mr-2 text-textgrayform" :key="localcouncil.id">
                                            {{ localcouncil.name }} </option>
                                    </select>
                                </div>
                                <p class="pb-4 text-sm text-red-600" v-text="errorLocalM()">Error Here</p>
                            </div>

                        </div>

                    </div>
                    <!-- Close for Road cutna hmuntur address -->


                    <div class="grid grid-cols-1 md:grid-cols-2">
                        <div>
                            <label for="water_id" class="px-4 text-base font-normal text-textblueform md:text-lg ">Purpose
                                of cutting/Kawng laih duh chhan:</label> <br>
                            <div class="px-4 py-1 mb-3">
                                <label class="cursor-pointer hover:text-gray-600">
                                    <input @input="updateW()" id="water_id1" type="radio" name="water_id" value="0"
                                        v-model="form.water_id" class="text-sm text-textgrayform focus:text-black"> Tui
                                    Connection Thar (New)
                                </label>
                                <br>
                                <label class="cursor-pointer hover:text-gray-600">
                                    <input @input="updateW()" id="water_id12" type="radio" name="water_id" value="1"
                                        v-model="form.water_id" class="text-sm text-textgrayform focus:text-black"> Tui
                                    Connection Hlui (Old)
                                </label>
                                <br>
                                <label class="cursor-pointer hover:text-gray-600">
                                    <input @input="updateW()" id="water_id12" type="radio" name="water_id" value="2"
                                        v-model="form.water_id" class="text-sm text-textgrayform focus:text-black"> Others
                                </label>
                            </div>
                            <p class="pb-4 text-sm text-red-600" v-text="errorTuiM()">Error Here</p>
                        </div>

                        <div>
                            <label for="road_type" class="px-4 text-lg font-normal text-textblueform ">Type of
                                Road/Pavement: </label> <br>
                            <div class="px-4 py-1">
                                <label class="cursor-pointer hover:text-gray-600">
                                    <input @input="updateR()" id="road_type1" type="radio" name="road_type" value="0"
                                        v-model="form.road_type" :errors="errors"
                                        class="text-sm text-textgrayform focus:text-black hover:text-gray-400"> Flexible
                                    Pavement (Alkatra luan)
                                </label>
                                <br>
                                <label class="cursor-pointer hover:text-gray-600">
                                    <input @input="updateR()" id="road_type2" type="radio" name="road_type" value="1"
                                        v-model="form.road_type" :errors="errors"
                                        class="text-sm text-textgrayform focus:text-black hover:text-gray-400"> Rigid
                                    Pavement (Concrete-a siam)
                                </label>
                                <br>
                                <label class="cursor-pointer hover:text-gray-600">
                                    <input @input="updateR()" id="road_type2" type="radio" name="road_type" value="2"
                                        v-model="form.road_type" :errors="errors"
                                        class="text-sm text-textgrayform focus:text-black "> Others
                                </label>
                            </div>
                            <p class="pb-4 text-sm text-red-600" v-text="errorRoadM()">Error Here</p>

                        </div>
                    </div>
                    <br>

                    <span class="flex justify-center py-2 text-sm focus:outline-none">
                        <button :disabled="!isDisabled"
                            class="inline-block px-5 py-2 text-white rounded-lg bg-buttonpink hover:bg-red-500 focus:outline-none">{{
                                submit_value }}</button>
                    </span>

                </form>
                <!-- End of Form -->
            </div>
            <!-- End of Middle Body -->

            <!-- Track Body -->
            <div ref="trackPort"
                class="flex flex-col items-center w-screen h-auto md:justify-center md:flex-row md:h-72 lg:h-auto z-5 bg-homeblue">
                <div
                    class="flex flex-col items-center justify-center w-4/5 my-2 bg-white rounded-lg md:w-1/3 lg:w-2/6 xl:w-1/3 md:my-4 lg:my-6 md:mr-12 lg:mr-20 sm:h-32 md:h-48 xl:h-56">
                    <div class="px-5 py-2 text-xl font-bold text-textblue"> Road Cutting tih ni tur in report-na</div>
                    <div class="w-4/5 border rounded-lg mb-7">
                        <label class="absolute px-2 py-2 text-xs font-bold text-blue-500">Memo No</label>
                        <input type="text" v-model="reportStore"
                            class="w-full px-2 pt-6 pb-1 text-gray-900 rounded-lg focus:outline-none "
                            placeholder="I Memo no chhu lut rawh le ">
                    </div>
                    <button @click="StoreReport" type="submit"
                        class="flex items-center py-2 mt-4 mb-4 text-sm md:mb-0 focus:outline-none">
                        <label
                            class="px-5 py-2 text-white rounded-lg bg-buttonpink hover:bg-red-500 hover:outline-none focus:outline-none">Report</label>
                    </button>
                </div>

                <div
                    class="flex flex-col items-center justify-center w-4/5 my-2 bg-white rounded-lg md:w-1/3 lg:w-2/6 xl:w-1/3 md:my-4 lg:my-6 md:ml-12 lg:ml-20 sm:h-32 md:h-48 xl:h-56">
                    <div class="px-5 py-2 text-xl font-bold text-textblue"> Track Form</div>
                    <div class="w-4/5 border rounded-lg mb-7">
                        <label class="absolute px-2 py-2 text-xs font-bold text-blue-500">Memo No</label>
                        <input type="text" v-model="memoStore"
                            class="w-full px-2 pt-6 pb-1 text-gray-900 rounded-lg focus:outline-none "
                            placeholder="I Memo no chhu lut rawh le ">
                    </div>
                    <button @click="StoreMemo" type="submit"
                        class="flex items-center py-2 mt-4 mb-4 text-sm md:mb-0 focus:outline-none">
                        <label
                            class="px-5 py-2 text-white rounded-lg bg-buttonpink hover:bg-red-500 hover:outline-none focus:outline-none">Track</label>
                    </button>
                </div>
            </div>
            <!-- End of Track Element -->

            <div class="hidden md:block">
                <!-- Infographics -->
                <div class="flex justify-center h-auto bg-gray-200">

                    <div class="hidden md:block">
                        <Sopmdblock />
                    </div>

                    <div class="block md:hidden">
                        <Sopmdhidden />
                    </div>
                </div>
                <!-- Infographics End -->

                <!-- Instruction -->
                <div class="flex justify-center h-auto bg-gray-200">
                    <div class="w-4/5 py-2 md:w-3/5 ss:px-2 sm:px-4 md:px-6 lg:px-32 md:py-6 ">
                        <center>
                            <h2 class="px-5 py-2 text-xl font-bold text-textblue">Instruction</h2>
                        </center>
                        <Accordian></Accordian>
                    </div>
                </div>
                <!-- Instruction End -->
            </div>
            <div class="block h-auto py-4 bg-gray-200 md:hidden">
                <div class="flex justify-center">
                    <button @click="gotoPage" class="px-2 py-2 text-white bg-blue-800 rounded-lg ">Instruction &
                        Infographics</button>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import { login } from '../helpers/auth';

export default {

    name: 'LandingPage',

    components: {
        PulseLoader: () => import('../components/PulseLoader'),
        Accordian: () => import('./Accordian.vue'),
        Sopmdhidden: () => import('./Sopmdhidden.vue'),
        Sopmdblock: () => import('./Sopmdblock.vue'),
        InputFieldForm: () => import('../components/InputFieldForm'),
        Logomd: () => import('./Logomd.vue'),
        Logosm: () => import('./Logosm.vue'),
        Logolg: () => import('./Logolg.vue'),
    },

    data() {
        return {

            isDisabled: "true",
            submit_value: 'Submit',

            // show: 'true',
            showSuccess: 'true',

            loading: 'true',


            memoStore: null,
            reportStore: null,

            login: {
                email: '',
                password: ''
            },
            error: null,

            form: {

                'user_id': 0,
                'name': '',
                'email': '',
                'phone': '',
                // 'length':'',

                'rhouseno': '',
                'rlocalcouncil_name': '',
                'rcity': '',
                'rdistrict': '',

                'houseno': '',
                'localcouncil_name': '',
                'city': '',
                'district': '',

                'water_id': '',
                'road_type': '',

                'division_id': '',

            },

            errors: {},

            localcouncils: {
                'id': '',
                'name': '',
                'division_id': '',
            },
            // for fetching for the dropdown of local councils
            localcouncilsR: {
                'id': '',
                'name': '',
                'division_id': '',
            },
            districts: {
                'id': '',
                'name': '',
            },

            formsuccess: '',



        }
    },

    methods: {

        // for the residence districts


        getChamphaiLCR() {
            console.log("fetching the Champhai list RESIDENCE");
            axios.get('/api/auth/champhai_local_councils')
                .then(response => {

                    this.localcouncilsR = response.data.localcouncils;
                    console.log(this.localcouncilsR);
                    this.loading = false;

                    // window.scrollTo(0, 0, 0, 0);


                })
                .catch(error => {
                    this.loading = false;
                    console.log(error.response);


                    if (error.response.status === 404) {
                        console.log(error.response.status);
                        //    this.$router.push('/localcouncil');
                    }
                });
        },
        //  in case i need this later

        getAizawlLCR() {
            console.log("fetching the Aizawl list RESIDENCE");
            axios.get('/api/auth/localcouncil')
                .then(response => {

                    this.localcouncilsR = response.data.localcouncils;
                    console.log(this.localcouncilsR);
                    this.loading = false;

                    // window.scrollTo(0, 0, 0, 0);


                })
                .catch(error => {
                    this.loading = false;
                    console.log(error.response);


                    if (error.response.status === 404) {
                        console.log(error.response.status);
                        //    this.$router.push('/localcouncil');
                    }
                });
        },

        getLungleiLCR() {
            console.log("fetching the lunglei list RESIDENCE");
            axios.get('/api/auth/lunglei_local_councils')
                .then(response => {

                    this.localcouncilsR = response.data.localcouncils;
                    console.log(this.localcouncilsR);
                    this.loading = false;

                    // window.scrollTo(0, 0, 0, 0);


                })
                .catch(error => {
                    this.loading = false;
                    console.log(error.response);


                    if (error.response.status === 404) {
                        console.log(error.response.status);
                        //    this.$router.push('/localcouncil');
                    }
                });
        },

        getSaitualLCR() {
            console.log("fetching the saitual list RESIDENCE");
            axios.get('/api/auth/saitual_local_councils')
                .then(response => {

                    this.localcouncilsR = response.data.localcouncils;
                    console.log(this.localcouncilsR);
                    this.loading = false;

                    // window.scrollTo(0, 0, 0, 0);


                })
                .catch(error => {
                    this.loading = false;
                    console.log(error.response);


                    if (error.response.status === 404) {
                        console.log(error.response.status);
                        //    this.$router.push('/localcouncil');
                    }
                });
        },

        getMamitLCR() {
            console.log("fetching the mamit list RESIDENCE");
            axios.get('/api/auth/mamit_local_councils')
                .then(response => {

                    this.localcouncilsR = response.data.localcouncils;
                    console.log(this.localcouncilsR);
                    this.loading = false;

                    // window.scrollTo(0, 0, 0, 0);


                })
                .catch(error => {
                    this.loading = false;
                    console.log(error.response);


                    if (error.response.status === 404) {
                        console.log(error.response.status);
                        //    this.$router.push('/localcouncil');
                    }
                });
        },

        getSiahaLCR() {
            console.log("fetching the siaha list RESIDENCE");
            axios.get('/api/auth/siaha_local_councils')
                .then(response => {

                    this.localcouncilsR = response.data.localcouncils;
                    console.log(this.localcouncilsR);
                    this.loading = false;

                    // window.scrollTo(0, 0, 0, 0);


                })
                .catch(error => {
                    this.loading = false;
                    console.log(error.response);


                    if (error.response.status === 404) {
                        console.log(error.response.status);
                        //    this.$router.push('/localcouncil');
                    }
                });
        },

        getKhawzawlLCR() {
            console.log("fetching the khawzawl list RESIDENCE");
            axios.get('/api/auth/khawzawl_local_councils')
                .then(response => {

                    this.localcouncilsR = response.data.localcouncils;
                    console.log(this.localcouncilsR);
                    this.loading = false;

                    // window.scrollTo(0, 0, 0, 0);


                })
                .catch(error => {
                    this.loading = false;
                    console.log(error.response);


                    if (error.response.status === 404) {
                        console.log(error.response.status);
                        //    this.$router.push('/localcouncil');
                    }
                });
        },

        getKolasibLCR() {
            console.log("fetching the kolasib list RESIDENCE");
            axios.get('/api/auth/kolasib_local_councils')
                .then(response => {

                    this.localcouncilsR = response.data.localcouncils;
                    console.log(this.localcouncilsR);
                    this.loading = false;

                    // window.scrollTo(0, 0, 0, 0);


                })
                .catch(error => {
                    this.loading = false;
                    console.log(error.response);


                    if (error.response.status === 404) {
                        console.log(error.response.status);
                        //    this.$router.push('/localcouncil');
                    }
                });
        },



        getLawngtlaiLCR() {
            console.log("fetching the lawngtlai list RESIDENCE");
            axios.get('/api/auth/lawngtlai_local_councils')
                .then(response => {

                    this.localcouncilsR = response.data.localcouncils;
                    console.log(this.localcouncilsR);
                    this.loading = false;

                    // window.scrollTo(0, 0, 0, 0);


                })
                .catch(error => {
                    this.loading = false;
                    console.log(error.response);


                    if (error.response.status === 404) {
                        console.log(error.response.status);
                        //    this.$router.push('/localcouncil');
                    }
                });
        },

        getSerchhipLCR() {
            console.log("fetching the serchhip list RESIDENCE");
            axios.get('/api/auth/serchhip_local_councils')
                .then(response => {

                    this.localcouncilsR = response.data.localcouncils;
                    console.log(this.localcouncilsR);
                    this.loading = false;

                    // window.scrollTo(0, 0, 0, 0);


                })
                .catch(error => {
                    this.loading = false;
                    console.log(error.response);


                    if (error.response.status === 404) {
                        console.log(error.response.status);
                        //    this.$router.push('/localcouncil');
                    }
                });
        },

        getLungleiRoadDiv2HnahthialLCR() {
            console.log("fetching the lunglei road div hnahthial list RESIDENCE");
            axios.get('/api/auth/lunglei_road_div2_hnahthial')
                .then(response => {

                    this.localcouncilsR = response.data.localcouncils;
                    console.log(this.localcouncilsR);
                    this.loading = false;

                    // window.scrollTo(0, 0, 0, 0);


                })
                .catch(error => {
                    this.loading = false;
                    console.log(error.response);


                    if (error.response.status === 404) {
                        console.log(error.response.status);
                        //    this.$router.push('/localcouncil');
                    }
                });
        },
        getHmuifangDivisionLCR() {
            console.log("fetching the lhmuigfang division list RESIDENCE");
            axios.get('/api/auth/hmuifang_division')
                .then(response => {

                    this.localcouncilsR = response.data.localcouncils;
                    console.log(this.localcouncilsR);
                    this.loading = false;

                    // window.scrollTo(0, 0, 0, 0);


                })
                .catch(error => {
                    this.loading = false;
                    console.log(error.response);


                    if (error.response.status === 404) {
                        console.log(error.response.status);
                        //    this.$router.push('/localcouncil');
                    }
                });
        },
        getNationalHighwayDiv1LCR() {
            console.log("fetching the lunglei road div hnahthial list RESIDENCE");
            axios.get('/api/auth/national_highway_div1')
                .then(response => {

                    this.localcouncilsR = response.data.localcouncils;
                    console.log(this.localcouncilsR);
                    this.loading = false;

                    // window.scrollTo(0, 0, 0, 0);


                })
                .catch(error => {
                    this.loading = false;
                    console.log(error.response);


                    if (error.response.status === 404) {
                        console.log(error.response.status);
                        //    this.$router.push('/localcouncil');
                    }
                });
        },
        getNationalHighwayDiv3LCR() {
            console.log("fetching the lunglei road div hnahthial list RESIDENCE");
            axios.get('/api/auth/national_highway_div3')
                .then(response => {

                    this.localcouncilsR = response.data.localcouncils;
                    console.log(this.localcouncilsR);
                    this.loading = false;

                    // window.scrollTo(0, 0, 0, 0);


                })
                .catch(error => {
                    this.loading = false;
                    console.log(error.response);


                    if (error.response.status === 404) {
                        console.log(error.response.status);
                        //    this.$router.push('/localcouncil');
                    }
                });
        },
        //LOCATION OF ROAD CUTTING LOCAL COUNCIL DROPDOWN



        getChamphaiLC() {
            console.log("fetching the Champhai list Place of cutting");
            axios.get('/api/auth/champhai_local_councils')
                .then(response => {

                    this.localcouncils = response.data.localcouncils;
                    console.log(this.localcouncils);
                    this.loading = false;

                    // window.scrollTo(0, 0, 0, 0);


                })
                .catch(error => {
                    this.loading = false;
                    console.log(error.response);


                    if (error.response.status === 404) {
                        console.log(error.response.status);
                        //    this.$router.push('/localcouncil');
                    }
                });
        },
        //  in case i need this later

        getAizawlLC() {
            console.log("fetching the Aizawl list Place of cutting");
            axios.get('/api/auth/localcouncil')
                .then(response => {

                    this.localcouncils = response.data.localcouncils;
                    console.log(this.localcouncils);
                    this.loading = false;

                    // window.scrollTo(0, 0, 0, 0);


                })
                .catch(error => {
                    this.loading = false;
                    console.log(error.response);


                    if (error.response.status === 404) {
                        console.log(error.response.status);
                        //    this.$router.push('/localcouncil');
                    }
                });
        },

        getLungleiLC() {
            console.log("fetching the lunglei list Place of cutting");
            axios.get('/api/auth/lunglei_local_councils')
                .then(response => {

                    this.localcouncils = response.data.localcouncils;
                    console.log(this.localcouncils);
                    this.loading = false;

                    // window.scrollTo(0, 0, 0, 0);


                })
                .catch(error => {
                    this.loading = false;
                    console.log(error.response);


                    if (error.response.status === 404) {
                        console.log(error.response.status);
                        //    this.$router.push('/localcouncil');
                    }
                });
        },

        getSaitualLC() {
            console.log("fetching the saitual list Place of cutting");
            axios.get('/api/auth/saitual_local_councils')
                .then(response => {

                    this.localcouncils = response.data.localcouncils;
                    console.log(this.localcouncils);
                    this.loading = false;

                    // window.scrollTo(0, 0, 0, 0);


                })
                .catch(error => {
                    this.loading = false;
                    console.log(error.response);


                    if (error.response.status === 404) {
                        console.log(error.response.status);
                        //    this.$router.push('/localcouncil');
                    }
                });
        },

        getMamitLC() {
            console.log("fetching the mamit list Place of cutting");
            axios.get('/api/auth/mamit_local_councils')
                .then(response => {

                    this.localcouncils = response.data.localcouncils;
                    console.log(this.localcouncils);
                    this.loading = false;

                    // window.scrollTo(0, 0, 0, 0);


                })
                .catch(error => {
                    this.loading = false;
                    console.log(error.response);


                    if (error.response.status === 404) {
                        console.log(error.response.status);
                        //    this.$router.push('/localcouncil');
                    }
                });
        },

        getSiahaLC() {
            console.log("fetching the siaha list Place of cutting");
            axios.get('/api/auth/siaha_local_councils')
                .then(response => {

                    this.localcouncils = response.data.localcouncils;
                    console.log(this.localcouncils);
                    this.loading = false;

                    // window.scrollTo(0, 0, 0, 0);


                })
                .catch(error => {
                    this.loading = false;
                    console.log(error.response);


                    if (error.response.status === 404) {
                        console.log(error.response.status);
                        //    this.$router.push('/localcouncil');
                    }
                });
        },

        getKhawzawlLC() {
            console.log("fetching the khawzawl list Place of cutting");
            axios.get('/api/auth/khawzawl_local_councils')
                .then(response => {

                    this.localcouncils = response.data.localcouncils;
                    console.log(this.localcouncils);
                    this.loading = false;

                    // window.scrollTo(0, 0, 0, 0);


                })
                .catch(error => {
                    this.loading = false;
                    console.log(error.response);


                    if (error.response.status === 404) {
                        console.log(error.response.status);
                        //    this.$router.push('/localcouncil');
                    }
                });
        },

        getKolasibLC() {
            console.log("fetching the kolasib list Place of cutting");
            axios.get('/api/auth/kolasib_local_councils')
                .then(response => {

                    this.localcouncils = response.data.localcouncils;
                    console.log(this.localcouncils);
                    this.loading = false;

                    // window.scrollTo(0, 0, 0, 0);


                })
                .catch(error => {
                    this.loading = false;
                    console.log(error.response);


                    if (error.response.status === 404) {
                        console.log(error.response.status);
                        //    this.$router.push('/localcouncil');
                    }
                });
        },



        getLawngtlaiLC() {
            console.log("fetching the lawngtlai list Place of cutting");
            axios.get('/api/auth/lawngtlai_local_councils')
                .then(response => {

                    this.localcouncils = response.data.localcouncils;
                    console.log(this.localcouncils);
                    this.loading = false;

                    // window.scrollTo(0, 0, 0, 0);


                })
                .catch(error => {
                    this.loading = false;
                    console.log(error.response);


                    if (error.response.status === 404) {
                        console.log(error.response.status);
                        //    this.$router.push('/localcouncil');
                    }
                });
        },

        getSerchhipLC() {
            console.log("fetching the serchhip list Place of cutting");
            axios.get('/api/auth/serchhip_local_councils')
                .then(response => {

                    this.localcouncils = response.data.localcouncils;
                    console.log(this.localcouncils);
                    this.loading = false;

                    // window.scrollTo(0, 0, 0, 0);


                })
                .catch(error => {
                    this.loading = false;
                    console.log(error.response);


                    if (error.response.status === 404) {
                        console.log(error.response.status);
                        //    this.$router.push('/localcouncil');
                    }
                });
        },

        getLungleiRoadDiv2HnahthialLC() {
            console.log("fetching the hnahthial list Place of cutting");
            axios.get('/api/auth/lunglei_road_div2_hnahthial')
                .then(response => {

                    this.localcouncils = response.data.localcouncils;
                    console.log(this.localcouncils);
                    this.loading = false;

                    // window.scrollTo(0, 0, 0, 0);


                })
                .catch(error => {
                    this.loading = false;
                    console.log(error.response);


                    if (error.response.status === 404) {
                        console.log(error.response.status);
                        //    this.$router.push('/localcouncil');
                    }
                });
        },
        getHmuifangDivisionLC() {
            console.log("fetching the hnahthial list Place of cutting");
            axios.get('/api/auth/hmuifang_division')
                .then(response => {

                    this.localcouncils = response.data.localcouncils;
                    console.log(this.localcouncils);
                    this.loading = false;

                    // window.scrollTo(0, 0, 0, 0);


                })
                .catch(error => {
                    this.loading = false;
                    console.log(error.response);


                    if (error.response.status === 404) {
                        console.log(error.response.status);
                        //    this.$router.push('/localcouncil');
                    }
                });
        },
        getNationalHighwayDiv1LC() {
            console.log("fetching the hnahthial list Place of cutting");
            axios.get('/api/auth/national_highway_div1')
                .then(response => {

                    this.localcouncils = response.data.localcouncils;
                    console.log(this.localcouncils);
                    this.loading = false;

                    // window.scrollTo(0, 0, 0, 0);


                })
                .catch(error => {
                    this.loading = false;
                    console.log(error.response);


                    if (error.response.status === 404) {
                        console.log(error.response.status);
                        //    this.$router.push('/localcouncil');
                    }
                });
        },
        getNationalHighwayDiv3LC() {
            console.log("fetching the hnahthial list Place of cutting");
            axios.get('/api/auth/national_highway_div3')
                .then(response => {

                    this.localcouncils = response.data.localcouncils;
                    console.log(this.localcouncils);
                    this.loading = false;

                    // window.scrollTo(0, 0, 0, 0);


                })
                .catch(error => {
                    this.loading = false;
                    console.log(error.response);


                    if (error.response.status === 404) {
                        console.log(error.response.status);
                        //    this.$router.push('/localcouncil');
                    }
                });
        },








        // for the dynamic dropdown
        // getChamphaiLCR() {
        //     console.log("fetching the Chaphai list");
        //     axios.get('/api/auth/champhai_local_councils')
        //         .then(response => {

        //             this.localcouncils = response.data.localcouncils;
        //             console.log(this.localcouncils);
        //             this.loading = false;

        //             // window.scrollTo(0, 0, 0, 0);


        //         })
        //         .catch(error => {
        //             this.loading = false;
        //             console.log(error.response);


        //             if (error.response.status === 404) {
        //                 console.log(error.response.status);
        //                 //    this.$router.push('/localcouncil');
        //             }
        //         });
        // },

        // getChamphaiLC() {
        //     console.log("fetching the Chaphai list");
        //     axios.get('/api/auth/champhai_local_councils')
        //         .then(response => {

        //             this.localcouncils = response.data.localcouncils;
        //             console.log(this.localcouncils);
        //             this.loading = false;

        //             // window.scrollTo(0, 0, 0, 0);


        //         })
        //         .catch(error => {
        //             this.loading = false;
        //             console.log(error.response);


        //             if (error.response.status === 404) {
        //                 console.log(error.response.status);
        //                 //    this.$router.push('/localcouncil');
        //             }
        //         });
        // },



        gotoPage() {
            this.$router.push({ path: '/instructionPage' });
        },

        StoreMemo() {

            this.$store.dispatch("memoStore", this.memoStore);
            this.$router.push({ path: '/trackFormLanding' });

        },

        StoreReport() {

            this.$store.dispatch("reportStore", this.reportStore);
            this.$router.push({ path: '/reportFormLanding' });
        },


        scrollMeTo(refName) {
            var element = this.$refs[refName];
            var top = element.offsetTop;

            window.scrollTo(0, top);
        },

        toggle() {

            this.show = !this.show

        },

        // toggleSuccess(){

        //         this.showSuccess = !this.showSuccess

        //     },
        clearSuccess() {
            this.showSuccess = true

        },

        clear() {

            this.show = true

            // this.error = null

        },

        // clearSuccess() {

        //     this.showSuccess = true,
        // },


        // Login Methods ho

        authenticate() {
            this.$store.dispatch('login');

            login(this.$data.login)
                .then((res) => {
                    this.$store.commit("loginSuccess", res);
                    this.$router.push({ path: '/home' });

                })
                .catch((error) => {
                    this.$store.commit("loginFailed", { error });
                });
        },

        // Login Methods Closed

        // Form Submit

        submitForm: function () {

            this.disableS;

            axios.post('/api/auth/form', this.form)
                .then(response => {

                    //  this.$router.push(response.data.links.self);

                    this.formsuccess = response.data.form;
                    this.$router.push('/submitSuccess/' + this.formsuccess.id);
                    this.enableS;



                    // this.showSuccess = !this.showSuccess;



                })

                .catch(errors => {


                    this.errors = errors.response.data.errors;
                    this.enableS;


                });

        },


        US: function () {
            if (this.$store.getters.currentUser)
                this.form.user_id = this.$store.getters.currentUser.id
        },

        DIV: function (event) {
            this.form.division_id = event

        },

        LOC: function (event) {
            this.form.localcouncil_id = event

        },

        errorHouseNumber() {

            if (this.hasErrorHouseNumber) {
                // return this.errors['localcouncil_name'][0];
                return "District i select tel lo tlat";
            }

        },

        errorCity() {

            if (this.hasErrorCity) {
                // return this.errors['localcouncil_name'][0];
                return "Khua/City/Village i enter tel lo tlat";
            }

        },

        errorDistrictR() {

            if (this.hasErrorDistrictR) {
                // return this.errors['localcouncil_name'][0];
                return "In District select tha leh la";
            }

        },

        errorDistrict() {

            if (this.hasErrorDistrict) {
                // return this.errors['localcouncil_name'][0];
                return "Road Cutting-na tur District select tha leh la";
            }

        },


        errorLocalM() {

            if (this.hasErrorL) {
                // return this.errors['localcouncil_name'][0];
                return "In Local Council i select tel lo tlat";
            }

        },

        errorLocalMr() {

            if (this.hasErrorLr) {
                // return this.errors['localcouncil_name'][0];
                return "In Local Council i select tel lo tlat";
            }

        },

        errorTuiM() {

            if (this.hasErrorT) {
                // return this.errors['localcouncil_name'][0];
                return "Tui Connection khi select tel rawh le";
            }

        },
        errorRoadM() {

            if (this.hasErrorR) {
                // return this.errors['localcouncil_name'][0];
                return "Road type khi select tel rawh le";
            }

        },


        errorClassObjectL: function () {
            return {
                'error-field': this.hasErrorL
            }
        },

        updateL: function () {
            console.log(this.form.localcouncil_name, "name of the locality for road cutting ");
            this.errors['localcouncil_name'] = null;


        },
        updateLr: function () {
            console.log(this.form.rlocalcouncil_name, "name of the locality ");
            this.errors['rlocalcouncil_name'] = null;

        },

        updateDistrict: function () {
            this.errors['district_name'] = null;


        },

        updateW: function () {
            this.errors['water_id'] = null;

        },
        updateR: function () {
            this.errors['road_type'] = null;
        },

        updateHouse: function () {
            this.errors['houseno'] = null;

        },
        updateCity: function () {
            this.errors['city'] = null;
        },

        updateDistrictR: function () {
            console.log(this.form.rdistrict, "for district Residence");
            //gonna change the local council list
            if (this.form.rdistrict === 'Champhai') {
                this.getChamphaiLCR();
            }
            else if (this.form.rdistrict === 'Lunglei') {
                this.getLungleiLCR();
            }
            else if (this.form.rdistrict === 'Saitual') {
                this.getSaitualLCR();
            }
            else if (this.form.rdistrict === 'Mamit') {
                this.getMamitLCR();
            }
            else if (this.form.rdistrict === 'Siaha') {
                this.getSiahaLCR();
            }
            else if (this.form.rdistrict === 'Khawzawl') {
                this.getKhawzawlLCR();
            }
            else if (this.form.rdistrict === 'Kolasib') {
                this.getKolasibLCR();
            }
            else if (this.form.rdistrict === 'Lawngtlai') {
                this.getLawngtlaiLCR();
            }
            else if (this.form.rdistrict === 'Serchhip') {
                this.getSerchhipLCR();
            }


            else if (this.form.rdistrict === 'Lunglei Road Div-II, Hnahthial') {
                this.getLungleiRoadDiv2HnahthialLCR();
            }
            else if (this.form.rdistrict === 'Hmuifang Division') {
                this.getHmuifangDivisionLCR();
            }
            else if (this.form.rdistrict === 'National Highway Div-I') {
                this.getNationalHighwayDiv1LCR();
            }
            else if (this.form.rdistrict === 'National Highway Div-III') {
                this.getNationalHighwayDiv3LCR();
            }

            else {
                this.getAizawlLCR();
            }

            this.errors['rdistrict'] = null;
        },

        updateDistrict: function () {
            console.log(this.form.district, " location for cuttiing");
            //gonna change the local council list
            if (this.form.district === 'Champhai') {
                this.getChamphaiLC();
            }
            else if (this.form.district === 'Lunglei') {
                this.getLungleiLC();
            }
            else if (this.form.district === 'Saitual') {
                this.getSaitualLC();
            }
            else if (this.form.district === 'Mamit') {
                this.getMamitLC();
            }
            else if (this.form.district === 'Siaha') {
                this.getSiahaLC();
            }
            else if (this.form.district === 'Khawzawl') {
                this.getKhawzawlLC();
            }
            else if (this.form.district === 'Kolasib') {
                this.getKolasibLC();
            }
            else if (this.form.district === 'Lawngtlai') {
                this.getLawngtlaiLC();
            }
            else if (this.form.district === 'Serchhip') {
                this.getSerchhipLC();
            }
            else if (this.form.district === 'Lunglei Road Div-II, Hnahthial') {
                this.getLungleiRoadDiv2HnahthialLC();
            }
            else if (this.form.district === 'Hmuifang Division') {
                this.getHmuifangDivisionLC();
            }
            else if (this.form.district === 'National Highway Div-I') {
                this.getNationalHighwayDiv1LC();
            }
            else if (this.form.district === 'National Highway Div-III') {
                this.getNationalHighwayDiv3LC();
            }
            else {
                this.getAizawlLC();
            }


            this.errors['district'] = null;
        },

        // Form Submit Closed

        // check (e) {
        //   this.$nextTick(() => {
        //     this.form.houseno=this.form.rhouseno;
        //   })
        // }



    },


    computed: {

        disableS() {
            this.isDisabled = false;
            this.submit_value = "Submitting";
        },

        enableS() {
            this.isDisabled = true;
            this.submit_value = "Submit";
        },



        sameAddress() {

            this.form.district = this.form.rdistrict;
            this.updateDistrict();

            this.form.houseno = this.form.rhouseno;
            this.errors['houseno'] = null;
            this.form.localcouncil_name = this.form.rlocalcouncil_name;
            this.errors['localcouncil_name'] = null;
            this.form.city = this.form.rcity;
            this.errors['city'] = null;
            this.errors['district'] = null;

        },


        authError() {
            return this.$store.getters.authError;
        },

        hasErrorHouseNumber() {

            return this.errors && this.errors['houseno'] && this.errors['houseno'].length > 0;

        },

        hasErrorCity() {

            return this.errors && this.errors['city'] && this.errors['city'].length > 0;

        },


        hasErrorL() {

            return this.errors && this.errors['localcouncil_name'] && this.errors['localcouncil_name'].length > 0;

        },

        hasErrorLr() {

            return this.errors && this.errors['rlocalcouncil_name'] && this.errors['rlocalcouncil_name'].length > 0;

        },

        hasErrorT() {

            return this.errors && this.errors['water_id'] && this.errors['water_id'].length > 0;

        },
        hasErrorR() {

            return this.errors && this.errors['road_type'] && this.errors['road_type'].length > 0;

        },

        hasErrorDistrictR() {

            return this.errors && this.errors['rdistrict'] && this.errors['rdistrict'].length > 0;

        },

        hasErrorDistrict() {

            return this.errors && this.errors['district'] && this.errors['district'].length > 0;

        },

        // ///place of cutting
        //         getChamphaiLC() {
        //             console.log("fetching the champhai list PLACE OF CUTTING");
        //             axios.get('/api/auth/champhai_local_councils')
        //                 .then(response => {

        //                     this.localcouncils = response.data.localcouncils;
        //                     console.log(this.localcouncils);
        //                     this.loading = false;

        //                     // window.scrollTo(0, 0, 0, 0);


        //                 })
        //                 .catch(error => {
        //                     this.loading = false;
        //                     console.log(error.response);


        //                     if (error.response.status === 404) {
        //                         console.log(error.response.status);
        //                         //    this.$router.push('/localcouncil');
        //                     }
        //                 });
        //         },




        // hasError: function () {
        //     return this.errors && this.errors[this.name] && this.errors[this.name].length > 0;
        // }
    },




    mounted() {

        // var element1 = this.$els['topPort'];
        // var pos = element1.offsetTop;
        // window.scrollTo(0, pos),


        // for district for the REsiddence
        axios.get('/api/auth/localcouncil')
            .then(response => {

                this.localcouncilsR = response.data.localcouncils;

                this.loading = false;

                window.scrollTo(0, 0, 0, 0);


            })
            .catch(error => {
                this.loading = false;


                if (error.response.status === 404) {
                    console.log(error.response.status);
                    //    this.$router.push('/localcouncil');
                }
            });


        // for district for the road cutting
        axios.get('/api/auth/localcouncil')
            .then(response => {

                this.localcouncils = response.data.localcouncils;

                this.loading = false;

                window.scrollTo(0, 0, 0, 0);


            })
            .catch(error => {
                this.loading = false;


                if (error.response.status === 404) {
                    console.log(error.response.status);
                    //    this.$router.push('/localcouncil');
                }
            });

        axios.get('/api/auth/district')
            .then(response => {

                this.districts = response.data.districts;

                this.loading = false;

            })
            .catch(error => {
                this.loading = false;


                if (error.response.status === 404) {
                    this.$router.push('/localcouncil');
                }
            });
    },




}
</script>
<style scoped>
.error-field {
    @apply .border .border-red-500 .border-dotted
}

.error {
    text-align: center;
    color: red;
}

.test:focus-within {

    @apply .border .border-blue-400 .border-2
}
</style>
