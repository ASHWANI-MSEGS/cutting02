<template>
    <div class="relative h-min-full " >
        <div v-if="modalA" class="absolute top-0 bottom-0 left-0 right-0 z-10 bg-black opacity-25" @click="modalA = ! modalA">
        </div>

        <div v-if="modal" class="absolute top-0 bottom-0 left-0 right-0 z-10 bg-black opacity-25" @click="modal = ! modal">
        </div>
       <!-- Refunded modals -->
        <div v-if="modalA" class="absolute left-0 right-0 z-40 ml-auto mr-auto bg-white rounded-lg shadow top-2 md:h-84 xl:h-96 sm:w-2/3 lg:w-2/4 xl:w-1/4">
            <form @submit.prevent="approve">
                <!-- Refunded Close Button -->
                    <div  class="absolute top-0 right-0 ">
                        <button @click="modalA = ! modalA" class="px-2 py-2 mt-4 mr-6 rounded hover:bg-gray-200">
                            <svg  xmlns="http://www.w3.org/2000/svg" width="11.877" height="11.877" viewBox="0 0 11.877 11.877">
                                            <g id="Group_9" data-name="Group 9" transform="translate(-1238.562 -230.423)">
                                            <path id="Path_35" data-name="Path 35" d="M3285,232l8.847,8.847" transform="translate(-2045 0.015)" fill="none" stroke="#e37198" stroke-linecap="round" stroke-width="2"/>
                                             <path id="Path_36" data-name="Path 36" d="M0,0,8.847,8.847" transform="matrix(0.017, 1, -1, 0.017, 1248.846, 231.862)" fill="none" stroke="#e37198" stroke-linecap="round" stroke-width="2"/>
                                             </g>
                            </svg>
                        </button>
                    </div>
                <!-- Refunded Close Button Close -->

                <div class="flex justify-center my-6 text-xl font-bold text-textblueform ">Enter Refund Details</div>

                <div  class="relative pb-2 pr-2 mx-10 mt-10 mb-3 border rounded-lg">
                    <label class="absolute px-4 py-2 font-bold text-blue-500 text-md">HFDC Code</label>
                                    <input type="text"  v-model="refund.hdfc_code" class="w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg text-textgrayform focus:outline-none">

                </div>

                <div class="flex items-center justify-center pt-2 ">
                    <button class="px-4 py-2 text-sm font-bold text-white bg-green-500 rounded hover:bg-green-400">Enter</button>
                    <button class="px-4 py-1 ml-1 text-red-500 border border-red-500 rounded hover:border-red-300" @click="modalA = ! modalA">Cancel</button>
                </div>
            </form>
        </div>
        <!-- Close Refunded modals -->

        <div v-if="loading">Loading...</div>
        <div v-else class="flex flex-col md:mt-6 md:ml6">

                    <!-- Fined Direct Modal -->
                    <div v-if="modal" class="absolute left-0 right-0 z-40 ml-auto mr-auto bg-white rounded-lg shadow top-2 md:h-64 xl:h-84 sm:w-2/3 lg:w-2/4 xl:w-1/3">

                        <div  class="absolute top-0 right-0 ">
                            <button @click="modal = ! modal" class="px-2 py-2 mt-3 mr-6 rounded hover:bg-gray-200">
                                <svg  xmlns="http://www.w3.org/2000/svg" width="11.877" height="11.877" viewBox="0 0 11.877 11.877">
                                            <g id="Group_9" data-name="Group 9" transform="translate(-1238.562 -230.423)">
                                            <path id="Path_35" data-name="Path 35" d="M3285,232l8.847,8.847" transform="translate(-2045 0.015)" fill="none" stroke="#e37198" stroke-linecap="round" stroke-width="2"/>
                                             <path id="Path_36" data-name="Path 36" d="M0,0,8.847,8.847" transform="matrix(0.017, 1, -1, 0.017, 1248.846, 231.862)" fill="none" stroke="#e37198" stroke-linecap="round" stroke-width="2"/>
                                             </g>
                                </svg>
                            </button>
                        </div>
                        <p class="flex justify-center mt-8 mb-6 text-xl font-bold text-red-500">Are you sure you want to Fined this Report?</p>

                        <div  class="relative pb-2 mx-10 mt-6 mb-6 border rounded-lg">
                            <label class="absolute px-4 py-2 font-bold text-red-500 text-md">Please enter reason for Fined</label>
                            <input type="text" class="w-full px-4 pt-6 mt-2 text-gray-900 rounded-lg text-md focus:outline-none "   placeholder="Reason for rejection" v-model="form1.fine" >
                        </div>

                        <div class="flex items-center justify-center pt-2 ">
                            <button class="px-4 py-1 ml-1 text-red-500 border border-red-500 rounded hover:border-red-300" @click="modal = ! modal">Cancel</button>
                            <!-- <button class="px-4 py-2 ml-1 text-sm font-bold text-white bg-green-500 rounded hover:bg-green-400" @click="destroy">Yes</button> -->
                            <!-- REPLACING     DESTROY       WITH           FINE -->
                            <button class="px-4 py-2 ml-1 text-sm font-bold text-white bg-green-500 rounded hover:bg-green-400" @click="fine">Yes</button>
                        </div>
                    </div>
                    <!-- Fined Direct Modal Closed -->


                     <a href="#" class="text-blue-400" @click="$router.back()">
                     Back
                     </a>






                <div class="flex flex-row items-center justify-between h-24 mt-3 bg-white border-b-4 border-dashed rounded-t-lg rounded-b-lg sm:w-5/5 lg:w-1/2">
                    <div class="flex flex-col ml-8">
                        <p class="text-sm font-light">Memo No</p>
                        <p class="text-lg font-medium">{{ form.memo }}</p>
                    </div>
                    <button class="px-4 py-1 mr-1 text-white rounded-lg hover:bg-gray-300" @click.prevent="printme">
                        <svg height="30pt" viewBox="-27 -67 859.31017 859" width="30pt" xmlns="http://www.w3.org/2000/svg"><path d="m738.554688 628.5h-107.414063c-7.421875 0-13.429687-6.003906-13.429687-13.425781s6.007812-13.425781 13.429687-13.425781h107.414063c22.207031 0 40.277343-18.066407 40.277343-40.28125v-322.242188c0-22.207031-18.066406-40.277344-40.277343-40.277344h-671.335938c-22.210938 0-40.28125 18.070313-40.28125 40.277344v322.242188c0 22.214843 18.066406 40.28125 40.28125 40.28125h107.410156c7.417969 0 13.429688 6.003906 13.429688 13.425781s-6.011719 13.425781-13.429688 13.425781h-107.410156c-37.019531 0-67.1367188-30.117188-67.1367188-67.132812v-322.242188c0-37.007812 30.1171878-67.132812 67.1367188-67.132812h671.335938c37.015624 0 67.132812 30.125 67.132812 67.132812v322.242188c0 37.015624-30.117188 67.132812-67.132812 67.132812zm0 0"/><path d="m644.566406 198.847656h-483.363281v-201.402344h483.363281zm-456.507812-26.855468h429.652344v-147.691407h-429.652344zm0 0"/><path d="m644.566406 722.488281h-483.363281v-322.242187h483.363281zm-456.507812-26.851562h429.652344v-268.535157h-429.652344zm0 0"/><path d="m671.417969 427.101562h-537.066407c-7.417968 0-13.429687-6.007812-13.429687-13.425781 0-7.421875 6.011719-13.429687 13.429687-13.429687h537.066407c7.421875 0 13.429687 6.007812 13.429687 13.429687 0 7.425781-6.007812 13.425781-13.429687 13.425781zm0 0"/><path d="m564.003906 494.234375h-322.238281c-7.417969 0-13.429687-6.007813-13.429687-13.425781 0-7.421875 6.011718-13.429688 13.429687-13.429688h322.238281c7.421875 0 13.429688 6.007813 13.429688 13.429688 0 7.417968-6.007813 13.425781-13.429688 13.425781zm0 0"/><path d="m564.003906 547.941406h-322.238281c-7.417969 0-13.429687-6-13.429687-13.425781 0-7.421875 6.011718-13.429687 13.429687-13.429687h322.238281c7.421875 0 13.429688 6.007812 13.429688 13.429687 0 7.417969-6.007813 13.425781-13.429688 13.425781zm0 0"/><path d="m564.003906 601.648438h-322.238281c-7.417969 0-13.429687-6-13.429687-13.425782 0-7.421875 6.011718-13.429687 13.429687-13.429687h322.238281c7.421875 0 13.429688 6.007812 13.429688 13.429687 0 7.417969-6.007813 13.425782-13.429688 13.425782zm0 0"/><path d="m564.003906 655.355469h-322.238281c-7.417969 0-13.429687-6.007813-13.429687-13.425781 0-7.421876 6.011718-13.429688 13.429687-13.429688h322.238281c7.421875 0 13.429688 6.007812 13.429688 13.429688 0 7.417968-6.007813 13.425781-13.429688 13.425781zm0 0"/></svg>
                    </button>
                </div>

                <div class="h-auto py-3 bg-white border-gray-200 rounded-t-lg rounded-b-lg sm:w-5/5 lg:w-1/2">

                    <div class="flex justify-start py-2 pl-2 ml-0 md:ml-8">

                        <div class="grid grid-cols-2 gap-1 mx-1 md:gap-2 md:mx-4 lg:ml-8">
                                <p class="py-1">Name</p>
                                <p class="py-1" >: {{form.name}}</p>
                                <p class="py-1">Email ID</p>
                                <p class="py-1">: {{form.email}}</p>
                                <p class="py-1">Phone Number</p>
                                <p class="py-1">: {{form.phone}}</p>
                                <p class="py-1">Address</p>
                                <p class="py-1">: {{form.houseno}}, {{form.localcouncil}}</p>
                                <p class="py-1">Purpose of Road Cutting</p>
                                <template v-if="form.water_id === 0">
                                    <p class="py-1">: Tui Connection Thar</p>
                                </template>
                                <template v-else-if="form.water_id === 1">
                                    <p class="py-1">: Tui Connection Hlui</p>
                                </template>
                                <template v-else>
                                    <p class="py-1">: Others</p>
                                </template>
                                <p class="py-1">Deposit Amount</p>
                                <p class="py-1">: {{refund.deposit}}</p>

                                <a href="#" v-if="refund.refund_status == 1" class="px-4 py-2 mt-1 text-sm font-bold text-white bg-green-500 border rounded hover:bg-green-400" @click="modalA = ! modalA">Enter Refund Details</a>
                                <a href="#" class="px-4 py-2 mt-1 text-sm font-bold text-center text-white bg-red-500 border rounded" @click="modal = ! modal">Report for Fine</a>
                        </div>
                        <br>
                    </div>
                </div>

        </div>
    </div>

</template>



<script>
    import UserCircle from '../../components/UserCircle';
    import PulseLoader from '../../components/PulseLoader';

    export default {
        name: "RefundUnrefundShow",

        components: {
            UserCircle,
            PulseLoader
        },

                data: function () {
            return {
                loading: true,
                modal: false,
                contact: null,
                modalA: false,
                form:'',
                refund:{},
                user: this.$store.getters.currentUser,
                engineers:'',



                form1:{

                    fine: null,
                    id: this.$route.params.id,
form_idR:null
                },

            refunded:{

                    hdfc_code:'',
                    id: this.$route.params.id,

                }
            }
        },

        mounted() {
            axios.get('/api/refundUnrefundShow/' + this.$route.params.id, {
                headers: {
                    "Authorization": `Bearer ${this.$store.getters.currentUser.token}`
                }
            })
                .then(response => {
                    this.form = response.data.form;
                    this.refund = response.data.refund;
                    // console.log(this.refund.form_id);
                    this.loading = false;
                })
                .catch(error => {
                    this.loading = false;

                    if (error.response.status === 404) {
                        this.$router.push('/forms');
                    }
                });

        },



        methods: {
            //                 REPLACING "DESTROY" WITH "FINE"
            // ORIGINAL CODE START

            // destroy: function () {
            //     axios.patch('/api/auth/form/reject',this.form1)
            //         .then(response => {
            //             this.$router.push('/formListUn');
            //         })
            //         .catch(error => {
            //             alert('Internal Error. Unable to delete contact.');
            //         });
            // },
            //    ORIGINAL CODE END
            fine: function () {
                this.form1.id = this.$route.params.id; //REFUND ID
                this.form1.form_idR = this.refund.form_id; //REPORT ID TAKEN FROM FOREIGN ID OF REFUND TABLE
                console.log(this.form1,"form 1");
                console.log(this.form1.id,"form 1 id");

                axios.post('/api/reportFineFormUnrefunded',this.form1,{
                headers: {
                     "Authorization": `Bearer ${this.$store.getters.currentUser.token}`
                }
            })
            .then(response => {

                        this.$router.push('/refundFineList');
                 })
                .catch(error => {
                        alert('Internal Error. Unable to delete contact.');
                    });
            },

            approve: function () {
                // console.log(this.refund);
                // return;
            axios.patch('/api/refundApprove/', this.refund, {
                headers: {
                    "Authorization": `Bearer ${this.$store.getters.currentUser.token}`
                }
            })
                .then(response => {
                    this.refund = response.data.refund;
                    this.loading = false;
                    this.$router.push('/refundRefundedList')
                })
                    .catch(error => {
                        alert('Internal Error. Unable to approve form.');
                    });
            },

            printme: function() {

                window.print();
            }
        }
    }
</script>

<style scoped>

</style>
