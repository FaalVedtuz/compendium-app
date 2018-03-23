<template>
  <v-app>

    <v-navigation-drawer :value="drawer" app clipped>
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
      
      <v-toolbar-side-icon @click.stop="changeDrawerState()"></v-toolbar-side-icon>
      <v-toolbar-title>Compendium</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- Desktop -->
      <v-toolbar-items class="hidden-sm-and-down">
        <v-menu offset-y>
          <v-btn flat color="primary" slot="activator">
            Account
          </v-btn>
          <v-list>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Settings</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Logout</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar-items>
      <!-- Mobile -->
      <v-toolbar-items class="hidden-md-and-up">
        <v-menu offset-y>
          <v-btn flat icon color="primary" slot="activator">
            <v-icon>mdi-account-circle</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Settings</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Logout</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar-items>

    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>

    <!-- <v-btn color="primary" absolute bottom right fab>
      <v-icon>add</v-icon>
    </v-btn> -->

  </v-app>
</template>



<script>
import { mapGetters, mapActions } from 'vuex'

export default {

  // mounted () {
  //   this.$nextTick(function () {
  //     window.onresize = this.getWidth
  //   })
  // },

  computed: {

    ...mapGetters('miscmodule', {
      drawer: 'getDrawerState'
    })

  },

  data () {
    return {

    }
  },

  methods: {
    // getWidth () {
    //   if (this.$vuetify.breakpoint.name === 'md') {
    //     console.log('triggered')
    //     this.closeDrawer()
    //   }
    // },

    ...mapActions('miscmodule', [
      // 'closeDrawer',
      'changeDrawerState'

    ])
  }
}
</script>



