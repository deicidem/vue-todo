<template>
  <div>
    <ul class="list-group">
      <list-item 
        v-for="(item, index) in list"
        :key="index"
        class="list-group-item"
        :text="item.value"
        @remove="remove()"
        @edit="edit({index, value: $event})"
        >

      </list-item>
    </ul>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
import ListItem from './ListItem';
export default {
  computed: {
    ...mapGetters(['list'])
  },
  components: {
    ListItem
  },
  methods: {
    ...mapActions(['edit', 'remove'])
  }
}
</script>

<style >
  .list-group {
    width: 600px;
  }
</style>