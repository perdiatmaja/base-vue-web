import Vue from 'vue'
import Vuex from 'vuex';
import State from 'Store/state'
import Mutation from 'Store/mutation'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
    state: State,
    plugins: [createPersistedState()],
    mutations: Mutation
});
