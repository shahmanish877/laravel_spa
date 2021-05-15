<template>
    <div>
        Dashboard page
        User: {{ user }}
    </div>
</template>

<script>
export default {
    name: "Dashboard",
    data(){
        return{
            user: ''
        }
    },
    mounted() {
        axios.get('/api/user')
        .then(res=>{
            console.log(res);
            this.user = res.data;
        }).catch(err=>{
            console.log(err);
        })
    }
}
</script>

<style scoped>

</style>
