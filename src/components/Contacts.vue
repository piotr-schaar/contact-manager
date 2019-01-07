<template>
  <ul class="list">
    <li class="item" v-for="contact in contacts" v-bind:key="contact.id">
      <div class="item__desc">
        <p class="paragraph">
          <span class="bold">{{contact.name}}</span>
        </p>
        <p class="paragraph">
          <span class="bold">Mail:</span>
          {{contact.email}}
        </p>
        <p class="paragraph">
          <span class="bold">Street:</span>
          {{contact.address.street}}
        </p>
        <p class="paragraph">
          <span class="bold">City:</span>
          {{contact.address.city}}
        </p>
      </div>

      <div class="buttonWrapper">
        <button class="button deleteButton" v-on:click="deleteContact(contact)">X</button>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Contacts",
  props: {
    contacts: {
      type: Array,
      required: true
    }
  },
  methods: {
    deleteContact: function(contact) {
      this.$emit("clicked", contact);
    }
  }
};
</script>

<style lang="scss">
.list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  .item {
    padding: 15px 0;
    width: 100%;
    color: #393f4d;
    font-size: 1.1em;
    display: flex;
    justify-content: space-between;
    &__desc {
      display: flex;
      flex-direction: column;
    }
    .paragraph {
      width: 70%;
      margin: 10px;
      white-space: normal;
      .bold {
        font-weight: 600;
      }
    }
    .buttonWrapper {
      display: flex;
      height: 50px;
      .button {
        color: #393f4d;
        background: none;
        padding: 20px;
        border: none;
        &.deleteButton {
          font-size: 20px;
        }
      }
    }
  }
}
</style>