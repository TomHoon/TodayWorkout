<template>
  <!-- <div class="container">
    <div class="room-wrapper">
      <div class="msg-container">
        <input type="text" class="msg-box" v-model="message">
        <button @click="sendMessage">전송</button>
      </div>
      <ul class="msg-area">
        <li :class="{ar: item.user == 'tomhoon'}" v-for="(item, idx) in messages" :key="idx">
          {{item.user}} : {{item.message}}
        </li>
      </ul>
    </div>
  </div> -->
  <div class="container">
    <div class="text-area">
      <input type="text" style="margin-right:10px" ref="chatInput" v-model="message" @keyup.enter="sendMessage">
      <v-btn @click="sendMessage">전송</v-btn>
    </div>
    <div class="message-area" ref="messageArea">
      <ul class="msg-ul">
        <li :class="{ar: item.member_id == user}" v-for="(item, idx) in messages" :key="idx">
          {{item.member_id}} : {{item.message}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import io from "socket.io-client";
import request from '@/api/index';

export default {
  mounted() {
    this.setChatMsg();
    this.user = localStorage.getItem("member_id");
    this.socket.on("MESSAGE", (data) => {
      const newMsg = {
        member_id: data.user,
        message: data.message
      };
      this.messages = [...this.messages, newMsg];
      this.setScrollBottom();
      // you can also do this.messages.push(data)
    });
  },
  data() {
    return {
      user: "",
      message: "",
      messages: [],
      socket: io("http://tomhoon.duckdns.org:13300"),

      /**
       * 개발용
       */
      // socket: io("http://localhost:3300"),
    };
  },
  methods: {
    sendMessage(e) {
      e.preventDefault();
      this.socket.emit("SEND_MESSAGE", {
        user: this.user,
        message: this.message,
      });
      this.message = "";

      this.$refs.chatInput.focus();

      this.setScrollBottom();
    },
    async setChatMsg() {
      const { data } = await request.get('/chat');
      this.messages = data;
    },
    async setScrollBottom() {
      const 메세지영역 = this.$refs.messageArea;

      if (!메세지영역) return;
      
      const 높이 = 메세지영역?.scrollHeight;
      
      setTimeout(() => {
        메세지영역.scrollTop = 높이*1.5;
      }, 200);
    }
  },
};
</script>
<style scoped>
input {
  outline: none;
  border-bottom: 1px solid rgba(117, 117, 117, 0.681);
}
.container {
  display:flex;
  /* justify-content: center; */
  align-items: center;
  padding:10px;
  flex-direction: column;
  height: 100%;
}
.msg-ul {
  list-style: none;
}
.text-area {
  padding-top: 20px;;
  /* flex:1; */
}
.message-area {
  margin-top: 10px;
  /* flex:9; */
  max-width: 500px;
  width: 100%;
  height: 100%;
  max-height: 400px;
  border: 1px solid rgba(0, 0, 0, 0.516);
  padding:10px;
  border-radius: 10px;
  overflow: scroll;
}
/* .container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.room-wrapper {
  width: 40%;
  border: 1px solid rgb(114, 114, 114);
  border-radius: 10px;
  padding: 10px;
  height: 80%;
}
.msg-area {
  list-style: none;
}
.msg-area li{
  font-size:20px;
}
.al {
  text-align: left;
}
.ar {
  text-align: right;
}
.msg-container {
  display: flex;
  justify-content: center;
  gap: 10px;
}
.msg-box {
  border:1px solid black;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  width: 300px;
  padding:5px;
} */
.al {
  text-align: left;
}
.ar {
  text-align: right;
}
</style>
