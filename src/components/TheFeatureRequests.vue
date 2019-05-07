<template>
  <div>
    <v-container
      fluid
      grid-list-md
      py-5
      px-5
    >
      <v-layout  align-center>
        <v-btn color="primary"
               round
               dark
               align-center
               @click="dialog=true">Add New Client Request</v-btn>
        <v-flex>
          <br />
      <v-card>
        <v-card-text>
          <v-tabs fixed-tabs>
            <v-tab v-for="name in tabNames" :key="name">
        {{ name }}
      </v-tab>
    </v-tabs>
        </v-card-text>
      </v-card>
      <v-card>
        <v-card-title><h3>Client: </h3> {{ clientName }}</v-card-title>
        <v-tabs-items v-model="tab">
      <v-tab-item v-for="name in tabNames" :key="name">
        <v-card flat>
          <v-card-text>
            <RequestsByClient></RequestsByClient>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
      </v-card>
          <v-dialog v-model="dialog" persistent max-width="500px" @close="dialog = false;">
            <v-card>
              <v-card-text>
                <AddFeatureRequest isVisible="showDialog"></AddFeatureRequest>
              </v-card-text>
            </v-card>
          </v-dialog>

        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>


<script>

import { mapGetters, mapActions } from 'vuex';
import RequestsByClient from './RequestsByClient.vue';
import AddFeatureRequest from './AddFeatureRequest.vue';
import { fetchClients, fetchFeatureRequests } from '../api/featureRequest';

export default {
  name: 'TheFeatureRequests',
  components: { AddFeatureRequest, RequestsByClient },
  data() {
    return {
      tab: null,
      clientName: 'Client A',
      clientRequests: [],
      dialog: false,
      tabNames: [
        'By Client', 'By Priority', 'By Product Area',
      ],
    };
  },
  computed: {
    ...mapGetters([
      'clients',
      'featureRequests',
    ]),
  },
  methods: {
    ...mapActions([
      'setClients',
      'setFeatureRequests',
    ]),
  },
  async mounted() {
    try {
      this.setClients(await fetchClients());
    } catch (error) {
      console.log(error);
    }
    try {
      this.setFeatureRequests(await fetchFeatureRequests());
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
<style>

</style>
