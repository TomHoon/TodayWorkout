<template>
  <div class="loginkeypad-page">
    <div class="code-wrap">
      <div class="code-area">
        <ul>
          <li>*</li>
          <li>*</li>
          <li>*</li>
          <li>*</li>
          <li>*</li>
        </ul>
        <br />
      </div>
      <div class="login-btn">
        <v-btn> 로그인 </v-btn>
      </div>
    </div>
    <div class="keypad-wrapper">
      <div class="key-row">
        <div class="key-cell">
          <button>1</button>
        </div>
        <div class="key-cell">
          <button>2</button>
        </div>
        <div class="key-cell">
          <button>3</button>
        </div>
      </div>
      <div class="key-row">
        <div class="key-cell">
          <button>4</button>
        </div>
        <div class="key-cell">
          <button>5</button>
        </div>
        <div class="key-cell">
          <button>6</button>
        </div>
      </div>
      <div class="key-row">
        <div class="key-cell">
          <button>7</button>
        </div>
        <div class="key-cell">
          <button>8</button>
        </div>
        <div class="key-cell">
          <button>9</button>
        </div>
      </div>
      <div class="key-row">
        <div class="key-cell">
          <button>R</button>
        </div>
        <div class="key-cell">
          <button>0</button>
        </div>
        <div class="key-cell">
          <button>DEL</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    let a = localStorage.getItem('loginData');
    console.log('a >>> ', a);
  },
  props: {
    member_id: {
      type: String
    }
  },
  data() {
    return {};
  },
  methods: {
    clicked() {
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
