import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'//引入组件
import Film from '@/components/film'
import Card from '@/components/card'
import ComingSoon from '@/components/comingsoon'
import NowPlaying from '@/components/nowplaying'
import Detail from '@/components/detail'

Vue.use(Router)//使用路由

export default new Router({
  mode:"history",//history模式(没有#)
  routes: [//一级路由
    {
		 path:"/home",
		 component:Home,
		 name:"home"//命名路由
    },
	{
		path:"/film",
		component:Film,
		
		children:[//二级路由
			{
				path:"nowplaying",
				component:NowPlaying
			},
			{
				path:"comingsoon",
				component:ComingSoon
			},
			{//重定向
				path:"/film",
				redirect:"/film/nowplaying"//根据路径重定向
			}
		]
	},
	{
		path:"/card",
		component:Card
	},
	{
	    path:"/detail/:id",//动态路由匹配/:id占位符
		component:Detail
	},
	{//路由重定向
		path:"/",
		redirect:{name:"home"}//根据名字重定向
	}
  ]
})
