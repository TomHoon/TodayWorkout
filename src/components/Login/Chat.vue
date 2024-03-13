<template>
  <div class="container">
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
  </div>
</template>
<script>
import io from "socket.io-client";
import axios from "axios";

export default {
  async mounted() {
    this.socket.on("MESSAGE", (data) => {
      this.messages = [...this.messages, data];
      console.log("mesage >> ", data);
      // you can also do this.messages.push(data)
    });
  },
  data() {
    return {
      user: "",
      message: "",
      messages: [],
      socket: io("http://tomhoon.duckdns.org:13300"),
    };
  },
  methods: {
    sendMessage(e) {
      e.preventDefault();
      this.socket.emit("SEND_MESSAGE", {
        user: "tomhoon",
        message: this.message,
      });
      this.message = "";
    },
  },
};
</script>
<style scoped>
.container {
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
}
</style>
