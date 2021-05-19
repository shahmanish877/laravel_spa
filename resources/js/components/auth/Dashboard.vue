<template>
    <div class="container mx-8 my-8 bg-white rounded-2xl">
        <div class="bg-green-100 p-8 rounded-tr-2xl">
            <h1 class="">{{user.name}} - {{user.email}}</h1>
        </div>
        <div class="p-8">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad culpa, delectus fuga harum illo, ipsam, iure laboriosam laudantium minima modi non numquam optio praesentium quas quasi quisquam quod repellat reprehenderit sequi suscipit ut veniam vero! Eaque necessitatibus nesciunt perferendis reiciendis?</p>
            <br>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque cumque deleniti dolore doloremque dolorum eveniet in nam, nulla numquam odio odit perferendis quaerat ratione repellendus saepe sunt temporibus vel?</p>
        </div>

    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    name: "Dashboard",

    data(){
        return{
            //user: ''
        }
    },
    computed: {
        /* moved to action signin in store
        axios.get('/api/user')
        .then(res=>{
            console.log(res);
            this.user = res.data;
        }).catch(err=>{
            console.log(err);
        })*/

        //this.user = this.$store.state.user;

        ...mapGetters(['user'])
    }
}
</script>

