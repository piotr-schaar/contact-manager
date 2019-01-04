<template>
  <div class="wrapper light">
    <Nav v-on:toggleSearchBar="toggleBar" :pageTitle="pageTitle"></Nav>
    <SearchBar v-if="searchBar==true"></SearchBar>
    <Contacts :contacts="contacts"></Contacts>
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
      searchBar: false
    };
  },
  methods: {
    toggleBar() {
      this.searchBar = true;
      console.log(this.searchBar)
    }
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => (this.contacts = response.data));
  }
};
</script>

<style scoped>
</style>