<template>
  <div id="app">
    <GdlAppBar/>
    <v-app id="inspire">
      <v-main class="grey lighten-3">
        <router-view/>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import GdlAppBar from './components/gdl-appbars/GdlAppBar'

export default {
  name: 'App',
  components: {
    GdlAppBar
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
