<template>

    <div class="min-h-screen">
        <div v-if="loading">
            <PulseLoader class="h-full  object-center " />
        </div>

        <div v-else>
            <!-- <div v-if="payments.length === 0" >
                <p>No Estimate to be approved yet<router-link to="/form">Get Started</router-link></p>
            </div>  -->

            <div class="flex flex-col flex-1 items-end ">               
                <SearchBarForm /> 
            </div>

            <div class="mt-3 py-3 px-2 mx-3 rounded-t-lg w-full bg-tableheader text-white">  
                <p>Total:</p>
                <!-- <div class="flex flex-row justify-between">
                    <div class="w-1/5">Memo</div>
                    <div >Amount</div>
                    <div>Payment_ref_id</div>
                    <div>Area</div>
                    <div class="pr-3">Payment</div>                
                </div>   -->
            </div>
                    
                      
            <div v-for="payment in payments.data" :key="payment.id">
                <template v-if="payment.division_id == user.division_id">
                   

                        <router-link :to="'/paymentShowUn/' + payment.form_id" class=""  >
                            <div class=" py-2 px-2 mx-3  w-full bg-white hover:bg-tablehover ">  
                                <div class="flex flex-row justify-between">
                                    <div class="text-left">Memo: {{ payment.memo }}</div>
                                   <div class="text-left">name: {{ payment.name }}</div>
                                </div>
                            </div>           
                        </router-link>

                </template>
            </div>       

            <div class="my-3 mx-3">   
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
    name: "PaymentPendingList",

            components: {
            SearchBarForm,
            PulseLoader,
            UserCircle,
            pagination: Pagination,
             },

    data: function(){
        return{
            offset: 3,
            pagination: {},
            aStatus: true,
            loading: true,
            payments: null,
            user: this.$store.getters.currentUser,
            laravelData: null,
        }


    },


    created: function() {
        this.fetchUsers();
    },

        methods: {
        fetchUsers: function() {
            let current_page = this.pagination.current_page;
            let pageNum = current_page ? current_page : 1;

            axios.get('/api/auth/paymentPendingList?page=' + pageNum)
            .then(response => {
                this.pagination = response.data.payments;                
                this.payments = response.data.payments;
                this.loading = false;
            })
            .catch(error=> {
                console.log(error)
            });
        }
    },



    
         computed: {
         approveStatus: function (st) {
             
            
            return{
                
                active: this.aStatus,
                'bg-red-200':true,
            }           
           
         }
         },
         
         


}

</script>



<style scoped>


</style>