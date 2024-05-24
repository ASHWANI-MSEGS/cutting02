<template>

    <div class="min-h-screen">
        <div v-if="loading">
            <PulseLoader class="object-center h-full " />
        </div>

        <div v-else>


            <div class="flex flex-col items-end flex-1 ">
                <SearchBarForm />
            </div>

            <div class="w-full px-2 py-2 mx-1 mt-3 text-white rounded-t-lg md:mx-3 bg-tableheader">
                <p>Total: {{ grants.total }}</p>
                <!-- <div class="flex flex-row justify-between">
                    <div>Ungranted List</div>
                    <div></div>

                </div> -->
            </div>


            <div v-for="grant in grants.data" :key="grant.id">
                <template v-if="grant.division_id == user.division_id">
                    <template v-if="grant.grant_status == 0">

                        <router-link :to="'/ungrantedShow/' + grant.id" class=""  >
                            <div class="w-full px-2 py-2 mx-1 bg-white md:mx-3 hover:bg-tablehover">
                                <div class="grid grid-cols-1 gap-0 md:grid-cols-3 md:gap-1 lg:grid-cols-5 lg:gap-1 xl:grid-cols-6 xl:gap-1">
                                    <div class="text-left">Memo: {{ grant.form_memo }}</div>
                                    <div class="text-left">Status: <span class="text-yellow-400">Pending</span></div>
                                </div>
                            </div>
                            <hr>
                        </router-link>

                    </template>
                </template>
            </div>
            <div v-if="grants.total === 0" >
                <p class="px-5 py-2">No UNGRANTED list to be approved. !!!</p>
            </div>
            <div class="mx-3 my-3">
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
    name: "UngrantedList",

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
            grants: null,
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

    let division_id= this.user.division_id;

    axios.get('/api/ungrantedList/'+division_id+'?page=' + pageNum, {
                headers: {
                    "Authorization": `Bearer ${this.$store.getters.currentUser.token}`
                }
            })
            .then(response => {

                this.pagination = response.data.grants;
                this.grants = response.data.grants;
console.log(this.grants);
                // if(this.user.division_id === 1)
                // {
                //     this.pagination = response.data.southGrants;
                //     this.grants = response.data.southGrants;
                // }
                // else if (this.user.division_id === 2) {
                //         this.pagination = response.data.northGrants;
                //         this.grants = response.data.northGrants;
                //     }
                //     // Champhai
                //     else if (this.user.division_id === 4) {
                //         this.pagination = response.data.grants;
                //         this.grants = response.data.grants;
                //         console.log(this.grants);
                //     }
                //     else if (this.user.division_id === 5) {
                //         this.pagination = response.data.lungleiGrants;
                //         this.grants = response.data.lungleiGrants;
                //     }
                //     else if (this.user.division_id === 6) {
                //         this.pagination = response.data.saitualGrants;
                //         this.grants = response.data.saitualGrants;
                //     }
                //     else if (this.user.division_id === 7) {
                //         this.pagination = response.data.mamitGrants;
                //         this.grants = response.data.mamitGrants;
                //     }
                //     else if (this.user.division_id === 8) {
                //         this.pagination = response.data.siahaGrants;
                //         this.grants = response.data.siahaGrants;
                //     }
                //     else if (this.user.division_id === 9) {
                //         this.pagination = response.data.khawzawlGrants;
                //         this.grants = response.data.khawzawlGrants;
                //     }
                //     else if (this.user.division_id === 10) {
                //         this.pagination = response.data.kolasibGrants;
                //         this.grants = response.data.kolasibGrants;
                //     }
                //     else if (this.user.division_id === 11) {
                //         this.pagination = response.data.lawngtlaiGrants;
                //         this.grants = response.data.lawngtlaiGrants;
                //     }
                //     else if (this.user.division_id === 12) {
                //         this.pagination = response.data.serchhipGrants;
                //         this.grants = response.data.serchhipGrants;
                //     }
                //     else if (this.user.division_id === 13) {
                //         this.pagination = response.data.hnahthialGrants;
                //         this.grants = response.data.hnahthialGrants;
                //     }

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
