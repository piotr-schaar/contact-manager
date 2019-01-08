<template>
  <div>
    <transition name="slideTop">
      <SearchBar v-if="searchBar==true" @clicked="addContact"></SearchBar>
    </transition>
    <transition name="slideRight">
      <Favorite
        :favoriteContacts="favoriteContacts"
        v-if="FavoritesWrapper == true"
        v-on:toggleFavoritesWrapper="FavoritesWrapper = !FavoritesWrapper"
      ></Favorite>
    </transition>

    <div class="wrapper light">
      <Nav
        v-on:toggleSearchBar="searchBar = !searchBar"
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
</template>

<script>
import axios from "axios";
import Nav from "@/components/Nav.vue";
import Contacts from "@/components/Contacts.vue";
import SearchBar from "@/components/SearchBar.vue";
import Favorite from "@/components/Favorite.vue";
export default {
  name: "Home",
  components: {
    Contacts,
    Nav,
    SearchBar,
    Favorite
  },
  data() {
    return {
      pageTitle: "Connector",
      contacts: [],
      searchBar: false,
      FavoritesWrapper: false,
      isLoading: false,
      error: null,
      favoriteContacts: []
    };
  },
  methods: {
    toggleBar() {
      this.searchBar = true;
      console.log(this.searchBar);
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
      this.favoriteContacts.splice(this.contacts.indexOf(value), 1);
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