<template>
  <v-alert v-show="alertError" type="error" variant="elevated" closable class="alertError">{{alertErrorMessage}}</v-alert>
  <v-alert v-show="alertSuccess" type="success" variant="elevated" closable class="alertSuccess">{{alertSuccessMessage}}</v-alert>
    <v-btn text="등록하기" @click="dialog = true"></v-btn>

    <v-dialog v-model="dialog" max-width="480">
      <v-card title="인증사진첨부">
        <template v-slot:text>
          <v-file-input label="File input" ref="fileUpload" v-model="fileUpload"></v-file-input>
        </template>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="등록완료" variant="text" @click="uploadFile"></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      dialog: false,
      dialog2: false,
      alertError: false,
      alertSuccess: false,
      scheduleList: [],
      fileUpload: '',
      alertErrorMessage: '',
      alertSuccessMessage: '',
    };
  },
  props: {
    reg_date: {
      type: Object,
      required: true
    }
  },
  mounted() {},
  methods: {
    async uploadFile() {
      // const formData = new FormData();
      // const encoded_filename = encodeURI(this.$refs.fileUpload.files[0].name);
      //
      // formData.append('img', this.$refs.fileUpload.files[0],  encoded_filename);
      //
      // const res = await axios.post('http://localhost:3300/uploadFile', formData);
      // console.log('file Result >>> ', res);

      if(!this.reg_date) { // 날짜 미선택시 false
        alert('날짜를 선택해주세요');
        return false;
      }

      const today = new Date();
      today.setDate(today.getDate() -1); // 오늘날짜도 선택 가능
      if(this.reg_date < today) { // 이전날짜 선택시 false
        this.alertErrorMessage = '올바르지 않는 날짜입니다.';
        this.alertError = true; // v-alert창 띄우기
        setTimeout(() => { // 2초후에 닫기
          this.alertError = false;
        }, 2000);
        return false;
      }

      if(!this.fileUpload) {
        this.alertErrorMessage = '사진을 입력해 주세요.';
        this.alertError = true; // v-alert창 띄우기
        setTimeout(() => { // 2초후에 닫기
          this.alertError = false;
        }, 2000);
        return false;
      }
      this.alertSuccessMessage = '등록이 완료되었습니다.';
      this.alertSuccess = true; // v-alert창 띄우기
      setTimeout(() => { // 2초후에 닫기
        this.alertSuccess = false;
      }, 2000);
      const date = new Date(this.reg_date);
      const formattedDate = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()} ` ;
      console.log('getDate >>> ', formattedDate);
      this.dialog = false;
    }
  },
};
</script>

<style scoped>
.alertError {
  animation: fall 0.5s linear 1;
  transform: translate(-50%, -50%);
  position: fixed;
  top: 7%;
  left: 51%;
  z-index: 9999;
}
.alertSuccess {
  animation: fall 0.5s linear 1;
  transform: translate(-50%, -50%);
  position: fixed;
  top: 7%;
  left: 51%;
  z-index: 9999;
}
@keyframes fall {
  from {
    top: -50px;
  }
  to {
    transform: translate(-50%, -50%);
    position: fixed;
    top: 7%;
    left: 51%;
  }
}
</style>
