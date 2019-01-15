<template>
  <div class="addContact container">
    <p class="addContact__title">Add contact</p>
    <form class="addContact__form">
      <input
        v-model="newContact.name"
        class="addContact__input"
        type="text"
        placeholder="Name"
        required
      >
      <input
        v-model="newContact.email"
        class="addContact__input"
        type="text"
        placeholder="Email"
        required
      >
      <input
        v-model="newContact.address.street"
        class="addContact__input"
        type="text"
        placeholder="Street"
      >
      <input v-model="newContact.address.city" class="addContact__input" type="text" placeholder="City">
      <input v-on:click="addContact" class="button button-submit" type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
import { uuid } from "vue-uuid";
export default {
  name: "AddContact",
  data() {
    return {
      newContact: {
        id: uuid.v1(),
        name: "",
        email: "",
        address: {
          street: "",
          city: ""
        },
        isFavorite: false
      }
    };
  },
  methods: {
    addContact: function(e) {
      if (this.newContact.name.length > 3) {
        this.$emit("clicked", this.newContact);
        this.newContact = {
          id: uuid.v1(),
          name: "",
          email: "",
          address: {
            street: "",
            city: ""
          }
        };
      } else {
        alert("Name cannot be shorter than 3 letters");
      }
      e.preventDefault();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>