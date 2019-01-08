<template>
  <div class="favoriteWrapper">
    <button class="button returnButton" v-on:click="$emit('toggleFavoritesWrapper')">X</button>
    <ul class="list">
      <li class="item" v-for="contact in favoriteContacts" v-bind:key="contact.name">
        <div class="item__desc">
          <p class="paragraph">
            <span class="bold">{{contact.name}}</span>
          </p>
          <p class="paragraph">
            <span class="bold">Mail:</span>
            {{contact.email}}
          </p>
          <p class="paragraph">
            <span class="bold">Street:</span>
            {{contact.address.street}}
          </p>
          <p class="paragraph">
            <span class="bold">City:</span>
            {{contact.address.city}}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Favorite",
  props: {
    favoriteContacts: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.favoriteWrapper {
  background: white;
  display: flex;
  position: absolute;
  width: 100vw;
  height: 100%;
  z-index: 999;
  padding: 30px 30px;
  flex-direction: column;
  overflow: hidden;
  .input-contact {
    width: 100%;
    padding: 10px 25px 10px 15px;
    font-size: 1rem;
  }
  .returnButton {
    color: #393f4d;
    background: none;
    border: none;
    display: flex;
    font-size: 18px;
    width: 35px;
    height: 35px;
  }
}
</style>