<template>
    <div class="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 w-full">
        <div class="max-w-md w-full space-y-8">
            <div>
                <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Edit
                </h2>
            </div>
            <form class="mt-8 space-y-6" action="#" method="POST" @submit.prevent="formSubmit">
                <input type="hidden" name="remember" value="true">
                <div class="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label for="product_name" class="sr-only">Product Name</label>
                        <input id="product_name" name="product_name" v-model="product_name" type="text" autocomplete="product_name" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Product Name">
                    </div>
                    <div>
                        <label for="price" class="sr-only">Price</label>
                        <input id="price" name="price" v-model="price" type="number" step="any" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Price">
                    </div>
                </div>


                <div>
                    <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Update
                    </button>
                </div>
            </form>
        </div>
    </div>

</template>

<script>
export default {
    name: "Edit",
    props(){
        data
    },
    data(){
        return {
            'product_name' : '',
            'price' : '',
        }
    },
    methods:{
        formSubmit(){
            alert(this.product_name);
            alert(this.price);
        }
    }
}
</script>

<style scoped>

</style>
