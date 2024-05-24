<template>
<div class="h-screen">

    <div v-if="!show" @click="clear" class="bg-black opacity-50 absolute right-0 left-0 top-0 bottom-0 z-10 shadow-4" >               
    </div>

    <div class=" flex  justify-center  relative z-10">

        <div v-if="!show" class="absolute bg-blue-700  rounded-lg p-4 w-96  mr-6 mt-2 shadow z-20"><br>
            <form @submit.prevent="changePassword">
                <label class="text-white pb-5">Enter Old Password</label>
                <br>
                
                <input type="text" class="py-4 pl-2 w-full text-gray-900 border-b  focus:outline-none focus:border-blue-400 rounded-lg" v-model="user1.oldpassword" placeholder="Old Password" >
                    <br><br>
                <label class="pt-5 pb-5 text-white">Enter New Password</label>
                <br>
        
                <input type="text" class="py-4 pl-2 w-full text-gray-900 border-b  focus:outline-none focus:border-blue-400 rounded-lg" v-model="user1.newpassword" placeholder="New Password" >
                <br><br>
                <div class="flex justify-between">
                <button  class="rounded-lg bg-blue-700 border px-2 py-2 text-white hover:bg-blue-800"> Change Password</button>
                <button @click="toggle" class="rounded-lg bg-blue-700 text-blue-200  px-4 py-2  hover:underline "> Cancel</button>
                </div>
            </form>
        </div>
    </div>

    
    <div class="sm:w-5/5 lg:w-1/2  bg-white h-auto  rounded-lg shadow-lg">
        <div class="mx-4 z">
                <br>
                <span class="mt-12 text-blue-500 uppercase">User Name:</span><span class="text-gray-700"> {{user.name}}</span>
                <br><br>
                <span class="text-blue-500 uppercase">Email: </span><span class="text-gray-700"> {{user.email}}</span>

                <br><br>

                <span class="text-blue-500 uppercase">Phone: </span><span class="text-gray-700"> {{user.phone}}</span>

                <br><br>
                            
                <button @click="toggle" class="mb-6 rounded-lg bg-blue-400 border px-2 py-2 text-white"> Change Password</button>
        </div>
    </div>

</div>
</template>

<script>
export default{
    name:"Profile",

    data(){
        return{

            user1:{
                'newpassword': '',
                'oldpassword': '',
                'id': this.$store.getters.currentUser.id,
            },

            user: this.$store.getters.currentUser,
             show: 'true',
             errors:{},



        }
    },


    methods: {

        toggle(){

            this.show = !this.show

        },

        clear: function(){

        this.show = true

            },

            changePassword: function(){
                axios.patch('/api/auth/updatePassword',this.user1)
                .then(response =>{

                        this.$router.push('/');
                })
                .catch(errors=>{
                    this.errors=errors.response.data.errors;

                });
            }
    },

    // mounted(){

    //     axios.get(/api/auth/user)
    // },
}
</script>

<style scoped>
</style>