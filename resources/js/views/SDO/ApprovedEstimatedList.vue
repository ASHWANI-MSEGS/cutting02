<template>
    <div class="min-h-auto">
        <div v-if="loading">
            <PulseLoader class="object-center h-full " />
        </div>

        <div v-else>


            <div class="flex flex-col items-end flex-1 ">
                <SearchBarForm />
            </div>

            <div class="w-full px-2 py-3 mx-1 mt-3 text-white rounded-t-lg md:mx-3 bg-tableheader">
                <p>Total:
                   <template> {{ estimates.total }}  </template>

                    <!-- <template v-if="user.division_id == 1">{{ formSouthCount }}</template>
                    <template v-else-if="user.division_id == 2">{{ formNorthCount }}</template>

                    <template v-else-if="user.division_id == 4">{{ formChamphaiCount }}</template>
                    <template v-else-if="user.division_id == 5">{{ formLungleiCount }}</template>
                    <template v-else-if="user.division_id == 6">{{ formSaitualCount }}</template>
                    <template v-else-if="user.division_id == 7">{{ formMamitCount }}</template>
                    <template v-else-if="user.division_id == 8">{{ formSiahaCount }}</template>
                    <template v-else-if="user.division_id == 9">{{ formKhawzawlCount }}</template>
                    <template v-else-if="user.division_id == 10">{{ formKolasibCount }}</template>
                    <template v-else-if="user.division_id == 11">{{ formLawngtlaiCount }}</template>
                    <template v-else-if="user.division_id == 12">{{ formSerchhipCount }}</template>
                    <template v-else-if="user.division_id == 13">{{ formHnahthialCount }}</template> -->
                </p>

                <!-- <div class="flex flex-row justify-between">
                    <div class="w-1/5">Memo</div>
                    <div >Length</div>
                    <div>Breadth</div>
                    <div>Area</div>
                    <div class="pr-3">Status</div>
                </div>   -->
            </div>


            <div v-for="estimate in estimates.data" :key="estimate.id">

                <router-link :to="'/EstimateShowSDO/' + estimate.id">

                    <div class="w-full px-2 py-2 mx-1 bg-white md:mx-3 hover:bg-tablehover">
                        <div
                            class="grid grid-cols-1 gap-0 md:grid-cols-3 md:gap-1 lg:grid-cols-5 lg:gap-1 xl:grid-cols-6 xl:gap-1">
                            <div class="text-left">Memo: {{ estimate.form_memo }}</div>
                            <div class="text-left">Length: {{ estimate.length }} metre</div>
                            <div class="text-left">Breadth: {{ estimate.breadth }} metre</div>
                            <div class="text-left">Area: {{ estimate.area }} sq. metres</div>
                            <div class="text-left">Rate: Rs. {{ estimate.area }} per sq. metres</div>
                            <div class="text-left">Total: Rs. {{ estimate.total }}</div>
                            <div class="text-left">Road Name: {{ estimate.road_name }}</div>
                            <div class="text-left">Road Type: {{ estimate.road_type }}</div>
                            <div>
                                <template v-if="estimate.division_id == 1">
                                    Div: Road South
                                </template>
                                <template v-else-if="estimate.division_id === 2">
                                    Div: Road North
                                </template>
                                <template v-else-if="estimate.division_id === 4">
                                    Div: Road Champhai
                                </template>
                                <template v-else-if="estimate.division_id === 5">
                                    Div: Road Lunglei
                                </template>
                                <template v-else-if="estimate.division_id === 6">
                                    Div: Road Saitual
                                </template>
                                <template v-else-if="estimate.division_id === 7">
                                    Div: Road Mamit
                                </template>
                                <template v-else-if="estimate.division_id === 8">
                                    Div: Road Siaha
                                </template>
                                <template v-else-if="estimate.division_id === 9">
                                    Div: Road Khawzawl
                                </template>
                                <template v-else-if="estimate.division_id === 10">
                                    Div: Road Kolasib
                                </template>
                                <template v-else-if="estimate.division_id === 11">
                                    Div: Road Lawngtlai
                                </template>
                                <template v-else-if="estimate.division_id === 12">
                                    Div: Road Serchhip
                                </template>
                                <template v-else-if="estimate.division_id === 13">
                                    Div: Road Hnahthial
                                </template>
                            </div>
                            <div class="text-left">
                                <template v-if="estimate.status === 0">
                                    Status: <span class="text-yellow-500">Pending</span>
                                </template>

                                <template v-else>
                                    Status: <span class="text-green-500">Verified</span>
                                </template>
                            </div>
                        </div>
                        <br>
                        <hr>
                    </div>
                </router-link>

            </div>

            <div v-if="estimates.total === 0">
                <p class="px-5 py-2">NO Approved Estimate yet</p>
            </div>

            <div class="mx-3 my-3">
                <pagination :pagination="pagination" @paginate="fetchUsers" :offset="4" />
            </div>

        </div>

    </div>
</template>


<script>

import SearchBarForm from '../../components/SearchBarForm';
import PulseLoader from '../../components/PulseLoader';
import UserCircle from '../../components/UserCircle';
import Pagination from '../Pagination.vue';

export default {
    name: "ApprovedEstimatedList",

    components: {
        SearchBarForm,
        PulseLoader,
        UserCircle,
        pagination: Pagination,
    },

    data: function () {
        return {
            offset: 3,
            pagination: {},
            aStatus: true,
            loading: true,
            estimates: {},


            user: this.$store.getters.currentUser,

            // formSouthCount: '',
            // formNorthCount: '',

            // formChamphaiCount: '',
            // formLungleiCount: '',
            // formSaitualCount: '',
            // formMamitCount: '',
            // formSiahaCount: '',
            // formKhawzawlCount: '',
            // formKolasibCount: '',
            // formLawngtlaiCount: '',
            // formSerchhipCount: '',
            // formHnahthialCount: ''

        }


    },

    created: function () {
        this.fetchUsers();
    },

    methods: {
        fetchUsers: function () {
            let current_page = this.pagination.current_page;
            let pageNum = current_page ? current_page : 1;
            let division_id= this.user.division_id;
            axios.get('/api/auth/estimateapprovedlist/'+division_id+'?page=' + pageNum, {
                headers: {
                    "Authorization": `Bearer ${this.$store.getters.currentUser.token}`
                }
            })
                .then(response => {
                    this.pagination = response.data.estimates;
                    this.estimates = response.data.estimates;
                    this.loading = false;
                })
                .catch(error => {
                    console.log(error)
                });
        }
    },

    computed: {
        approveStatus: function (st) {


            return {

                active: this.aStatus,
                'bg-red-200': true,
            }

        }
//         if (this.user.division_id === 1) {
//                         this.pagination = response.data.southEstimates;
//                         // this.laravelData = response.data.southEstimates;
//                         this.estimates = response.data.southEstimates;
//                     }

//                     else if (this.user.division_id === 2) {
//                         this.pagination = response.data.northEstimates;
//                         this.estimates = response.data.northEstimates;
//                     }
//                     // Champhai
//                     else if (this.user.division_id === 4) {
//                         this.pagination = response.data.champhaiEstimates;
//                         this.estimates = response.data.champhaiEstimates;
//                     }
//                     else if (this.user.division_id === 5) {
//                         this.pagination = response.data.lungleiEstimates;
//                         this.estimates = response.data.lungleiEstimates;
//                     }
//                     else if (this.user.division_id === 6) {
//                         this.pagination = response.data.saitualEstimates;
//                         this.estimates = response.data.saitualEstimates;
//                     }
//                     else if (this.user.division_id === 7) {
//                         this.pagination = response.data.mamitEstimates;
//                         this.estimates = response.data.mamitEstimates;
//                     }
//                     else if (this.user.division_id === 8) {
//                         this.pagination = response.data.siahaEstimates;
//                         this.estimates = response.data.siahaEstimates;
//                     }
//                     else if (this.user.division_id === 9) {
//                         this.pagination = response.data.khawzawlEstimates;
//                         this.estimates = response.data.khawzawlEstimates;
//                     }
//                     else if (this.user.division_id === 10) {
//                         this.pagination = response.data.kolasibEstimates;
//                         this.estimates = response.data.kolasibEstimates;
//                     }
//                     else if (this.user.division_id === 11) {
//                         this.pagination = response.data.lawngtlaiEstimates;
//                         this.estimates = response.data.lawngtlaiEstimates;
//                     }
//                     else if (this.user.division_id === 12) {
//                         this.pagination = response.data.serchhipEstimates;
//                         this.estimates = response.data.serchhipEstimates;
//                     }
//                     else if (this.user.division_id === 13) {
//                         this.pagination = response.data.hnahthialEstimates;
//                         this.estimates = response.data.hnahthialEstimates;
//                     }

// // console.log(this.estimates);

//                     // this.laravelData = response.data.northEstimates;


//                     // this.formSouthCount = response.data.formSouthCount;
//                     // this.formNorthCount = response.data.formNorthCount;

//                     // this.formChamphaiCount = response.data.formChamphaiCount;
//                     // this.formLungleiCount = response.data.formLungleiCount;
//                     // this.formSaitualCount = response.data.formSaitualCount;
//                     // this.formMamitCount = response.data.formMamitCount;
//                     // this.formSiahaCount = response.data.formSiahaCount;
//                     // this.formKhawzawlCount = response.data.formKhawzawlCount;
//                     // this.formKolasibCount = response.data.formKolasibCount;
//                     // this.formLawngtlaiCount = response.data.formLawngtlaiCount;
//                     // this.formSerchhipCount = response.data.formSerchhipCount;
//                     // this.formHnahthialCount = response.data.formHnahthialCount;
    },




}

</script>



<style scoped></style>
