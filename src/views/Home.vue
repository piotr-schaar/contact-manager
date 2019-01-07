<template>
  <div>
    <transition name="slide">
      <SearchBar v-if="searchBar==true" @clicked="addContact"></SearchBar>
    </transition>
    <div class="wrapper light">
      <Nav v-on:toggleSearchBar="searchBar = !searchBar" :pageTitle="pageTitle"></Nav>
      <Contacts :contacts="contacts"></Contacts>
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
      error: null
    };
  },
  methods: {
    toggleBar() {
      this.searchBar = true;
      console.log(this.searchBar);
    },
    addContact(value) {
        this.contacts.push(value)
    }
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        this.contacts = response.data;
        this.isLoading = true;
      }),
      error => {
        this.isLoading = true,
        error
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