<template>
  <div class="wishlist-list">
    <div class="title-search">
      <h1>Friends Wishlists</h1>
      <div class="search-bar">
        <input type="text" v-model="searchQuery" placeholder="Search for wishlists...">
        <button class="search-button" @click="search">Search</button>
      </div>
    </div>
    <div class="wishlists">
      <div class="wishlist-row" v-for="(chunk, index) in chunkedWishlists" :key="index">
        <div v-for="wishlist in chunk" :key="wishlist.id" class="wishlist-container" @click="selectWishlist(wishlist.id)">
          <router-link :to="'/wishlist'" class="wishlist">
            <h3>{{ wishlist.name }}</h3>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emmiter from '@/plugins/emmiter';
export default {
  data() {
    return {
      props: {},
      wishlists: [],
      searchQuery: ''
    }
  },
  created() {
    this.getFriendsWishLists()
  },
  
  methods: {
    selectWishlist(wishlistid){
      this.selectedWishlistId = wishlistid;
      emmiter.emit('wishlistSelected', wishlistid);
    },
    search() {
      
    },
    chunkArray(array, chunkSize) {
      let chunks = []
      for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize))
      }
      return chunks
    },
    async getFriendsWishLists() {
      const url = `https://balandrau.salle.url.edu/i3/socialgift/api/v1/friends`;
      const headers = {
        'accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
      };
      const response = await fetch(url, { headers });
      if (response.ok) {
        const json_response = await response.json();
        if (json_response) {
          let friends = json_response.map(item => item.id);
          const id = localStorage.getItem('idfriends');
          const url = `https://balandrau.salle.url.edu/i3/socialgift/api/v1/wishlists`;
          const headers = {
            'accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
            'Content-Type': 'application/json'
          };
          const response = await fetch(url, { headers })
          if (response.ok) {
            const json_response = await response.json()
            if (json_response) {
              let allWishlists = json_response
              this.wishlists = allWishlists.filter(item => friends.includes(item.user_id))
              this.chunkedWishlists = this.chunkArray(this.wishlists, 3)
            } else {
              console.error('Error: Wishlists data is missing')
            }
          } else {
            console.error('Error calling API:', response.status)
          }
        } else {
          console.error('Error: Friends data is missing')
          console.error(response)
        }
      } else {
        console.error('Error calling API:', response.status)
      }
    },
  },
  computed: {
    filteredWishlists() {
      return this.wishlists.filter(wishlist => wishlist.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
    },
    chunkedWishlists() {
      return this.chunkArray(this.filteredWishlists, 3)
    },
  },
  
}
</script>

<style scoped>
  .wishlist-list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .search-bar {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
  }
  .wishlists {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    flex-wrap: wrap;
  }
  .wishlist-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
  .wishlist-container {
    margin: 10px;
    width: 30%;
  }
  .wishlist {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #A33DA5;
    color: white;
    border-radius: 15px;
    width: 100%;
    height: 100px;
    justify-content: center;
  }

  .wishlist h3 {
    margin: 0;
  }

  .title-search {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
  }

  .search-button {
    background-color: #A33DA5;
  }
</style>
