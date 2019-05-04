<template>
    <div class="root">
        <SortableList lockAxis="y" v-model="items">
            <SortableItem v-for="(item, index) in items" :index="index" :key="index" :item="item"/>
        </SortableList>
    </div>
</template>

<script>
import { ContainerMixin, ElementMixin } from 'vue-slicksort';

const SortableList = {
  mixins: [ContainerMixin],
  template: `
    <ul class="list">
      <slot />
    </ul>
  `,
};

const SortableItem = {
  mixins: [ElementMixin],
  props: ['item'],
  template: `
    <li class="list-item">{{item}}</li>
  `,
};

export default {
  name: 'RequestsByClient',
  components: {
    SortableItem,
    SortableList,
  },
  data() {
    return {
      items: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5', 'Feature 6', 'Feature 7', 'Feature 8'],
    };
  },
};

</script>

<style scoped>

</style>
