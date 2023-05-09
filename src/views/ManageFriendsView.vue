<template>
  <div class="manage-friends">
    <h1>Amigos</h1>
    <div class="search-bar">
      <input type="text" placeholder="Buscar">
      <button>Search</button>
    </div>
  </div>
  <div class="friend-list">
    <div class="friend-item" v-for="friend in friends" :key="friend.id">
      <button class="dltFriend">Eliminar</button>
      <img src="@/assets/Imagenes/friends.png" alt="Amigos">
      <h3>{{ friend.name }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      friends: [],
    };
  },
  async getWishlists() {
      const id = localStorage.getItem('id');
      const url = ` https://balandrau.salle.url.edu/i3/socialgift/api/v1/users/${id}/friends`;
      const headers = {
        'accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
      const response = await fetch(url, { headers })
      if (response.ok) {
        const json_response = await response.json()
        if (json_response) {
          this.wishlists = json_response
          this.chunkedWishlists = this.chunkWishlists(this.wishlists, 3)
          console.error(this.wishlists)
        } else {
          console.error('Error: Wishlists data is missing')
          console.error(response)
        }
      } else {
        console.error('Error calling API:', response.status)
      }
    },
};
</script>


<style >

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
}
.manage-friends {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
}

.search-bar {
  display: flex;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 15px;
  border-color: black;
  padding: 8px;
  background-color: white;
}

input[type="text"] {
  border: none;
  flex: 1;
  margin-right: 8px;
}

button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}



.dltFriend {
  background-color: #7C3AED;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    padding: 10px 20px;
    cursor: pointer;
}

.friend-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.friend-item {
  width: calc(50% - 12px);
  margin-bottom: 24px;
  display: flex;
  align-items: center;
}

.friend-item img {
  margin-right: 16px;
  height: 48px;
  width: 48px;
}

.friend-details {
  display: flex;
  flex-direction: column;
}

h2 {
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  color: #333;
}

button {
  border: none;
  background-color: #7C3AED;
  color: #fff;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
}
</style>