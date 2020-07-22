import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export const store = new Vuex.Store({
  state: {
    list: []
  },
  getters: {
    list(state) {
      return state.list;
    }
  },
  mutations: {
    add(state, value) {
      state.list.push({value, done: false});
    },
    remove(state, index) {
      state.list.splice(index, 1);
    },
    edit(state, data) {
      state.list[data.index].value = data.value;
    },
    done(state, data) {
      state.list[data.index].done = data.value;
    }
  },
  actions: {
    add(store, value) {
      store.commit('add', value);
    },
    remove(store, index) {
      store.commit('remove', index);
    },
    edit(store, data) {
      store.commit('edit', data);
    },
    done(store, data) {
      store.commit('done', data);
    }

  }
});