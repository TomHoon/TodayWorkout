<template>
  <div class="list-wrapper">
    <v-card class="mx-auto" id="list-card" max-width="600px">
      <v-list lines="two">
        <v-list-subheader>Today</v-list-subheader>

        <v-list-item
          prepend-avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg"
          title="회원아이디"
        >
          <template v-slot:subtitle>
            <div class="dummy-photo">
              사진
            </div>
          </template>
        </v-list-item>

        <v-divider inset></v-divider>
        <v-list-item
          prepend-avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg"
          title="회원아이디"
        >
          <template v-slot:subtitle>
            <div class="dummy-photo">
              사진
            </div>
          </template>
        </v-list-item>

        <v-divider inset></v-divider>
        <v-list-item
          prepend-avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg"
          title="회원아이디"
        >
          <template v-slot:subtitle>
            <div class="dummy-photo">
              사진
            </div>
          </template>
        </v-list-item>

        <v-divider inset></v-divider>
        <v-list-item
          prepend-avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg"
          title="회원아이디"
        >
          <template v-slot:subtitle>
            <div class="dummy-photo">
              사진
            </div>
          </template>
        </v-list-item>

        <v-divider inset></v-divider>
        <v-list-item
          prepend-avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg"
          title="회원아이디"
        >
          <template v-slot:subtitle>
            <div class="dummy-photo">
              사진
            </div>
          </template>
        </v-list-item>

        <v-divider inset></v-divider>

      </v-list>
    </v-card>
  </div>
</template>

<style scoped>
#list-card {
  overflow: scroll;
  height: 500px;
}
.list-wrapper {
    position: absolute;
    top: 30px;
    width: 87%;
    margin: 0 auto;
    left: 30px 
}
.dummy-photo {
  width:200px;
  height: 200px;
  border:1px solid black;
  border-radius: 10px;
}
</style>
