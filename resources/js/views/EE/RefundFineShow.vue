<template>
    <div class="relative" >
        <div v-if="modalA" class="bg-black opacity-25 absolute right-0 left-0 top-0 bottom-0 z-10" @click="modalA = ! modalA">
        </div>

        <div v-if="modal" class="bg-black opacity-25 absolute right-0 left-0 top-0 bottom-0 z-10" @click="modal = ! modal">
        </div>
       <!-- Refunded modals -->
        <div v-if="modalA" class="absolute bg-white left-0 top-2 right-0 rounded-lg  md:h-84 xl:h-96 sm:w-2/3 lg:w-2/4 xl:w-1/4  ml-auto mr-auto  shadow z-40">
            <form @submit.prevent="approve">
                <!-- Refunded Close Button -->
                    <div  class="absolute top-0 right-0 ">
                        <button @click="modalA = ! modalA" class="mr-6 mt-4 hover:bg-gray-200 px-2 py-2 rounded">
                            <svg  xmlns="http://www.w3.org/2000/svg" width="11.877" height="11.877" viewBox="0 0 11.877 11.877">
                                            <g id="Group_9" data-name="Group 9" transform="translate(-1238.562 -230.423)">
                                            <path id="Path_35" data-name="Path 35" d="M3285,232l8.847,8.847" transform="translate(-2045 0.015)" fill="none" stroke="#e37198" stroke-linecap="round" stroke-width="2"/>
                                             <path id="Path_36" data-name="Path 36" d="M0,0,8.847,8.847" transform="matrix(0.017, 1, -1, 0.017, 1248.846, 231.862)" fill="none" stroke="#e37198" stroke-linecap="round" stroke-width="2"/>
                                             </g>
                            </svg>
                        </button>
                    </div>
                <!-- Refunded Close Button Close -->
                
                <div class="text-textblueform  flex justify-center my-6  font-bold text-xl ">Enter Refund Details</div>

                <div  class="relative pr-2 pb-2 mt-10 mb-3 mx-10 border rounded-lg">
                    <label class="text-blue-500 px-4 py-2 text-md font-bold absolute">HFDC Code</label>
                                    <input type="text"  v-model="refund.hdfc_code" class=" bg-white px-3 mt-1 ml-1 pt-6 w-full rounded-lg text-textgrayform focus:outline-none">
             
                </div>

                <div class=" flex items-center pt-2  justify-center">
                    <button class="px-4 py-2 bg-green-500 rounded text-sm font-bold text-white hover:bg-green-400">Enter</button>
                    <button class="text-red-500 border border-red-500 rounded ml-1 px-4 py-1 hover:border-red-300" @click="modalA = ! modalA">Cancel</button>
                </div>
            </form>
        </div>
        <!-- Close Refunded modals -->

        <div v-if="loading">Loading...</div>
        <div v-else class=" md:mt-6 md:ml6 flex flex-col ">
                    
                    <!-- Fined Direct Modal -->
                    <div v-if="modal" class="absolute bg-white left-0 top-2 right-0 rounded-lg  md:h-64 xl:h-84 sm:w-2/3 lg:w-2/4 xl:w-1/3  ml-auto mr-auto  shadow z-40">
                        
                        <div  class="absolute top-0 right-0 ">
                            <button @click="modal = ! modal" class="mr-6 mt-3 hover:bg-gray-200 px-2 py-2 rounded">
                                <svg  xmlns="http://www.w3.org/2000/svg" width="11.877" height="11.877" viewBox="0 0 11.877 11.877">
                                            <g id="Group_9" data-name="Group 9" transform="translate(-1238.562 -230.423)">
                                            <path id="Path_35" data-name="Path 35" d="M3285,232l8.847,8.847" transform="translate(-2045 0.015)" fill="none" stroke="#e37198" stroke-linecap="round" stroke-width="2"/>
                                             <path id="Path_36" data-name="Path 36" d="M0,0,8.847,8.847" transform="matrix(0.017, 1, -1, 0.017, 1248.846, 231.862)" fill="none" stroke="#e37198" stroke-linecap="round" stroke-width="2"/>
                                             </g>
                                </svg>
                            </button>
                        </div>
                        <p class="text-red-500 flex justify-center mb-6 mt-8  font-bold text-xl">Are you sure you want to Fined this Report?</p>
                        
                        <div  class="relative pb-2 mt-6 mb-6 mx-10 border rounded-lg">
                            <label class="text-red-500 px-4 py-2 text-md font-bold absolute">Please enter reason for Fined</label>
                            <input type="text" class="px-4 text-md mt-2 pt-6 w-full rounded-lg text-gray-900   focus:outline-none "   placeholder="Reason for rejection" v-model="form1.fine" >                
                        </div>

                        <div class=" flex items-center pt-2  justify-center">
                            <button class="text-red-500 border border-red-500 rounded ml-1 px-4 py-1 hover:border-red-300" @click="modal = ! modal">Cancel</button>
                            <button class="ml-1 px-4 py-2 bg-green-500 rounded text-sm font-bold text-white hover:bg-green-400" @click="destroy">Yes</button>
                        </div>
                    </div>
                    <!-- Fined Direct Modal Closed -->
                

                     <a href="#" class="text-blue-400" @click="$router.back()">
                     Back
                     </a>

                        


              

                <div class="flex items-center flex-row sm:w-5/5 lg:w-1/2 justify-between mt-3 bg-white h-24 rounded-t-lg rounded-b-lg border-b-4 border-dashed">
                    <div class="flex flex-col ml-8">
                        <p class="text-sm font-light">Memo No</p>
                        <p class="text-lg font-medium">{{ form.memo }}</p>
                    </div>
                    <button class="text-white  rounded-lg px-4 py-1 mr-1 hover:bg-gray-300" @click.prevent="printme">
                        <svg height="30pt" viewBox="-27 -67 859.31017 859" width="30pt" xmlns="http://www.w3.org/2000/svg"><path d="m738.554688 628.5h-107.414063c-7.421875 0-13.429687-6.003906-13.429687-13.425781s6.007812-13.425781 13.429687-13.425781h107.414063c22.207031 0 40.277343-18.066407 40.277343-40.28125v-322.242188c0-22.207031-18.066406-40.277344-40.277343-40.277344h-671.335938c-22.210938 0-40.28125 18.070313-40.28125 40.277344v322.242188c0 22.214843 18.066406 40.28125 40.28125 40.28125h107.410156c7.417969 0 13.429688 6.003906 13.429688 13.425781s-6.011719 13.425781-13.429688 13.425781h-107.410156c-37.019531 0-67.1367188-30.117188-67.1367188-67.132812v-322.242188c0-37.007812 30.1171878-67.132812 67.1367188-67.132812h671.335938c37.015624 0 67.132812 30.125 67.132812 67.132812v322.242188c0 37.015624-30.117188 67.132812-67.132812 67.132812zm0 0"/><path d="m644.566406 198.847656h-483.363281v-201.402344h483.363281zm-456.507812-26.855468h429.652344v-147.691407h-429.652344zm0 0"/><path d="m644.566406 722.488281h-483.363281v-322.242187h483.363281zm-456.507812-26.851562h429.652344v-268.535157h-429.652344zm0 0"/><path d="m671.417969 427.101562h-537.066407c-7.417968 0-13.429687-6.007812-13.429687-13.425781 0-7.421875 6.011719-13.429687 13.429687-13.429687h537.066407c7.421875 0 13.429687 6.007812 13.429687 13.429687 0 7.425781-6.007812 13.425781-13.429687 13.425781zm0 0"/><path d="m564.003906 494.234375h-322.238281c-7.417969 0-13.429687-6.007813-13.429687-13.425781 0-7.421875 6.011718-13.429688 13.429687-13.429688h322.238281c7.421875 0 13.429688 6.007813 13.429688 13.429688 0 7.417968-6.007813 13.425781-13.429688 13.425781zm0 0"/><path d="m564.003906 547.941406h-322.238281c-7.417969 0-13.429687-6-13.429687-13.425781 0-7.421875 6.011718-13.429687 13.429687-13.429687h322.238281c7.421875 0 13.429688 6.007812 13.429688 13.429687 0 7.417969-6.007813 13.425781-13.429688 13.425781zm0 0"/><path d="m564.003906 601.648438h-322.238281c-7.417969 0-13.429687-6-13.429687-13.425782 0-7.421875 6.011718-13.429687 13.429687-13.429687h322.238281c7.421875 0 13.429688 6.007812 13.429688 13.429687 0 7.417969-6.007813 13.425782-13.429688 13.425782zm0 0"/><path d="m564.003906 655.355469h-322.238281c-7.417969 0-13.429687-6.007813-13.429687-13.425781 0-7.421876 6.011718-13.429688 13.429687-13.429688h322.238281c7.421875 0 13.429688 6.007812 13.429688 13.429688 0 7.417968-6.007813 13.425781-13.429688 13.425781zm0 0"/></svg>
                    </button>
                </div>

                <div class="py-3 bg-white h-auto rounded-t-lg sm:w-5/5 lg:w-1/2  rounded-b-lg border-gray-200">

                    <div class="ml-0 md:ml-8 py-2 pl-2  flex justify-start">

                        <div class="grid grid-cols-2 gap-1 md:gap-2 mx-1 md:mx-4 lg:ml-8"> 
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
                                <p class="py-1">: Rs. {{refund.deposit}}</p>
                                <p class="py-1">Fined Chhan</p>
                                <p class="py-1">: {{refund.reason}}</p>

                                <p class="py-1">Status</p>
                                <p class="py-1 text-red-400">: Fined</p>
                                
                                <a href="#" v-if="refund.refund_status == 1" class="px-4 py-2 mt-1 border bg-green-500 rounded text-sm font-bold text-white hover:bg-green-400" @click="modalA = ! modalA">Enter Refund Details</a>

                        </div>
                    </div>
                </div>

        </div>         
    </div>

</template>



<script>
    import UserCircle from '../../components/UserCircle';
    import PulseLoader from '../../components/PulseLoader';

    export default {
        name: "RefundFineShow",

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
            destroy: function () {
                axios.patch('/api/auth/form/reject',this.form1)
                    .then(response => {
                        this.$router.push('/formListUn');
                    })
                    .catch(error => {
                        alert('Internal Error. Unable to delete contact.');
                    });
            },
            
            approve: function () {
            axios.patch('/api/refundApprove/', this.refund, {
                headers: {
                    "Authorization": `Bearer ${this.$store.getters.currentUser.token}`
                }
            })
                .then(response => {  
                    this.refund = response.data.refund;                
                    this.loading = false;
                    this.$router.push('/refundFineList')
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