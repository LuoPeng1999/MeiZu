// 推荐
export default [
  {
    path: "/recommend",
    name: "推荐",
    component: () => import("../../views/recommend.vue")
  },
  {
    path: "/search",
    name: "搜索",
    component: () => import("../../views/search.vue")
  },
  {
    path: "/banner",
    name: "轮播图",
    component: () => import("../../views/banner.vue")
  },
  {
    path: "/meizu17",
    name: "魅族17",
    component: () => import("../../views/detail/meizu17.vue")
  },
  {
    path: "/meizu16t",
    name: "魅族16T",
    component: () => import("../../views/detail/meizu16t.vue")
  },
  {
    path: "/meizu17pro",
    name: "魅族17Pro",
    component: () => import("../../views/detail/meizu17pro.vue")
  },
  {
    path: "/cart",
    name: "购物车",
    component: () => import("../../views/cart.vue")
  },
  {
    path: "/order",
    name: "订单结算",
    component: () => import("../../components/cart/order.vue")
  },
  {
    path: "/rule",
    name: "抽奖规则",
    component: () => import("../../components/personal/rule.vue")
  }
];
