import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import '../node_modules/bootswatch/dist/solar/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import Vuex from 'vuex';
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Vuex);

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    teams: [],
    activeTeam: null,
    activeTeamPlayers: []
  },
  mutations: {
    setActiveTeam(state, teamName) {
      state.activeTeam = teamName;
      //console.log(state.activeTeam);
    },
    setTeams(state, teams) {
      state.teams = teams;
      //console.log(state.teams);
    },
    setActiveTeamPlayers(state, players) {
      state.activeTeamPlayers = players;
      //console.log(state.activeTeamPlayers);
    },
  },
  getters: {
    getActiveTeam(state) {
      return state.activeTeam;
    },
    getTeams(state) {
      return state.teams;
    },
    getActiveTeamPlayers(state) {
      return state.activeTeamPlayers;
    },
  }
});

new Vue({
  render: h => h(App),
  store: store,
}).$mount('#app')
