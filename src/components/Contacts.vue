<template>
  <ul class="list">
    <transition-group name="list-complete">
      <li class="item list-complete-item" v-for="contact in contacts" v-bind:key="contact.id">
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
          <button class="button favoriteButton" v-on:click="addToFavorite(contact)" v-html="favoritedIcon"></button>
        </div>
      </li>
    </transition-group>
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
  data() {
    return {
      favoritedIcon: `<svg class="heart" viewBox="0 0 32 29.6">
          <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
          c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
        </svg> `
  }
  },
  methods: {
    deleteContact: function(contact) {
      this.$emit("deleted", contact);
    },
    addToFavorite: function(contact) {
      this.$emit("favorited", contact);
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
      width: 80%;
      margin: 10px 0;
      white-space: normal;
      .bold {
        font-weight: 600;
      }
    }
    .buttonWrapper {
      display: flex;
      height: 50px;
      flex-direction: column;
      .button {
        color: #393f4d;
        background: none;
        padding: 20px;
        border: none;
        &.deleteButton {
          font-size: 20px;
          &:focus,
          &:active {
            outline: none;
          }
        }
      }
    }
  }
}
.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(30px);
}
.list-complete-leave-active {
  position: absolute;
}
.heart {
    &.active{
      fill: red;
    }
}
</style>