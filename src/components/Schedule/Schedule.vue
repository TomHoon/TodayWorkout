<template>
  <v-alert v-show="alertError" type="error" variant="elevated" closable class="alertError">{{alertErrorMessage}}</v-alert>

  <div class="calendar-wrapper" v-show="true">
    <v-container>
      <v-row justify="space-around">
        <v-date-picker color="primary" title="Today Work out" v-model="reg_date" @input="onDateSelected"></v-date-picker>
      </v-row>
    </v-container>

    <div class="button-wrapper">
      <div class="pa-4 text-center">
        <PhotoModal :reg_date="reg_date"></PhotoModal>
        <img src="http://localhost:3300/uploads/인직맨.png" alt="">
      </div>
      <div class="pa-4 text-center">
        <v-btn @click="anothers"> 다른 사람들은? </v-btn>
      </div>
    </div>
    <Anothers v-show="false"></Anothers>
  </div>

</template>

<script>
import Anothers from './Anothers'
// import PhotoModal from './PhotoModal'
export default {
  data() {
    return {
      reg_date : null,
      alertError: false,
      alertErrorMessage: '',
    }
  },
  components: {
    Anothers
  },
  mounted() {

  },
  methods : {
    anothers() {
      const today = new Date();
      today.setDate(today.getDate() -1); // 오늘날짜도 선택 가능

      if(!this.reg_date) {
        // alert('날짜를 선택해주세요');
        this.alertErrorMessage = '날짜를 선택해주세요.';
        this.alertError = true; // v-alert창 띄우기
        setTimeout(() => {
          this.alertError = false;
        }, 2000);
        return false;
      }
      if(this.reg_date < today) {
        this.alertErrorMessage = '올바르지 않는 날짜입니다.';
        this.alertError = true; // v-alert창 띄우기
        setTimeout(() => {
          this.alertError = false;
        }, 2000);
        return false;

      }
      this.$router.push('/Anothers');

    },
    onDateSelected(date) {
      // 선택된 날짜 값을 저장
      this.reg_date = date;
    },
  }

}

</script>

<style>
.calendar-wrapper {
  width: 100vw;
  height: auto;
  margin: 0 auto;
}
.button-wrapper {
  display:flex;
  width: 100%;
  justify-content: center;
  gap: 15px;
  margin:15px auto;
}
.alertError {
  animation: fall 0.5s linear 1;
  transform: translate(-50%, -50%);
  position: fixed;
  top: 7%;
  left: 51%;
  z-index: 9999;
}
@keyframes fall {
  from {
    top: -90px;
  }
  to {
    transform: translate(-50%, -50%);
    position: fixed;
    top: 7%;
    left: 51%;
    z-index: 9999;
  }
}

</style>
