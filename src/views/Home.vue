<template>
  <div>
    <transition name="slideTop">
      <AddContact v-if="addContactBar==true" @clicked="addContact"></AddContact>
    </transition>
    <transition name="slideRight">
      <Favorites
        :favoriteContacts="favoriteContacts"
        v-if="FavoritesWrapper == true"
        v-on:toggleFavoritesWrapper="FavoritesWrapper = !FavoritesWrapper"
      ></Favorites>
    </transition>

    <div class="wrapper">
      <div class="container">
        <Nav
          v-on:toggleAddContactBar="addContactBar = !addContactBar"
          v-on:toggleFavoritesWrapper="FavoritesWrapper = !FavoritesWrapper"
          :pageTitle="pageTitle"
        ></Nav>
        <Contacts
          :contacts="contacts"
          @deleted="deleteContact"
          @favorited="addToFavorited"
          @unFavorited="unFavorited"
        ></Contacts>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Nav from "@/components/Nav.vue";
import Contacts from "@/components/Contacts.vue";
import AddContact from "@/components/AddContact.vue";
import Favorites from "@/components/Favorites.vue";
export default {
  name: "Home",
  components: {
    Contacts,
    Nav,
    AddContact,
    Favorites
  },
  data() {
    return {
      pageTitle: "Connector",
      contacts: [],
      addContactBar: false,
      FavoritesWrapper: false,
      isLoading: false,
      error: null,
      favoriteContacts: []
    };
  },
  methods: {
    toggleBar() {
      this.addContactBar = true;
      console.log(this.addContactBar);
    },
    addContact(value) {
      this.contacts.unshift(value);
      this.saveContacts();
    },
    deleteContact(value) {
      this.contacts.splice(this.contacts.indexOf(value), 1);
      this.favoriteContacts.splice(this.contacts.indexOf(value), 1);
      this.saveContacts();
      this.saveFavoriteContacts();
    },
    addToFavorited(value) {
      value.isFavorite = true;
      this.favoriteContacts.push(value);
      this.saveContacts();
      this.saveFavoriteContacts();
    },
    unFavorited(value) {
      value.isFavorite = false;
      let index = this.favoriteContacts.findIndex(o => o.id === value.id);
      if (index !== -1) this.favoriteContacts.splice(index, 1);
      this.saveContacts();
      this.saveFavoriteContacts();
    },
    saveContacts() {
      let parsed = JSON.stringify(this.contacts);
      localStorage.setItem("contacts", parsed);
    },
    saveFavoriteContacts() {
      let parsed = JSON.stringify(this.favoriteContacts);
      localStorage.setItem("favoriteContacts", parsed);
    }
  },

  mounted() {
    if (localStorage.getItem("contacts")) {
      this.contacts = JSON.parse(localStorage.getItem("contacts"));
    }
    if (localStorage.getItem("favoriteContacts")) {
      this.favoriteContacts = JSON.parse(
        localStorage.getItem("favoriteContacts")
      );
    }
  }
};
</script>

<style>
.slideTop-enter-active,
.slideTop-leave-active {
  transition: margin-top 0.5s ease;
}
.slideTop-enter,
.slideTop-leave-to {
  margin-top: -400px;
}
.slideRight-enter-active,
.slideRight-leave-active {
  transition: all 0.3s ease;
}

.slideRight-enter,
.slideRight-leave-to {
  transform: translateX(100vh);
  opacity: 0;
}
</style>