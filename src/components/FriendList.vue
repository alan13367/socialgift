<template>
  <div class="friend-list">
    <div
      class="friend-item"
      v-for="friend in friends"
      :class="{ 'active': friend.active, 'highlighted': friend.highlighted }"
      @click="toggleFriendActive(friend); getMessages(friend.id)"
      @mouseover="friend.highlighted = true"
      @mouseout="friend.highlighted = false"
      :key="friend.id"
    >
      <img :src="friend.image" alt="Amigos">
      <h3 class="name">{{ friend.name}}</h3>
      <h3>{{friend.last_name}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FriendList',
  props: {},
  data() {
    return {
      friends: [],
    };
  },
  methods: {
    async getFriends() {
      const url = 'https://balandrau.salle.url.edu/i3/socialgift/api/v1/friends';
      const headers = {
        'accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json',
      };
      const response = await fetch(url, { headers });
      if (response.ok) {
        const json_response = await response.json();
        if (json_response) {
          this.friends = json_response.map(friend => ({
            ...friend,
            active: false,
            highlighted: false,
          }));
        } else {
          console.error('Error: Friends data is missing');
          console.error(response);
        }
      } else {
        console.error('Error calling API:', response.status);
      }
    },
    toggleFriendActive(clickedFriend) {
      this.friends.forEach(friend => {
        if (friend !== clickedFriend) {
          friend.active = false;
          friend.highlighted = false;
        }
      });
      clickedFriend.active = !clickedFriend.active;
    },
    async getMessages(friendId) {
      emitter.emit('getMessages', friendId);
    },
  },
  mounted() {
    this.getFriends();
  },
};
</script>

<style scoped>
.friend-list {
  width: 300px;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  border-right: 3px solid black;
}

.friend-item {
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 2px solid black;
  width: 100%;
  cursor: pointer;
}

.friend-item img {
  width: 50px;
  height: 50px;
  border-radius:50%;
  margin-right: 10px;
}

.name {
  padding-right: 5px;
}

.friend-item:hover,
.friend-item.active,
.friend-item.highlighted {
  background-color: #A33DA5;
  color: white;
}
</style>
