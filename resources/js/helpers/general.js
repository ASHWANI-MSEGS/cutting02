export function initialize(store, router) {
    router.beforeEach((to, from, next) => {
        const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
        const currentUser = store.state.currentUser;
    
        if(requiresAuth && !currentUser) {
            next('/home');
        } else if(to.path == '/loggin' && currentUser) {
            next('/home');
        }
        else if(to.path == '/' && currentUser) {
            next('/home');
        }

        else if(to.path == '/' && currentUser){

            next('/home');
        }

        if(to.path == '/home' && !currentUser){
            next('/');
        }
        
        
        else {
            next();
        }
    });
    
    axios.interceptors.response.use(null, (error) => {
        if (error.response.status == 401) {
            store.commit('logout');
            router.push('/');
        }

        return Promise.reject(error);
    });

    if (store.getters.currentUser) {
        setAuthorization(store.getters.currentUser.token);
    }
}

export function setAuthorization(token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
}