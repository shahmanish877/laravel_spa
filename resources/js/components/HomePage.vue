<template>
    <div class="bg-gray-200 flex flex-col min-h-screen justify-between">
        <AppHeader></AppHeader>
        <main class="flex flex-grow">
            <router-view></router-view>
        </main>
        <app-footer></app-footer>
    </div>
</template>

<script>
import AppHeader from './partials/Header';
import AppFooter from './partials/Footer';
export default {
    name: "HelloWorld",
    components:{
        AppHeader, AppFooter
    }
}
</script>

<style scoped>

</style>
