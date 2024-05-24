<template>
<div >

    <div v-if="loading">
            <PulseLoader class="object-center h-full " />
    </div>

    <div v-else>

        <div class="w-full px-2 py-4 mx-3 mt-3 text-white rounded-t-lg lg:py-5 bg-tableheader ">

        </div>

        <div v-for="user in laravelData.data" :key="user.id" class="w-full px-2 mx-3 bg-white border-b hover:bg-tablehover">
                <br>
                <div class="flex-row justify-between flex-none">
                    <div class=""><span class="text-blue-600">NAME:</span> {{user.name}}</div>
                    <div class=""><span class="text-blue-600">EMAIL: </span>{{user.email}}</div>
                <br>
                </div>
        </div>


            <!-- <vue-ads-pagination
        :page="3"
        :itemsPerPage="10"
        :maxVisiblePages="4"
        :totalItems="200"
        @pageChange="pageChange"
    /> -->


    </div>
    <br>

        <div class="">

            <pagination :data="laravelData" @pagination-change-page="getResults "  class= "flex flex-row justify-between w-32 px-3 py-2 text-center text-gray-700 bg-white border-2 border-gray-300 rounded-lg hover:text-gray-400" />

        </div>



</div>
</template>

<script>

import PulseLoader from '../components/PulseLoader'
import VueAdsPagination from 'vue-ads-pagination';

export default{

    name: "UserList",

    components: {PulseLoader},

    data: function(){

        return{

            users:{},
            loading: true,
            laravelData: {},

        }

    },


    mounted(){

        // axios.get('/api/auth/userList')
        // .then(response=>{
        //     this.users = response.data.users;
        //     this.loading = false;
        // })
        // .catch(error=>{
        //     this.loading = true;
        // });

        this.getResults();
    },


        methods: {
		// Our method to GET results from a Laravel endpoint
		getResults(page = 1) {
			axios.get('/api/auth/userList?page=' + page)
				.then(response => {
                    this.laravelData = response.data.users;
                    this.loading = false;
				});
        },

        // pageChange (page, range) {
        //     console.log(page, range);
        // },

	},

}

</script>

<style scoped>
</style>
