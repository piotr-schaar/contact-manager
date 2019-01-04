<template>
  <div>
    <h2 v-text="pageTitle"></h2>
   <Contacts :contacts=contacts ></Contacts>
  </div>
</template>

<script>
import axios from "axios";
import Contacts from "@/components/Contacts.vue"
 export default {
  name: "Home",
  components: {
      Contacts,
  },
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