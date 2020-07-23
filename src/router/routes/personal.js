// 个人中心
export default [
  {
    path: "/personal",
    name: "个人中心",
    component: () => import("../../views/personal.vue")
  },
  {
    path: "/login",
    name: "登录",
    component: () => import("../../components/personal/login.vue")
  },
  {
    path: "/register",
    name: "注册",
    component: () => import("../../components/personal/register.vue")
  },
  {
    path: "/collect",
    name: "我的收藏",
    component: () => import("../../components/personal/collect.vue")
  },
  {
    path: "/envelope",
    name: "红包",
    component: () => import("../../components/personal/envelope.vue")
  },
  {
    path: "/coupon",
    name: "优惠券",
    component: () => import("../../components/personal/coupon.vue")
  },
  {
    path: "/news",
    name: "消息",
    component: () => import("../../components/personal/news.vue")
  },
  {
    path: "/products",
    name: "产品",
    component: () => import("../../components/personal/products.vue")
  },
  {
    path: "/flyme",
    name: "Flyme",
    component: () => import("../../components/personal/flyme.vue")
  },
  {
    path: "/cloud",
    name: "云服务",
    component: () => import("../../components/personal/cloud.vue")
  },
  {
    path: "/special",
    name: "云服务",
    component: () => import("../../components/personal/special.vue")
  },
  {
    path: "/mcode",
    name: "M码通道",
    component: () => import("../../components/personal/mcode.vue")
  },
  {
    path: "/telfind",
    name: "手机号查询订单",
    component: () => import("../../components/personal/telfind.vue")
  },
  {
    path: "/tradein",
    name: "以旧换新",
    component: () => import("../../components/personal/tradein.vue")
  },
  {
    path: "/fast",
    name: "百城速达",
    component: () => import("../../components/personal/fast.vue")
  },
  {
    path: "/contact",
    name: "联系客服",
    component: () => import("../../components/personal/contact.vue")
  },
  {
    path: "/feedback",
    name: "意见反馈",
    component: () => import("../../components/personal/feedback.vue")
  },
  {
    path: "/problem",
    name: "账号问题",
    component: () => import("../../components/personal/problem.vue")
  },
  {
    path: "/repaylist",
    name: "我的回购单",
    component: () => import("../../components/personal/repaylist.vue")
  },
  {
    path: "/repaygold",
    name: "我的回购金",
    component: () => import("../../components/personal/repaygold.vue")
  }
];
