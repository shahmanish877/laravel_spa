<template>
    <div class="h-20 flex flex-row justify-between pl-10 pr-10 items-center bg-blue-500 text-white">
        <div>
            <img :src="logo" alt="Logo" width="60">
<!--            <img src="images/logo.png" alt="Logo" width="60">-->
        </div>
        <nav>
            <router-link to="/" class="hover:text-red-600 mr-5">Home</router-link>
            <router-link to="/login" class="hover:text-red-600 mr-5">Login</router-link>
            <router-link to="/dashboard" class="hover:text-red-600 mr-5">Dasboard</router-link>
            <router-link :to="{ name: 'Projects' }" class="hover:text-red-600 mr-5">Projects</router-link>
        </nav>


    </div>
</template>

<script>
export default {
    data() {
        return{
            logo: 'images/logo.png'
        }
    }
}
</script>

<style scoped>

</style>
