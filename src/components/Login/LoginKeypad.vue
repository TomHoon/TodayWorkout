<template>
  <div class="loginkeypad-page">
    <div class="code-wrap">
      <div class="code-area">
        <ul>
          <!-- 비번 미입력시 초기값 -->
          <li v-if="pressedPw.length == 0">
            <span style="color:gray; opacity: 0.3;">****</span>
          </li>
          <!-- 비번 입력시 -->
          <li v-for="(pw, idx) in pressedPw" :key="idx">
              <span>*</span>
          </li>
        </ul>
        <br />
      </div>
      <div class="login-btn">
        <v-btn @click="goLogin"> 로그인 </v-btn>
      </div>
    </div>
    <div class="keypad-wrapper">
      <div class="key-row" v-for="(item, idx) in keys" :key="idx">
        <div class="key-cell" v-for="sub in item" :key="sub">
          <button @click.prevent="press(sub)">{{ sub }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keys: [
        ['1', '2', '3'],
        ['4', '5', '6'],
        ['7', '8', '9'],
        ['R', '0', 'DEL'],
      ],
      member: {},
      pressedPw: []
    };
  },
  props: {
  },
  mounted() {
    this.member = localStorage.getItem('loginData');
  },
  methods: {
    press(num) {
      if (num == 'R') {
        this.pressedPw = [];
      } else if (num == 'DEL') {
        this.pressedPw.pop();
      } else {
        this.pressedPw.push(num);
      }
    },
    goLogin() {
      const 입력비번 = this.pressedPw.join('');
      const {member_pw: 진짜비번} = this.member;
      
      if (입력비번 == 진짜비번 || !진짜비번) {
        this.$router.push('/schedule');
      } else {
        alert('비번이 올바르지 않습니다.');
      }
    }
  },
};
</script>

<style scoped>
.loginkeypad-page{position:relative;max-width:400px;height:100%;margin:0 auto}
.code-wrap {
  height: 70%;
}
.code-area {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40%;
  /* margin-top:30px; */
}
.code-area ul {
  list-style: none;
  font-size: 50px;
}
.code-area ul li {
  float: left;
  margin-left: 3px;
}
.keypad-wrapper {
  position: absolute;
  bottom: 40px;
  width: 100%;
  height: auto;
}
.key-row {
  display: flex;
  justify-content: center;
  line-height: 50px;
  height: 80px;
  font-size: 30px;
}
.key-cell {
  flex: 1;
  text-align: center;
  height: 30px;
}
.login-btn {
  width: 100%;
  text-align: center;
}
.key-cell > button {
  transition-duration: 0.3s;
}
.key-cell > button:active {
  margin-left: 15px;
  margin-top: 15px;
  box-shadow: none;
}

@media screen and (max-width:723px){

}
</style>
