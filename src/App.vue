<template>
<div class="container">
  <h1 class="title">My to-dos</h1>
  <app-input @submit="add($event)"></app-input>
  <hr>
  <app-list></app-list>
</div>
</template>

<script>
import AppInput from './components/Input';
import AppList from './components/List';
import {mapActions} from 'vuex';

export default {
  components: {
    AppInput,
    AppList
  },
  methods: {
    ...mapActions(['add'])
  }
}
</script>

<style>
.title {
  margin: 50px 0;
}
.container {
  max-width: 800px;
}
</style>
