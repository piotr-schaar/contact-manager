<template>
  <nav class="nav">
    <h2 class="nav__header">{{pageTitle}}</h2>
    <div class="buttonWrapper">
      <button
        class="button button-addContact"
        v-on:click="$emit('toggleAddContactBar') "
        title="Add contact"
      ></button>
      <button
        class="button button-toFavorites"
        v-on:click="$emit('toggleFavoritesWrapper')"
        v-html="favoritedIcon"
        title="Favorites"
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
