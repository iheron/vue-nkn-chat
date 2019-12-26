<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <nkn-chat title="TITLE" topic="ncdn-group.ncdn-group.24e9f5fb662931f93763a6ff40e58dba385159e9316141532f8b70645c643947"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
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
