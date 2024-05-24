<template>
    <div class="h-screen">
        <div class="mx-auto h-full flex justify-center items-center ">
            <div class="w-96 pt-2 bg-blue-900 rounded-lg shadow-xl p-6">
                        <h1 class="text-white text-3xl pt-3">PWD</h1>

                        <h1 class="text-white text-3xl pt-6">Login</h1>
                        <h2 class="text-blue-300">Enter your credentials below</h2>


                    <form @submit.prevent="authenticate" class="pt-8">

                        <div class="relative">
                            <label for="email" class="uppercase text-blue-500 text-xs font-bold absolute pl-3 pt-2">Email:</label>
                        <div>
                            <input id="email" type="email" v-model="form.email" class="pt-8 w-full rounded p-3 bg-blue-800 text-gray-100 outline-none focus:bg-blue-700" placeholder="Email Address" autofocus>
                        </div>
                       </div>

                        <div class="relative pt-3">
                            <label for="password" class="uppercase text-blue-500 text-xs font-bold absolute pl-3 pt-2">Password:</label>
                              <div class="col-md-6">
                            <input type="password" v-model="form.password" class="pt-8 w-full rounded p-3 bg-blue-800 text-gray-100 outline-none focus:bg-blue-700" placeholder="Password" autofocus>
                        </div>
                        </div>

                        <div class="pt-8">
                            <input type="submit" value="Login" class="w-full bg-gray-400 py-2 px-3 text-center uppercase rounded text-blue-800 font-bold">
                        </div>
                        <div class="form-group row" v-if="authError">
                            <p class="error">
                                {{ authError }}
                            </p>
                        </div>

                        <div class="flex justify-between pt-8 text-white text-sm font-bold">
                <a class="hover:text-blue-200" href="#">
                    Forgot Your Password?
                </a>
                <router-link to="/registerr" a class="hover:text-blue-200" href="#">
                    Register
                </router-link>
            </div>
                    </form>
                   </div>
                </div>
    </div>
</template>

<script>
    import {login} from '../helpers/auth';

    export default {
        name: "Login",
        data() {
            return {
                form: {
                    email: '',
                    password: ''
                },
                error: null
            };
        },
        methods: {
            authenticate() {
                this.$store.dispatch('login');

                login(this.$data.form)
                    .then((res) => {
                        this.$store.commit("loginSuccess", res);
                        this.$router.push({path: '/home'});

                    })
                    .catch((error) => {
                        this.$store.commit("loginFailed", {error});
                    });
            }
        },
        computed: {
            authError() {
                return this.$store.getters.authError;
            }
        }
    }
</script>

<style scoped>
.error {
    text-align: center;
    color: red;
}
</style>

