<template>

  <ul class="list">
    <li class="item" v-for="contact in contacts" v-bind:key="contact.id">
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
    width: 100%;
    height: 200px;
    color: #393f4d;
    font-size: 1.1em;
    .paragraph {
      width: 80%;
      .bold {
        font-weight: 600;
      }
    }
  }
}
</style>