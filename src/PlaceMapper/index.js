var Vue = require('vue');
var Map = require('./map.vue');

new Vue({
    el: 'body',
    components:{
        map: Map
    },
    data:{
        message: 'This is loaded from index.js!!!'
    }
});
