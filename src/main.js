import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ECharts from 'vue-echarts' // refers to components/ECharts.vue in webpack
import 'echarts/lib/chart/bar'
import router from './router'
import './styles/global.less'

Vue.use(ElementUI)
Vue.component('v-chart', ECharts)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
