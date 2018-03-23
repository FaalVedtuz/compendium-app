<template>
  <div id="emptyPage">

    <v-container align-center text-xs-center>
      <v-layout>
        <v-flex>

             <h1 dark>Sad, no records yet...</h1>
             <v-btn to="/AddGame" dark color="red">
                 ADD
             </v-btn>

        </v-flex>
      </v-layout>
    </v-container>

  </div>
</template>


<script>

export default {

}
</script>


<style scoped>
    #emptyPage {
        height: 100%;
        background-color:#cecaca;
    }
</style>
