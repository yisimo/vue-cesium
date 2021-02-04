import Vue from 'vue'
import App from './App.vue'

//引入cesium相关文件
var cesium = require('cesium/Cesium')
var widgets= require('cesium/Widgets/widgets.css')
 
Vue.prototype.cesium = cesium
Vue.prototype.widgets = widgets


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
