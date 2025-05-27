<template>
  <div id="app">
    <h1>Welcome to the Vue Provider App</h1>
    <Button />
  </div>
</template>

<script>
import Button from './components/Button.vue';

export default {
  name: 'App',
  components: {
    Button
  }
};
</script>

<style>
@import './assets/styles.css';
</style>