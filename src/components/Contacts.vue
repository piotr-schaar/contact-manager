<template>
  <transition-group name="list-complete" tag="ul" class="list">
    <li class="item list-complete-item" v-for="contact in contacts" v-bind:key="contact.id">
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

      <div class="buttonWrapper">
        <button class="button button-delete" v-on:click="deleteContact(contact)"></button>
        <button
          class="button button-addToFavorite"
          v-on:click="clickedFavorite(contact)"
          v-html="favoritedIcon"
          v-bind:class="getClass(contact)"
        ></button>
      </div>
    </li>
  </transition-group>
</template>

<script>
export default {
  name: "Contacts",
  props: {
    contacts: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      favoritedIcon: `<svg class="heart" viewBox="0 0 32 29.6">
          <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
          c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
        </svg> `
    };
  },
  methods: {
    getClass(contact) {
      return {
        active: contact.isFavorite,
        noActive: !contact.isFavorite
      };
    },
    deleteContact: function(contact) {
      this.$emit("deleted", contact);
    },
    clickedFavorite: function(contact) {
      if (contact.isFavorite == false) {
        this.$emit("favorited", contact);
      } else {
        this.$emit("unFavorited", contact);
      }
    }
  },
  mounted() {}
};
</script>

<style lang="scss">

</style>