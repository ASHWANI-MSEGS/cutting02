<template>
    <div class="flex flex-col min-h-full mt-10" >
        <div class="w-full h-auto bg-white border-gray-200 rounded-t-lg rounded-b-lg md:w-2/3 lg:w-1/2 xl:w-1/3" >
            <div class="px-5 py-5 col-md-8 col-md-offset-2">
                <div >
                    <div class="pt-2 pr-4 text-lg font-bold text-gray-600">Add New Engineer </div>
                    <div >
                        <br>
                        <form @submit.prevent='registerUser'>


                            <div class="relative pt-2 ">
                                <label  class="absolute px-2 py-2 text-xs uppercase text-textblue">Name :</label>
                                <input @input="updateName()" type="text" class="w-full px-2 pt-6 pb-1 text-gray-900 border rounded-lg focus:outline-none " placeholder="Engineer Hming" v-model="engineer.name"  >

                            </div>
                            <p class="pb-4 text-sm text-red-600" v-text="errorName()">Error Here</p>

                            <br>

                            <div class="relative pt-2 ">
                                <label  class="absolute px-2 py-2 text-xs uppercase text-textblue">Post:</label>
                                <input  @input="updatePost()" type="text" class="w-full px-2 pt-6 pb-1 text-gray-900 border rounded-lg focus:outline-none " placeholder="Post" v-model="engineer.post"  >
                            </div>
                            <p class="pb-4 text-sm text-red-600" v-text="errorPost()">Error Here</p>
                            <br>

                            <div class="relative pt-2 ">
                                <label  class="absolute px-2 py-2 text-xs uppercase text-textblue">Phone Number:</label>
                                <input @input="updatePhone()" type="text" class="w-full px-2 pt-6 pb-1 text-gray-900 border rounded-lg focus:outline-none " placeholder="Mobile Phone" v-model="engineer.phone"  >
                            </div>
                            <p class="pb-4 text-sm text-red-600" v-text="errorPhone()">Error Here</p>
                            <br>


                            <div class="relative pt-2 ">
                                <label  class="absolute px-2 py-2 text-xs uppercase text-textblue">Email:</label>
                                <input @input="updateEmail()" type="text" class="w-full px-2 pt-6 pb-1 text-gray-900 border rounded-lg focus:outline-none " placeholder="Email" v-model="engineer.email"  >
                            </div>
                            <p class="pb-4 text-sm text-red-600" v-text="errorEmail()">Error Here</p>
                            <br>
                            <label  class="pt-2 pr-4 text-lg font-bold text-gray-600">Division:</label>
                                <br>
                                <template v-if="engineer.division_id === 1"> Road South Division</template>
                            <template v-if="engineer.division_id === 2"> Road North Division</template>
                            <template v-if="engineer.division_id == 4"> Champhai Road</template>
                            <template v-if="engineer.division_id === 5"> Lunglei Road</template>
                            <template v-if="engineer.division_id === 6"> Saitual Road</template>
                            <template v-if="engineer.division_id === 7"> Mamit Road</template>
                            <template v-if="engineer.division_id === 8"> Siaha Road</template>
                            <template v-if="engineer.division_id === 9"> Khawzawl Road</template>
                            <template v-if="engineer.division_id === 10"> Kolasib Road</template>
                            <template v-if="engineer.division_id === 11"> Lawngtlai Road</template>
                            <template v-if="engineer.division_id === 12"> Serchhip Road</template>
                            <template v-if="engineer.division_id === 13">Lunglei Road Div-II, Hnahthial Road</template>
                            <template v-if="engineer.division_id === 14">Hmuifang Division Road</template>
                            <template v-if="engineer.division_id === 15">National Highway Div-I Road</template>
                            <template v-if="engineer.division_id === 16">National Highway Div-III Road</template>


                            <!-- <div class="relative pb-2 pr-1 mb-3 border rounded-lg">
    <label for="engineer.sub_div" class="absolute px-4 py-2 text-sm font-light text-textblueform">Division</label>
    <select v-model="engineer.division_id" @change="updateDivision_id()" class="w-full px-2 pt-6 mt-1 ml-1 bg-white rounded-lg appearance-none text-textgrayform focus:outline-none" :errors="errors">
        <option value="" class="inline-block text-textgrayform" disabled selected>Select Division</option>
        <option value="1">Aizawl Road South</option>
        <option value="2">Aizawl Road North</option>
        <option value="4">Champhai Road</option>
        <option value="5">Lunglei Road</option>
        <option value="6">Saitual Road</option>
        <option value="7">Mamit Road</option>
        <option value="8">Siaha Road</option>
        <option value="9">Khawzawl Road</option>
        <option value="10">Kolasib Road</option>
        <option value="11">Lawngtlai Road</option>
        <option value="12">Serchhip Road</option>
        <option value="13">Hnahthial Road</option>
    </select>
</div> -->
<p class="pb-4 text-sm text-red-600" v-text="errorDivision_id()">Error Here</p>


<!-- // original code -->
                            <!-- <div >
                                <label  class="pt-2 pr-4 text-lg font-bold text-gray-600">Division:</label>
                                <br>
                                <label  @input="updateDivision_id()" class="cursor-pointer hover:text-gray-600"><input class="hover:text=blue=400  pr-4" type="radio" value="1" v-model="engineer.division_id" > Aizawl Road South</label>
                                <label @input="updateDivision_id()" class="cursor-pointer hover:text-gray-600"><input  class="hover:text-blue-400 " type="radio" value="2"  v-model="engineer.division_id" > Aizawl Road North</label><br>

                                <label @input="updateDivision_id()" class="cursor-pointer hover:text-gray-600"><input  class="hover:text-blue-400 " type="radio" value="4"  v-model="engineer.division_id" > Champhai Road</label><br>
                                <label @input="updateDivision_id()" class="cursor-pointer hover:text-gray-600"><input  class="hover:text-blue-400 " type="radio" value="5"  v-model="engineer.division_id" > Lunglei Road </label><br>
                                <label @input="updateDivision_id()" class="cursor-pointer hover:text-gray-600"><input  class="hover:text-blue-400 " type="radio" value="6"  v-model="engineer.division_id" > Saitual Road </label><br>
                                <label @input="updateDivision_id()" class="cursor-pointer hover:text-gray-600"><input  class="hover:text-blue-400 " type="radio" value="7"  v-model="engineer.division_id" > Mamit Road </label><br>
                                <label @input="updateDivision_id()" class="cursor-pointer hover:text-gray-600"><input  class="hover:text-blue-400 " type="radio" value="8"  v-model="engineer.division_id" > Siaha Road </label><br>
                                <label @input="updateDivision_id()" class="cursor-pointer hover:text-gray-600"><input  class="hover:text-blue-400 " type="radio" value="9"  v-model="engineer.division_id" > Khawzawl Road </label><br>
                                <label @input="updateDivision_id()" class="cursor-pointer hover:text-gray-600"><input  class="hover:text-blue-400 " type="radio" value="10"  v-model="engineer.division_id" > Kolasib Road </label><br>
                                <label @input="updateDivision_id()" class="cursor-pointer hover:text-gray-600"><input  class="hover:text-blue-400 " type="radio" value="11"  v-model="engineer.division_id" > Lawngtlai Road </label><br>
                                <label @input="updateDivision_id()" class="cursor-pointer hover:text-gray-600"><input  class="hover:text-blue-400 " type="radio" value="12"  v-model="engineer.division_id" > Serchhip Road </label><br>
                                <label @input="updateDivision_id()" class="cursor-pointer hover:text-gray-600"><input  class="hover:text-blue-400 " type="radio" value="13"  v-model="engineer.division_id" > Hnahthial Road </label><br>
                            </div> -->

                            <div >
                                <label  class="pt-2 pr-4 text-lg font-bold text-gray-600">Sub-Division:</label>
                                <div  class="relative pb-2 pr-1 mb-3 border rounded-lg" >
                                    <label for="engineer.sub_div" class="absolute px-4 py-2 text-sm font-light text-textblueform">Sub Division </label>
                                    <select v-model="engineer.sub_div" class="w-full px-2 pt-6 mt-1 ml-1 bg-white rounded-lg appearance-none text-textgrayform focus:outline-none" :errors="errors">
                                        <option value="" class="inline-block text-textgrayform " disabled selected>Select Sub Division</option>
                                        <option value="1">Sub Division - I</option>
                                        <option value="2">Sub Division - II</option>
                                        <option value="3">Sub Division - III</option>
                                        <!-- <option v-for="localcouncil in localcouncils" :key="localcouncil.id" class="inline-block ml-2 mr-2 text-textgrayform" >{{localcouncil.name}}</option> -->
                                    </select>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <button type="submit" class="px-3 py-1 text-white bg-green-400 border rounded-lg hover:bg-green-300">
                                        Submit
                                    </button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    name: "EngineerAdd",
    data(){
        return {
            engineer:{
                name:"",
                post:'',
                phone:'',
                email:'',
                division_id: this.$store.getters.currentUser.division_id,
                sub_div:"",
                added_by: this.$store.getters.currentUser.id,

            },
            errors: {},
            error: null,

        }
    },
    mounted(){

    },
    methods:{
        registerUser(){


            axios.post('/api/engineerAdd',this.engineer, {
                headers: {
                    "Authorization": `Bearer ${this.$store.getters.currentUser.token}`
                }
            })
            .then(response=>{

                 this.$router.push({path: '/engineerList'});

            })
            .catch(errors=>{

              this.errors = errors.response.data.errors;

         });


        },


        errorName(){
            if (this.hasErrorName){
                // return this.errors['localcouncil_name'][0];
                return "Please Enter Engineer's name";
            }
        },

        errorPost(){
            if (this.hasErrorPost){
                // return this.errors['localcouncil_name'][0];
                return "Enter Post";
            }
        },

        errorEmail(){
            if (this.hasErrorEmail){
                // return this.errors['localcouncil_name'][0];
                return "Re Enter Email";
            }
        },

        errorPhone(){
            if (this.hasErrorPhone){
                // return this.errors['localcouncil_name'][0];
                return "Check Phone number( must be 10 digits)";
            }
        },

        errorDivision_id(){
        if (this.hasErrorDivision_id){
            // return this.errors['localcouncil_name'][0];
            return "Select division";
        }
        },


    updateName:function(){
        this.errors['name'] = null;
    },

    updatePost:function(){
        this.errors['post'] = null;
    },

    updatePhone:function(){
        this.errors['phone'] = null;
    },

    updateDivision_id:function(){
            this.errors['division_id'] = null;
    },

    updateEmail:function(){
        this.errors['email'] = null;
    },

    },


    computed: {

        hasErrorName(){
        return this.errors && this.errors['  '] && this.errors['name'].length > 0;
        },

        hasErrorPost(){
        return this.errors && this.errors['post'] && this.errors['post'].length > 0;
        },

        hasErrorEmail(){
        return this.errors && this.errors['email'] && this.errors['email'].length > 0;
        },

        hasErrorPhone(){
        return this.errors && this.errors['phone'] && this.errors['phone'].length > 0;
        },

        hasErrorDivision_id(){
        return this.errors && this.errors['division_id'] && this.errors['division_id'].length > 0;
        },

    }
}
</script>
