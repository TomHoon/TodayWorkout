<template>
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
    };
  },
  mounted() {},
  methods: {
    async uploadFile() {
      const formData = new FormData();
      const encoded_filename = encodeURI(this.$refs.fileUpload.files[0].name);

      formData.append('img', this.$refs.fileUpload.files[0],  encoded_filename);

      const res = await axios.post('http://localhost:3300/uploadFile', formData);
      console.log('file Result >>> ', res);
    }
  },
};
</script>
