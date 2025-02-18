export default {
  namespaced: true,
  state: {
    lists: [],
    typeList: ["全部订单", "待支付", "待收货", "已完成"]
  },
  mutations: {
    add(state, obj) {
      state.lists.push(obj);
    },
    editId(state, obj) {
      for (let i = 0; i < obj.length; i++) {
        for (let j = 0; j < state.lists.length; j++) {
          if (obj[i].orderId == state.lists[j].orderId && obj[i].type == 6) {
            state.lists.splice(j, 1);
          } else if (obj[i].orderId == state.lists[j].orderId) {
            state.lists[j].type = obj[i].type;
          }
        }
      }
    }
  }
};
