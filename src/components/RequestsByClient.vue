<template>
  <div class="root">
    <SlickList lockAxis="y" v-model="currentClient.features">
      <SlickItem class="padded a-list-item" v-for="(feature) in currentClient.features"
                 :index="feature.priority"
                 :key="feature.priority">
        <div class="padded">{{ feature.title }}</div>
        <v-spacer></v-spacer>
      </SlickItem>
    </SlickList>
  </div>
</template>
<script>

import { SlickList, SlickItem } from 'vue-slicksort';


export default {
  name: 'RequestsByClient',
  components: {
    SlickItem,
    SlickList,
  },
  data() {
    return {
      currentClient: {
        name: 'Client A',
        features: [
          {
            title: 'Feature Title #1 for Client A',
            description: 'Feature Description #1 for Client A',
            priority: 1,
          },
          {
            title: 'Feature Title #2 for Client A',
            description: 'Feature Description #2 for Client A',
            priority: 2,
          },
        ],
      },
      clients: [
        {
          name: 'Client A',
          features: [
            {
              title: 'Feature Title #1 for Client A',
              description: 'Feature Description #1 for Client A',
              priority: 1,
            },
            {
              title: 'Feature Title #2 for Client A',
              description: 'Feature Description #2 for Client A',
              priority: 2,
            },
          ],
        },
        {
          name: 'Client B',
          features: [
            {
              title: 'Feature Title #1 for Client B',
              description: 'Feature Description #1 for Client B',
              priority: 1,
            },
            {
              title: 'Feature Title #2 for Client B',
              description: 'Feature Description #2 for Client B',
              priority: 2,
            },
          ],
        },
      ],
    };
  },
};

</script>
<style>
  .padded {
    padding: 10px;
    border: 2px black;
  }

  .a-list-item {
    display: block;
  }
</style>
