import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions';
import mutations from './mutations';
import state from './state';
import getters from './getters';

Vue.use(Vuex)

export default new Vuex.Store({
  strict: (process.env.NODE_ENV != 'production'), // Strict mode makes sure that we don't change the state directly from a component/instance (by throwing an error), and only change state through actions and mutations
  state,
  mutations,
  actions,
  getters
})
