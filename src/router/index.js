import Vue from 'vue'
import VueRouter from 'vue-router'

const HomePage = ()=> import('views/homepage/HomePage') 
const DomesticNodel = ()=> import('views/domestic/DomesticNodel') 
const ForeignNodel = ()=> import('views/foreign/ForeignNodel') 
const MyStore = ()=> import('views/mystore/MyStore')
const About = ()=> import('views/about/About')

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		redirect: '/homepage'
	},
	{
		path: '/homepage',
		component: HomePage
	},
	{
		path: '/domestic',
		component: DomesticNodel
	},
	{
		path: '/foreign',
		component: ForeignNodel
	},
	{
		path: '/mystore',
		component: MyStore
	},
	{
		path: '/about',
		component: About
	}
]

const router = new VueRouter({
	routes,
	mode: 'history'
})

export default router;