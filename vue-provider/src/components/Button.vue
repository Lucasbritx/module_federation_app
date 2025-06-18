<template>
  
  <button @click="handleClick">{{ label }}</button>
</template>

<script>
import store from "consumer/sharedStore";
export default {
  name: 'Button',
  props: {
    label: {
      type: String,
      default: 'Click Me'
    }
  },
  methods: {
    handleClick() {
      this.$emit('click');
      store.getState().increment();
    }
  }
}
</script>

<style scoped>
button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>