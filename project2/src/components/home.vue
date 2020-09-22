<template>
    <div>
        <h1>Hello From Home Component</h1>
        <h2>{{ data }}</h2>
        <button v-on:click="hello">Call Hello Function</button>
    </div>
</template>
<script>
export default {
    name:'home',
    props:{
        data:String
    },
    methods:{
        hello(){
            console.log("Hello , welcome in console")
        }
    }
}
</script>