import { getLocalUser } from "./helpers/auth";

const user = getLocalUser();

export default {
    state: {
        currentUser: user,
        isLoggedIn: !!user,
        loading: false,
        auth_error: null,
        customers: [],
        memoStore: null,
        reportStore: null,
        paymentModal: false,
        sidebar_mobile_toggle: false,
    },
    getters: {
        isLoading(state) {
            return state.loading;
        },
        isLoggedIn(state) {
            return state.isLoggedIn;
        },
        currentUser(state) {
            return state.currentUser;
        },
        authError(state) {
            return state.auth_error;
        },
        customers(state) {
            return state.customers;
        },

        memoStore(state){
            return state.memoStore;
        },

        reportStore(state){
            return state.reportStore;
        },
        paymentModal(state){
            return state.paymentModal;
        },

        sidebarMobileToggel(state){
            return state.sidebar_mobile_toggle;
        },

    },
    mutations: {

        sidebarMobileToggel(state){
            state.sidebar_mobile_toggle = !state.sidebar_mobile_toggle;
        },

        login(state) {
            state.loading = true;
            state.auth_error = null;
        },
        loginSuccess(state, payload) {
            state.auth_error = null;
            state.isLoggedIn = true;
            state.loading = false;
            state.currentUser = Object.assign({}, payload.user, {token: payload.access_token});

            localStorage.setItem("user", JSON.stringify(state.currentUser));
        },
        loginFailed(state, payload) {
            state.loading = false;
            state.auth_error = payload.error;
        },
        logout(state) {
            localStorage.removeItem("user");
            state.isLoggedIn = false;
            state.currentUser = null;
            state.auth_error = null;
        },
        updateCustomers(state, payload) {
            state.customers = payload;
        },

        memoStore(state, payload) {
            state.memoStore = payload;
        },

        reportStore(state, payload) {
            state.reportStore = payload;
        },

        paymentModal2(state){
            state.paymentModal = !state.paymentModal;

        }
    },
    actions: {

        memoStore(context,payload){
            context.commit("memoStore",payload);
        },

        reportStore(context,payload){
            context.commit("reportStore",payload);
        },

        login(context) {
            context.commit("login");
        },
        getCustomers(context) {
            axios.get('/api/customers')
            .then((response) => {
                context.commit('updateCustomers', response.data.customers);
            })
        },

        paymentModal3(context){
            context.commit("paymentModal2");
        },

        sidebarMobileToggel(context) {
            context.commit("sidebarMobileToggel");
        },

 


    }
};