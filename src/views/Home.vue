<template>
  <div>
    <transition name="slide">
      <SearchBar v-if="searchBar==true" @clicked="addContact"></SearchBar>
    </transition>
    <div class="wrapper light">
      <Nav v-on:toggleSearchBar="searchBar = !searchBar" :pageTitle="pageTitle"></Nav>
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
export default {
  name: "Home",
  components: {
    Contacts,
    Nav,
    SearchBar
  },
  data() {
    return {
      pageTitle: "Connector",
      contacts: [],
      searchBar: false,
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
      this.saveContacts();
    },
    addToFavorited(value) {
      value.isFavorite = true;
      this.favoriteContacts.push(value);
    },
    unFavorited(value) {
      value.isFavorite = false;
      this.favoriteContacts.splice(this.contacts.indexOf(value), 1);
    },
    saveContacts() {
      let parsed = JSON.stringify(this.contacts);
      localStorage.setItem("contacts", parsed);
    }
  },

  mounted() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
      this.contacts = response.data;
      this.isLoading = true;
    }),
      error => {
        (this.isLoading = true), error;
      };
  },
  mounted() {
    if (localStorage.getItem("contacts")) {
      this.contacts = JSON.parse(localStorage.getItem("contacts"));
    }
  }
};
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: margin-top 0.5s ease;
}
.slide-enter,
.slide-leave-to {
  margin-top: -400px;
}
</style>