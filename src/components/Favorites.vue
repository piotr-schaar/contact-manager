<template>
  <div class="favoriteWrapper">
    <div class="container">
      <button class="button returnButton" v-on:click="$emit('toggleFavoritesWrapper')"></button>
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
    width: 15px;
    height: 15px;
    background: none;
    position: relative;
    border: solid #393f4d;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
  }
}
</style>