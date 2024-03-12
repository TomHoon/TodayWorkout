<template>
  <div class="login-container">
    <div class="login-wrapper">
      <div class="login-title">
        <h3>
          <span>Login</span>
        </h3>
      </div>
      <v-sheet width="500">
        <v-form fast-fail @submit.prevent>
          <v-text-field
            v-model="firstName"
            :rules="firstNameRules"
            label="ID"
          ></v-text-field>

          <v-text-field
            v-model="lastName"
            :rules="lastNameRules"
            label="PW"
          ></v-text-field>

          <v-btn class="mt-2" type="submit" block>
            <h3>
              <span>로그인</span>
            </h3>
          </v-btn>
          <v-btn class="mt-2" type="submit" block>
            <h3>
              <span>회원가입</span>
            </h3>
          </v-btn>
        </v-form>
      </v-sheet>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  background-image: url("../../wide.jpg");
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-wrapper {
  box-shadow: 0 8px 20px rgba(35, 0, 77, 0.2);
  padding: 40px 80px 50px;
  border-radius: 10px;
  background-image: url("../../wide.jpg");
}
.login-title {
  font-size: 30px;
  text-align: center;
  padding: 30px;
}
</style>
