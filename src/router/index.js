import Vue from 'vue'
import Router from 'vue-router'
import DataList from '@/views/DataList.vue'
import DataDetail from '@/views/DataDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/list/',
      component: DataList,
    },
    {
      path: '/detail/',
      component: DataDetail,
    }
  ]
})
