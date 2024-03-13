<template>
  <div class="select-wrapper" v-show="true">
    <v-select
      id="selection"
      label="Select"
      :items="members"
      bg-color="blue"
      item-color="blue"
      variant="solo-filled"
      @update:modelValue="updated"
    />
    <div class="btn-wrapper">
        <v-btn class="login-btn" @click="login"> 로그인 </v-btn>
    </div>
  </div>

  

</template>

<script>
import axios from 'axios';

export default {
  props: {},
  data() {
    return {
      members: '',
      membersInfo: [],
      selected: ''
    };
  },
  mounted() {
    this.getAllMembers();
  },
  methods: {
    updated(선택멤버) {
      this.selected = 선택멤버;
    },
    async getAllMembers() {
      const res = await axios.get('http://tomhoon.duckdns.org:13300/getMembers');
      this.membersInfo = res.data;
      this.members = res.data.map(item => item.member_id);
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
  /* width: 270px; */
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  width: 50%;
  height: 8.2rem;
}
</style>
