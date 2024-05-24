<template>
    <div class="flex flex-col justify-center w-full h-auto md:w-4/5 lg:w-1/2">
        <template v-if="this.payment.payment_status == 1">


            <div class="relative flex justify-center pb-4">
                <div class="flex flex-col w-full mx-1 mt-10 md:ml-20 md:w-4/5 lg:w-3/5">
                    <!-- 1.Top with success logo -->
                    <div class="flex items-center justify-center h-32 rounded-t-lg bg-successcyan">
                        <div class="">
                            <svg version="1.1" class="text-white fill-current" id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                y="0px" viewBox="0 0 300 300" width="80" height="80"
                                style="enable-background:new 0 0 300 300;" xml:space="preserve">

                                <path class="st0"
                                    d="M221.4,84.3c-6-4.3-14.4-3-18.7,3.1l-65.9,92.2c-1.8,2-4.1,2.6-5.3,2.7c-1.2,0.1-3.7-0.1-5.7-2l-42.7-41
                                c-5.3-5.1-13.8-4.9-18.9,0.4c-5.1,5.3-4.9,13.8,0.4,18.9l42.8,41c6.4,6.1,14.9,9.5,23.8,9.5c0.7,0,1.5,0,2.2-0.1
                                c9.6-0.6,18.5-5.3,24.5-12.8c0.2-0.2,0.3-0.4,0.4-0.6l66.2-92.5C228.7,97,227.4,88.6,221.4,84.3L221.4,84.3z" />
                                <path class="st0" d="M143.8,3.7C65.8,3.7,2.6,66.9,2.6,144.9s63.2,141.2,141.2,141.2S285,222.9,285,144.9S221.8,3.7,143.8,3.7z
                                M143.8,262.4c-64.6,0-117.1-52.4-117.1-117.1c0-64.6,52.4-117.1,117.1-117.1s117.1,52.4,117.1,117.1
                                C260.8,210,208.4,262.4,143.8,262.4z" />
                            </svg>
                        </div>
                    </div>
                    <!-- 2. -->

                    <div class="flex flex-col items-center justify-center h-24 bg-white rounded-b-lg">
                        <p class="text-2xl font-normal">Well Done!!</p>
                        <p class="font-sans text-sm font-thin">Payment is Successful</p>
                    </div>
                    <!-- 3. -->
                    <div
                        class="flex flex-row items-center justify-between h-24 mt-3 bg-white border-b-4 border-dashed rounded-t-lg rounded-b-lg">
                        <div class="flex flex-col ml-8">
                                <p class="text-sm font-light">Tracking ID</p>
                                <p class="text-lg font-medium">{{ payment.tracking_id }}</p>

                        </div>
                        <button class="mr-8 hover:text-gray-400" @click.prevent="printme()">
                            <svg version="1.1" class="text-gray-700 fill-current" id="Layer_1" width="30" height="30"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                y="0px" viewBox="0 0 300 300" style="enable-background:new 0 0 300 300;"
                                xml:space="preserve">

                                <path class="st0" d="M257.5,61.4h-21.2V15.1c0-4.5-3.6-8.1-8.1-8.1H73.8c-4.5,0-8.1,3.6-8.1,8.1v46.2H44.4
                                        c-22,0.1-39.8,17.9-39.8,40v80.3c0,22,17.9,39.8,39.8,39.8h21.3v70.3c0,4.5,3.6,8.1,8.1,8.1h154.3c4.5,0,8.1-3.6,8.1-8.1v-70.3h21.2
                                        c22,0,39.9-17.9,39.9-39.8v-80.3C297.4,79.3,279.6,61.4,257.5,61.4z M81.9,23.3H220v38.1H81.9V23.3z M220,283.6H81.9v-90.1H220
                                        V283.6z M281.2,181.6c0,13-10.6,23.6-23.6,23.6h-21.2v-11.6h10c4.5,0,8.1-3.6,8.1-8.1s-3.6-8.1-8.1-8.1H55.7c-4.5,0-8.1,3.6-8.1,8.1
                                        c0,4.5,3.6,8.1,8.1,8.1h10v11.6H44.4c-13,0-23.6-10.6-23.6-23.6v-80.3c0-13,10.6-23.6,23.6-23.6h213.1c13,0,23.6,10.6,23.6,23.6
                                        L281.2,181.6L281.2,181.6z" />
                                <path class="st0" d="M106.4,265.8h89.3c4.5,0,8.1-3.6,8.1-8.1s-3.6-8.1-8.1-8.1h-89.3c-4.5,0-8.1,3.6-8.1,8.1
                                        C98.2,262.1,101.9,265.8,106.4,265.8z" />
                                <path class="st0" d="M106.4,230.5h89.3c4.5,0,8.1-3.6,8.1-8.1s-3.6-8.1-8.1-8.1h-89.3c-4.5,0-8.1,3.6-8.1,8.1
                                        C98.2,226.9,101.9,230.5,106.4,230.5z" />
                                <circle class="st0" cx="254.4" cy="104.3" r="8.1" />
                                <circle class="st0" cx="254.4" cy="132.4" r="8.1" />
                            </svg>
                        </button>
                    </div>
                    <!-- 4. -->
                    <div class="h-auto py-2 bg-white border-gray-200 rounded-t-lg rounded-b-lg">
                        <div class="flex justify-start py-2 pl-2 ml-0 md:ml-8">
                            <div class="grid grid-cols-2 gap-1 mx-1 md:gap-2 md:mx-4 lg:ml-8">
<template v-if="payment.order_status=='Cheque Manual Online'">
    <p class="py-1">Memo No.</p>
                             <p class="py-1">: {{ form.memo }}</p>
                             <p class="pt-1">Order No.</p>
                                <p class="py-1">: {{ payment.order_id }}</p>
                                <p class="py-1">Name</p>
                                <p class="py-1">: {{ form.name }}</p>
                                <p class="py-1">Email ID</p>
                                <p class="py-1">: {{ form.email }}</p>
                                <p class="py-1">Account Holder Name.</p>
                                <p class="py-1">: {{ payment.account_holder_name }}</p>
                                <p class="py-1">Bank Account No.</p>
                                <p class="py-1">: {{ payment.bank_account_no }}</p>

                                <p class="py-1">Bank Name</p>
                                <p class="py-1">: {{ payment.bank_name }}</p>

                                <p class="py-1">Branch Name</p>
                                <p class="py-1">: {{ payment.branch_name }}</p>
                                <p class="py-1">IFSC code</p>
                                <p class="py-1">: {{ payment.ifsc_code }}</p>
                                <p class="py-1">RTGS/NEFT No.</p>
                                <p class="py-1">: {{ payment.rtgs_neft_no }}</p>
                                <p class="py-1">Amount:</p>
                                <p class="py-1">: {{ estimate.amount }}</p>
                                <p class="py-1">Deposit(10%)</p>
                                <p class="py-1">: {{ estimate.deposit }}</p>
                                <p class="py-1">Total</p>
                                <p class="py-1">: {{ payment.amount }}</p>
                                <p class="py-1">Cheque Date</p>
                                <p class="py-1">: {{ payment.trans_date }}</p>

</template>
<template v-else-if="payment.order_status=='Cash Manual Online'">
    <p class="py-1">Memo No.</p>
                             <p class="py-1">: {{ form.memo }}</p>
                             <p class="pt-1">Order No.</p>
                                <p class="py-1">: {{ payment.order_id }}</p>
                                <p class="py-1">Name</p>
                                <p class="py-1">: {{ form.name }}</p>
                                <p class="py-1">Email ID</p>
                                <p class="py-1">: {{ form.email }}</p>
                                <p class="py-1">Payer's Name</p>
                                <p class="py-1">: {{ payment.payer_name }}</p>
                                <p class="py-1">Payer's Phone No</p>
                                <p class="py-1">: {{ payment.payer_phone }}</p>
                                <p class="py-1">Identification Type</p>
                                <p class="py-1">: {{ payment.identification_type }}</p>
                                <p class="py-1">Identification  Number</p>
                                <p class="py-1">: {{ payment.identification_no }}</p>
                                <p class="py-1">Amount Receiver's Name</p>
                                <p class="py-1">: {{ payment.amount_receiver_name }}</p>
                                <p class="py-1">Amount Receiver's Phone</p>
                                <p class="py-1">: {{ payment.amount_receiver_phone }}</p>
                                <p class="py-1">Road Cutting Location</p>
                                <p class="py-1">: {{ payment.road_location }}</p>
                                <p class="py-1">House Number</p>
                                <p class="py-1">: {{ payment.house_no }}</p>
                                <p class="py-1">Amount:</p>
                                <p class="py-1">: {{ estimate.amount }}</p>
                                <p class="py-1">Deposit(10%)</p>
                                <p class="py-1">: {{ estimate.deposit }}</p>
                                <p class="py-1">Total</p>
                                <p class="py-1">: {{ payment.amount }}</p>
                                <p class="py-1">Cash Payment Date</p>
                                <p class="py-1">: {{ payment.trans_date }}</p>
</template>
<template v-else>
    <p class="py-1">Memo No.</p>
                                <p class="py-1">: {{ form.memo }}</p>
                                <p class="py-1">Name</p>
                                <p class="py-1">: {{ form.name }}</p>
                                <p class="py-1">Email ID</p>
                                <p class="py-1">: {{ form.email }}</p>
                                <p class="py-1">Bank Ref No.</p>
                                <p class="py-1">: {{ payment.bank_ref_no }}</p>
                                <p class="py-1">Amount:</p>
                                <p class="py-1">: {{ estimate.amount }}</p>
                                <p class="py-1">Deposit(10%)</p>
                                <p class="py-1">: {{ estimate.deposit }}</p>
                                <p class="py-1">Total</p>
                                <p class="py-1">: {{ payment.amount }}</p>
                                <p class="pt-1">Order No.</p>
                                <p class="py-1">: {{ payment.order_id }}</p>
</template>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </template>



        <template v-if="this.payment.payment_status == 2">


            <div class="relative flex justify-center pb-4">
                <div class="flex flex-col w-3/5 mx-1 mt-10 md:ml-20">
                    <!-- 1.Top with success logo -->
                    <div class="flex items-center justify-center h-32 bg-red-400 rounded-t-lg">
                        <div class="">
                        </div>
                    </div>
                    <!-- 2. -->

                    <div class="flex flex-col items-center justify-center h-24 bg-white rounded-b-lg">
                        <p class="text-2xl font-normal">Sorry!!</p>
                        <p class="font-sans text-sm font-thin">Payment Failed!!</p>
                    </div>
                    <!-- 3. -->
                    <div
                        class="flex flex-row items-center justify-between h-24 mt-3 bg-white border-b-4 border-dashed rounded-t-lg rounded-b-lg">
                        <div class="flex flex-col ml-8">
                            <p class="text-sm font-light">Tracking ID</p>
                            <p class="text-lg font-medium">{{ payment.tracking_id }}</p>
                        </div>
                        <button class="mr-8 hover:text-gray-400" @click.prevent="printme">
                            <svg version="1.1" class="text-gray-700 fill-current" id="Layer_1" width="30" height="30"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                y="0px" viewBox="0 0 300 300" style="enable-background:new 0 0 300 300;"
                                xml:space="preserve">

                                <path class="st0" d="M257.5,61.4h-21.2V15.1c0-4.5-3.6-8.1-8.1-8.1H73.8c-4.5,0-8.1,3.6-8.1,8.1v46.2H44.4
                                        c-22,0.1-39.8,17.9-39.8,40v80.3c0,22,17.9,39.8,39.8,39.8h21.3v70.3c0,4.5,3.6,8.1,8.1,8.1h154.3c4.5,0,8.1-3.6,8.1-8.1v-70.3h21.2
                                        c22,0,39.9-17.9,39.9-39.8v-80.3C297.4,79.3,279.6,61.4,257.5,61.4z M81.9,23.3H220v38.1H81.9V23.3z M220,283.6H81.9v-90.1H220
                                        V283.6z M281.2,181.6c0,13-10.6,23.6-23.6,23.6h-21.2v-11.6h10c4.5,0,8.1-3.6,8.1-8.1s-3.6-8.1-8.1-8.1H55.7c-4.5,0-8.1,3.6-8.1,8.1
                                        c0,4.5,3.6,8.1,8.1,8.1h10v11.6H44.4c-13,0-23.6-10.6-23.6-23.6v-80.3c0-13,10.6-23.6,23.6-23.6h213.1c13,0,23.6,10.6,23.6,23.6
                                        L281.2,181.6L281.2,181.6z" />
                                <path class="st0" d="M106.4,265.8h89.3c4.5,0,8.1-3.6,8.1-8.1s-3.6-8.1-8.1-8.1h-89.3c-4.5,0-8.1,3.6-8.1,8.1
                                        C98.2,262.1,101.9,265.8,106.4,265.8z" />
                                <path class="st0" d="M106.4,230.5h89.3c4.5,0,8.1-3.6,8.1-8.1s-3.6-8.1-8.1-8.1h-89.3c-4.5,0-8.1,3.6-8.1,8.1
                                        C98.2,226.9,101.9,230.5,106.4,230.5z" />
                                <circle class="st0" cx="254.4" cy="104.3" r="8.1" />
                                <circle class="st0" cx="254.4" cy="132.4" r="8.1" />
                            </svg>
                        </button>
                    </div>
                    <!-- 4. -->
                    <div class="h-auto py-4 bg-white border-gray-200 rounded-t-lg rounded-b-lg">
                        <div class="flex justify-start py-2 pl-2 ml-0 md:ml-8">
                            <div class="grid grid-cols-2 gap-1 mx-1 md:gap-2 md:mx-4 lg:ml-8">
                                <p class="py-1">Name</p>
                                <p class="py-1">: {{ form.name }}</p>
                                <p class="py-1">Email ID</p>
                                <p class="py-1">: {{ form.email }}</p>
                                <p class="py-1">Bank Ref No.</p>
                                <p class="py-1">: {{ payment.bank_ref_no }}</p>
                                <p class="py-1">Amount:</p>
                                <p class="py-1">: {{ payment.amount }}</p>
                                <p class="pt-1">Order No.</p>
                                <p class="py-1">: {{ payment.order_id }}</p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </template>



    </div>
</template>

<script>

export default {
    name: "PaymentHandler",




    data: function () {
        return {

            form: '',
            payment: '',
            estimate: '',


        }
    },

    mounted() {
        axios.get('/api/auth/showPaymentHandlerHDFC/' + this.$route.params.id)
            .then(response => {
                this.form = response.data.form;
                this.payment = response.data.payment;
                this.estimate = response.data.estimate;

            })
            .catch(error => {
                console.log(error.response)
            });

    },
    methods: {
        printme: function () {

window.print();
}
    }

}
</script>
<style scoped></style>


