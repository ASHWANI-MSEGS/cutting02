<template>

    <div>
        <div v-if="loading">
            <PulseLoader  />
        </div>

        <div v-else>
            <div v-if="forms.length === 0">
                <p>NO Unapproved Form List<router-link to="/form">Get Started</router-link></p>
            </div>

            <div v-for="form in forms" :key="form.id">
                <template v-if="form.send === 0 ">
                    <template v-if="user.division_id === form.division_id ">
                <router-link :to="'/formListUnCO/' + form.id" class="flex items-center
                border-b border-gray-400 p-4 hover:gray-100">
                 <UserCircle :name="form.name" /> 
                <div class="pl-3">
          <div class="flex flex-wrap">
                <p class="w-2/4 pt-2"><span class="pt-2 text-gray-600 font-bold  text-sm">Memo No:</span>
                <span class="pl-2 text-blue-400">{{ form.memo }}</span>
                </p>

              
                <p class="w-2/4 pt-2"><span class="pt-2 text-gray-600 font-bold  text-sm">Aplicant Name:</span>
                <span class="pl-2 text-blue-400">{{ form.name }}</span>
                </p>

              
                <p class="w-2/4 pt-2"><span class="pt-2 text-gray-600 font-bold  text-sm">Local Council:</span>
                <span class="pl-2 text-blue-400">{{ form.localcouncil_name }}</span>
                </p>

                  <template v-if="form.status === 0">
                         <p class="w-2/4 pt-2"><span class="pt-2 text-gray-600 font-bold  text-sm">Status:</span><span class="pl-2 text-red-400">Unapproved</span>
                         </p>
                    </template>  
                    <template v-else >
                        <p class="w-2/4 pt-2"><span class="pt-2 text-gray-600 font-bold  text-sm">Status:</span><span class="pl-2 text-green-400">Approved</span>
                         </p>  
                         </template> 

                    </div>
                </div>

                </router-link>
                </template>
                </template>
             </div>       
        </div>
    </div>
    
</template>


<script>

 import PulseLoader from './PulseLoader';
 import UserCircle from './UserCircle';
  
export default {
    name: "FormListUnapprovedCO",

             components: {
                     PulseLoader,
                     UserCircle,
             },

    mounted(){
        axios.get('/api/auth/form/listUnapproved')
        .then(response => {
            
            console.log("entirna");

            this.forms = response.data.forms;
            this.loading = false;

        })
        .catch(error => {
            this.loading = false;
            alert('Unable to load forms.');

        });
    },

     components: {
         UserCircle
     },

    data: function(){
        return{
            loading: true,
            forms: null,
            user: this.$store.getters.currentUser,
        }


    },






}

</script>



<style scoped>

</style>