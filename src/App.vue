<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat:300,400,600,800");
* {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  body {
    font-family: "Montserrat", sans-serif;
    margin: 0;
    padding: 0;
  }
}
$color1: #feda6a;
$color2: #393f4d;
.container {
  padding: 0 30px;
  margin: 0;
  @media (min-width: 1024px) {
    margin: 0 auto;
    width: 1024px;
    padding:30px 15px;
  }
}
.wrapper {
  display: flex;
  min-height: 100vh;
  width: 100%;
  flex-direction: column;
  overflow: hidden;
  background: $color1;
}
</style>

