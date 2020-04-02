import Vue from 'vue'
import Router from 'vue-router'
import All from '@/components/all'
import Active from '@/components/active'
import Computed from '@/components/computed'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/all',
      name: 'All',
      component:All
    },
	{
		path: '/active',
		name: 'Active',
		component:Active
	},
	{
		path: '/computed',
		name: 'Computed',
		component:Computed
	},
	{
		path: '/',
		redirect: '/all'
	}
  ]
})
