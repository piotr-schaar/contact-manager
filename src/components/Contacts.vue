<template>
  <ul>
    <h2></h2>
    <li v-for="contact in contacts" v-bind:key="contact.id">
      <p>{{contact.name}}</p>
      <p>Mail: {{contact.email}}</p>
      <p>Street: {{contact.address.street}}</p>
      <p>City: {{contact.address.city}}</p>
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

<style scoped>

</style>