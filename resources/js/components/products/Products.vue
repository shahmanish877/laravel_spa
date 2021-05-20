<template>
        <div class="w-full relative">
            <div class='flex flex-col w-full mt-10'>
                <div class="flex flex-row justify-around">
                    <h2>All Products</h2>
                    <router-link :to="{name:'ProductsEdit'}" class="bg-blue-500 mb-1 text-white px-5 py-2 rounded hover:bg-blue-900 mr-3">Add Product</router-link>

                </div>

                <!-- Table -->
                <table class='mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden'>
                    <thead class="bg-gray-50">
                    <tr class="text-gray-600 text-left">
                        <th class="font-semibold text-sm uppercase px-6 py-4">
                            S.N.
                        </th>
                        <th class="font-semibold text-sm uppercase px-6 py-4">
                            Name
                        </th>
                        <th class="font-semibold text-sm uppercase px-6 py-4">
                            Price
                        </th>
                        <th class="font-semibold text-sm uppercase px-6 py-4 text-center">
                            Arrived on
                        </th>
                        <th class="font-semibold text-sm uppercase px-6 py-4">
                            Action
                        </th>
                    </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                    <tr v-for="(product,index) in products" >
                        <td class="px-6 py-4">
                            {{ index+1 }}
                        </td>
                        <td class="px-6 py-4">
                            {{ product.name }}
                        </td>
                        <td class="px-6 py-4">
                            {{ product.price }}
                        </td>
                        <td class="px-6 py-4">
                            {{ product.created_at }}
                        </td>
                        <td class="px-6 py-4">
                            <router-link :to="{name:'product-details', params: {id: product.id}}" class="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-900 mr-3">View</router-link>
                            <span class="bg-red-700 text-white px-5 py-2 rounded hover:bg-red-900">Delete</span>
                        </td>

                    </tr>
                    </tbody>
                </table>
            </div>
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
