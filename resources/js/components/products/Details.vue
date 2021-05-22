<template>
    <div v-if="product.id>0" class="w-full flex flex-col ">
        <div class="relative left-1/3 ml-2 mt-20">
            <router-link :to="{name:'Products'}" class="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-900 mr-3">Back</router-link>
        </div>
         <div class="block mx-auto my-6">
            <h1 class="text-3xl font-bold">Product Details</h1>
        </div>
        <div class="flex w-full justify-center">
            <div class="w-1/6 p-2">
                <div class="bg-gray-400 text-gray-700 p-2 text-left"> Product Name</div>
            </div>
            <div class="w-1/6 p-2">
                <div class="bg-gray-400 text-gray-700 p-2 text-left"> {{ product.name }}</div>
            </div>
        </div>
        <div class="flex w-full justify-center ">
            <div class="w-1/6 p-2">
                <div class="bg-gray-400 text-gray-700 p-2 text-left"> Product Price</div>
            </div>
            <div class="w-1/6 p-2">
                <div class="bg-gray-400 text-gray-700 p-2 text-left"> Rs. {{ product.price }}</div>
            </div>
        </div>
        <div class="flex w-full justify-center ">
            <div class="w-1/6 p-2">
                <div class="bg-gray-400 text-gray-700 p-2 text-left"> Added on</div>
            </div>
            <div class="w-1/6 p-2">
                <div class="bg-gray-400 text-gray-700 p-2 text-left"> {{ product.created_at }}</div>
            </div>
        </div>

        <div class="relative left-1/3 ml-2 mt-20">
            <router-link :to="{name:'ProductsEdit', params: {id: product.id}}" class="bg-green-500 text-white px-5 py-2 rounded hover:bg-green-900 mr-3">Edit</router-link>
            <router-link :to="{name:'product-details', params: {id: product.id}}" class="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-900 mr-3">Delete</router-link>

        </div>

    </div>

</template>

<script>
export default {
    name: "Details",
    props: ['id'],
    data() {
        return {
            product: [],
            msg: ''
        }
    },
    mounted() {
        console.log('msg= '+ this.msg);
        axios.get('/api/products/' + this.id).then((response) => {
            this.product = response.data.data;
        }).catch(err => {
            console.log(err.response.data);
        })

    },

}
</script>

<style scoped>

</style>
