<template>
    <div class="min-h-screen">
        <div v-if="loading">
            <PulseLoader class="object-center h-screen " />
        </div>

        <div v-else>


            <!-- <div class="flex flex-col items-end flex-1 ">
                        <SearchBarForm />
            </div> -->


            <div class="w-full px-2 py-3 mx-1 mt-3 text-white rounded-t-lg md:mx-3 bg-tableheader ">
                <p>Total: {{ forms.total }}</p>
            </div>


            <div v-for="form in forms.data" :key="form.id">

                <template v-if="form.division_id === user.division_id">

                    <router-link :to="'/estimateCalculator/' + form.id">
                        <div class="w-full px-2 py-2 mx-1 bg-white md:mx-3 hover:bg-tablehover">
                            <div
                                class="grid grid-cols-1 gap-0 md:grid-cols-3 md:gap-1 lg:grid-cols-5 lg:gap-1 xl:grid-cols-6 xl:gap-1">
                                <div>Memo: {{ form.memo }}</div>
                                <div>Name: {{ form.name }}</div>
                                <div>RC H No: {{ form.houseno }}</div>
                                <!-- <div>Veng:{{form.rlocalcouncil_name }} </div> -->
                                <div>RC Location: {{ form.localcouncil_name }}</div>
                                <div> Div: Road {{ form.district }} </div>
                                <div>Assigned Engineer: {{ form.engineer_name }}</div>
                                <br>
                                <!-- <div>Local Council: {{ form.localcouncil_name }}</div> -->
                                <!-- <div>
                                    <template v-if="form.division_id === 1">
                                        Div: Road South
                                    </template>
                                    <template v-else-if="form.division_id === 2">
                                        Div: Road North
                                    </template>
                                    <template v-else-if="form.division_id === 4">
                                        Div: Road Champhai
                                    </template>
                                    <template v-else-if="form.division_id === 5">
                                        Div: Road Lunglei
                                    </template>
                                    <template v-else-if="form.division_id === 6">
                                        Div: Road Saitual
                                    </template>
                                    <template v-else-if="form.division_id === 7">
                                        Div: Road Mamit
                                    </template>
                                    <template v-else-if="form.division_id === 8">
                                        Div: Road Siaha
                                    </template>
                                    <template v-else-if="form.division_id === 9">
                                        Div: Road Khawzawl
                                    </template>
                                    <template v-else-if="form.division_id === 10">
                                        Div: Road Kolasib
                                    </template>
                                    <template v-else-if="form.division_id === 11">
                                        Div: Road Lawngtlai
                                    </template>
                                    <template v-else-if="form.division_id === 12">
                                        Div: Road Serchhip
                                    </template>
                                    <template v-else-if="form.division_id === 13">
                                        Div: Road Hnahthial
                                    </template>

                                </div> -->

                            </div>
                            <br>
                            <hr>
                        </div>

                    </router-link>

                </template>
            </div>

            <div v-if="forms.total === 0">
                <p class="px-5 py-2">No forms for Estimation yet!!</p>
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
    name: "UnEstimateFormList",

    components: {
        SearchBarForm,
        PulseLoader,
        UserCircle,
        pagination: Pagination,
    },

    data: function () {
        return {
            // total: 0,
            offset: 3,
            pagination: {},
            aStatus: true,
            loading: true,
            forms: {},
            user: this.$store.getters.currentUser,
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
            axios.get('/api/auth/form/listEstimate/'+division_id+'?page=' + pageNum)
                .then(response => {
                     this.pagination = response.data.forms;

                     this.forms = response.data.forms;



                    this.loading = false;
                })
                .catch(error => {
                    console.log(error)
                });
        }
        // if (this.user.division_id === 1) {
        //                 this.pagination = response.data.formSouths;
        //                 this.forms = response.data.formSouths;
        //                 // this.total = response.data.formSouthCount;

        //             }

        //             else if (this.user.division_id === 2) {
        //                 this.pagination = response.data.formNorths;
        //                 this.forms = response.data.formNorths;
        //                 // this.total = response.data.formNorthCount;
        //             }

        //             else if (this.user.division_id === 4) {
        //                 this.pagination = response.data.formChamphai;
        //                 this.forms = response.data.formChamphai;
        //                 // this.total = response.data.formChamphaiCount;
        //             }
        //             else if (this.user.division_id === 5) {
        //                 this.pagination = response.data.formLunglei;
        //                 this.forms = response.data.formLunglei;
        //                 // this.total = response.data.formLungleiCount;
        //             }
        //             else if (this.user.division_id === 6) {
        //                 this.pagination = response.data.formSaitual;
        //                 this.forms = response.data.formSaitual;
        //                 // this.total = response.data.formSaitualCount;
        //             }
        //             else if (this.user.division_id === 7) {
        //                 this.pagination = response.data.formMamit;
        //                 this.forms = response.data.formMamit;
        //                 // this.total = response.data.formMamitCount;
        //             }
        //             else if (this.user.division_id === 8) {
        //                 this.pagination = response.data.formSiaha;
        //                 this.forms = response.data.formSiaha;
        //                 // this.total = response.data.formSiahaCount;
        //             }
        //             else if (this.user.division_id === 9) {
        //                 this.pagination = response.data.formKhawzawl;
        //                 this.forms = response.data.formKhawzawl;
        //                 // this.total = response.data.formKhawzawlCount;
        //             }
        //             else if (this.user.division_id === 10) {
        //                 this.pagination = response.data.formKolasib;
        //                 this.forms = response.data.formKolasib;
        //                 // this.total = response.data.formKolasibCount;
        //             }
        //             else if (this.user.division_id === 11) {
        //                 this.pagination = response.data.formLawngtlai;
        //                 this.forms = response.data.formLawngtlai;
        //                 // this.total = response.data.formLawngtlaiCount;
        //             }
        //             else if (this.user.division_id === 12) {
        //                 this.pagination = response.data.formSerchhip;
        //                 this.forms = response.data.formSerchhip;
        //                 // this.total = response.data.formSerchhipCount;
        //             }
        //             else if (this.user.division_id === 13) {
        //                 this.pagination = response.data.formHnahthial;
        //                 this.forms = response.data.formHnahthial;
        //                 // this.total = response.data.formHnahthialCount;
        //             }


        //             //original code sample
        //             // if(this.user.division_id === 2)
        //             // {
        //             //     this.pagination = response.data.northForms;
        //             //     this.forms = response.data.northForms;
        //             // }

    },


    computed: {
        approveStatus: function (st) {


            return {

                active: this.aStatus,
                'bg-red-200': true,
            }

        }
    },




}

</script>



<style scoped></style>
