<template>
    <div class="min-h-screen">
        <div v-if="loading">
            <PulseLoader class="object-center h-full " />
        </div>

        <div v-else>
            <div v-if="engineers.data.length === 0">
                <p>No list of Engineers yet<router-link to="/engineerAdd">Add New Engineer  </router-link></p>
            </div>



            <div class="w-full px-2 py-2 mx-3 mt-3 text-white rounded-t-lg bg-tableheader ">
                <p>Total:
                    <template> {{ engineers.total }} </template>
                </p>
            </div>


            <div v-for="engineer in engineers.data" :key="engineer.id">

                <!-- <template v-if="engineer.division_id == user.division_id"> -->
                    <router-link :to="'/engineerShow/' + engineer.id"
                        class="grid w-full grid-cols-3 px-2 mx-3 bg-white border-b md:grid-cols-5 md:gap-4 hover:bg-tablehover">
                        <div><span class="font-medium">Name:</span> {{ engineer.name }}</div>
                        <div><span class="font-medium">Post:</span> {{ engineer.post }}</div>
                        <div><span class="font-medium">Phone:</span> {{ engineer.phone }}</div>
                        <div>
                            <template v-if="engineer.division_id == 1"><span class="font-medium">Division:</span> Road
                                South Division</template>
                            <template v-else-if="engineer.division_id == 2"><span class="font-medium">Division:</span>
                                Aizawl Road North</template>

                            <template v-else-if="engineer.division_id == 4"><span class="font-medium">Division:</span>
                                Champhai Road</template>
                            <template v-else-if="engineer.division_id == 5"><span class="font-medium">Division:</span>
                                Lunglei Road</template>
                            <template v-else-if="engineer.division_id == 6"><span class="font-medium">Division:</span>
                                Saitual Road</template>
                            <template v-else-if="engineer.division_id == 7"><span class="font-medium">Division:</span>
                                Mamit Road</template>
                            <template v-else-if="engineer.division_id == 8"><span class="font-medium">Division:</span>
                                Siaha Road</template>
                            <template v-else-if="engineer.division_id == 9"><span class="font-medium">Division:</span>
                                Khawzawl Road</template>
                            <template v-else-if="engineer.division_id == 10"><span class="font-medium">Division:</span>
                                Kolasib Road</template>
                            <template v-else-if="engineer.division_id == 11"><span
                                    class="font-medium">Division:</span>Lawngtlai Road</template>
                            <template v-else-if="engineer.division_id == 12"><span class="font-medium">Division:</span>
                                Serchhip Road</template>
                            <template v-if="engineer.division_id == 13"><span
                                    class="font-medium">Division:</span>Lunglei Road Div-II, Hnahthial Road</template>
                            <template v-if="engineer.division_id == 14"><span
                                    class="font-medium">Division:</span>Hmuifang Division Road</template>
                            <template v-if="engineer.division_id == 15"><span
                                    class="font-medium">Division:</span>National Highway Div-I Road</template>
                            <template v-if="engineer.division_id == 16"><span
                                    class="font-medium">Division:</span>National Highway Div-III Road</template>
                        </div>
                        <div><span class="font-medium">Sub-Division:</span> {{ engineer.sub_div }}</div>
                    </router-link>
                <!-- </template> -->

            </div>

            <div class="mx-3 my-3">
                <pagination :pagination="pagination" @paginate="fetchUsers" :offset="3" />
            </div>



        </div>

    </div>
</template>

<script>

import PulseLoader from '../../components/PulseLoader';
import Pagination from '../Pagination.vue';

export default {

    name: "EngineerList",

    components: {
        PulseLoader,
        pagination: Pagination,
    },

    data: function () {
        return {

            engineers: '',
            offset: 3,
            pagination: {},
            loading: true,
            user: this.$store.getters.currentUser,
userDivisionID: this.$store.getters.currentUser.division_id
        }
    },

    created: function () {
        this.fetchUsers();
    },

    methods: {

        fetchUsers: function () {
            let current_page = this.pagination.current_page;
            let pageNum = current_page ? current_page : 1;
            let division_id =this.userDivisionID;
            axios.get('/api/engineerList/'+division_id+'?page=' + pageNum, {
                headers: {
                    "Authorization": `Bearer ${this.$store.getters.currentUser.token}`
                }
            })
                .then(response => {
console.log(response.data);
                    this.pagination = response.data.engineers;
                    this.engineers = response.data.engineers;
                    this.loading = false;

                })
                .catch(error => {
                    this.loading = true;

                });


        }
        // original code start
//         fetchUsers: function () {
//             let current_page = this.pagination.current_page;
//             let pageNum = current_page ? current_page : 1;

//             axios.get('/api/engineerList?page=' + pageNum, {
//                 headers: {
//                     "Authorization": `Bearer ${this.$store.getters.currentUser.token}`
//                 }
//             })
//                 .then(response => {
// console.log(response.data);
//                     this.pagination = response.data.engineers;
//                     this.engineers = response.data.engineers;
//                     this.loading = false;

//                 })
//                 .catch(error => {
//                     this.loading = true;

//                 });

//         }

// original code end
},


}
</script>

<style scoped></style>
