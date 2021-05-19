<template>
    <div class="w-full p-20 ">
        <table class="bg-white w-full text-center">
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Created At</th>
            </tr>
            <tr v-for="project in projects">

                <td>{{project.name}}</td>
                <td>{{project.price}}</td>
                <td>{{project.created_at}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: "Projects",
    data(){
        return{
            projects:[]
        }
    },
    mounted() {
        axios.get('api/products').then(res=>{

            this.projects = res.data.data;
        })
    }
}
</script>

<style scoped>

</style>
