<template>

    <div>
        <div v-if="loading">
            <PulseLoader class="object-center h-screen " />
        </div>

        <div v-else>
            <div v-if="forms.length === 0">
                <p>NO Forms yet.<router-link to="/form">Get Started</router-link></p>
            </div>

                    <div class="flex flex-col items-end flex-1 ">
                        <SearchBarForm />
                    </div>


            <div v-for="form in forms" :key="form.id">

                <router-link :to="'/formList/' + form.id" class="flex items-center
                border-b border-gray-400 p-4 hover:gray-300 bg-red-500:(form.status === 0)"  >
                <UserCircle :name="form.name" />
                <div class="pl-3">

          <div class="flex flex-wrap">
                <p class="w-2/4 pt-2"><span class="pt-2 text-sm font-bold text-gray-600">Memo No:</span>
                <span class="pl-2 text-blue-400">{{ form.memo }}</span>
                </p>


                <p class="w-2/4 pt-2"><span class="pt-2 text-sm font-bold text-gray-600">Aplicant Name:</span>
                <span class="pl-2 text-blue-400">{{ form.name }}</span>
                </p>


                <p class="w-2/4 pt-2"><span class="pt-2 text-sm font-bold text-gray-600">Local Council:</span>
                <span class="pl-2 text-blue-400">{{ form.localcouncil_name }}</span>
                </p>

                  <template v-if="form.status === 0">
                         <p class="w-2/4 pt-2"><span class="pt-2 text-sm font-bold text-gray-600">Form Status:</span><span class="pl-2 text-red-400">Pending for Verification by EE</span>
                         </p>
                    </template>
                    <template v-else >
                        <p class="w-2/4 pt-2"><span class="pt-2 text-sm font-bold text-gray-600">Form Status:</span><span class="pl-2 text-green-400">Verified by EE</span>
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

 import SearchBarForm from './SearchBarForm';
 import PulseLoader from './PulseLoader';
 import UserCircle from './UserCircle';

export default {
    name: "FormList",

             components: {
           SearchBarForm,
           PulseLoader,
           UserCircle,
             },

    data: function(){
        return{
            aStatus: true,
            loading: true,
            forms: null
        }


    },


    mounted(){
        axios.get('/api/auth/form/list')
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
