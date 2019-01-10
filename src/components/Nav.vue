<template>
  <nav class="nav">
    <h2 class="page-header">{{pageTitle}}</h2>
    <div class="buttonWrapper">
      <button class="button addButton" v-on:click="$emit('toggleAddContactBar')"></button>
      <button
        class="button toFavoritesButton"
        v-on:click="$emit('toggleFavoritesWrapper')"
        v-html="favoritedIcon"
      ></button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  props: {
    pageTitle: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      favoritedIcon: `<svg class="heartIcon" style="height:25px;width:25px; fill:#393f4d;" viewBox="0 0 32 29.6">
          <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
          c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
        </svg> `
    };
  }
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0;
}
.page-header {
  color: #393f4d;
  font-size: 2em;
  margin: 0;
}
.buttonWrapper {
  display: flex;
}
.button {
  background: none;
  border: none;
  position: relative;
  width: 50px;
  height: 50px;
  &:focus {
    outline: none;
  }
  &.addButton {
    &:before,
    &:after {
      content: "";
      width: 25px;
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
  &.toFavoritesButton {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>