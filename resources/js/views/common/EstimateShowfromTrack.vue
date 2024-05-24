<template>
    <div class="relative flex justify-center bg-gray-200 h-auto">
        <div v-if="modalA" class="bg-black opacity-25 absolute right-0 left-0 top-0 bottom-0 z-10" @click="modalA = ! modalA">
        </div>

        <div v-if="modal" class="bg-black opacity-25 absolute right-0 left-0 top-0 bottom-0 z-10" @click="modal = ! modal">
        </div>
       <!-- Assign modals -->
        <div v-if="modalA" class="absolute bg-white left-0 top-2 right-0 rounded-lg  sm:h-48 md:h-64  sm:w-2/3 lg:w-2/4 xl:w-1/4  ml-auto mr-auto  shadow z-40">
            <form @submit.prevent="approve">
                <!-- Assign Close Button -->
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
                <!-- Assign Close Button Close -->
                
                <div class="text-textblueform  flex justify-center my-6  font-bold text-xl ">Approve Estimate</div>

                
                    <label class="flex justify-center text-blue-500 px-4 py-2 text-md font-bold">Do you want to approve this Estimate</label>
                

                <div class=" flex items-center pt-2  justify-center">
                    <button class="px-4 py-2 bg-green-500 rounded text-sm font-bold text-white hover:bg-green-400" @click="approve">Yes</button>
                    <button class="text-red-500 border border-red-500 rounded ml-1 px-4 py-1 hover:border-red-300" @click="modalA = ! modalA">Cancel</button>
                </div>
            </form>
        </div>
        <!-- Close Assign modals -->


        <div class=" md:mt-6 md:ml-6 flex flex-col  sm:w-full md:w-4/5 lg:w-1/2  ">
            <div v-if="loading">
                Loading...
            </div>

            <div v-else >

                <div class="flex items-center flex-row justify-between mt-3 bg-white h-24 rounded-t-lg rounded-b-lg border-b-4 border-dashed">
                    <div class="flex flex-col ml-8">
                        <p class="text-sm font-light">Memo No</p>
                        <p class="text-lg font-medium">{{ form.memo }}</p>
                    </div>
                    <button class="text-white  rounded-lg px-4 py-1 mr-1 hover:bg-gray-300" @click.prevent="printme">
                        <svg height="30pt" viewBox="-27 -67 859.31017 859" width="30pt" xmlns="http://www.w3.org/2000/svg"><path d="m738.554688 628.5h-107.414063c-7.421875 0-13.429687-6.003906-13.429687-13.425781s6.007812-13.425781 13.429687-13.425781h107.414063c22.207031 0 40.277343-18.066407 40.277343-40.28125v-322.242188c0-22.207031-18.066406-40.277344-40.277343-40.277344h-671.335938c-22.210938 0-40.28125 18.070313-40.28125 40.277344v322.242188c0 22.214843 18.066406 40.28125 40.28125 40.28125h107.410156c7.417969 0 13.429688 6.003906 13.429688 13.425781s-6.011719 13.425781-13.429688 13.425781h-107.410156c-37.019531 0-67.1367188-30.117188-67.1367188-67.132812v-322.242188c0-37.007812 30.1171878-67.132812 67.1367188-67.132812h671.335938c37.015624 0 67.132812 30.125 67.132812 67.132812v322.242188c0 37.015624-30.117188 67.132812-67.132812 67.132812zm0 0"/><path d="m644.566406 198.847656h-483.363281v-201.402344h483.363281zm-456.507812-26.855468h429.652344v-147.691407h-429.652344zm0 0"/><path d="m644.566406 722.488281h-483.363281v-322.242187h483.363281zm-456.507812-26.851562h429.652344v-268.535157h-429.652344zm0 0"/><path d="m671.417969 427.101562h-537.066407c-7.417968 0-13.429687-6.007812-13.429687-13.425781 0-7.421875 6.011719-13.429687 13.429687-13.429687h537.066407c7.421875 0 13.429687 6.007812 13.429687 13.429687 0 7.425781-6.007812 13.425781-13.429687 13.425781zm0 0"/><path d="m564.003906 494.234375h-322.238281c-7.417969 0-13.429687-6.007813-13.429687-13.425781 0-7.421875 6.011718-13.429688 13.429687-13.429688h322.238281c7.421875 0 13.429688 6.007813 13.429688 13.429688 0 7.417968-6.007813 13.425781-13.429688 13.425781zm0 0"/><path d="m564.003906 547.941406h-322.238281c-7.417969 0-13.429687-6-13.429687-13.425781 0-7.421875 6.011718-13.429687 13.429687-13.429687h322.238281c7.421875 0 13.429688 6.007812 13.429688 13.429687 0 7.417969-6.007813 13.425781-13.429688 13.425781zm0 0"/><path d="m564.003906 601.648438h-322.238281c-7.417969 0-13.429687-6-13.429687-13.425782 0-7.421875 6.011718-13.429687 13.429687-13.429687h322.238281c7.421875 0 13.429688 6.007812 13.429688 13.429687 0 7.417969-6.007813 13.425782-13.429688 13.425782zm0 0"/><path d="m564.003906 655.355469h-322.238281c-7.417969 0-13.429687-6.007813-13.429687-13.425781 0-7.421876 6.011718-13.429688 13.429687-13.429688h322.238281c7.421875 0 13.429688 6.007812 13.429688 13.429688 0 7.417968-6.007813 13.425781-13.429688 13.425781zm0 0"/></svg>
                    </button>
                </div>

                        <!-- 4. -->
                <div class="bg-white h-auto rounded-t-lg   rounded-b-lg border-gray-200 mb-5">

                    <div class="ml-8 py-2 pl-2  flex justify-start">

                        <div class="flex flex-col ">
                                <p class="py-1">Name</p>
                                <p class="py-1">Email ID</p>
                                <p class="py-1">Phone Number</p>
                                <p class="py-1">Address</p>
                                <p class="py-1">Length of Road </p>
                                <p class="py-1">Breadth of Road</p>
                                <p class="py-1">Amount</p>
                                <p class="py-1">Tui Connection</p>
                                <p class="py-1">Road Type</p>
                                <p class="py-1">Submitted On</p>
                                <p class="py-1">Estimated On</p>
                                <p class="py-1">Status</p>
                                <!-- <a href="#" class="px-4 py-2 mt-1 border bg-green-500 rounded text-sm font-bold text-center text-white hover:bg-green-400" @click="modalA = ! modalA">Approve</a> -->

                        </div>
                        <div class="ml-4 pb-3 flex flex-col">
                                <p class="py-1" >: {{form.name}}</p>
                                <p class="py-1">: {{form.email}}</p>
                                <p class="py-1">: {{form.phone}}</p>
                                <p class="py-1">: {{form.location}}</p>
                                <p class="py-1">: {{estimate.length}}</p>
                                <p class="py-1">: {{estimate.breadth}}</p>
                                <p class="py-1">: Rs. {{estimate.total}}</p>
                                <p class="py-1">: New Connection</p>
                                <p class="py-1">: Rigid Pavement</p>
                                <p class="py-1">: {{form.created_at}}</p>
                                <p class="py-1">: {{estimate.created_at}}</p>
                                <template v-if="estimate.status===0">
                                    <p class="py-1 text-red-500">: Pending for Approval</p>
                                </template>
                                <template v-else>
                                    <p class="py-1 mb-2 text-green-500">: Approved</p>
                                </template>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
      
    </div>

</template>



<script>
    import UserCircle from '../../components/UserCircle';

    export default {
        name: "EstimateShowfromTrack",

        components: {
            UserCircle
        },

        mounted() {
            axios.get('/api/auth/estimateShowunprotected/' + this.$route.params.id)
                .then(response => {
                    this.estimate = response.data.estimate;
           
           axios.get('/api/auth/form/list/' + this.estimate.form_id)
                .then(response=>{
                    this.form = response.data.form;
                })
                .catch(error=>{
                    this.loading = false;
                });


                    this.loading = false;
                })
                .catch(error => {
                    this.loading = false;

                    if (error.response.status === 404) {
                        this.$router.push('/forms');
                    }
                });
        },

        data: function () {
            return {
                form : {},
                loading: true,
                modal: false,
                contact: null,
                modalA: false,
                currentUser: this.$store.getters.currentUser,
            }
        },

        methods: {
            destroy: function () {
                axios.delete('/api/contacts/' + this.$route.params.id)
                    .then(response => {
                        this.$router.push('/contacts');
                    })
                    .catch(error => {
                        alert('Internal Error. Unable to delete contact.');
                    });
            },
            
            approve: function () {
                axios.patch('/api/auth/estimateStatus/' + this.$route.params.id)
                    .then(response => {
                        this.$router.push('/UnapprovedEstimatedLIst/');
                        // this.$router.push('/formList/' + this.$route.params.id);
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