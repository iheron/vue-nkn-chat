<template>
  <div id="app">
    <permission-control/>
    <nkn-chat lang="en" title="Customer Support Service" welcome="Hi, this is NKN's community support team. How are you today and what can we help?" send-label="Send" topic="test.24e9f5fb662931f93763a6ff40e58dba385159e9316141532f8b70645c643947"/>
  </div>
</template>

<script>

import PermissionControl from './components/PermissionControl.vue'

export default {
  name: 'app',
  components: {
    PermissionControl
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
