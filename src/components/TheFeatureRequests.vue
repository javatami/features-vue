<template>
  <div>
         <v-tabs
                v-model="tab"
                color="cyan"
                align-with-title
        >
          <v-tabs-slider color="yellow"></v-tabs-slider>

          <v-tab v-for="name in tabNames" :key="name">
            {{ name }}
          </v-tab>
        </v-tabs>


    <v-tabs-items v-model="tab">
      <v-tab-item v-for="name in tabNames" :key="name">
        <v-card flat>
          <v-card-text><RequestsByClient></RequestsByClient></v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>


<script>

import RequestsByClient from './RequestsByClient.vue';

export default {
  name: 'TheFeatureRequests',
  components: { RequestsByClient },
  data() {
    return {
      tab: null,
      tabNames: [
        'By Client', 'By Priority',
      ],
    };
  },
};
</script>
