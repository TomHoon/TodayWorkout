<template>

    <div class="select-wrapper">

      <v-select
        v-model="selected"
        :items="memberids"
        item-title="name"
        label="Select"
        return-object
        no-line
      ></v-select>
      <div class="btn-wrapper">
        <v-btn variant="outlined" color="grey" @click="userLogin()">
          <!-- 2. 선택 후 비밀번호 설정이 되어있지 않다면 '로그인' 문구가 '비밀번호 설정' 문구로 변경 -->
          <template v-if="has비밀번호"> LOGIN </template>
          <template v-else> 비밀번호 설정 </template>
        </v-btn>
      </div>
    </div>

</template>

<script>
import request from "@/api/index.js";

export default {
  data() {
    return {
      selected: "Today Work Out",
      memberids: [],
      members: [],
    };
  },
  props: {},
  computed: {
    has비밀번호() {
      const 멤버 = this.members.find(
        (member) => member.member_id == this.selected
      );
      return !!멤버?.member_pw;
    },
  },
  mounted() {
    this.setMembers();
  },
  methods: {
    userLogin() {
      const data = this.getOne멤버데이터(this.selected);
      localStorage.setItem("member_id", data.member_id);
      localStorage.setItem("member_pw", data.member_pw);

      this.$router.push("/password");
    },
    async setMembers() {
      const { data } = await request.get('/members');
      this.members = data;
      this.memberids = data.map((item) => item.member_id);
    },
    getOne멤버데이터(아이디) {
      return this.members.find((member) => member.member_id == 아이디);
    },
    login() {
      const 멤버정보 = this.membersInfo.filter(멤버 => {
        return 멤버.member_id == this.selected;
      })
      this.$router.push({ name: 'Password', params: {} });
    }
  },
};
</script>
<style scoped>
.btn-wrapper {
  display: flex;
  justify-content: center;
}
.select-wrapper {
  margin: auto;
  width: 50%;
  max-width: 400px;
  height: 8.2rem;
  font-family: 'Consolas';
}
/* -- iPad Screen -- */
@media only screen and (min-width: 480px) and (max-width: 768px) {

}

/* -- iPhone Screen -- */
@media only screen and (max-width: 479px) {

  .select-wrapper{
    width:90%
  }


}


</style>
