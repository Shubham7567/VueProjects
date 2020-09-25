<template>
    <div>
        <h1>Hello From Home Component</h1>
        <h2>{{ data }}</h2>
        <button v-on:click="hello('hello called')">Call Hello Function</button>
    </div>
</template>
<script>
export default {
    name:'home',
    props:{
        data:String
    },
    methods:{
        hello(data){
            alert(data)
        }
    }
}
</script>