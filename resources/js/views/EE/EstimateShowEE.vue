<template>
    <div class="relative">
        <div v-if="modalA" class="absolute top-0 bottom-0 left-0 right-0 z-10 bg-black opacity-25"
            @click="modalA = !modalA">
        </div>

        <div v-if="modal" class="absolute top-0 bottom-0 left-0 right-0 z-10 bg-black opacity-25" @click="modal = !modal">
        </div>

        <div v-if="modalEstimateEdit" class="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-25 z-15"
            @click="modalEstimateEdit = !modalEstimateEdit">
        </div>
        <!-- Edit Estimate modals -->

        <form v-if="modalEstimateEdit" @submit.prevent='estimateSubmit'
            class="absolute left-0 right-0 z-50 w-11/12 ml-auto mr-auto bg-white rounded-lg top-2 md:w-4/5 lg:w-1/2">

            <div class="px-12 py-4">

                <p class="py-2 text-xl bold">Estimate Calculator </p>

                <div class="relative py-3 ">
                    <label for="road_name" class="absolute px-2 py-2 text-xs uppercase text-textblue">Road Name</label>
                    <input id="road_name" type="text"
                        class="w-full px-2 pt-6 pb-1 text-gray-900 border rounded-lg focus:outline-none "
                        placeholder="Road name chhu lut rawh le" v-model="estimate.road_name" autofocus>
                </div>

                <div class="relative py-3 ">
                    <label for="road_type" class="absolute px-2 py-2 text-xs uppercase text-textblue">Road Type</label>
                    <input id="road_type" type="text"
                        class="w-full px-2 pt-6 pb-1 text-gray-900 border rounded-lg focus:outline-none "
                        placeholder="Road type chhu lut rawh le" v-model="estimate.road_type" autofocus>
                </div>

                <div class="relative py-3 ">
                    <label for="length" class="absolute px-2 py-2 text-xs uppercase text-textblue">Length</label>
                    <input id="length" type="text"
                        class="w-full px-2 pt-6 pb-1 text-gray-900 border rounded-lg focus:outline-none "
                        placeholder="number chhu lut rawh le" v-model="estimate.length" @input="AREA" autofocus>
                </div>

                <div class="relative pb-3 ">
                    <label for="breadth" class="absolute px-2 py-2 text-xs uppercase text-textblue">Breadth</label>
                    <input id="breadth" type="text"
                        class="w-full px-2 pt-6 pb-1 text-gray-900 border rounded-lg focus:outline-none "
                        placeholder="number chhu lut rawh le" v-model="estimate.breadth" @input="AREA" autofocus>

                </div>

                <div class="relative pb-3 ">
                    <label for="rate" class="absolute px-2 py-2 text-xs uppercase text-textblue">Rate(INR)</label>
                    <input id="rate" type="text"
                        class="w-full px-2 pt-6 pb-1 text-gray-900 border rounded-lg focus:outline-none "
                        placeholder="number chhu lut rawh le" v-model="estimate.rate" @input="TOTAL" autofocus>

                </div>


                <div class="grid grid-cols-2 gap-0 md:grid-cols-2 md:gap-2">
                    <div class="px-4 py-5 bg-white rounded-lg shadow ">
                        <p class="text-sm text-gray-400">Area</p>
                        <p class="text-xl text-blue-400">
                            {{ estimate.area }}
                        </p>
                    </div>

                    <div class="px-4 py-5 text-xl text-blue-400 bg-white rounded-lg shadow">
                        <p class="text-sm text-gray-400">Amount (INR)</p>
                        <p class="text-xl text-blue-400">
                            Rs.{{ estimate.amount }}
                        </p>
                    </div>
                    <div class="px-4 py-5 bg-white rounded-lg shadow ">
                        <p class="text-sm text-gray-400">Deposit</p>
                        <p class="text-xl text-blue-400">
                            Rs.{{ estimate.deposit }}
                        </p>
                    </div>

                    <div class="px-4 py-5 text-xl text-blue-400 bg-white rounded-lg shadow">
                        <p class="text-sm text-gray-400">Total(INR)</p>
                        <p class="text-xl text-blue-400">
                            Rs.{{ estimate.total }}
                        </p>
                    </div>
                </div>





                <template v-if="security_deposit.status == 1">
                    <button type="submit"
                        class="flex items-center px-5 py-1 mt-4 text-sm rounded-lg shadow border-buttonpink text-buttonpink hover:text-red-400 sm:mt-6 focus:outline-none"
                        @click.prevent="waveoff">
                        Wave Off Security Deposit
                    </button>
                </template>




                <div class="relative pt-1 pb-3">
                    <div class="flex justify-between">
                        <button type="submit"
                            class="flex items-center px-5 py-1 mt-4 text-sm text-white rounded-lg shadow bg-buttonpink hover:bg-red-500 sm:mt-6 focus:outline-none">
                            Submit
                        </button>
                        <button
                            class="items-center px-5 py-1 mt-4 ml-1 text-sm text-red-500 border border-red-500 rounded sm:mt-6 hover:border-red-300 focus:outline-none"
                            @click="modalEstimateEdit = !modalEstimateEdit">Cancel</button>
                    </div>
                    <p class="mt-4 text-sm italic text-gray-500">Note: Click Submit to Approve</p>
                </div>

            </div>
        </form>

        <!-- End Estimate Edit Modals -->

        <!-- Assign modals -->
        <div v-if="modalA"
            class="absolute left-0 right-0 z-40 w-11/12 h-64 ml-auto mr-auto bg-white rounded-lg shadow top-2 md:3/5 lg:w-2/4 xl:w-1/4">
            <form @submit.prevent="approve">
                <!-- Assign Close Button -->
                <div class="absolute top-0 right-0 ">
                    <button @click="modalA = !modalA" class="px-2 py-2 mt-4 mr-6 rounded hover:bg-gray-200">
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
                <!-- Assign Close Button Close -->

                <div class="flex justify-center my-6 text-xl font-bold text-textblueform ">Approve Estimate</div>


                <label class="flex justify-center px-4 py-2 font-bold text-blue-500 text-md">Do you want to approve this
                    Estimate</label>


                <div class="flex items-center justify-center pt-2 ">
                    <button class="px-4 py-2 text-sm font-bold text-white bg-green-500 rounded hover:bg-green-400"
                        @click="approve">Yes</button>
                    <button class="px-4 py-1 ml-1 text-red-500 border border-red-500 rounded hover:border-red-300"
                        @click="modalA = !modalA">Cancel</button>
                </div>
            </form>
        </div>
        <!-- Close Assign modals -->


        <div class="flex flex-col md:mt-6 md:ml-6 sm:w-full md:w-4/5 lg:w-3/5">
            <div v-if="loading">
                Loading...
            </div>

            <div v-else>
                <a href="#" class="text-blue-400" @click="$router.back()">
                     Back
                     </a>
                <div
                    class="flex flex-row items-center justify-between h-auto py-4 mt-3 bg-white border-b-4 border-dashed rounded-t-lg rounded-b-lg">
                    <div class="flex flex-col ml-8">
                        <p class="text-sm font-light">Memo No </p>
                        <p class="text-lg font-medium">{{ form.memo }}</p>
                    </div>
                    <button class="px-4 py-1 mr-1 text-white rounded-lg hover:bg-gray-300" @click.prevent="printme">
                        <svg height="30pt" viewBox="-27 -67 859.31017 859" width="30pt" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="m738.554688 628.5h-107.414063c-7.421875 0-13.429687-6.003906-13.429687-13.425781s6.007812-13.425781 13.429687-13.425781h107.414063c22.207031 0 40.277343-18.066407 40.277343-40.28125v-322.242188c0-22.207031-18.066406-40.277344-40.277343-40.277344h-671.335938c-22.210938 0-40.28125 18.070313-40.28125 40.277344v322.242188c0 22.214843 18.066406 40.28125 40.28125 40.28125h107.410156c7.417969 0 13.429688 6.003906 13.429688 13.425781s-6.011719 13.425781-13.429688 13.425781h-107.410156c-37.019531 0-67.1367188-30.117188-67.1367188-67.132812v-322.242188c0-37.007812 30.1171878-67.132812 67.1367188-67.132812h671.335938c37.015624 0 67.132812 30.125 67.132812 67.132812v322.242188c0 37.015624-30.117188 67.132812-67.132812 67.132812zm0 0" />
                            <path
                                d="m644.566406 198.847656h-483.363281v-201.402344h483.363281zm-456.507812-26.855468h429.652344v-147.691407h-429.652344zm0 0" />
                            <path
                                d="m644.566406 722.488281h-483.363281v-322.242187h483.363281zm-456.507812-26.851562h429.652344v-268.535157h-429.652344zm0 0" />
                            <path
                                d="m671.417969 427.101562h-537.066407c-7.417968 0-13.429687-6.007812-13.429687-13.425781 0-7.421875 6.011719-13.429687 13.429687-13.429687h537.066407c7.421875 0 13.429687 6.007812 13.429687 13.429687 0 7.425781-6.007812 13.425781-13.429687 13.425781zm0 0" />
                            <path
                                d="m564.003906 494.234375h-322.238281c-7.417969 0-13.429687-6.007813-13.429687-13.425781 0-7.421875 6.011718-13.429688 13.429687-13.429688h322.238281c7.421875 0 13.429688 6.007813 13.429688 13.429688 0 7.417968-6.007813 13.425781-13.429688 13.425781zm0 0" />
                            <path
                                d="m564.003906 547.941406h-322.238281c-7.417969 0-13.429687-6-13.429687-13.425781 0-7.421875 6.011718-13.429687 13.429687-13.429687h322.238281c7.421875 0 13.429688 6.007812 13.429688 13.429687 0 7.417969-6.007813 13.425781-13.429688 13.425781zm0 0" />
                            <path
                                d="m564.003906 601.648438h-322.238281c-7.417969 0-13.429687-6-13.429687-13.425782 0-7.421875 6.011718-13.429687 13.429687-13.429687h322.238281c7.421875 0 13.429688 6.007812 13.429688 13.429687 0 7.417969-6.007813 13.425782-13.429688 13.425782zm0 0" />
                            <path
                                d="m564.003906 655.355469h-322.238281c-7.417969 0-13.429687-6.007813-13.429687-13.425781 0-7.421876 6.011718-13.429688 13.429687-13.429688h322.238281c7.421875 0 13.429688 6.007812 13.429688 13.429688 0 7.417968-6.007813 13.425781-13.429688 13.425781zm0 0" />
                        </svg>
                    </button>
                </div>

                <!-- 4. -->
                <div class="h-auto px-4 py-4 bg-white border-gray-200 rounded-t-lg rounded-b-lg">

                    <div class="grid grid-cols-2 gap-2 ml-1 md:ml-4">

                        <p class="py-1 mt-1"><b>Applicant Details</b></p>
                        <span></span>
                        <p class="py-1">Name</p>
                        <p class="py-1">: {{ form.name }}</p>
                        <p class="py-1">Email ID</p>
                        <p class="py-1">: {{ form.email }}</p>
                        <p class="py-1">Phone Number</p>
                        <p class="py-1">: {{ form.phone }}</p>
                        <p class="py-1">Residence Address</p>
                        <p class="py-1">: {{ form.rhouseno }}, {{ form.rlocalcouncil_name }}</p>
                        <p class="py-1">Roadcutting Address</p>
                        <p class="py-1">: {{ form.houseno }}, {{ form.localcouncil_name }}</p>
                        <p class="py-1">Engineer I/C</p>
                        <p class="py-1">: {{ form.engineer_name }}, {{ form.engineer_post }}</p>
                        <p class="py-1">Engg I/C Phone</p>
                        <p class="py-1">: {{ form.engineer_phone }}</p>
                        <p class="py-1 mb-1">Form Submitted</p>
                        <p class="py-1 mb-1">: {{ form.created_at }}</p>
                    </div>
                    <hr>
                    <div class="grid grid-cols-2 gap-2 ml-1 md:ml-4">

                        <p class="py-1 mt-1"><b>Estimate Details</b></p>
                        <span></span>
                        <p class="py-1">Road Name</p>
                        <p class="py-1">: {{ estimate.road_name }}</p>
                        <p class="py-1">Road Type</p>
                        <p class="py-1">: {{ estimate.road_type }}</p>
                        <p class="py-1">Length of Road </p>
                        <p class="py-1">: {{ estimate.length }} meter</p>
                        <p class="py-1">Breadth of Road</p>
                        <p class="py-1">: {{ estimate.breadth }} meter</p>
                        <p class="py-1">Rate</p>
                        <p class="py-1">: {{ estimate.rate }} per sq meter</p>
                        <p class="py-1">Amount</p>
                        <p class="py-1">: Rs. {{ estimate.amount }}</p>
                        <p class="py-1">Deposit</p>
                        <p class="py-1">: Rs. {{ estimate.deposit }}</p>
                        <p class="py-1">Total</p>
                        <p class="py-1">: Rs. {{ estimate.total }}</p>
                        <p class="py-1">Estimate Submitted</p>
                        <p class="py-1">: {{ estimate.created_at }}</p>
                        <p class="py-1">Status</p>
                        <template v-if="estimate.estimate_status == 0">
                            <p class="py-1 text-red-500">: Pending for Approval</p>
                        </template>
                        <template v-else>
                            <p class="py-1 text-green-500">: Approved</p>
                        </template>
                        <hr>
                        <hr>

                        <a href="#"
                            class="px-4 py-2 mt-1 text-sm font-bold text-center text-white bg-green-500 border rounded hover:bg-green-400"
                            @click="modalA = !modalA">Approve</a>
                        <a href="#"
                            class="px-2 py-2 mt-1 text-sm font-bold text-center text-white bg-blue-700 border rounded hover:bg-blue-600"
                            @click="modalEstimateEdit = !modalEstimateEdit">Edit</a>
                    </div>

                </div>
            </div>

        </div>

    </div>
</template>



<script>


export default {
    name: "EstimateShowEE",

    components: {

    },

    mounted() {
        axios.get('/api/estimateShow/' + this.$route.params.id, {
            headers: {
                "Authorization": `Bearer ${this.$store.getters.currentUser.token}`
            }
        })
            .then(response => {
                console.log(response.data)

                this.estimate = response.data.estimate;
                this.form = response.data.form;
                this.security_deposit = response.data.security_deposit;


                // this.security_deposit = 'Testing';

                this.loading = false;

            })
            .catch(error => {

                this.loading = false;

                if (error.response.status === 404) {
                    this.$router.push('/');
                }
            });
    },

    data: function () {
        return {

            security_deposit: {},
            form: {},
            loading: true,
            modal: false,
            contact: null,
            modalA: false,
            modalEstimateEdit: false,
            currentUser: this.$store.getters.currentUser,

            estimate: {
                'id': '',
                'road_name': '',
                'length': '',
                'breadth': '',
                'area': '',
                'rate': '',
                'amount': '',
                'deposit': '',
                'total': '',
                'form_id': this.$route.params.id,
                'division_id': '',
            },
        }
    },

    computed: {

        AREA: function () {

            this.estimate.area = Number((this.estimate.length * this.estimate.breadth).toFixed(2));
            this.estimate.amount = Number((this.estimate.area * this.estimate.rate).toFixed(2));

        },
        TOTAL: function () {
console.log("when is the total workignl??")
            this.estimate.amount = Number((this.estimate.area * this.estimate.rate).toFixed(2));
            this.estimate.deposit = Number(((this.estimate.amount * 10) / 100).toFixed(2));
            this.estimate.total = Number((this.estimate.amount + this.estimate.deposit).toFixed(2));
            // console.log( this.estimate.total);
        },

        waveoff: function () {
        console.log("waveoff is running boy")
            this.estimate.total = Number((this.estimate.amount).toFixed(2));

        }

    },

    methods: {

        estimateSubmit: function () {
            axios.patch('/api/estimateEditApprove', this.estimate, {
                headers: {
                    "Authorization": `Bearer ${this.$store.getters.currentUser.token}`
                }
            })
                .then(response => {
                    console.log(response)
console.log(this.modalEstimateEdit);
console.log(this.estimate);
                    this.$router.push('/UnapprovedEstimatedLIstEE/');
                })

                .catch(errors => {

                    this.errors = errors.response.data.errors;
                });

        },
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
                    this.$router.push('/UnapprovedEstimatedListEE/');
                    // this.$router.push('/formList/' + this.$route.params.id);
                })
                .catch(error => {
                    alert('Internal Error. Unable to approve form.');
                });
        },


        printme: function () {

            window.print();
        }
    }
}
</script>

<style scoped></style>
