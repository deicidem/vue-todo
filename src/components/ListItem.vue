<template>
<li class="list-item" @click.prevent="onDone">
  <span :class="cross" v-if="!isEditing">{{info.value}}</span>
  <form class="form" @submit.prevent="onSubmit" v-else>
    <input type="text" :value="info.value" @input="onInput" class="form-control">
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
    info: Object
  },
  data() {
    return {
      isEditing: false,
    }
  },
  computed: {
    cross() {
      return this.info.done ? 'cross' : '';
    }
  },
  methods: {
    onInput(e) {
      this.$emit('edit', e.target.value);
    },
    remove() {
      this.$emit('remove')
      this.isEditing = false;
    },
    edit() {
      this.isEditing = true
    },
    onDone(e) {
      if (e.target.tagName !== 'BUTTON' && !this.isEditing) {
        this.$emit('done', !this.info.done)
      }
    },
    clickOutside(e) {
      if (!this.$el.contains(e.target) && this.isEditing) {
        this.onSubmit()
      }
    },
    onSubmit() {
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
