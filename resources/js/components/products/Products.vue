<template>
    <div class="w-full p-20 ">
        <table class="bg-white w-full text-center">
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Created At</th>
            </tr>
            <tr v-for="product in products">

                <td>{{product.name}}</td>
                <td>{{product.price}}</td>
                <td>{{product.created_at}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: "Products",
    data(){
        return{
            products:[]
        }
    },
    mounted() {
        axios.get('api/products').then(res=>{

            this.products = res.data.data;
        })
    }
}
</script>

<style scoped>

</style>
