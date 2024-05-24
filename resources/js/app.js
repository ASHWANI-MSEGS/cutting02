import Vue from 'vue';
import Vuex from 'vuex';
import router from './router';
import App from './components/App';
import StoreData from './store';
import {initialize} from './helpers/general';



Vue.use(Vuex);

require('./bootstrap');


const store = new Vuex.Store(StoreData);

initialize(store, router);

const app = new Vue({
    el: '#app',
    components: {
        App
    },
    router,
    store,
});
