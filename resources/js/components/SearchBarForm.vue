<!-- <template>
    <div>
        <div v-if="focus" @click="clearClick()" class="absolute top-0 bottom-0 left-0 right-0 z-10 bg-black opacity-0">
        </div>

        <div class="relative z-10">
            <div class="absolute">
                <svg viewBox="0 0 24 24" class="w-5 h-5 mt-2 ml-2">
                    <path fill-rule="evenodd"
                        d="M20.2 18.1l-1.4 1.3-5.5-5.2 1.4-1.3 5.5 5.2zM7.5 12c-2.7 0-4.9-2.1-4.9-4.6s2.2-4.6 4.9-4.6 4.9 2.1 4.9 4.6S10.2 12 7.5 12zM7.5.8C3.7.8.7 3.7.7 7.3s3.1 6.5 6.8 6.5c3.8 0 6.8-2.9 6.8-6.5S11.3.8 7.5.8z"
                        clip-rule="evenodd" />
                </svg>
            </div>
            <input type="text"
                class="w-64 py-1 pl-8 pr-3 mr-6 text-sm bg-gray-200 border border-gray-400 rounded-full focus:outline-none focus:border-blue-500 focus:shadow focus:bg-gray-100"
                placeholder="Search..." id="searchTerm" v-model="searchTerm" @input="search" @focus="focus = true">

            <div v-if="focus" class="absolute right-0 z-20 p-4 mt-2 mr-6 text-white bg-blue-900 rounded-lg shadow w-96">
                <div v-if="results == 0">No results found for '{{ searchTerm }}'</div>
                <div v-for="result in results" :key="result.id" @click="focus = false">
                    <router-link :to="'/formList/' + result.id" class="block py-2">
                        <div class="flex items-center">
                            <UserCircle :name="result.name" />

                            <div class="pl-3">
                                <p>{{ result.name }}</p>

                            </div>
                        </div>
                    </router-link>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import _ from 'lodash';
import UserCircle from './UserCircle';

export default {
    name: "SearchBarForm",

    components: {
        UserCircle,
    },

    data: function () {
        return {
            searchTerm: '',
            focus: false,
            results: []
        }
    },

    methods: {
        clearClick: function () {
            this.focus = false,
                this.results = []
        },


        search: _.debounce(function () {
            if (this.searchTerm.length < 3) {
                return;
            }

            axios.get('/api/auth/paymentSuccessList/' + this.searchTerm)
                .then(response => {
                    this.results = response.data.payments; // Update to access the payments array directly
                })
                .catch(error => {
                    console.log(error);
                });
        }, 300),
        // original code
        // search: _.debounce(function (e) {
        //     if (this.searchTerm.length < 3) {
        //         return;
        //     }

        //     axios.post('/api/auth/searchForm', {searchTerm: this.searchTerm})
        //         .then(response => {
        //             this.results = response.data;
        //             console.log(response.data);
        //         })
        //         .catch(error => {
        //             console.log(error.response);
        //         });
        // }, 300),

    }
}

</script>

<style scoped></style> -->

















<template>
    <div>
        <div v-if="focus" @click="clearClick()" class="absolute top-0 bottom-0 left-0 right-0 z-10 bg-black opacity-0">
        </div>

        <div class="relative z-10">
            <div class="absolute">
                <svg viewBox="0 0 24 24" class="w-5 h-5 mt-2 ml-2">
                    <path fill-rule="evenodd"
                        d="M20.2 18.1l-1.4 1.3-5.5-5.2 1.4-1.3 5.5 5.2zM7.5 12c-2.7 0-4.9-2.1-4.9-4.6s2.2-4.6 4.9-4.6 4.9 2.1 4.9 4.6S10.2 12 7.5 12zM7.5.8C3.7.8.7 3.7.7 7.3s3.1 6.5 6.8 6.5c3.8 0 6.8-2.9 6.8-6.5S11.3.8 7.5.8z"
                        clip-rule="evenodd" />
                </svg>
            </div>
            <input type="text"
                class="w-64 py-1 pl-8 pr-3 mr-6 text-sm bg-gray-200 border border-gray-400 rounded-full focus:outline-none focus:border-blue-500 focus:shadow focus:bg-gray-100"
                placeholder="Search memo..." id="searchTerm" v-model="searchTerm" @input="search" @focus="focus = true">

            <div v-if="focus" class="absolute right-0 z-20 p-4 mt-2 mr-6 text-white bg-blue-900 rounded-lg shadow w-96">
                <div v-if="results == 0">No results found for '{{ searchTerm }}'</div>
                <div v-for="result in results" :key="result.id" @click="focus = false">
                    <router-link :to="'/grantedShow/' + result.id" class="block py-2">
                        <div class="flex items-center">
                            <div class="pl-3">
                                <p>Memo: {{ result.form_memo }}</p>
                                <p>Granted on: {{ result.created_at }}</p>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import _ from 'lodash';

export default {
    name: "SearchBarForm",

    data: function () {
        return {
            searchTerm: '',
            focus: false,
            results: []
        }
    },

    methods: {
        clearClick: function () {
            this.focus = false,
            this.results = []
        },

        search: _.debounce(function () {
            if (this.searchTerm.length < 3) {
                return;
            }

            axios.get('/api/auth/paymentSuccessList/' + this.searchTerm)
                .then(response => {
                    this.results = response.data.grants.data; // Update to access the grants array directly
                })
                .catch(error => {
                    console.log(error);
                });
        }, 300),
    }
}
</script>

<style scoped></style>
