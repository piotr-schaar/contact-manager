<template>
  <div class="addContactWrapper">
    <h2>Add contact</h2>
    <form class="addContactForm">
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
      <input v-model="newContact.address.street" class="input-contact" type="text" placeholder="Street">
      <input v-model="newContact.address.city" class="input-contact" type="text" placeholder="City">
      <input v-on:click="addContact" class="button submitButton" type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
export default {
  name: "AddContact",
  data() {
    return {
      newContact: {
        id: "",
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
.addContactWrapper {
  height: 400px;
  background: white;
  display: flex;
  width: 100%;
  padding: 30px 30px;
  flex-direction: column;
  overflow: hidden;
  .input-contact {
    width: 100%;
    padding: 10px 25px 10px 15px;
    font-size: 1rem;
  }
  h2 {
    margin-top: 0;
    color: #393f4d;
  }
}
.button {
  padding: 15px 10px;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  &.submitButton {
    background: #393f4d;
    color: white;
  }
}
.addContactForm {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>