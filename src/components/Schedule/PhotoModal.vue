<template>
    <v-btn text="등록하기" @click="dialog = true"></v-btn>

    <v-dialog v-model="dialog" max-width="480">
      <v-card title="인증사진첨부">
        <template v-slot:text>
          <v-file-input label="File input"></v-file-input>
        </template>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="등록완료" variant="text" @click="dialog = false"></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      dialog2: false,
    };
  },
  mounted() {},
  methods: {},
};
</script>
