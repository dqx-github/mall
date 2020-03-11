import Vue from "vue"
import VueRouter from "vue-router"

const Home = ()=> import('views/home/Home')
const Category = ()=> import('views/category/Category')
const My = ()=> import('views/my/My')
const ShopCart = ()=> import('views/shopcart/ShopCart')
const Detail = ()=> import('views/detail/Detail')

//注册组件
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shopcart',
    component: ShopCart
  },
  {
    path: '/my',
    component: My
  },
  {
    path: '/detail/:iid',
    component: Detail
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router