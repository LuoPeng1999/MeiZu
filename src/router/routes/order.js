// 我的订单
export default [
  {
    path: "/orderlist",
    name: "我的订单",
    component: () => import("../../views/orderlist.vue"),
    children: [
      {
        path: "orderAll",
        name: "全部订单",
        component: () => import("../../components/orderlist/orderAll.vue")
      },
      {
        path: "orderPayment",
        name: "待付款",
        component: () => import("../../components/orderlist/orderPayment.vue")
      },
      {
        path: "orderReceipt",
        name: "待收货",
        component: () => import("../../components/orderlist/orderReceipt.vue")
      },
      {
        path: "orderAfterSale",
        name: "售后",
        component: () => import("../../components/orderlist/orderAfterSale.vue")
      }
    ]
  }
];
