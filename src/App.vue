<template>
  <v-app>

    <v-navigation-drawer :value="drawerState" app clipped>
      <v-list>
        <v-subheader>Games</v-subheader>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon color="green">mdi-view-module</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Skyrim</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-icon>mdi-chevron-right</v-icon>
          </v-list-tile-action>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon color="green">mdi-view-module</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dragon's Dogma</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-icon>mdi-chevron-right</v-icon>
          </v-list-tile-action>
        </v-list-tile>
        <v-divider inset></v-divider>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app clipped-left>
      <v-toolbar-side-icon @click="drawerState = !drawerState"></v-toolbar-side-icon>
      <v-toolbar-title>Compendium</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>
          Log In
        </v-btn>
        <v-btn flat>
          Account
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items class="hidden-md-and-up">
        <v-btn flat icon>
          <v-icon>mdi-login</v-icon>
        </v-btn>
        <v-btn flat icon>
          <v-icon>mdi-account-circle</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>

  </v-app>
</template>

<script>
export default {

  mounted () {
    this.$nextTick(function () {
      window.onresize = this.getWidth
    })
  },

  computed: {

  },

  data () {
    return {
      drawerState: true
    }
  },

  methods: {
    getWidth () {
      if (document.documentElement.clientWidth < 1025) {
        this.drawerState = !this.drawerState
      }
    }
  }
}
</script>



