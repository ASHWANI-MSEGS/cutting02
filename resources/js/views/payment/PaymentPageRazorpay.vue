<template>
  <div class=" md:mt-6 md:ml-6 flex flex-col  sm:w-full  lg:w-1/2  ">
    
    <!-- <input v-model="price" type="text">
    <button @click="makePayment">GO</button> -->


                <div class="flex items-center flex-row justify-between mt-3 bg-white h-24 rounded-t-lg rounded-b-lg border-b-4 border-dashed">
                    <div class="flex flex-col ml-8">
                        <p class="text-sm font-light">Memo No</p>
                        <p class="text-lg font-medium">{{ form.memo }}</p>
                    </div>
                    <button class="text-white  rounded-lg px-4 py-1 mr-1 hover:bg-gray-300" @click.prevent="printme">
                        <svg height="30pt" viewBox="-27 -67 859.31017 859" width="30pt" xmlns="http://www.w3.org/2000/svg"><path d="m738.554688 628.5h-107.414063c-7.421875 0-13.429687-6.003906-13.429687-13.425781s6.007812-13.425781 13.429687-13.425781h107.414063c22.207031 0 40.277343-18.066407 40.277343-40.28125v-322.242188c0-22.207031-18.066406-40.277344-40.277343-40.277344h-671.335938c-22.210938 0-40.28125 18.070313-40.28125 40.277344v322.242188c0 22.214843 18.066406 40.28125 40.28125 40.28125h107.410156c7.417969 0 13.429688 6.003906 13.429688 13.425781s-6.011719 13.425781-13.429688 13.425781h-107.410156c-37.019531 0-67.1367188-30.117188-67.1367188-67.132812v-322.242188c0-37.007812 30.1171878-67.132812 67.1367188-67.132812h671.335938c37.015624 0 67.132812 30.125 67.132812 67.132812v322.242188c0 37.015624-30.117188 67.132812-67.132812 67.132812zm0 0"/><path d="m644.566406 198.847656h-483.363281v-201.402344h483.363281zm-456.507812-26.855468h429.652344v-147.691407h-429.652344zm0 0"/><path d="m644.566406 722.488281h-483.363281v-322.242187h483.363281zm-456.507812-26.851562h429.652344v-268.535157h-429.652344zm0 0"/><path d="m671.417969 427.101562h-537.066407c-7.417968 0-13.429687-6.007812-13.429687-13.425781 0-7.421875 6.011719-13.429687 13.429687-13.429687h537.066407c7.421875 0 13.429687 6.007812 13.429687 13.429687 0 7.425781-6.007812 13.425781-13.429687 13.425781zm0 0"/><path d="m564.003906 494.234375h-322.238281c-7.417969 0-13.429687-6.007813-13.429687-13.425781 0-7.421875 6.011718-13.429688 13.429687-13.429688h322.238281c7.421875 0 13.429688 6.007813 13.429688 13.429688 0 7.417968-6.007813 13.425781-13.429688 13.425781zm0 0"/><path d="m564.003906 547.941406h-322.238281c-7.417969 0-13.429687-6-13.429687-13.425781 0-7.421875 6.011718-13.429687 13.429687-13.429687h322.238281c7.421875 0 13.429688 6.007812 13.429688 13.429687 0 7.417969-6.007813 13.425781-13.429688 13.425781zm0 0"/><path d="m564.003906 601.648438h-322.238281c-7.417969 0-13.429687-6-13.429687-13.425782 0-7.421875 6.011718-13.429687 13.429687-13.429687h322.238281c7.421875 0 13.429688 6.007812 13.429688 13.429687 0 7.417969-6.007813 13.425782-13.429688 13.425782zm0 0"/><path d="m564.003906 655.355469h-322.238281c-7.417969 0-13.429687-6.007813-13.429687-13.425781 0-7.421876 6.011718-13.429688 13.429687-13.429688h322.238281c7.421875 0 13.429688 6.007812 13.429688 13.429688 0 7.417968-6.007813 13.425781-13.429688 13.425781zm0 0"/></svg>
                    </button>
                </div>


                    <div class="bg-white h-auto rounded-t-lg   rounded-b-lg border-gray-200">

                    <div class="ml-8 py-2 pl-2  flex justify-start">

                        <div class="flex flex-col ">
                                <p class="py-1">Name</p>
                                <p class="py-1">Email ID</p>
                                <p class="py-1">Phone Number</p>
                                <p class="py-1">Address</p>
                                <p class="py-1">Length of Road </p>
                                <p class="py-1">Breadth of Road</p>
                                <p class="py-1">Tui Connection</p>
                                <p class="py-1">Road Type</p>
                                <p class="py-1">Submitted On</p>
                                <p class="py-1">Estimated On</p>
                                <p class="py-1">Amount</p>
                                <button @click="makePayment" class="px-4 py-2 mt-1 border bg-green-500 rounded text-sm font-bold text-white hover:bg-green-400" >Payment</button>

                        </div>
                        <div class="ml-4 pb-3 flex flex-col">
                                <p class="py-1" >: {{form.name}}</p>
                                <p class="py-1">: {{form.email}}</p>
                                <p class="py-1">: {{form.phone}}</p>
                                <p class="py-1">: {{form.location}}</p>
                                <p class="py-1">: {{estimate.length}}</p>
                                <p class="py-1">: {{estimate.breadth}}</p>
                                <p class="py-1">: New Connection</p>
                                <p class="py-1">: Rigid Pavement</p>
                                <p class="py-1">: {{form.created_at}}</p>
                                <p class="py-1">: {{estimate.created_at}}</p>
                               
                                <p class="py-1 text-red-500">: {{estimate.total}}</p>

                        </div>
                    </div>
                </div>
    


  </div>
</template>

<script>
// import axios from 'axios';

export default {
  name: 'PaymentPage',
  components: {
    
  },
 mounted() {
            axios.get('/api/auth/form/listPayment/' + this.$route.params.id)
                .then(response => {
                    this.form = response.data.form;

           
           axios.get('/api/auth/estimateFindByForm/' + this.form.id)
                .then(response=>{

                    this.estimate = response.data.estimate;
                    this.price = this.estimate.total;
                    
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

  data(){
    return{
      estimate: '',
      form:'',
      price: '',

      rzpOptions: {

      key: "rzp_test_ZZBegX2dkTiAYZ",
      // key_secret: "DM8cQGRmVqKQQtl2jktnNPik",
        amount: 0, /// The amount is shown in currency subunits. Actual amount is ₹599.
        name: "Formec Media",
        currency: "INR", // Optional. Same as the Order currency
        description: "Purchase Description",
       handler:  (response) =>{
          this.verifySignature(response);
        },
        prefill: {
        name: "",
        email: "",
        },
        notes: {
          user_id: 1,
          order_id: 1
        },
        theme: {
          color: "#ff7a7a"
        }

      }
    }
  },
  methods:{
    // Initializing the payment request
    makePayment:function(){
      // 1. GENERATE ORDER_ID using razorpay/order api
      // axios.post('/api/auth/payment',{
      //    amount:this.price
      //  })
      //  .then((res)=>{ 

         this.rzpOptions.amount = this.price * 100;
        let rzp = new Razorpay(this.rzpOptions);
       rzp.open();

      //  })
      //  .catch((err)=>{console.log("ERR",err)});

    },

     submit(response) {
      
        axios.post("/api/auth/save-payment", {
          payment_id: response.razorpay_payment_id,
          order_id: this.rzpOptions.notes.order_id,
          amount: this.rzpOptions.amount
        })
        .then(res => {
           this.$router.push('/paymentSuccess/'+ this.$route.params.id);
          this.notifyUser(res);
        })
        .catch(err => {
          throw err;
        });
    },
    notifyUser(res) {

      this.$router.push('/');

    },

    verifySignature:function(response){

      axios.post('/api/auth/save-payment',{
        payment_id: response.razorpay_payment_id,
          order_id: this.rzpOptions.notes.order_id,
          amount: this.rzpOptions.amount,
          division_id: this.form.division_id,
          form_id: this.form.id,
          form_memo: this.estimate.form_memo,

         } )
       .then((res)=>{
         
          this.$router.push('/paymentSuccess/'+ this.form.id);
        //  console.log("PAYMENT RESPONSE",res)
         
      })
       .catch((err)=>{console.log('error')})
    },

               printme: function() {

                window.print();
            },
    
  
    },

     created() {
     var imported = document.createElement("script");
     imported.src = "https://checkout.razorpay.com/v1/checkout.js";
     document.head.appendChild(imported);
   }
}
</script>

<style scoped>
input{
  border: 1px solid rgb(0, 217, 255);
  padding:8px 40px;
  text-align: center;
}
button{
  background: rgb(0, 241, 161);
  border: none;
  padding: 8px 30px;
  margin: 16px;
}
</style>


