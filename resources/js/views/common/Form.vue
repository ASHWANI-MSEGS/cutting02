<template>
    <div class=" h-full" >
        <div class="bg-white sm:w-full md:w-2/3 lx:w-1/3 rounded-lg flex">
            <form @submit.prevent="submitForm" class="px-3 py-3"> 
                    <InputField name="name" label="Hming Pum" :errors="errors"
                    placeholder="Hming Pum" @update:field="form.name=$event" />

                     <InputField name="email" label="Contact Email" :errors="errors" 
                     placeholder="Contact Email" @update:field="form.email=$event" />

                     <InputField name="phone" label="Phone Number"  :errors="errors"
                     placeholder="Phone" @update:field="form.phone=$event" />

                     
                     <InputField name="length" label="Kawng (Road) tan tur sei zawng (metre-in)" :errors="errors"
                      placeholder="Enter in metre" @update:field="form.length=$event" />

                      <InputField name="location" label="Veng Hming" :errors="errors"
                    placeholder="Veng Hming" @update:field="form.location=$event" />

                    <div  class="relative pb-2 mb-3 border rounded-lg" >
                        <label for="form.localcouncil_id" class="text-textblueform font-light px-4 py-2  text-sm font-normal absolute">In Local Council thlang rawh le: </label> 
                        <select v-model="form.localcouncil_name" class="appearance-none bg-white px-3 mt-1 ml-1 pt-6 w-full rounded-lg text-textgrayform focus:outline-none" :errors="errors">
                            <option value="" class="inline-block text-textgrayform " disabled selected>In Local Council awmna thlang rawh le</option>
                            <option v-for="localcouncil in localcouncils" :key="localcouncil.id" class="inline-block text-textgrayform mr-2 ml-2" >{{localcouncil.name}}</option>
                        </select>
                    </div>

                    <label for="water_id" class="px-4 font-normal  text-textblueform  text-sm ">Tui Connection:</label>
                    <div class="px-4 py-1 mb-3">     
                            <input id="water_id1" class="text-sm text-textgrayform focus:text-black" type="radio" name="water_id" value="0" v-model="form.water_id" :errors="errors"> Connection Thar (New)
                            <input id="water_id12" class="text-sm text-textgrayform focus:text-black" type="radio" name="water_id" value="1" v-model="form.water_id" :errors="errors"> Connection Hlui (Old)
                    </div>
                         <!-- <label for="water_id" class="text-blue-500 pt-2 uppercase text-xs font-bold pr-4">Select Local Council:</label> 
                        <select v-for="localcouncil in localcouncils" :key="localcouncil.id">
                                    <option @click="DIV(localcouncil.division_id); LOC(localcouncil.id);"  value="localcouncil.id" >{{localcouncil.name}}</option>
                                    
                        </select> -->
                   

                    <label for="road_type" class="px-4  font-normal   text-textblueform  text-sm ">Type of Road: </label> 
                    <div class="px-4 py-1"> 
                        <input id="road_type1" class="text-sm text-textgrayform focus:text-black" type="radio" name="road_type" value="0" v-model="form.road_type" :errors="errors"> Flexible Pavement (Alkatra luan):
                        <input id="road_type2" class="text-sm text-textgrayform focus:text-black" type="radio" name="road_type" value="1" v-model="form.road_type" :errors="errors" > RIgid Pavement (Concrete-a siam)<br>
                    </div>
                       
                    
                    <div class="flex ss:justify-left md:justify-center  ss:mt-6 md:my-6 pt-7 ">
                         <!-- <button class="px-4 py-2 rounded text-red-700 border mr-5 hover:border-red-700">Cancel</button> -->
                         <button @click="US()" class="inline-block px-5 bg-buttonpink hover:bg-red-500 text-white  py-1 rounded-lg  focus:outline-none">Submit</button>
                     </div>
 
                    


            </form>
        </div>
    </div>
</template>

<script>

    import InputField from '../../components/InputField';
    export default {
       name: "Form",

       components: {

           InputField 
       },

data: function(){
    return{
                form:{
                    
            'user_id': 0,     
            'name':'',
            'email':'',
            'phone':'',
            'length':'',
            'location':'',
            'water_id':'',
            'road_type':'',
            'localcouncil_name':'',
            'division_id':'',
                     },

                  errors: {},    
                  
                  localcouncils:{
                      'id' :'',
                      'name': '',
                      'division_id': '',
                  },

                  formsuccess: '',


          }



    },
    mounted() {
            axios.get('/api/auth/localcouncil')
                .then(response => {
                    
                    this.localcouncils = response.data.localcouncils;

                    this.loading = false;

                    console.log("Heiha")
                })
                .catch(error => {
                    this.loading = false;
                   

                    if (error.response.status === 404) {
                       this.$router.push('/localcouncil');
                    }
                });
        },




methods: {

    submitForm: function(){

        axios.post('/api/auth/form',this.form)
        .then(response=>{
           
            //  this.$router.push(response.data.links.self);

            this.formsuccess=response.data.form;
            this.$router.push('/formSubmitSuccess/'+ this.formsuccess.id);

             



            })
              
        .catch(errors=>{
             
        
              this.errors = errors.response.data.errors;
            
           
         });

      },   


     US: function(){
         if(this.$store.getters.currentUser)
      this.form.user_id = this.$store.getters.currentUser.id
    },
    
    DIV: function(event){
        this.form.division_id=event

    },

        LOC: function(event){
        this.form.localcouncil_id=event

    },



    



    


}
    }


</script>

<style scoped>

</style>
