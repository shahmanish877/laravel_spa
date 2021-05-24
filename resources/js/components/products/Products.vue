<template>
        <div class="w-full relative">
            <div class='flex flex-col w-full mt-10'>
                <div class="rounded bg-green-500 text-white shadow-lg w-1/2 py-2 px-4 block mx-auto mb-8 transition transition-all delay-1000" v-if="msg">
                    {{ msg }}
                </div>
                <div class="flex flex-row justify-around">
                    <h2>All Products</h2>
                    <router-link :to="{name:'ProductsCreate'}" class="bg-blue-500 mb-1 text-white px-5 py-2 rounded hover:bg-blue-900 mr-3">Add Product</router-link>

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
                    <tr v-for="(product,index) in products.data" :key="product.id">
                        <td class="px-6 py-4">
<!--                            {{ index+1 }}-->
                            {{product.id}}
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
                            <form @submit.prevent="DeleteProduct(product.id)">
                                <router-link :to="{name:'product-details', params: {id: product.id}}" class="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-900 mr-3">View</router-link>

                                <input type="submit"   value="Delete" class="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-900 mr-3 cursor-pointer">
                            </form>
                        </td>

                    </tr>
                    </tbody>
                </table>
                    <ul class="text-center">
                        <li class="mr-5 inline-block my-6"  v-for="page_from in last_page" :key="page_from" >
                            <a @click="fetchProduct(page_from)" class="cursor-pointer px-4 py-2 hover:bg-gray-300 rounded shadow"
                               :class="page_from===current_page ? 'text-white bg-blue-300' : 'text-blue-500 bg-white' ">
                                {{ page_from }}
                            </a>
                        </li>

                    </ul>
            </div>
        </div>

</template>

<script>
export default {
    name: "Products",
    data(){
        return{
            'msg': '',
            products:[],
            page_from:0,
            last_page: 0,
            current_page:0
        }
    },
    mounted() {
        this.fetchProduct(1);
    },
    methods:{
        DeleteProduct(id){
            axios.delete('/api/products/'+id).then(res=>{
                console.log(res.data);
                this.fetchProduct(this.current_page);
                this.msg = "Product Successfully Deleted."
                setTimeout(() => this.msg = '', 5000)

            }).catch(err=>{
                console.log(err.response.data);
            })
        },
        fetchProduct(page){
            axios.get('api/products?page='+page).then(res=>{
                this.products = res.data;
                this.page_from = this.products.meta.from;
                this.last_page = this.products.meta.last_page;
                this.current_page = this.products.meta.current_page;
            })
        }

    }
}
</script>

<style scoped>

</style>
