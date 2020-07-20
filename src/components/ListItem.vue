<template>
<li class="list-item" @click.prevent="done = !done">
  <span :class="cross" v-if="!isEditing">{{text}}</span>
  <form class="form" @submit.prevent="onSubmit" v-else>
    <input type="text" v-model="newText" class="form-control">
  </form>
  <div class="list">
    <button class="btn btn-primary" type="button" @click="edit">Edit</button>
    <button class="btn btn-danger" type="button" @click="remove">Remove</button>
  </div>
</li>
</template>

<script>
export default {
  props: {
    text: String
  },
  data() {
    return {
      isEditing: false,
      newText: this.text,
      done: false
    }
  },
  computed: {
    cross() {
      return this.done ? 'cross' : '';
    }
  },
  methods: {
    remove() {
      this.$emit('remove')
    },
    edit() {
      this.isEditing = true
    },
    clickOutside(e) {
      if (!this.$el.contains(e.target) && this.isEditing) {
        this.onSubmit()
      }
    },
    onSubmit() {
      this.$emit('edit', this.newText);
      this.isEditing = false;
    }
  },
  created() {
    document.addEventListener('click', this.clickOutside);
    this.$on('hook:beforeDestroy', () => document.removeEventListener('click', this.clickOutside));
  },
}
</script>

<style scoped>
.list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.form {
  width: 375px;
}
.list {
  width: 150px;
}
.cross {
  text-decoration: line-through;
}
</style>
