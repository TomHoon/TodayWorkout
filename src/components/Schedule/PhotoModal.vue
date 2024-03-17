<template>
  <v-alert v-show="alertError" type="error" variant="elevated" closable class="alertError">{{alertErrorMessage}}</v-alert>
  <v-alert v-show="alertSuccess" type="success" variant="elevated" closable class="alertSuccess">{{alertSuccessMessage}}</v-alert>
    <v-btn text="등록하기" @click="dialog = true"></v-btn>

    <v-dialog v-model="dialog" max-width="480">
      <v-card title="인증사진첨부">
        <template v-slot:text>
          <v-file-input type="file" label="File input" ref="fileUpload" accept="image/*" v-model="fileUpload"></v-file-input>
        </template>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="등록완료" variant="text" @click="uploadFile"></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>
<script>
import request from '@/api/index';

export default {
  data() {
    return {
      dialog: false,
      dialog2: false,
      alertError: false,
      alertSuccess: false,
      scheduleList: [],
      fileUpload: null,
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
  mounted() {
    console.log('>>> tiemstamp ', this.reg_date);
  },
  methods: {
    async uploadFile() {
      if(!this.reg_date) { // 날짜 미선택시 false
        alert('날짜를 선택해주세요');
        return;
      }

      const today = new Date();
      today.setDate(today.getDate() -1); // 오늘날짜도 선택 가능
      if(this.reg_date < today) { // 이전날짜 선택시 false
        this.alertErr('올바르지 않는 날짜입니다.');
        return;
      }

      if(!this.fileUpload || this.fileUpload === '') { // 사진 미등록시 false
        this.alertErr('사진을 등록 해주세요.');
        return;
      }
      
      // addSchedule 시작
      const formData = new FormData();
      const 확장자 = this.$refs.fileUpload.files[0].name.split('.')[1]
      const encoded_filename = new Date().getTime() + '.' + 확장자;
      formData.append('img', this.$refs.fileUpload.files[0],encoded_filename);
      formData.append('member_id', localStorage.getItem('member_id'));
      formData.append('reg_date', this.reg_date.getTime());

      const res = request.post('/schedule/addSchedule', formData);
      
      this.alertSuc('등록이 완료되었습니다.'); // 등록 성공시

      this.fileUpload = '';
      this.dialog = false;
    },

    alertErr(ErrorMessage) {
      this.alertErrorMessage = ErrorMessage;
      this.alertError = true; // v-alert창 띄우기
      setTimeout(() => { // 2초후에 닫기
        this.alertError = false;
      }, 2000);
    },
    alertSuc(SuccessMessage) {
      this.alertSuccessMessage = SuccessMessage;
      this.alertSuccess = true; // v-alert창 띄우기
      setTimeout(() => { // 2초후에 닫기
        this.alertSuccess = false;
      }, 2000);
    },
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
