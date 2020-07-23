export default {
  namespaced: true,
  state: {
    lists: []
    // num: 0
  },
  mutations: {
    add(state, val) {
      state.lists.push(val);
      //  console.log(state.lists);
    }
  },
  actions: {},
  modules: {},
  getters: {}
};
