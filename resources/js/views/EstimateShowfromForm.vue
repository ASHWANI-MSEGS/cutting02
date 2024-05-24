<template>
    <div>
        <div v-if="loading">Loading...</div>
        <div v-else>

            <div class="flex justify-between">

                <!-- <div class="relative">
                    <router-link :to="'/form/' + form.id + '/edit'" class="px-4 py-2 rounded text-green-500 border border-green-500 text-sm font-bold mr-2">Approve</router-link>
                    <a href="#" v-if="estimate.status === 0" class="px-4 py-2 border border-green-500 rounded text-sm font-bold text-green-500" @click="modalA = ! modalA">Approve</a>

                    <div v-if="modalA" class="absolute bg-blue-900 text-white rounded-lg z-20 p-8 w-64 left-0 mt-2 mr-6">
                        <p>Are you sure you want to Approve this Estimate?</p>

                        <div class="flex items-center mt-6 justify-end">
                            <button class="text-white pr-4" @click="modalA = ! modalA">Cancel</button>
                            <button class="px-4 py-2 bg-green-500 rounded text-sm font-bold text-white" @click="approve">Approvesdf</button>
                        </div>
                    </div>

                    <a href="#" class="px-4 py-2 border border-red-500 rounded text-sm font-bold text-red-500" @click="modal = ! modal">Desdslete</a>

                    <div v-if="modal" class="absolute bg-blue-900 text-white rounded-lg z-20 p-8 w-64 right-0 mt-2 mr-6">
                        <p>Are you sure you want to Delete reject this form?</p>

                        <div class="flex items-center mt-6 justify-end">
                            <button class="text-white pr-4" @click="modal = ! modal">Cancel</button>
                            <button class="px-4 py-2 bg-red-500 rounded text-sm font-bold text-white" @click="destroy">Delete</button>
                        </div>
                    </div>
                </div> -->

                     <a href="#" class="text-blue-400" @click="$router.back()">
                     << Back
                     </a>
                    <div v-if="modalA" class="bg-black opacity-25 absolute right-0 left-0 top-0 bottom-0 z-10" @click="modalA = ! modalA">
                    </div>

                    <div v-if="modal" class="bg-black opacity-25 absolute right-0 left-0 top-0 bottom-0 z-10" @click="modal = ! modal">
                    </div>
            

                     </div>
                        
                        

<!-- 
                 <div class="flex pt-6"> 
                    <UserCircle :name="form.name" />
                </div> -->
                                <br>
                
               <p><span class="pt-2  text-gray-600 font-bold  text-sm">Memo:</span>
                <span class="pl-2 text-xl">{{ form.memo }}</span>
                </p>
                <br>

                <div class="flex flex-wrap">
                <p class="w-2/4 pt-2"><span class="pt-2 text-gray-600 font-bold  text-sm">Name</span>
                <span class="pl-2 text-blue-400">{{ form.name }}</span>
                </p>
            
                <p class="w-2/4 pt-4"><span class="pt-2 text-gray-600 font-bold  text-sm">Length</span>
                <span class="pt-2 text-blue-400">{{ estimate.length }}</span>
                </p>

                <p class="w-2/4 pt-4"><span class="pt-2 text-gray-600 font-bold  text-sm">Breadth</span>
                <span class="pt-2 text-blue-400">{{ estimate.breadth }}</span>
                </p>

                <p class="w-2/4 pt-4"><span class="pt-2 text-gray-600 font-bold  text-sm">Area</span>
                <span class="pt-2 text-blue-400">{{ estimate.area }}</span>
                </p>

                <p class="w-2/4 pt-4"><span class="pt-2 text-gray-600 font-bold  text-sm">Rate</span>
                <span class="pt-2 text-blue-400">Rs. {{ estimate.rate }}</span>
                </p>

                <template v-if="estimate.status === 0">
                        <p class="w-2/4 pt-4">Status: <span class="text-red-400 rounded text-white px-1 py-1 ">UNAPPROVED</span></p>
                </template>
                <template v-else>
                        <p class="w-2/4 pt-4">Status: <span class="text-green-300 rounded text-white px-1 py-1">APPROVED</span></p>
                </template> 
                <br>


                <p class="w-2/4 pt-4"><span class="pt-2 text-gray-600 font-bold  text-sm">Assigned Engineer</span>
                <span class="pl-2 text-blue-400">{{ form.engineer }}</span>
                </p>

                </div>

                           <br>
                           <br>

          <button class="text-white  rounded-lg px-4 py-1 hover:bg-gray-300" @click.prevent="printme">
              <svg height="30pt" viewBox="-27 -67 859.31017 859" width="30pt" xmlns="http://www.w3.org/2000/svg"><path d="m738.554688 628.5h-107.414063c-7.421875 0-13.429687-6.003906-13.429687-13.425781s6.007812-13.425781 13.429687-13.425781h107.414063c22.207031 0 40.277343-18.066407 40.277343-40.28125v-322.242188c0-22.207031-18.066406-40.277344-40.277343-40.277344h-671.335938c-22.210938 0-40.28125 18.070313-40.28125 40.277344v322.242188c0 22.214843 18.066406 40.28125 40.28125 40.28125h107.410156c7.417969 0 13.429688 6.003906 13.429688 13.425781s-6.011719 13.425781-13.429688 13.425781h-107.410156c-37.019531 0-67.1367188-30.117188-67.1367188-67.132812v-322.242188c0-37.007812 30.1171878-67.132812 67.1367188-67.132812h671.335938c37.015624 0 67.132812 30.125 67.132812 67.132812v322.242188c0 37.015624-30.117188 67.132812-67.132812 67.132812zm0 0"/><path d="m644.566406 198.847656h-483.363281v-201.402344h483.363281zm-456.507812-26.855468h429.652344v-147.691407h-429.652344zm0 0"/><path d="m644.566406 722.488281h-483.363281v-322.242187h483.363281zm-456.507812-26.851562h429.652344v-268.535157h-429.652344zm0 0"/><path d="m671.417969 427.101562h-537.066407c-7.417968 0-13.429687-6.007812-13.429687-13.425781 0-7.421875 6.011719-13.429687 13.429687-13.429687h537.066407c7.421875 0 13.429687 6.007812 13.429687 13.429687 0 7.425781-6.007812 13.425781-13.429687 13.425781zm0 0"/><path d="m564.003906 494.234375h-322.238281c-7.417969 0-13.429687-6.007813-13.429687-13.425781 0-7.421875 6.011718-13.429688 13.429687-13.429688h322.238281c7.421875 0 13.429688 6.007813 13.429688 13.429688 0 7.417968-6.007813 13.425781-13.429688 13.425781zm0 0"/><path d="m564.003906 547.941406h-322.238281c-7.417969 0-13.429687-6-13.429687-13.425781 0-7.421875 6.011718-13.429687 13.429687-13.429687h322.238281c7.421875 0 13.429688 6.007812 13.429688 13.429687 0 7.417969-6.007813 13.425781-13.429688 13.425781zm0 0"/><path d="m564.003906 601.648438h-322.238281c-7.417969 0-13.429687-6-13.429687-13.425782 0-7.421875 6.011718-13.429687 13.429687-13.429687h322.238281c7.421875 0 13.429688 6.007812 13.429688 13.429687 0 7.417969-6.007813 13.425782-13.429688 13.425782zm0 0"/><path d="m564.003906 655.355469h-322.238281c-7.417969 0-13.429687-6.007813-13.429687-13.425781 0-7.421876 6.011718-13.429688 13.429687-13.429688h322.238281c7.421875 0 13.429688 6.007812 13.429688 13.429688 0 7.417968-6.007813 13.425781-13.429688 13.425781zm0 0"/></svg>
          </button>

        </div>         
    </div>

</template>



<script>
    import UserCircle from '../components/UserCircle';

    export default {
        name: "EstimateShowfromForm",

        components: {
            UserCircle
        },

        mounted() {
            axios.get('/api/auth/form/list/' + this.$route.params.id)
                .then(response => {
                    this.form = response.data.form;
                    

           
           axios.get('/api/auth/estimateFindByForm/' + this.form.id)
                .then(response=>{
                    this.estimate = response.data.estimate[0];
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
                estimate: {},
                loading: true,
                modal: false,
                contact: null,
                modalA: false,
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