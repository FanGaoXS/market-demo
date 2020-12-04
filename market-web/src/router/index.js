// 引入vue以及vue-router插件
import Vue from 'vue';
import VueRouter from 'vue-router';

// 懒加载组件
const Home = () => import('views/home/Home');
const Category = () => import('views/category/Category');
const Cart = () => import('views/cart/Cart');
const Profile = () => import('views/profile/Profile');

// 全局使用vue-router插件
Vue.use(VueRouter);

// 实例化router
const router=new VueRouter({
  routes:[
    // 首页
    {
      path: '/',
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
      path: '/cart',
      component: Cart
    },
    {
      path: '/profile',
      component: Profile
    },
  ],
  mode: 'history'
});

export default router;

