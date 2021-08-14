<template>
  <v-app-bar
    app
    color="white"
    flat
  >
    <v-avatar
      :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
      size="32"
    ></v-avatar>
    <v-row
      align="center"
      justify="space-around"
    >
      <v-btn depressed v-on:click="signIn">
        Connexion
      </v-btn>
    </v-row>
    <v-tabs
      centered
      class="ml-n9"
      color="grey darken-1"
      v-if="!isAdimPages"
    >
      <v-tab
        v-for="link in links"
        :key="link.item"
        :href="link.href"
      >
        {{ link.item }}
      </v-tab>
    </v-tabs>
  </v-app-bar>
</template>

<script>
export default {
  name: 'GdlAppBar',
  data: () => ({
    isSignIn: false,
    links: [
      {item: 'Dashboard', href: '/'}
    ],
    adminLinks: [
      {item: 'admin', href: '/'}
    ]
  }),
  computed: {
    isAdimPages: function () {
      let response = false

      if (this.$router) {
        response = this.$router.currentRoute.fullPath === '/admin'
      }

      return response
    }
  },
  mounted () {
    console.log('test : ', window.history, this.$router)
  },
  methods: {
    signIn: async function () {
      const googleUser = await this.$gAuth.signIn()
      this.isSignIn = this.$gAuth.isAuthorized
      console.log('test in signIn : ', googleUser)
    },
    signOut: async function () {
      const response = await this.$gAuth.signOut()
      console.log('test in signOut : ', response)
    }
  }
}
</script>

<style scoped>

</style>
