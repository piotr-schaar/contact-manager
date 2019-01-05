<template>
  <nav class="nav">
    <h2 class="page-header">{{pageTitle}}</h2>
    <button class="add" v-on:click="$emit('toggleSearchBar')"></button>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  props: {
    pageTitle: {
      type: String,
      required: true
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.page-header {
  color: #393f4d;
}
.add {
  background: none;
  border: none;
  position: relative;
  width: 35px;
  height: 35px;
  &:focus {
    outline: none;
  }
  &:before,
  &:after {
    content: "";
    width: 80%;
    position: absolute;
    height: 5px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #393f4d;
    border-radius: 25px;
  }
  &:before {
    transform: translate(-50%, -50%) rotate(90deg);
  }
}
</style>