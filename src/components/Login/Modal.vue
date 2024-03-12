<template>
  <div class="modal">
    <div class="overlay" @click="closeModal"></div>
    <div class="modal-card">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    closeModal() {
        this.$emit('closeModal');
    }
  }
};
</script>
<style>
.modal,
.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
}
.overlay {
  opacity: 0.5;
  background-color: black;
}
.modal-card {
  position: relative;
  max-width: 60%;
  margin: auto;
  margin-top: 30px;
  padding: 20px;
  background-color: white;
  min-height: 80%;
  z-index: 10;
  opacity: 1;
  border-radius: 10px;
  box-shadow:0 2px 3px 0 rgba(34, 36, 38, 0.15);
}
</style>
