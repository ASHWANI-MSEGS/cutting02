<template>
    <div class="min-h-screen">
        <div v-if="loading">
            <PulseLoader class="object-center h-full " />
        </div>

        <div v-else>



            <div class="flex flex-col items-end flex-1 ">
                <SearchBarForm />
            </div>

            <div class="w-full px-2 py-3 mx-3 mt-3 text-white rounded-t-lg bg-tableheader">
                <p>Total: {{payments.data.length }}</p>
                <!-- <div class="flex flex-row justify-between">
                    <div class="w-1/5">Memo</div>
                    <div >Amount</div>
                    <div>Payment_ref_id</div>
                    <div>Area</div>
                    <div class="pr-3">Payment</div>
                </div>   -->
            </div>


            <div v-for="payment in payments.data" :key="payment.id">
                <template v-if="payment.division_id === user.division_id">
                    <router-link :to="'/paymentShow/' + payment.id" class="">
                        <div class="w-full px-2 py-2 mx-3 bg-white hover:bg-tablehover">
                            <div
                                class="grid grid-cols-1 gap-0 md:grid-cols-3 md:gap-1 lg:grid-cols-5 lg:gap-1 xl:grid-cols-6 xl:gap-1">
                                <div class="text-left">Memo : {{ payment.form_memo }}</div>
                                <div class="text-left">Order ID: {{ payment.order_id }}</div>
                                <div class="text-left">Tracking ID: {{ payment.tracking_id }}</div>
                                <div class="text-left">Bank Reference No: {{ payment.bank_ref_no }}</div>
                                    <div class="text-left">Payment Success at : {{ payment.created_at }}</div>
                                <div class="text-left">Status: {{ payment.order_status }}</div>
                            </div>
                        </div>
                        <hr>
                    </router-link>
                </template>
            </div>
            <div v-if="payments.data.length === 0" >
                <p class="px-5 py-2">No SUCCESSFUL list as of now!!</p>
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
    name: "PaymentSuccessList",

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
            payments: {},
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
            axios.get('/api/auth/paymentSuccessList/'+division_id+'?page=' + pageNum)
                .then(response => {
                    this.pagination = response.data.payments;
                        this.payments = response.data.payments;
                        // this.payments = response.data.payments.data  ;



                    this.loading = false;
                })
                .catch(error => {
                    console.log(error)
                });
        }
         // if (this.user.division_id === 1) {
                    //     this.pagination = response.data.southPayments;
                    //     this.payments = response.data.southPayments;
                    // }
                    // else if (this.user.division_id === 2) {
                    //     this.pagination = response.data.northPayments;
                    //     this.payments = response.data.northPayments;
                    // }
                    // // Champhai
                    // else if (this.user.division_id === 4) {
                    //     this.pagination = response.data.champhaiPayments;
                    //     this.payments = response.data.champhaiPayments;
                    // }
                    // else if (this.user.division_id === 5) {
                    //     this.pagination = response.data.lungleiPayments;
                    //     this.payments = response.data.lungleiPayments;
                    // }
                    // else if (this.user.division_id === 6) {
                    //     this.pagination = response.data.saitualPayments;
                    //     this.payments = response.data.saitualPayments;
                    // }
                    // else if (this.user.division_id === 7) {
                    //     this.pagination = response.data.mamitPayments;
                    //     this.payments = response.data.mamitPayments;
                    // }
                    // else if (this.user.division_id === 8) {
                    //     this.pagination = response.data.siahaPayments;
                    //     this.payments = response.data.siahaPayments;
                    // }
                    // else if (this.user.division_id === 9) {
                    //     this.pagination = response.data.khawzawlPayments;
                    //     this.payments = response.data.khawzawlPayments;
                    // }
                    // else if (this.user.division_id === 10) {
                    //     this.pagination = response.data.kolasibPayments;
                    //     this.payments = response.data.kolasibPayments;
                    // }
                    // else if (this.user.division_id === 11) {
                    //     this.pagination = response.data.lawngtlaiPayments;
                    //     this.payments = response.data.lawngtlaiPayments;
                    // }
                    // else if (this.user.division_id === 12) {
                    //     this.pagination = response.data.serchhipPayments;
                    //     this.payments = response.data.serchhipPayments;
                    // }
                    // else if (this.user.division_id === 13) {
                    //     this.pagination = response.data.hnahthialPayments;
                    //     this.payments = response.data.hnahthialPayments;
                    // }


                    // // this.pagination = response.data.payments;
                    // // this.payments = response.data.payments;

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



<style scoped>
</style>
