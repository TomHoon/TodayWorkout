<template>
  <div class="loginkeypad-page">
    <div class="code-wrap">
      <div class="code-area">
        <ul>
          <!-- 비번 미입력시 초기값 -->
          <li v-if="pressedPw.length == 0">
            <span style="color: gray; opacity: 0.3">****</span>
          </li>
          <!-- 비번 입력시 -->
          <li v-for="(pw, idx) in pressedPw" :key="idx">
            <span>*</span>
          </li>
        </ul>
        <br />
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

  <div class="login-btn">
    <v-btn @click="goLogin" variant="outlined" color="grey" size="large"> 로그인 </v-btn>
  </div>

  <v-alert
    v-show="alertError"
    type="error"
    variant="elevated"
    closable
    class="alertError"
    >
    {{ alertErrorMessage }}
  </v-alert>
</template>

<script>
import request from "@/api/index.js";

export default {
  data() {
    return {
      keys: [
        ["1", "2", "3"],
        ["4", "5", "6"],
        ["7", "8", "9"],
        ["R", "0", "DEL"],
      ],
      member: {},
      pressedPw: [],
      alertError: false,
      alertErrorMessage: "",
    };
  },
  props: {},
  mounted() {
    this.member = {
      member_id: localStorage.getItem("member_id"),
      member_pw: localStorage.getItem("member_pw")
    };
  },
  methods: {
    press(num) {
      if (num == "R") {
        this.pressedPw = [];
      } else if (num == "DEL") {
        this.pressedPw.pop();
      } else {
        this.pressedPw.push(num);
      }
    },
    async goLogin() {
      const 입력비번 = this.pressedPw.join("");
      const { member_pw: 진짜비번 } = this.member;

      if (!입력비번) {
        this.showAlert("비번을 입력하세요.");
        return;
      }

      if (!진짜비번) {
        const param = {
          member_id: this.member.member_id,
          member_pw: 입력비번,
        };

        const res = await request.post("/members/updatePw", param);
        this.$router.push("/schedule");
        return;
      }

      const isSame = this.compare(입력비번, 진짜비번);

      if (isSame) {
        this.$router.push("/schedule");
      } else {
        this.showAlert("비번이 올바르지 않습니다.");
      }
    },
    // TODO: 모듈화
    makeHash(password) {
      const salt = "workout";
      const salted = btoa(password + salt);
      return salted;
    },
    // TODO: 모듈화
    compare(password, hashed) {
      const target = this.makeHash(password);
      return target == hashed;
    },
    showAlert(msg) {
      this.alertErrorMessage = msg;
      this.alertError = true;
      
      setTimeout(() => {
        this.alertError = false;
      }, 2000);
    }
  },
};
</script>

<style scoped>
.loginform-page {
  height: 100%;
 display:flex;
 align-items: center;
}
.loginkeypad-page{position:relative;width:360px;height:480px;margin:0 auto}
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
  .loginkeypad-page{width:100%}
}


</style>
