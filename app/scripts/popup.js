var Vue = require('vue');
var hello= require('../component/hello.js');

var app=new Vue({
  el:'#app',
  data:{
    name:'vue-chrome-extension'
  },
  components:{
    hello:hello
  }
})

console.log(Vue.version);
