import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// 引入全局样式
import "./assets/css/base.css";

// 引入阿里矢量图样式
import "./assets/font/iconfont.css";

// 引入vant组件库
import Vant from "vant";
import "vant/lib/index.css";
import { Popup } from "vant";
import { Sku } from "vant";
import { Area } from "vant";
import { Tab, Tabs } from "vant";
import { Checkbox, CheckboxGroup } from "vant";
import { Col, Row } from "vant";
import { Image as VanImage } from "vant";
import { Dialog } from "vant";
Vue.use(Dialog);
import { Collapse, CollapseItem } from "vant";
import { Rate } from "vant";
import { ShareSheet } from "vant";
Vue.use(ShareSheet);
Vue.use(Rate);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(VanImage);
Vue.use(Col);
Vue.use(Row);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Area);
Vue.use(Popup);
Vue.use(Vant);
Vue.use(Sku);

// 引入swiper插件
import "swiper/css/swiper.min.css";

// 引入axios
import axios from "axios";
// axios.defaults.baseURL = "http://127.0.0.1:3000/";
Vue.prototype.$axios = axios;

// 引入swiper样式
import "swiper/css/swiper.min.css";

// 引入vue-jsonp
import VueJsonp from "vue-jsonp";
Vue.use(VueJsonp);
// Vue.prototype.$jsonp = VueJsonp;

// vue 中引入font-awesome图标
import "font-awesome/css/font-awesome.min.css";

// 引入animate.css类
import animated from "animate.css";
Vue.use(animated);

// vue自定义指令
Vue.directive("class", {
  inserted: function(el, binding) {
    // 聚焦元素
    binding.addClass = () => {
      const { top } = el.getBoundingClientRect();
      const h =
        document.documentElement.clientHeight || document.body.clientHeight;
      if (top < h) {
        el.className = binding.value;
        if (binding.addClass) {
          window.removeEventListener("scroll", binding.addClass);
        }
      }
    };

    window.addEventListener("scroll", binding.addClass);

    binding.addClass();
  },
  unbind: function(el, binding) {
    if (binding.addClass) {
      window.removeEventListener("scroll", binding.addClass);
      console.log("取消事件绑定");
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
