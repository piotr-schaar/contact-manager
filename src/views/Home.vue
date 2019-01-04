<template>
  <div>
    <h2 v-text="pageTitle"></h2>
    <ul>
        <li v-for="contact in contacts" v-bind:key="contact.id">
            <p>{{contact.name}}</p>
            <p>Mail: {{contact.email}}</p>
            <p>Street: {{contact.address.street}}</p>
            <p>City: {{contact.address.city}}</p>
        </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      pageTitle: "Connector",
      contacts: []
    };
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