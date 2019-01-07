<template>
  <div class="searchWrapper">
    <h2>Add contact</h2>
    <form class="searchForm">
      <input
        v-model="newContact.name"
        class="input-contact"
        type="text"
        placeholder="Name"
        required
      >
      <input
        v-model="newContact.email"
        class="input-contact"
        type="text"
        placeholder="Email"
        required
      >
      <input v-model="newContact.street" class="input-contact" type="text" placeholder="Street">
      <input v-model="newContact.city" class="input-contact" type="text" placeholder="City">
      <input v-on:click="addContact" class="button submitButton" type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      newContact: {
        name: "",
        email: "",
        address: {
          street: "",
          city: ""
        }
      }
    };
  },
  methods: {
    addContact: function(e) {
      if (this.newContact.name.length > 3) {
        this.$emit("clicked", this.newContact);
        this.newContact = {
          name: "",
          email: "",
          address: {
            street: "",
            city: ""
          }
        };
      } else {
          alert('Name cannot be shorter than 3 letters');
      }
      e.preventDefault();
    }
  }
};
</script>

<style lang="scss" scoped>
.searchWrapper {
  height: 400px;
  background: white;
  display: flex;
  width: 100%;
  padding: 30px 30px;
  flex-direction: column;
  overflow: hidden;
  .input-contact {
    width: 100%;
    padding: 10px 25px;
    border: 2px solid #393f4d;
    border-radius: 25px;
    font-size: 1rem;
    box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.35);
  }
  h2 {
    margin-top: 0;
  }
}
.searchForm {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>