import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// 搜索记录
import search from "./search";
import cart from "./cart";
import order from "./order";
import address from "./address";
import collect from "./collect";

export default new Vuex.Store({
  state: {
    username: null, // 用户名
    orderactive: 0 // 订单活动下标
  },
  mutations: {},
  actions: {},
  modules: {
    search, // 搜索记录
    cart, // 购物车 详情页|购物车
    order, // 订单数据
    address, // 地址
    collect // 收藏
  }
});
