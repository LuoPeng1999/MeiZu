export default {
  namespaced: true,
  state: {
    lists: []
  },
  mutations: {
    add(state, obj) {
      state.lists.push(obj);
    },
    del(state, obj) {
      var index = state.lists.findIndex(() => {
        for (let i = 0; i < state.lists.length; i++) {
          console.log(obj.name);
          console.log(state.lists[i].name);
          return obj.name == state.lists[i].name;
        }
      });
      state.lists.splice(index, 1);
    }
  }
};
