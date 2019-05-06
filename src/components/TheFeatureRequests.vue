<template>
  <div>
    <v-container
      fluid
      grid-list-md
      py-5
      px-5
    >
      <v-layout>
        <v-flex>
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
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>


<script>

import axios from 'axios';
import RequestsByClient from './RequestsByClient.vue';

export default {
  name: 'TheFeatureRequests',
  components: { RequestsByClient },
  data() {
    return {
      tab: null,
      clientName: 'Client A',
      clientRequests: [],
      tabNames: [
        'By Client', 'By Priority',
      ],
    };
  },
  mounted() {
    axios
      .get('http://localhost:8081/requests')
      .then((response) => {
        this.clientRequests = response.data;
      })
      .catch(error => console.log(error));
  },
};
</script>
<style>

</style>
