new Vue({
    el: "#vue-app",
    data: {
        name: 'Shubham',
        job: 'Developer',
        age: 21
    },
    methods: {
        greet: function(time){
            return 'Good ' + time + ' ' + this.name;
        },
        increase: function(numbers) {
            this.age += numbers;
        },
        decrease: function(numbers) {
            this.age -= numbers;
        }
    }
});