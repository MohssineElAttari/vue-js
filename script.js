new Vue({
    el: '#app',
    data: {
        message: "bright coding with Mohssine el attari",
        instructor: "Mohssine elttari"
    },
    methods: {
        hey: function() {
            return `salam my there developers, welcome to ${this.message}`;
        }
    }
})