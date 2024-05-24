<template>
    <div  class="min-h-screen" >
        <div class="pb-16 ">
          <div class="grid h-auto grid-cols-1 gap-4 mx-8 my-8 rounded-lg md:grid-cols-2">

            <div class="bg-white rounded-lg">
              <div class="my-8 ml-8" >
                <p class="my-2 text-2xl">Features</p>
                <p class="text-gray-700">Security Deposit wave off Functionality:
                    <template v-if="security_deposit.status==0"><span class="text-gray-600">Deactivated</span></template>
                    <template v-else-if="security_deposit.status==1"><span class="text-buttonpink">Activated</span></template>
                </p>

                <template v-if="security_deposit.status==0">
                    <button @click="securityUpdate" class="px-2 py-2 mt-4 text-white rounded-lg bg-buttonpink hover:bg-red-500 focus:outline-none">Turn On</button>
                </template>

                <template v-if="security_deposit.status==1">
                    <button @click="securityUpdate" class="px-2 py-2 mt-4 text-white bg-gray-500 rounded-lg hover:bg-gray-400 focus:outline-none">Turn Off</button>
                </template>
              </div>
            </div>

          </div>
        </div>

    </div>
</template>

<script>
    export default {

        name: "FeatureShow",

        data() {
            return {

                 feature:{},
                 security_deposit:{
                     id:'',
                     feature:'',
                     status:'',
                 },

                     };
                 },

        mounted() {

            axios.get('/api/featureShow/' + this.$store.getters.currentUser.division_id, {
                headers: {
                    "Authorization": `Bearer ${this.$store.getters.currentUser.token}`
                }
            })
                .then(response => {
                    this.feature = response.data.feature;
                    this.security_deposit = response.data.security_deposit;
                    // console.log(security_deposit);
                    this.loading = false;
                })
                .catch(error => {

                    this.loading = false;

                    if (error.response.status === 404) {
                        this.$router.push('/forms');
                    }
                });
        },

        methods: {

                securityUpdate: function(){

                        axios.get('/api/securityUpdate/' + this.security_deposit.id, {
                        headers: {
                            "Authorization": `Bearer ${this.$store.getters.currentUser.token}`
                        }
                    })
                        .then(response => {
                            this.feature = response.data.feature;
                            this.security_deposit = response.data.security_deposit;
                            // console.log(response.data);
                            this.loading = false;

                             this.$router.push('/feature');
                        })
                        .catch(error => {

                            this.loading = false;

                            if (error.response.status === 404) {
                                this.$router.push('/forms');
                            }
                        });
                },
        },


    }
</script>
