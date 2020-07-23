export default {
  namespaced: true, // 命名空间
  state: {
    lists: [], // 购物车数据列表
    num: 0 // 商品数量
  },
  mutations: {
    add(state, item) {
      let index = state.lists.findIndex(value => value.id == item.id);
      if (index != "-1") {
        // 存在数量+1
        state.lists[index].num += 1;
        state.num = state.lists[index].num; // 修改数量
      } else {
        item.isSelect = true; // 默认选中
        state.lists.push(item);
        state.num = 1; // 数量
      }
    },
    edit(state, obj) {
      Object.assign(state.lists, obj);
    }
  }
};
