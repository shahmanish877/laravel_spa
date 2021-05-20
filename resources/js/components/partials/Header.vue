<template>
    <div class="h-20 flex flex-row justify-between pl-10 pr-10 items-center bg-blue-500 text-white">
        <div>
            <img :src="logo" alt="Logo" width="60">
<!--            <img src="images/logo.png" alt="Logo" width="60">-->
        </div>
        <nav>
            <router-link to="/"  class="hover:text-red-600 mr-5">Home</router-link>
            <router-link to="/login" v-if="!authenticated" class="hover:text-red-600 mr-5">Login</router-link>
            <router-link to="/dashboard" v-if="authenticated" class="hover:text-red-600 mr-5">Dasboard</router-link>
            <router-link :to="{ name: 'Products' }" v-if="authenticated" class="hover:text-red-600 mr-5">Products</router-link>
            <a href="#" @click="handleLogout()" v-if="authenticated">Logout</a>
        </nav>


    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    data() {
        return{
            logo: '/images/logo.png'
        }
    },

    //when using method call with (), with computed no need ()
    computed: {
        /*authenticated() {
            return this.$store.state.authenticated;
        }*/
        ...mapGetters(['authenticated'])
    },

    methods:{
        async handleLogout(){
            await this.$store.dispatch('logout');
            this.$router.push({name: 'Login'});
        }
    }
}
</script>

