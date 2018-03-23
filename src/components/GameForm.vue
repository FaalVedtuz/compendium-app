<template>
  <div>

      <v-layout align-content-center justify-center justify-space-around>
        <!-- Mobile -->
        <v-flex class="hidden-sm-and-down" xs10 >

          <v-card>
            <v-container grid-list-xl>  
              <v-form >
                <v-text-field label="Record Name" v-model="name" :rules="gameNameRules" required></v-text-field>
              </v-form>
            </v-container>
          </v-card>

        </v-flex>
        <!-- Desktop -->
        <v-flex class="hidden-md-and-up" xs10 >

            <v-container grid-list-xl>  
              <v-form>
                <v-text-field label="Record Name" v-model="name" :rules="gameNameRules" required></v-text-field>
                <v-text-area label="Description" v-model="description" ></v-text-area>
                <v-btn block color="primary">
                  ADD
                </v-btn>
              </v-form>
            </v-container>
         
        </v-flex>
        
      </v-layout>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      description: '',
      gameNameRules: [
        v => !!v || 'Name is required'
      ]
    }
  }
}
</script>


