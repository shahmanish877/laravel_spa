<template>
    <div v-if="product.id>0" class="w-full flex flex-col justify-center">
        <div class="flex justify-center">
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
    </div>

</template>

<script>
export default {
    name: "Details",
    props: ['id'],
    data() {
        return {
            product: [],
        }
    },
    mounted() {
        axios.get('/api/products/' + this.id).then((response) => {
            this.product = response.data.data;
        }).catch(err => {
            console.log(err)
        })

    },

}
</script>

<style scoped>

</style>
