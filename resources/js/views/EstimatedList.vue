<template>

    <div>
        <div v-if="loading">
            <PulseLoader class="h-full  object-center " />
        </div>

        <div v-else>
            <div v-if="estimates.length === 0">
                <p>NO Estimate to be approved yet</p>
            </div>

                    <div class="flex flex-col flex-1 items-end ">               
                        <SearchBarForm /> 
                    </div>
                    
                      
            <div v-for="estimate in estimates" :key="estimate.id">

                <router-link :to="'/estimateForm/' + estimate.id" class="flex items-center
                border-b border-gray-400 p-4 hover:gray-300 bg-red-500:(form.status === 0)"  >
                <!-- <UserCircle :name="form.name" />  -->
                <div class="pl-3">
                   

               <div class="flex flex-wrap">
                <p class="w-2/4 pt-2"><span class="pt-2 text-gray-600 font-bold  text-sm">Memo No:</span>
                <span class="pl-2 text-blue-400">{{ estimate.form_memo }}</span>
                </p>
                <p class="w-2/4 pt-2"><span class="pt-2 text-gray-600 font-bold  text-sm">Length:</span>
                <span class="pl-2 text-blue-400">{{ estimate.length }}</span>
                </p>
                <p class="w-2/4 pt-2"><span class="pt-2 text-gray-600 font-bold  text-sm">Breadth:</span>
                <span class="pl-2 text-blue-400">{{ estimate.breadth }}</span>
                </p>
                <template v-if="estimate.status === 0">
                    <p class="w-2/4 pt-2"><span class="pt-2 text-gray-600 font-bold  text-sm">Estimate Status:</span>
                    <span class="pl-2 text-blue-400">Pending for approval</span>
                    </p>
                </template>  
                <template v-else >
                     <p class="w-2/4 pt-2"><span class="pt-2 text-gray-600 font-bold  text-sm">Estimate Status:</span>
                     <span class="pl-2 text-blue-400">Approved</span>
                     </p>
                </template> 
                </div>
                </div>
                </router-link>
             </div>       
        </div>
    </div>
    
</template>


<script>

 import SearchBarForm from '../components/SearchBarForm';
 import PulseLoader from '../components/PulseLoader';
 import UserCircle from '../components/UserCircle';
  
export default {
    name: "EstimatedList",

             components: {
           SearchBarForm,
           PulseLoader,
           UserCircle,
             },

    data: function(){
        return{
            aStatus: true,
            loading: true,
            estimates: null
        }


    },


    mounted(){
        axios.get('/api/auth/estimatedlist')
        .then(response => {
            
            console.log("entirna");

            this.estimates = response.data.estimates;
            this.loading = false;

        })
        .catch(error => {
            this.loading = false;
            alert('Unable to load forms.');

        });
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