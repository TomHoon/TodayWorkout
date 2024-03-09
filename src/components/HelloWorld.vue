<template>
  <div class="calendar-wrapper" v-show="false">
    <v-container>
      <v-row justify="space-around">
        <v-date-picker color="primary" title="Today Work out"></v-date-picker>
      </v-row>
    </v-container>

    <div class="button-wrapper">
      <v-btn> 운동완료 </v-btn>
      <v-btn> 다른 사람들은? </v-btn>
    </div>

    <Anothers v-show="false"></Anothers>

  </div>
</template>

<script>
import Anothers from './Anothers'
export default {
  components: {
    Anothers
  }

}

</script>

<style>
.calendar-wrapper{
  width: 100vw;
  height: auto;
  margin: 0 auto;
}
.button-wrapper {
  display:flex;
  width: 100%;
  height: auto;
  justify-content: center;
  gap: 15px;
  margin-top:15px;
}
</style>
