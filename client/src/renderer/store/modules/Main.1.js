const state = {
  tagstate: 'a'
};

const mutations = {
  SET_TAG(state) {
    state.tagstate.push(state) ;
  }
};

const actions = {
  someAsyncTask({ commit }) {
    // do something async
    commit('INCREMENT_TAG');
  }
};

export default {
  state,
  mutations,
  actions
};
