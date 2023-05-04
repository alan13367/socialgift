<template>
  <div class="wishlist-list">
    <div class="title-search">
      <h1>My Wishlists</h1>
      <div class="search-bar">
        <input type="text" v-model="searchQuery" placeholder="Search for wishlists...">
        <button class="search-button" @click="search">Search</button>
      </div>
    </div>
    <div class="wishlists">
      <div class="wishlist-row" v-for="(row, rowIndex) in chunkedWishlists" :key="rowIndex">
        <div v-for="(wishlist, colIndex) in row" :key="wishlist.id" class="wishlist-container">
          <router-link :to="'/mywishlist'" class="wishlist">
            <h3>{{ wishlist.name }}</h3>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      wishlists: [],
      chunkedWishlists: []
    }
  },
  created() {
    this.getWishlists()
  },
  methods: {
    async getWishlists() {
      const url = 'https://balandrau.salle.url.edu/i3/socialgift/api/v1/wishlists/138'
      const headers = {
        'accept': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTM4LCJlbWFpbCI6Im1hcnRpbi5zb2xmZXJpbm9Ac3R1ZGVudHMuc2FsbGUudXJsLmVkdSIsImlhdCI6MTY4MzEzODgxOX0.3u7QDQ_g5qdUrxBeVQpNx52-aIi0wp3B70LPeC0mCRE'
      }
      const response = await fetch(url, { headers })
      const data = await response.json()
      this.wishlists = data.wishlists
      this.chunkedWishlists = this.chunkWishlists(this.wishlists, 3)
    },
    search() {
      // Lógica para buscar en la lista de deseos
    },
    chunkWishlists(wishlists, size) {
      const rows = []
      let index = 0
      while (index < wishlists.length) {
        rows.push(wishlists.slice(index, index + size))
        index += size
      }
      return rows
    }
  }
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
  