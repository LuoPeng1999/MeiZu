import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import recommend from "./routes/recommend";
import phone from "./routes/phone";
import acoustics from "./routes/acoustics";
import fitting from "./routes/fitting";
import life from "./routes/life";
import customer from "./routes/customer";
import address from "./routes/address";
import order from "./routes/order";
import personal from "./routes/personal";

const routes = [
  {
    path: "/",
    redirect: "/recommend"
  },
  ...recommend, // 推荐
  phone, // 手机
  acoustics, // 声学
  fitting, // 配件
  life, // 生活
  customer, // 客服
  ...address, // 地址
  ...order, // 订单
  ...personal // 个人中心
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active"
});

export default router;
