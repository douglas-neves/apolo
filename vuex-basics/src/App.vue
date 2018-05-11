<template>
  <div id="app">
    <h3>Increment:</h3>
    <increment></increment>
    <h3>Counter:</h3>
    <counter></counter>
  </div>
</template>

<script>
import Increment from './components/IncrementButton';
import Counter from './components/CounterDisplay';
export default {
  name: 'App',
  components: {
    Increment,
    Counter,
  },
  events: {
    'button-pressed': function() {
      this.$broadcast('increment');
    },
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
