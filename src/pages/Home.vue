<template>
  <div>
    <GdlAppBar/>
    <v-app id="inspire">
      <v-main class="grey lighten-3">
        <div>
          <h1>Home page</h1>
        </div>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import GdlAppBar from '../components/gdl-appbars/GdlAppBar'

export default {
  name: 'Home',
  components: {
    GdlAppBar
  }
}
</script>

<style scoped>

</style>
