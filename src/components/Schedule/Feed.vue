<template>
  <div class="container">
    <div class="wrapper">
      <div class="card-area">
        <!-- 카드시작 -->
        <template v-if="hasFeddData">
          <div class="card" v-for="(item, idx) in feedData" :key="idx">
            <div class="card-top">
              <div class="top-left">
                <figure class="card-img">
                  <i class="fi fi-brands-snapchat"></i>
                </figure>
              </div>
              <div class="top-right">
                <span>{{ item.member_id }}</span>
              </div>
            </div>
            <div class="card-bottom">
              <div class="bottom-img-area">
                <template v-if="item.file_name">
                  <img
                    :src="`${defaultImgUrl}/${item.file_name}`"
                    alt=""
                    class="feed-img"
                    @click="크게보기(item)"
                  />
                </template>
                <template v-else>
                  <img src="../../wide.jpg" alt="" class="feed-img" />
                </template>
              </div>
              <div class="bottom-text-area">
                <span>오운완 완료!</span>
              </div>
            </div>
          </div>
        </template>

        <template v-else>
          <div class="no-member">
            <h3>인증 멤버 없음</h3>
          </div>
        </template>

        <!-- 카드끝 -->
      </div>
    </div>
  </div>
</template>
<script>
import request from "@/api/index";

export default {
  data() {
    return {
      defaultImgUrl: "",
      feedData: [],
    };
  },
  computed: {
    hasFeddData() {
      return this.feedData?.length != 0;
    },
  },
  async mounted() {
    const selected = localStorage.getItem("selectedDate");
    const 선택한날짜 = this.get날짜(selected);

    this.defaultImgUrl =
      import.meta.env.MODE == "dev"
        ? "http://localhost:3300"
        : "http://tomhoon.duckdns.org:13300";

    this.defaultImgUrl += "/uploads";

    const res = await request.get("/schedule");
    this.feedData = res.data.filter((item) => {
      return 선택한날짜 == this.get날짜(item.time_stamp);
    });
  },
  methods: {
    크게보기(item) {
      location.href = `${this.defaultImgUrl}/${item.file_name}`;
    },
    get날짜(timestamp) {
      const target = new Date(timestamp*1);
      
      const year = target.getFullYear();

      const month =
      target.getMonth() + 1 < 10
        ? "0" + (target.getMonth() + 1)
        : target.getMonth() + 1;

      const date =
        target.getDate() < 10 ? "0" + target.getDate() : target.getDate();

      return year + month + date;
    },
  },
};
</script>
<style scoped>
.container {
  width: 100%;
}
.wrapper {
  width: 80vw;
  margin: 0 auto;
  padding: 5px;
}
.card-area {
  display: flex;
  flex-direction: column;
}
.card {
  padding: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(147, 147, 147, 0.485);
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.card-top {
  display: flex;
}
.top-left {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.top-right {
  padding: 10px;
  flex-grow: 9;
}
.top-right span {
  color: #00d1b2;
}
.card-img img {
  height: 56px;
  widows: 56px;
  border-radius: 30px;
}
.feed-img {
  border-radius: 10px;
  width: 260px;
  height: 180px;
  object-fit: scale-down;
}
.bottom-text-area {
  padding: 10px;
}
.no-member {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
}
</style>
