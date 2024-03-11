<template>
  <div class="calendar-wrapper" v-show="true">
    <v-container>
      <v-row justify="space-around">
        <v-date-picker color="primary" title="Today Work out" v-model="reg_date"></v-date-picker>
      </v-row>
    </v-container>

    <div class="button-wrapper">
      <div class="pa-4 text-center">
        <PhotoModal></PhotoModal>
        <img src="http://localhost:3300/uploads/인직맨.png" alt="">
      </div>
      <div class="pa-4 text-center">
        <v-btn @click="AnothersPage"> 다른 사람들은? </v-btn>
      </div>
    </div>
    <Anothers v-show="false"></Anothers>
  </div>
</template>

<script>
import Anothers from './Anothers'
import PhotoModal from './PhotoModal'
export default {
  data() {
    return {
      reg_date : null,
    }
  },
  components: {
    Anothers
  },
  methods : {
    AnothersPage() {
      this.$router.push('/Anothers');
    }
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
