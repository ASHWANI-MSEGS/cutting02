<template>
    <div class="relative min-h-screen" >
        <div v-if="modalA" class="bg-black opacity-25 absolute right-0 left-0 top-0 bottom-0 z-10" @click="modalA = ! modalA">
        </div>

        <div v-if="modal" class="bg-black opacity-25 absolute right-0 left-0 top-0 bottom-0 z-10" @click="modal = ! modal">
        </div>
      

        <div v-if="loading">Loading...</div>
        <div v-else class=" md:mt-6 md:ml6 flex flex-col ">
                    
                    
                

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

                <div class="bg-white h-auto rounded-t-lg sm:w-5/5 lg:w-1/2  rounded-b-lg border-gray-200">

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
                                <p class="py-1">Estimate Amount</p> 
                                <p class="py-1">: Rs. {{estimate.amount}}</p>                               
                                <p class="py-1">Security Deposit</p>
                                <p class="py-1">: Rs. {{refund.deposit}}</p>
                                <p class="py-1">Total</p>
                                <p class="py-1">: Rs. {{estimate.total}}</p>
                                <p class="py-1">HDFC Code</p>
                                <p class="py-1">: {{refund.hdfc_code}}</p>
                                <p class="py-1">Status</p>
                                <p class="py-1 text-green-400">: Security Deposit Refunded</p>

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
        name: "RefundShow",

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
                estimate:'',
                refund:'',
                user: this.$store.getters.currentUser,

               

               
                form1:{
                    
                    fine: null,
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
                    this.estimate = response.data.estimate;               
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
                axios.patch('/api/auth/form/list',this.form1)
                    .then(response => {
                        
                        this.$router.push('/assigned/' + this.$route.params.id);
                        //  this.$router.push('/formList/');
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