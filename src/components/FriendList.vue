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
          this.friends = json_response;
        } else {
          console.error('Error: Friends data is missing');
          console.error(response);
        }
      } else {
        console.error('Error calling API:', response.status);
      }
    },
  },
  mounted() {
    this.getFriends();
  },
};
</script>

<template>
  <div class="friend-list">
    <div class="friend-item" v-for="friend in friends" @click="getMessages(friend.id)" :key="friend.id">
      <img :src="friend.image" alt="Amigos">
      <h3>{{ friend.name + ' ' + friend.last_name }}</h3>
    </div>
  </div>
</template>