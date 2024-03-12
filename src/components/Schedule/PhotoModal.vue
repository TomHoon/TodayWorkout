<template>
  <v-alert v-show="alertDialog" type="error" variant="elevated" closable class="alertDialog"
           style="position: fixed; top: 10%; left: 51%; transform: translate(-50%, -50%); z-index: 9999 ">알럿창 입니다</v-alert>

    <v-btn text="등록하기" @click="dialog = true"></v-btn>

    <v-dialog v-model="dialog" max-width="480">
      <v-card title="인증사진첨부">
        <template v-slot:text>
          <v-file-input label="File input" ref="fileUpload"></v-file-input>
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
      alertDialog: false
    };
  },
  props: {
    reg_date: {
      type: Object,
      required: true
    }
  },
  mounted() {

  },
  methods: {
    async uploadFile() {
      // const formData = new FormData();
      // const encoded_filename = encodeURI(this.$refs.fileUpload.files[0].name);
      //
      // formData.append('img', this.$refs.fileUpload.files[0],  encoded_filename);
      //
      // const res = await axios.post('http://localhost:3300/uploadFile', formData);
      // console.log('file Result >>> ', res);
      if(!this.reg_date) {
        // alert('날짜를 선택해주세요');
        this.alertDialog = true; // v-alert창 띄우기
        return false;
      }
      const date = new Date(this.reg_date);
      const formattedDate = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()} ` ;
      console.log('getDate >>> ', formattedDate);
      this.alertDialog = false; // v-alert창 닫기
      this.dialog = false;
      location.reload();
    }
  },
};
</script>

<style>
.alertDialog {


}
@keyframes fall {
  from {
    top: -90px;
  }
  to {
    top: 0;
  }
}

</style>
