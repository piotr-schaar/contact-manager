<template>
  <div class="favoriteWrapper">
    <div class="container">
      <button class="button button-return" v-on:click="$emit('toggleFavoritesWrapper')"></button>
      <ul class="list">
        <li class="item" v-for="contact in favoriteContacts" v-bind:key="contact.id">
          <div class="item__desc">
            <p class="item__para">
              <span class="name bold">{{contact.name}}</span>
            </p>
            <p class="item__para">
              <span class="bold">Mail:</span>
              {{contact.email}}
            </p>
            <p class="item__para">
              <span class="bold">Street:</span>
              {{contact.address.street}}
            </p>
            <p class="item__para">
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
</style>