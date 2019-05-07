/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const getters = {
  clients: state => state.clients,
  clientNames: state => state.clients.clientName,
  features: state => state.featureRequests,
};

const mutations = {
  setClients(state, clients) {
    state.clients = clients;
  },
  setFeatureRequests(state, featureRequests) {
    state.featureRequests = featureRequests;
  },
  addFeatureRequest(state, featureRequest) {
    state.featureRequests.push(featureRequest);
  },
};
const actions = {
  setClients({ commit }, clients) {
    commit(setClients, clients);
  },
  setFeatureRequests({ commit }, featureRequests) {
    commit(setFeatureRequests, featureRequests);
  },
  saveFeatureRequest({ commit }, featureRequest) {
    commit(addFeatureRequest, featureRequest);
  },
};

const state = {
  clients: [],
  featureRequests: [],
};


export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
