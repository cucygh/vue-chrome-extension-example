var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("\n.vue{\n  color: #fff;\n  display: block;\n  text-align: center;\n}\n")
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  data: function data() {
    return {
      title: 'Vue.js'
    };
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"vue\">{{title}}</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["\n.vue{\n  color: #fff;\n  display: block;\n  text-align: center;\n}\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-94c1f22a", module.exports)
  } else {
    hotAPI.update("_v-94c1f22a", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}