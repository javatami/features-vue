<template>
  <div class="root">
    <SlickList lockAxis="y" v-model="items">
      <SlickItem class="padded a-list-item" v-for="(item, index) in items" :index="index" :key="index">
        <div class="padded">{{ item }}</div>
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
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8'],
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
