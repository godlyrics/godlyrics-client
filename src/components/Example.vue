<template>
  <GDLSERVICE>
    <v-app id="inspire">
      <v-app-bar
        app
        color="white"
        flat
      >
        <v-avatar
          :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
          size="32"
        ></v-avatar>

        <v-tabs
          centered
          class="ml-n9"
          color="grey darken-1"
        >
          <v-tab
            v-for="link in links"
            :key="link"
          >
            {{ link }}
          </v-tab>
        </v-tabs>

        <v-avatar
          class="hidden-sm-and-down"
          color="grey darken-1 shrink"
          size="32"
        ></v-avatar>
      </v-app-bar>
      <v-main class="grey lighten-3">
        <img src="./assets/logo.png">
        <v-container>
          <v-row>
            <v-col
              cols="12"
              sm="2"
            >
              <v-sheet
                rounded="lg"
                min-height="268"
              >
                <!--  -->
              </v-sheet>
            </v-col>

            <v-col
              cols="12"
              sm="8"
            >
              <v-sheet
                min-height="70vh"
                rounded="lg"
              >
                <!--  -->
              </v-sheet>
            </v-col>

            <v-col
              cols="12"
              sm="2"
            >
              <v-sheet
                rounded="lg"
                min-height="268"
              >
                <!--  -->
              </v-sheet>
            </v-col>
          </v-row>
        </v-container>
        <div>
          <v-alert
            border="top"
            color="red lighten-2"
            dark
          >
            I'm an alert with a top border and red color
          </v-alert>
          <v-alert
            border="right"
            color="blue-grey"
            dark
          >
            I'm an alert with a right border and blue-grey color
          </v-alert>
          <v-alert
            border="bottom"
            color="pink darken-1"
            dark
          >
            I'm an alert with a bottom border and pink color
          </v-alert>
          <v-alert
            border="left"
            color="indigo"
            dark
          >
            I'm an alert with a border left type info
          </v-alert>
        </div>
      </v-main>
    </v-app>
  </GDLSERVICE>
</template>

<script>
import apimixin from "./../mixins/apimixin"
import ExampleMixin from "./../mixins/ExampleMixin"
import {testMethod} from '../utilityfunction/example'
import GDLSERVICE from "../services/components/gdl-service"

export default {
  mixins: [apimixin, ExampleMixin],
  components : {
    GDLSERVICE
  },
  methods: {
    testMethod,
    decrement() {
      this.count--
    }
  },
  data: () => ({
    links: [
      'Dashboard',
      'Messages',
      'Profile',
      'Updates'
    ]
  })
}
</script>
