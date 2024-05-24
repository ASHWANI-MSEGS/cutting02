<template>
    <div class="h-full">

        <div v-if="loading">
            <PulseLoader class="object-center h-full " />
        </div>

        <div v-else>

            <div class="w-full px-2 py-4 mx-3 mt-3 text-white rounded-t-lg lg:py-5 bg-tableheader ">

            </div>
            <div v-for="user in users.data" :key="user.id" class="">
                <template v-if="user.division_id == user1.division_id || user.division_id == 3 || user1.role_id == 1">

                    <div
                        class="flex-row justify-between flex-none w-full px-2 mx-3 mt-1 bg-white border-b hover:bg-tablehover">
                        <div class=""><span class="text-blue-600">NAME:</span> {{ user.name }}</div>
                        <div class=""><span class="text-blue-600">EMAIL: </span>{{ user.email }}</div>
                        <div class=""><span class="text-blue-600">PHONE: </span>{{ user.phone }}</div>
                        <template v-if="user.role_id == 1">
                            <div class=""><span class="text-blue-600">ROLE: </span>Super Admin</div>
                        </template>
                        <template v-else-if="user.role_id == 2">
                            <div class=""><span class="text-blue-600">ROLE: </span>EE</div>
                        </template>
                        <template v-else-if="user.role_id == 3">
                            <div class=""><span class="text-blue-600">ROLE: </span>SDO</div>
                        </template>

                        <template v-if="user.division_id == 1">
                            <div class=""><span class="text-blue-600">DIVISION: </span>Road South</div>
                        </template>
                        <template v-else-if="user.division_id == 2">
                            <div class=""><span class="text-blue-600">DIVISION: </span>Road North</div>
                        </template>

                        <template v-else-if="user.division_id == 3">
                            <div class=""><span class="text-blue-600">DIVISION: </span>None</div>
                        </template>

                        <template v-else-if="user.division_id == 4">
                            <div class=""><span class="text-blue-600">DIVISION: </span>Champhai Road</div>
                        </template>
                        <template v-else-if="user.division_id == 5">
                            <div class=""><span class="text-blue-600">DIVISION: </span>Lunglei Road</div>
                        </template>
                        <template v-else-if="user.division_id == 6">
                            <div class=""><span class="text-blue-600">DIVISION: </span>Saitual Road</div>
                        </template>
                        <template v-else-if="user.division_id == 7">
                            <div class=""><span class="text-blue-600">DIVISION: </span>Mamit Road</div>
                        </template>
                        <template v-else-if="user.division_id == 8">
                            <div class=""><span class="text-blue-600">DIVISION: </span>Siaha Road</div>
                        </template>
                        <template v-else-if="user.division_id == 9">
                            <div class=""><span class="text-blue-600">DIVISION: </span>Khawzawl Road</div>
                        </template>
                        <template v-else-if="user.division_id == 10">
                            <div class=""><span class="text-blue-600">DIVISION: </span>Kolasib Road</div>
                        </template>
                        <template v-else-if="user.division_id == 11">
                            <div class=""><span class="text-blue-600">DIVISION: </span>Lawngtlai Road</div>
                        </template>
                        <template v-else-if="user.division_id == 12">
                            <div class=""><span class="text-blue-600">DIVISION: </span>Serchhip Road</div>
                        </template>
                        <template v-else-if="user.division_id == 13">
                            <div class=""><span class="text-blue-600">DIVISION: </span>Lunglei Road Div-II, Hnahthial
                                Road</div>
                        </template>
                        <template v-else-if="user.division_id == 14">
                            <div class=""><span class="text-blue-600">DIVISION: </span>Hmuifang Division Road</div>
                        </template>
                        <template v-else-if="user.division_id == 15">
                            <div class=""><span class="text-blue-600">DIVISION: </span>National Highway Div-I Road</div>
                        </template>
                        <template v-else-if="user.division_id == 16">
                            <div class=""><span class="text-blue-600">DIVISION: </span>National Highway Div-III Road
                            </div>
                        </template>


                        <div class=""><span class="text-blue-600">SUB-DIVISION: </span>{{ user.sub_div }}</div>





                        <template v-if="user1.role_id == 1">
                            <template v-if="user.disable_account_status == 0">
                                <button v-show="user.role_id != 1"
                                    class="px-4 py-2 my-2 ml-1 text-sm font-normal text-white bg-green-500 rounded hover:bg-green-300"
                                    @click="disableUser(user.id)">
                                    Account Actived
                                </button>
                             </template>
                            <template v-else-if="user.disable_account_status == 1">
                                <button v-show="user.role_id != 1"
                                    class="px-4 py-2 my-2 ml-1 text-sm font-normal text-white bg-gray-600 rounded hover:bg-gray-400"
                                    @click="disableUser(user.id)">
                                    Account Disabled
                                </button>
                            </template>

                        </template>





                        <template v-if="user1.role_id == 2 || user1.role_id == 1">
                            <button v-show="user.role_id != 1"
                                class="px-4 py-2 my-2 ml-1 text-sm font-normal text-white bg-red-500 rounded hover:bg-red-400"
                                @click="deleteUser(user.id)">Delete
                            </button>
                        </template>
                        <br>
                    </div>
                </template>
            </div>




        </div>
        <br>



        <div class="mx-3 my-3">
            <pagination :pagination="pagination" @paginate="fetchUsers" :offset="4" />
        </div>

        <!-- <pagination :data="laravelData" @pagination-change-page="getResults "  class= "flex flex-row justify-between w-32 px-3 py-2 text-center text-gray-700 bg-white border-2 border-gray-300 rounded-lg hover:text-gray-400" />
        -->




    </div>
</template>

<script>

import PulseLoader from '../components/PulseLoader';
import Pagination from './Pagination.vue';
// import VueAdsPagination from 'vue-ads-pagination';

export default {

    name: "UserList",

    components: {
        PulseLoader,
        pagination: Pagination,
    },

    data: function () {

        return {


            users: {},
            offset: 3,
            pagination: {},
            user1: this.$store.getters.currentUser,
        }

    },

    created: function () {
        this.fetchUsers();
    },

    methods: {

        fetchUsers: function () {
            let current_page = this.pagination.current_page;
            let pageNum = current_page ? current_page : 1;

            axios.get('/api/auth/userList/'+this.user1.division_id+'?page=' + pageNum)
                .then(response => {
                    this.pagination = response.data.users;
                    this.users = response.data.users;
                    console.log(this.users);
                })
                .catch(error => {
                    console.log(error)
                });
        },

        deleteUser: function (id) {


            axios.get('/api/userDelete/' + id, {
                headers: {
                    "Authorization": `Bearer ${this.$store.getters.currentUser.token}`
                }
            })
                .then(response => {

                    this.$router.push("/userDeleteSuccess");
                })

                .catch(errors => {

                    this.errors = errors.response.data.errors;
                });

        },

        disableUser: function (id) {

            axios.get('/api/disableUser/' + id, {
                headers: {
                    "Authorization": `Bearer ${this.$store.getters.currentUser.token}`
                }
            })
                .then(response => {
                    this.disable_account = response.data.disable_account;
                    console.log(this.disable_account);
                    // this.feature = response.data.feature;
                    // this.security_deposit = response.data.security_deposit;
                    // console.log(response.data);
                    this.loading = false;
                    setTimeout(() => {
location.reload();
                    }, 200);

                    //  this.$router.push('/feature');
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

<style scoped></style>
