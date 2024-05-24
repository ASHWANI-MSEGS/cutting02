<template>

    <div class="min-h-screen">
        <div v-if="loading">
            <PulseLoader class="object-center h-screen " />
        </div>

        <div v-else>
            <div v-if="refunds.total === 0">
                <p>No Fine List</p>
            </div>

            <!-- <div class="flex flex-col items-end flex-1 ">
                <SearchBarForm />
            </div> -->

            <div class="w-full px-2 mx-1 mt-3 text-white rounded-t-lg sm:py-3 md:py-3 md:mx-3 bg-tableheader">
                    <p>Total: {{ refunds.total }}
                        <!-- <template v-if="user.division_id == 1">{{fineSouthCount}}</template>
                        <template v-else-if="user.division_id == 2">{{fineNorthCount}}</template> -->
                    </p>

            </div>

            <div v-for="(refund, index) in refunds.data" :key="refund.id">

                <template v-if="refund.division_id==user.division_id">

                    <router-link :to="'/refundFineShow/' + refund.id" >
                        <div class="w-full px-2 py-2 mx-1 bg-white md:mx-3 hover:bg-tablehover">
                            <div class="grid grid-cols-1 gap-0 md:grid-cols-3 md:gap-1 lg:grid-cols-4 lg:gap-1 xl:grid-cols-4 xl:gap-1">
                                <div class="ml-1">Memo: {{refund.form_memo}}</div>
                                <div class="ml-1">Reject Chhan: {{refund.reason}}</div>
                                <div class="ml-1">Report date for Roadcutting: {{reports.data[index].date}}</div>
                                <div class="ml-1">
                                    <template v-if="refund.division_id == 1">
                                        Div: Road South
                                    </template>
                                    <template v-else-if="refund.division_id == 2">
                                        Div: Road North
                                    </template>
                                    <template v-else-if="refund.division_id == 4">
                                        Div: Road Champhai
                                    </template>
                                    <template v-else-if="refund.division_id == 5">
                                        Div: Road Lunglei
                                    </template>
                                    <template v-else-if="refund.division_id == 6">
                                        Div: Road Saitual
                                    </template>
                                    <template v-else-if="refund.division_id == 7">
                                        Div: Road Mamit
                                    </template>
                                    <template v-else-if="refund.division_id == 8">
                                        Div: Road Siaha
                                    </template>
                                    <template v-else-if="refund.division_id == 9">
                                        Div: Road Khawzawl
                                    </template>
                                    <template v-else-if="refund.division_id == 10">
                                        Div: Road Kolasib
                                    </template>
                                    <template v-else-if="refund.division_id == 11">
                                        Div: Road Lawngtlai
                                    </template>
                                    <template v-else-if="refund.division_id == 12">
                                        Div: Road Serchhip
                                    </template>
                                    <template v-else-if="refund.division_id == 13">
                                        Div: Road Hnahthial
                                    </template>

                                </div>
                            </div>
                            <hr>
                        </div>
                    </router-link>

                </template>
            </div>

            <div class="mx-3 my-3">
                <pagination :pagination="pagination" @paginate="fetchUsers" :offset="4" />
            </div>
        </div>
    </div>

</template>


<script>

 import PulseLoader from '../../components/PulseLoader';
 import Pagination from '../Pagination.vue';

export default {
    name: "ReportDateList",

            components: {
            PulseLoader,
            pagination: Pagination,
             },


    data: function(){
        return{
            offset: 3,
            pagination: {},
            loading: true,
            refunds: null,
            reports: null,
            user: this.$store.getters.currentUser,

            fineSouthCount:'',
            fineNorththCount:'',
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
            axios.get('/api/fineList/'+division_id+'?page=' + pageNum, {
                headers: {
                    "Authorization": `Bearer ${this.$store.getters.currentUser.token}`
                }
            })
            .then(response => {
                this.pagination = response.data.refunds;
                this.refunds = response.data.refunds;
                this.reports = response.data.reports;
console.log(response,"refund fince list");
                this.loading = false;
            })
            .catch(error=> {
                console.log(error)
            });
        }
          // if(this.user.division_id === 1)
                // {
                //     this.pagination = response.data.southRefunds;
                //     this.refunds = response.data.southRefunds;
                // }

                // if(this.user.division_id === 2)
                // {
                //     this.pagination = response.data.northRefunds;
                //     this.refunds = response.data.northRefunds;
                // }
                // this.fineSouthCount = response.data.fineSouthCount;
                // this.fineNorthCount = response.data.fineNorththCount;
    },




}

</script>



<style scoped>

</style>
