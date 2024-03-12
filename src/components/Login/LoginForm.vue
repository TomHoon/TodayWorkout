<template>
  <div class="select-wrapper" v-show="false">
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
        <v-btn class="login-btn"> 로그인 </v-btn>
    </div>
  </div>

  

</template>

<script>
export default {
  props: {},
  data() {
    return {
      members: ["Andy", "Mongz", "Gony", "Geogina", "Mingkey", "Tony"],
    };
  },
  mounted() {},
  methods: {
    updated(a) {
      console.log(a);
    },
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
