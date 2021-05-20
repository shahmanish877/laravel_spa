import { createStore } from "vuex";

const store = createStore({
    state(){
        return {
            authenticated: false,
            user: null,
        }
    },
    getters: {
        authenticated(state){
            return state.authenticated;
        },
        user(state){
            return state.user;
        },

    },
    mutations: {
        setUser(state, payload){
            state.user = payload;
        },
        setAuthenticated(state, payload){
            state.authenticated = payload;
        },

    },
    actions: {
        async signIn({dispatch}, payload){
            try {
                await axios.get('/sanctum/csrf-cookie');
                const res = await axios.post('/api/authenticate', payload);
                if(res.data.status_code!=200){
                    console.log(res)
                    throw res.message;
                }

                return dispatch('getUser');
            }catch (e){
                console.log(e);
                throw "User cannot be authenticated";
            }

        },

        async getUser({commit}){
            await axios.get('/api/user')
                .then(res=>{
                    commit('setUser', res.data);
                    commit('setAuthenticated', true);
                }).catch(err=>{
                    commit('setUser', null);
                    commit('setAuthenticated', false);
                })
        },

        async logout({commit}){
            await axios.post('/api/logout')
                .then(res=>{
                    commit('setUser', null);
                    commit('setAuthenticated', false);
                }).catch(err=>{
                    commit('setUser', null);
                    commit('setAuthenticated', false);
                })
        }
    }
});

export default store;
