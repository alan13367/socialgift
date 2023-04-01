<template>
    <div>
      <h2>My Chats</h2>
      <ul>
        <li v-for="friend in friends" :key="friend.id" @click="selectFriend(friend)">
          {{ friend.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FriendList',
    data() {
      return {
        friends: [
          { id: 1, name: 'Alice' },
          { id: 2, name: 'Bob' },
          { id: 3, name: 'Charlie' },
        ],
      };
    },
    methods: {
      selectFriend(friend) {
        this.$emit('select-friend', friend);
      },
    },
  };
  </script>
  