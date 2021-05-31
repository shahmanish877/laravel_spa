<template>
    <div class="w-full relative">
        <div class='flex flex-col w-full mt-10' v-if="!modalShow">

            <div class="flex flex-row justify-around">
                <h2>All Products</h2>
                <!--                    <router-link :to="{name:'ProductsCreate'}"  class="bg-blue-500 mb-1 text-white px-5 py-2 rounded hover:bg-blue-900 mr-3">Add Product</router-link>-->
                <button @click="modalShow=true"
                        class="bg-blue-500 mb-1 text-white px-5 py-2 rounded hover:bg-blue-900 mr-3">Add Product
                </button>

            </div>

            <!-- Table -->
            <table
                class='mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden'>
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
                        {{ product.id }}
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
                        <form @submit.prevent="DeleteProduct(product)">
                            <router-link :to="{name:'product-details', params: {id: product.id}}"
                                         class="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-900 mr-3">View
                            </router-link>

                            <input type="submit" value="Delete"
                                   class="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-900 mr-3 cursor-pointer">
                        </form>
                    </td>

                </tr>
                </tbody>
            </table>
            <ul class="text-center">
                <li class="mr-5 inline-block my-6" v-for="page_from in last_page" :key="page_from">
                    <a @click="fetchProduct(page_from)"
                       class="cursor-pointer px-4 py-2 hover:bg-gray-300 rounded shadow"
                       :class="page_from===current_page ? 'text-white bg-blue-300' : 'text-blue-500 bg-white' ">
                        {{ page_from }}
                    </a>
                </li>

            </ul>
        </div>

        <div class="flex items-center justify-center bg-gray-200 top-0 left-0 right-0 text-center h-full"
             v-if="modalShow">
            <div class="flex flex-col p-8 bg-white shadow-md hover:shodow-lg rounded-2xl" ref="target">

                    <form @submit.prevent="addProduct()" class="flex flex-col gap-y-2 ">
                        <div>
                            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Name</label>
                            &nbsp;
                            <input name="name"
                                   class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                   type="text" placeholder="Name" v-model="products.name" />
                        </div>
                        <div>
                            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Price</label>
                            &nbsp;
                            <input name="price"
                                   class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                   type="number" step="any" placeholder="Price" v-model="products.price" />
                        </div>
                            <input type="submit" value="Add Product"
                                   class="flex-no-shrink cursor-pointer focus:outline-none bg-white px-5 ml-4 my-3 py-2 text-sm shadow-sm font-medium tracking-wider border-2 border-green-400 text-green-400 rounded-full hover:text-white hover:bg-green-500">

                    </form><button @click="closeModal()"
                                class="flex-no-shrink bg-white focus:outline-none px-5 ml-4 py-2 text-sm shadow-sm font-medium tracking-wider border-2 border-red-400 text-red-400 rounded-full hover:text-white hover:bg-red-500">
                                Close
                            </button>



            </div>
        </div>

    </div>

</template>

<script>
export default {
    name: "Products",
    data() {
        return {
            products: [],
            page_from: 0,
            last_page: 0,
            current_page: 0,
            modalShow: false,
        }
    },
    mounted() {
        this.fetchProduct(1);
    },
    methods: {
        async DeleteProduct(product) {
            let conf = confirm("Are you sure you want to delete?");
            if (conf) {
                try {
                    await this.$store.dispatch('deleteProduct', product.id);
                    this.fetchProduct(this.current_page);
                    this.$toast.show('"' + product.name + '" Product Successfully Deleted.', {position:'top-right'});
                } catch (e) {
                    console.log(e);
                }
            }
        },
        async fetchProduct(page) {
            await axios.get('api/products?page=' + page).then(res => {
                this.products = res.data;
                this.page_from = this.products.meta.from;
                this.last_page = this.products.meta.last_page;
                this.current_page = this.products.meta.current_page;
            })
        },

        async addProduct() {
            await axios.post('/api/products', {name: this.products.name, price: this.products.price}).then(res=>{
                this.$toast.success('"' + this.products.name + '" Product added successfully', {position:'top-right'});

                this.fetchProduct(1);
                this.modalShow = false;
            }).catch(error=>{
                let err = Object.values(error.response.data.error);
                for(let i=0; i<err.length;i++){
                    this.$toast.show(err[i], {
                        type: "error",
                        position: 'top-right'
                        // all of other options may go here
                    });
                }
            })

        },
        closeModal(){
            this.products.name = null;
            this.products.price = '';
            this.modalShow = false;
        }


    }
}
</script>

<style scoped>

</style>
