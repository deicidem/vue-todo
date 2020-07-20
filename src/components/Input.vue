<template>
  <form @submit.prevent="submit">
    <div class="input-group flex-nowrap">
      <div class="input-group-prepend">
        <button class="btn btn-success" :disabled="!isCorrect">Add</button>
      </div>
      <input type="text" class="form-control" v-model="value" placeholder="Task">
    </div>
    
  </form>
</template>

<script>



export default {
  data() {
    return {
      value: ''
    }
  },
  computed: {
    isCorrect() {
      return /.+/.test(this.value)
    }
  },
  methods: {
    submit() {
      this.$emit('submit', this.value);
      this.value = '';
    }
  }
}
</script>