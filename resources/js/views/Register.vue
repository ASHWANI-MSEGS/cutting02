<template>
    <div class="h-screen">
        <div class="mx-auto h-full flex justify-center items-center ">
            <div class="w-96 bg-blue-900 rounded-lg shadow-xl p-6"><h1 class="text-white text-3xl pt-3">PWD</h1>

                        <h1 class="text-white text-3xl pt-6">Register</h1>
                        <h2 class="text-blue-300">Register your credentials below</h2>
                
                 
                   
                        <form @submit.prevent='registerUser' class="pt-8">

                            <div class="relative">
                                <label for="name" class="uppercase text-blue-500 text-xs font-bold absolute pl-3 pt-2">Name</label>

                                <div >
                                    <input id="name" type="text" class="pt-8 w-full rounded p-3 bg-blue-800 text-gray-100 outline-none focus:bg-blue-700" v-model="register.name"   autofocus>
                                
                                </div>
                            </div>

                            <div class="relative pt-3">
                                <label for="email" class="uppercase text-blue-500 text-xs font-bold absolute pl-3 pt-2">E-Mail Address</label>

                                <div class="col-md-6" >
                                    <input id="email" type="email" class="pt-8 w-full rounded p-3 bg-blue-800 text-gray-100 outline-none focus:bg-blue-700" v-model="register.email" value=""  >

                                
                                </div>
                            </div>

                            <div class="relative pt-3"> 
                                <label for="password" class="uppercase text-blue-500 text-xs font-bold absolute pl-3 pt-2">Password</label>

                                <div class="col-md-6">
                                    <input id="password" type="password" class="pt-8 w-full rounded p-3 bg-blue-800 text-gray-100 outline-none focus:bg-blue-700"  v-model="register.password"  >
                                </div>
                            </div>

                            <div class="relative pt-3" >
                                <div  >
                                    <button type="submit" class="w-full bg-gray-400 py-2 px-3 text-center uppercase rounded text-blue-800 font-bold">
                                        Register
                                    </button>
                                </div>
                            </div>
                        </form>
                   
               
            </div>
        </div>
    </div>
</template>

<script>
export default {

    name: "Register",
    data(){
        return {
            register:{
                name:"",
                email:"",
                password:""
            },

            errors: null,
        }
    },
    methods:{
        registerUser(){
            axios.post('/api/auth/registerr',this.register)
            .then(response=>{

                 this.$router.push({path: '/'});
                console.log("/api/auth/Loggin");
            })
            .catch(error=>{
                console.log(error.response),
                this.errors=error.response.data.errors
            })
        }
    }
}
</script>