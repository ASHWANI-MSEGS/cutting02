<template>
    <div>
        <!-- manual online start -->
        <div v-if="modalOnlineManual" class="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-25 z-15"
            @click="modalOnlineManual = !modalOnlineManual">
        </div>
        <form v-if="modalOnlineManual" @submit.prevent='approve'
            class="absolute left-0 right-0 z-50 w-11/12 pb-6 ml-auto mr-auto bg-white rounded-lg top-2 md:w-4/5 lg:w-1/2">
            <div class="flex justify-center">
                <h1 class="px-4 py-2 text-xl font-bold text-blue-600 underline">UPI MANUAL FILL UP</h1>
            </div>
            <div class="relative pb-2 pr-2 mx-10 mt-10 mb-3 border rounded-lg">
                <label class="absolute px-4 py-2 font-bold text-blue-500 text-md">Ref No.</label>
                <input type="text" v-model="paymentM.ref_no"
                    class="w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg text-textgrayform focus:outline-none">
            </div>
            <div class="relative pb-2 pr-2 mx-10 mt-10 mb-3 border rounded-lg">
                <label class="absolute px-4 py-2 font-bold text-blue-500 text-md">Amount</label>
                <input type="text" v-model="paymentM.amount"
                    class="w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg text-textgrayform focus:outline-none">
            </div>
            <div class="relative pb-2 pr-2 mx-10 mt-10 mb-3 border rounded-lg">
                <label class="absolute px-4 py-2 font-bold text-blue-500 text-md">Method
                    (UPI/OnlineBanking/Card)</label>
                <input type="text" v-model="paymentM.method"
                    class="w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg text-textgrayform focus:outline-none">
            </div>
            <div class="relative pb-2 pr-2 mx-10 mt-10 mb-3 border rounded-lg">
                <label class="absolute px-4 py-2 font-bold text-blue-500 text-md">Bank/UPI Name</label>
                <input type="text" v-model="paymentM.bank_name"
                    class="w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg text-textgrayform focus:outline-none">
            </div>
            <div class="relative pb-2 pr-2 mx-10 mt-10 mb-3 border rounded-lg">
                <label class="absolute px-4 py-2 font-bold text-blue-500 text-md">Date of Transaction</label>
                <input type="date" v-model="paymentM.date"
                    class="w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg text-textgrayform focus:outline-none">
            </div>
            <div class="flex items-center justify-center pt-2 ">
                <button :disabled="!isDisabled"
                    class="px-4 py-2 text-sm font-bold text-white bg-green-500 rounded hover:bg-green-400">{{
            submit_value }}</button>
                <button class="px-4 py-1 ml-1 text-red-500 border border-red-500 rounded hover:border-red-300"
                    @click="modalOnlineManual = !modalOnlineManual">Cancel</button>
            </div>
        </form>
        <!-- manual online end -->

        <!-- manual RTGS/NEFT start -->
        <div v-if="modalRTGSManual" class="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-25 z-15"
            @click="modalRTGSManual = !modalRTGSManual">
        </div>
        <form v-if="modalRTGSManual" @submit.prevent='approveRTGS'
            class="absolute left-0 right-0 z-50 w-11/12 pb-6 ml-auto mr-auto bg-white rounded-lg top-2 md:w-4/5 lg:w-1/2">
            <div class="flex justify-center">
                <h1 class="px-4 py-2 text-xl font-bold text-blue-600 underline">RTGS/NEFT MANUAL FILL UP</h1>
            </div>
            <div class="relative pb-2 pr-2 mx-10 mt-10 mb-3 border rounded-lg">
                <label class="absolute px-4 py-2 font-bold text-blue-500 text-md">Amount to be Paid</label>
                <input type="text" v-model="paymentRTGS.total_amount"
                    class="w-full px-3 pt-6 mt-1 ml-1 text-xl font-bold text-green-400 bg-white rounded-lg focus:outline-none"
                    readonly>
            </div>
            <div class="relative pb-2 pr-2 mx-10 mt-5 mb-3 border rounded-lg">
                <label class="absolute px-4 py-2 font-bold text-blue-500 text-md">Payment Mode</label>
                <input placeholder="RTGS OR NEFT" type="text" v-model="paymentRTGS.payment_mode"
                    class="w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg text-textgrayform focus:outline-none">
            </div>

            <div class="relative pb-2 pr-2 mx-10 mt-5 mb-3 border rounded-lg">
                <label class="absolute px-4 py-2 font-bold text-blue-500 text-md">Account Holder Name</label>
                <input type="text" v-model="paymentRTGS.account_holder_name"
                    class="w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg text-textgrayform focus:outline-none">
            </div>

            <div class="relative pb-2 pr-2 mx-10 mt-5 mb-3 border rounded-lg">
                <label class="absolute px-4 py-2 font-bold text-blue-500 text-md">Bank Account No</label>
                <input type="text" v-model="paymentRTGS.bank_account_no"
                    class="w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg text-textgrayform focus:outline-none">
            </div>
            <div class="relative pb-2 pr-2 mx-10 mt-5 mb-3 border rounded-lg">
                <label class="absolute px-4 py-2 font-bold text-blue-500 text-md">Bank Name</label>
                <input type="text" v-model="paymentRTGS.bank_name"
                    class="w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg text-textgrayform focus:outline-none">
            </div>
            <div class="relative pb-2 pr-2 mx-10 mt-5 mb-3 border rounded-lg">
                <label class="absolute px-4 py-2 font-bold text-blue-500 text-md">Branch Name</label>
                <input type="text" v-model="paymentRTGS.branch_name"
                    class="w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg text-textgrayform focus:outline-none">
            </div>
            <div class="relative pb-2 pr-2 mx-10 mt-5 mb-3 border rounded-lg">
                <label class="absolute px-4 py-2 font-bold text-blue-500 text-md">IFSC Code</label>
                <input type="text" v-model="paymentRTGS.ifsc_code"
                    class="w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg text-textgrayform focus:outline-none">
            </div>
            <div class="relative pb-2 pr-2 mx-10 mt-5 mb-3 border rounded-lg">
                <label class="absolute px-4 py-2 font-bold text-blue-500 text-md">RTGS/NEFT NO.</label>
                <input type="text" v-model="paymentRTGS.rtgs_neft_no"
                    class="w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg text-textgrayform focus:outline-none">
            </div>
            <div class="relative pb-2 pr-2 mx-10 mt-5 mb-3 border rounded-lg">
                <label class="absolute px-4 py-2 font-bold text-blue-500 text-md">Cheque Date</label>
                <input type="date" v-model="paymentRTGS.cheque_date"
                    class="w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg text-textgrayform focus:outline-none">
            </div>
            <div class="flex items-center justify-center pt-2 ">
                <button :disabled="!isDisabled"
                    class="px-4 py-2 text-sm font-bold text-white bg-green-500 rounded hover:bg-green-400">{{
            submit_value }}</button>
                <button class="px-4 py-1 ml-1 text-red-500 border border-red-500 rounded hover:border-red-300"
                    @click="modalRTGSManual = !modalRTGSManual">Cancel</button>
            </div>
        </form>
        <!-- manual RTGS/neft end -->


        <!-- manual Cash start -->
        <div v-if="modalCashManual" class="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-25 z-15"
            @click="modalCashManual = !modalCashManual">
        </div>
        <form v-if="modalCashManual" @submit.prevent='approveCash'
            class="absolute left-0 right-0 z-50 w-11/12 pb-6 ml-auto mr-auto bg-white rounded-lg top-2 md:w-4/5 lg:w-1/2">
            <div class="flex justify-center">
                <h1 class="px-4 py-2 text-xl font-bold text-blue-600 underline">CASH MANUAL FILL UP</h1>
            </div>
            <div class="relative pb-2 pr-2 mx-10 mt-10 mb-3 border rounded-lg">
                <label class="absolute px-4 py-2 font-bold text-blue-500 text-md">Amount to be Paid</label>
                <input type="text" v-model="paymentCash.total_amount"
                    class="w-full px-3 pt-6 mt-1 ml-1 text-xl font-bold text-green-400 bg-white rounded-lg focus:outline-none"
                    readonly>
            </div>
            <div class="relative pb-2 pr-2 mx-10 mt-5 mb-3 border rounded-lg">
                <label class="absolute px-4 py-2 font-bold text-blue-500 text-md">Payer's Name</label>
                <input placeholder="Amount Payer's Name " type="text" v-model="paymentCash.payer_name"
                    class="w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg text-textgrayform focus:outline-none">
            </div>
            <div class="relative pb-2 pr-2 mx-10 mt-5 mb-3 border rounded-lg">
                <label class="absolute px-4 py-2 font-bold text-blue-500 text-md">Payer's Phone No</label>
                <input placeholder="Amount Payer Phone Number" type="text" v-model="paymentCash.payer_phone"
                    class="w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg text-textgrayform focus:outline-none">
            </div>

            <div class="relative pb-2 pr-2 mx-10 mt-5 mb-3 border rounded-lg">

                <label class="absolute px-4 py-2 font-bold text-blue-500 text-md">Identification Type</label>
                <select v-model="paymentCash.identification_type"
                    class="w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg text-textgrayform focus:outline-none"
                    placeholder="gggggg">
                    <option value="default" class="inline-block text-textgrayform" disabled selected>Payer's Adhaar/Pan/Driving
                        Lisence option</option>
                    <option value="Adhaar Card">Adhaar Card</option>
                    <option value="Pan Card">Pan Card</option>
                    <option value="Driving Lisence">Driving Lisence</option>
                </select>
            </div>

            <div class="relative pb-2 pr-2 mx-10 mt-5 mb-3 border rounded-lg">
                <label class="absolute px-4 py-2 font-bold text-blue-500 text-md">Identification No.</label>
                <input placeholder="Payer's Adhaar/Pan/Driving Licence Number" type="text"
                    v-model="paymentCash.identification_no"
                    class="w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg text-textgrayform focus:outline-none">
            </div>
            <div class="relative pb-2 pr-2 mx-10 mt-5 mb-3 border rounded-lg">
                <label class="absolute px-4 py-2 font-bold text-blue-500 text-md">Location of Road Cutting</label>
                <input placeholder="Location of Road Cutting" type="text" v-model="paymentCash.road_location"
                    class="w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg text-textgrayform focus:outline-none">
            </div>
            <div class="relative pb-2 pr-2 mx-10 mt-5 mb-3 border rounded-lg">
                <label class="absolute px-4 py-2 font-bold text-blue-500 text-md">House No For Road Cutting </label>
                <input placeholder="House No. For Road Cuttingr" type="text" v-model="paymentCash.house_no"
                    class="w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg text-textgrayform focus:outline-none">
            </div>
            <div class="relative pb-2 pr-2 mx-10 mt-5 mb-3 border rounded-lg">

                <label class="absolute px-4 py-2 font-bold text-blue-500 text-md">Amount Receiver</label>
                <input placeholder="Amount Receiver Name" type="text" v-model="paymentCash.amount_receiver_name"
                    class="w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg text-textgrayform focus:outline-none">
            </div>
            <div class="relative pb-2 pr-2 mx-10 mt-5 mb-3 border rounded-lg">
                <label class="absolute px-4 py-2 font-bold text-blue-500 text-md">Amount Receiver's Phone No.</label>
                <input placeholder="Amount Receiver Phone No" type="text" v-model="paymentCash.amount_receiver_phone"
                    class="w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg text-textgrayform focus:outline-none">
            </div>

            <div class="relative pb-2 pr-2 mx-10 mt-5 mb-3 border rounded-lg">
                <label class="absolute px-4 py-2 font-bold text-blue-500 text-md">Cash Payment Date</label>
                <input type="date" v-model="paymentCash.cash_pay_date"
                    class="w-full px-3 pt-6 mt-1 ml-1 bg-white rounded-lg text-textgrayform focus:outline-none">
            </div>
            <div class="flex items-center justify-center pt-2 ">
                <button :disabled="!isDisabled"
                    class="px-4 py-2 text-sm font-bold text-white bg-green-500 rounded hover:bg-green-400">{{
            submit_value }}</button>
                <button class="px-4 py-1 ml-1 text-red-500 border border-red-500 rounded hover:border-red-300"
                    @click="modalCashManual = !modalCashManual">Cancel</button>
            </div>
        </form>
        <!-- manual Cash end -->

        <div class="flex flex-col md:mt-6 sm:w-full md:w-1/2">
            <div v-if="loading">
                Loading...
            </div>

            <div v-else>
                <a href="#" class="text-blue-400" @click="$router.back()">
                    Back
                </a>
                <div
                    class="flex flex-row items-center justify-between h-24 mt-3 bg-white border-b-4 border-dashed rounded-t-lg rounded-b-lg">
                    <div class="flex flex-col ml-8">
                        <p class="text-sm font-light">Memo No</p>
                        <p class="text-lg font-medium">{{ form.memo }}</p>
                    </div>
                    <button class="px-4 py-1 mr-1 text-white rounded-lg hover:bg-gray-300" @click.prevent="printme">
                        <svg height="30pt" viewBox="-27 -67 859.31017 859" width="30pt"
                            xmlns="http://www.w3.org/2000/svg">
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
                <div class="h-auto pb-4 bg-white border-gray-200 rounded-t-lg rounded-b-lg">

                    <div class="grid grid-cols-2 gap-2 ml-3 md:ml-4">

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
                    <div class="grid grid-cols-2 gap-2 ml-3 md:ml-4">

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
                        <template v-else-if="estimate.estimate_status == 1">
                            <p class="py-1 text-green-500">: Approved</p>
                        </template>
                        <hr>
                        <hr>

                    </div>
                    <!-- i think it should be currentUser.role.id==3(operator)  currently its showing in the ee page rather than operator page -->
                    <template v-if="currentUser.role_id == 2">
                        <hr>
                        <p class="py-1 mt-4 mb-3 ml-3 md:ml-4 "><b>Successful UPI/Banking But System Failure</b></p>
                        <div class="grid grid-cols-2 gap-2 ml-3 md:ml-4">
                            <p class="py-1">Enter Manually For UPI</p>
                            <div>
                                <a href="#"
                                    class="px-6 py-2 mt-1 text-sm font-bold text-center text-white bg-blue-700 border rounded hover:bg-blue-600"
                                    @click="modalOnlineManual = !modalOnlineManual">Click For UPI</a>
                            </div>
                        </div>
                        <hr>
                        <p class="py-1 mt-4 mb-3 ml-3 md:ml-4 "><b>For RTGS/NEFT Payment</b></p>
                        <div class="grid grid-cols-2 gap-2 ml-3 md:ml-4">
                            <p class="py-1">Enter Manually For RTGS/NEFT</p>
                            <div>
                                <a href="#"
                                    class="px-6 py-2 mt-1 text-sm font-bold text-center text-white bg-blue-700 border rounded hover:bg-blue-600"
                                    @click="modalRTGSManual = !modalRTGSManual">Click For RTGS/NEFT</a>
                            </div>
                        </div>
                        <hr>
                        <p class="py-1 mt-4 mb-3 ml-3 md:ml-4 "><b>For Cash Payment</b></p>
                        <div class="grid grid-cols-2 gap-2 ml-3 md:ml-4">
                            <p class="py-1">Enter Manually For Cash Payment</p>
                            <div>
                                <a href="#"
                                    class="px-6 py-2 mt-1 text-sm font-bold text-center text-white bg-blue-700 border rounded hover:bg-blue-600"
                                    @click="modalCashManual = !modalCashManual">Click For Cash</a>
                            </div>
                        </div>


                    </template>

                </div>
            </div>

        </div>

    </div>

</template>



<script>
import UserCircle from '../../components/UserCircle';

export default {
    name: "EstimateShowSDO",

    components: {
        UserCircle
    },

    mounted() {
        axios.get('/api/estimateShow/' + this.$route.params.id, {
            headers: {
                "Authorization": `Bearer ${this.$store.getters.currentUser.token}`
            }
        })
            .then(response => {
                this.estimate = response.data.estimate;
                this.form = response.data.form;
                this.security_deposit = response.data.security_deposit;
                this.loading = false;

                this.paymentM.form_id = this.form.id;
                this.paymentRTGS.form_id = this.form.id;
                this.paymentCash.form_id = this.form.id;

                this.paymentRTGS.total_amount = this.estimate.total;
                this.paymentCash.total_amount = this.estimate.total;

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

            isDisabled: "true",
            submit_value: 'Submit',

            paymentM: {
                ref_no: null,
                amount: null,
                method: null,
                date: null,
                form_id: null,
                bank_name: null,

            },
            paymentRTGS: {
                form_id: null,

                total_amount: null,
                bank_name: null,
                account_holder_name: null,
                bank_account_no: null,
                branch_name: null,
                ifsc_code: null,
                rtgs_neft_no: null,
                cheque_date: null,
                payment_mode: null
            },
            paymentCash: {
                form_id: null,

                total_amount: null,
                amount_receiver_name: null,
                amount_receiver_phone: null,
                payer_name: null,
                payer_phone: null,
                identification_type: 'default',
                identification_no: null,
                road_location: null,
                house_no: null,
                cash_pay_date: null,

            },

            payment: {
                id: null,
            },

            security_deposit: {},
            form: {
                id: null,
            },
            loading: true,
            modal: false,
            contact: null,
            modalA: false,
            modalOnlineManual: false,
            modalRTGSManual: false,
            modalCashManual: false,
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

        disableS() {
            this.isDisabled = false;
            this.submit_value = "Submitting..";
        },

        enableS() {
            this.isDisabled = true;
            this.submit_value = "Submit";
        },
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
            this.disableS;
            axios.post('/api/manualOnlinePayment/', this.paymentM, {
                headers: {
                    "Authorization": `Bearer ${this.$store.getters.currentUser.token}`
                }
            })
                .then(response => {
                    this.payment = response.data.paymentUpdate;

                    this.loading = false;
                    this.$router.push('/paymentHandler/' + this.payment.id);
                    this.enableS;
                })
                .catch(error => {
                    console.log(error)
                    this.enableS;
                    alert('Internal Error. Unable to enter payment.');
                });
        },
        approveRTGS: function () {
            this.disableS;
            axios.post('/api/manualOnlinePaymentRTGS/', this.paymentRTGS, {
                headers: {
                    "Authorization": `Bearer ${this.$store.getters.currentUser.token}`
                }
            })
                .then(response => {
                    this.payment = response.data.paymentUpdate;

                    this.loading = false;
                    this.$router.push('/paymentHandler/' + this.payment.id);
                    this.enableS;
                })
                .catch(error => {
                    console.log(error)
                    this.enableS;
                    alert('Internal Error. Unable to enter payment.');
                });
        },
        approveCash: function () {
            this.disableS;
            axios.post('/api/manualOnlinePaymentCash/', this.paymentCash, {
                headers: {
                    "Authorization": `Bearer ${this.$store.getters.currentUser.token}`
                }
            })
                .then(response => {
                    this.payment = response.data.paymentUpdate;

                    this.loading = false;
                    this.$router.push('/paymentHandler/' + this.payment.id);
                    this.enableS;
                })
                .catch(error => {
                    console.log(error)
                    this.enableS;
                    alert('Internal Error. Unable to enter payment.');
                });
        },

        printme: function () {

            window.print();
        }
    }
}
</script>

<style scoped></style>
