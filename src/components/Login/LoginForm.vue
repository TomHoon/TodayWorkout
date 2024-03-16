<template>

  <div class="loginform-page">


    <div class="select-wrapper">
      <div class="running">
        <div class="outer">
          <div class="body">
            <div class="arm behind"></div>
            <div class="arm front"></div>
            <div class="leg behind"></div>
            <div class="leg front"></div>
          </div>
        </div>
      </div>

      <!-- <v-select
        id="selection"
        label="Select"
        :items="members"
        bg-color="blue"
        item-color="blue"
        item-title="name"
        variant="solo-filled"

        v-model="selected" 
      /> -->
      <v-select v-model="selected" :items="memberids" item-title="name" bg-color="grey" item-color="grey" label="Select"
        return-object single-line></v-select>
      <div class="btn-wrapper">
        <v-btn variant="tonal" @click="userLogin()">
          <!-- 2. 선택 후 비밀번호 설정이 되어있지 않다면 '로그인' 문구가 '비밀번호 설정' 문구로 변경 -->
          <template v-if="has비밀번호">
            LOGIN
          </template>
          <template v-else>
            비밀번호 설정
          </template>
        </v-btn>
      </div>
    </div>

  </div>

</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      selected: 'Today Work Out',
      memberids: [],
      members: []
    }
  },
  props: {},
  computed: {
    has비밀번호() {
      const 멤버 = this.members.find(member => member.member_id == this.selected);
      return !!멤버?.member_pw; 
    }
  },
  mounted() {
    this.setMembers();
  },
  methods: {
    userLogin() {
      const data = this.getOne멤버데이터(this.selected);
      localStorage.setItem('loginData', JSON.stringify(data));
      this.$router.push('/password');
    },
    async setMembers() {
      const host = process.env.NODE_ENV != 'development' ? 'http://tomhoon.duckdns.org:13300' : 'http://localhost:3300';
      const {data} = await axios.get(`${host}/members`);
      
      this.members = data;
      this.memberids = data.map(item => item.member_id);
    },
    getOne멤버데이터(아이디) {
      return this.members.find(member => member.member_id == 아이디);
    }
  },

};
</script>
<style lang="scss">
.btn-wrapper {
  display: flex;
  justify-content: center;
}

.select-wrapper {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  width: 50%;
  max-width: 400px;
  height: 8.2rem;
}

.loginform-page {
  height: 100%;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #FFF, #AFC6C6);
}


.running {
  position: absolute;
  top: -55px;
  left: 50%;
  --color: #8A91B4;
  --duration: .8s;
  transform: scale(var(--scale, 1));

  .outer {
    animation: outer var(--duration) linear;
    animation-iteration-count: 5;

    .body {
      background: var(--color);
      height: 15px;
      width: 8px;
      border-radius: 4px;
      transform-origin: 4px 11px;
      position: relative;
      transform: rotate(32deg);
      animation: body var(--duration) linear;
      animation-iteration-count: 5;

      &:before {
        content: '';
        width: 8px;
        height: 8px;
        border-radius: 4px;
        bottom: 16px;
        left: 0;
        position: absolute;
        background: var(--color);
      }

      .arm,
      .arm:before,
      .leg,
      .leg:before {
        content: '';
        width: var(--w, 11px);
        height: 4px;
        top: var(--t, 0);
        left: var(--l, 2px);
        border-radius: 2px;
        transform-origin: 2px 2px;
        position: absolute;
        background: var(--c, var(--color));
        transform: rotate(var(--r, 0deg));
        animation: var(--name, arm-leg) var(--duration) linear;
        animation-iteration-count: 5;
      }

      .arm {
        &:before {
          --l: 7px;
          --name: arm-b;
        }

        &.front {
          --r: 24deg;
          --r-to: 164deg;

          &:before {
            --r: -48deg;
            --r-to: -36deg;
          }
        }

        &.behind {
          --r: 164deg;
          --r-to: 24deg;

          &:before {
            --r: -36deg;
            --r-to: -48deg;
          }
        }
      }

      .leg {
        --w: 12px;
        --t: 11px;

        &:before {
          --t: 0;
          --l: 8px;
        }

        &.front {
          --r: 10deg;
          --r-to: 108deg;

          &:before {
            --r: 18deg;
            --r-to: 76deg;
          }
        }

        &.behind {
          --r: 108deg;
          --r-to: 10deg;
          --c: none;

          &:before {
            --c: var(--color);
            --r: 76deg;
            --r-to: 18deg;
          }

          &:after {
            content: '';
            top: 0;
            right: 0;
            height: 4px;
            width: 6px;
            clip-path: polygon(2px 0, 6px 0, 6px 4px, 0 4px);
            border-radius: 0 2px 2px 0;
            position: absolute;
            background: var(--color);
          }
        }
      }
    }
  }
}


@keyframes outer {
  50% {
    transform: translateY(0);
  }

  25%,
  75% {
    transform: translateY(4px);
  }
}

@keyframes body {
  50% {
    transform: rotate(16deg);
  }

  25%,
  75% {
    transform: rotate(24deg);
  }
}

@keyframes arm-leg {
  50% {
    transform: rotate(var(--r-to));
  }
}

@keyframes arm-b {

  30%,
  70% {
    transform: rotate(var(--r-to));
  }
}
</style>
