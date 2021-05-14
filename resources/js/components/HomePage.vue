<template>
    <div class="text-5xl text-red-400">
        <h1>from vue using </h1>
        <router-link to="/">Home</router-link> &nbsp;&nbsp;
        <router-link to="/login">Login</router-link> &nbsp;&nbsp;
        <router-link to="/dashboard">Dasboard</router-link> &nbsp;&nbsp;
        <router-link to="/projects">Projects</router-link> &nbsp;&nbsp;

        <br><br><br><br>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "HelloWorld"
}
</script>

<style scoped>

</style>
