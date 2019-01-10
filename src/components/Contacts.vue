<template>
  <transition-group name="list-complete" tag="ul" class="list">
    <li class="item list-complete-item" v-for="contact in contacts" v-bind:key="contact.id">
      <div class="item__desc">
        <p class="paragraph">
          <span class="name bold">{{contact.name}}</span>
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
        <button class="button deleteButton" v-on:click="deleteContact(contact)"></button>
        <button
          class="button favoriteButton"
          v-on:click="clickedFavorite(contact)"
          v-html="favoritedIcon"
          v-bind:class="getClass(contact)"
        ></button>
      </div>
    </li>
  </transition-group>
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
    };
  },
  methods: {
    getClass(contact) {
      return {
        active: contact.isFavorite,
        noActive: !contact.isFavorite
      };
    },
    deleteContact: function(contact) {
      this.$emit("deleted", contact);
    },
    clickedFavorite: function(contact) {
      if (contact.isFavorite == false) {
        this.$emit("favorited", contact);
      } else {
        this.$emit("unFavorited", contact);
      }
    }
  },
  mounted() {}
};
</script>

<style lang="scss">
.list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  .item {
    padding: 15px 0;
    width: 100%;
    color: #393f4d;
    font-size: 1.1em;
    display: grid;
    grid-template-columns: 3fr 1fr;
    position: relative;

    &:after {
      position: absolute;
      content: "";
      height: 3px;
      width: 100%;
      border-radius: 15px;
      background: white;
      bottom: 0;
      left: 0;
      opacity: 0.7;
    }
    @media (min-width: 768px) {
      &:nth-of-type(odd) {
        padding-right: 15px;
      }
      &:nth-of-type(even) {
        padding-left: 15px;
      }
    }
    &__desc {
      display: flex;
      flex-direction: column;
    }
    .paragraph {
      width: 80%;
      margin: 10px 0;
      white-space: normal;
      font-size: 0.8em;
      @media (min-width: 768px) {
        width: 100%;
        font-size: 1.1em;
      }
      .name {
        font-size: 1.4em;
      }
      .bold {
        font-weight: 600;
      }
    }
    .buttonWrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .button {
        color: #393f4d;
        background: none;
        padding: 20px;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        &.deleteButton {
          font-size: 20px;
          width: 25px;
          padding: 20px;
          position: relative;
          &:before,
          &:after {
            content: "";
            height: 3px;
            width: 60%;
            position: absolute;
            border-radius: 25px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #393f4d;
            opacity:0.9;
          }
          &:before {
            transform: translate(-50%, -50%) rotate(45deg);
          }
          &:after {
            transform: translate(-50%, -50%) rotate(-45deg);
          }
          &:focus,
          &:active {
            outline: none;
          }
        }
        &.favoriteButton {
          padding: 10px;
          .heart {
            width: 25px;
            height: 25px;
          }
          &.active {
            .heart {
              fill: red;
            }
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
  fill: white;
}
</style>