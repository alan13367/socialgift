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
        <div v-for="wishlist in chunk" :key="wishlist.id" class="wishlist-container">
          <router-link :to="'/wishlist'" class="wishlist">
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
      wishlists: [],
      searchQuery: '',
    }
  },
  methods: {
    search() {
      // Add search logic here
    },
    chunkArray(array, chunkSize) {
      let chunks = []
      for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize))
      }
      return chunks
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
  created() {
    // Replace this with code to fetch wishlists from your backend
    this.wishlists = [
      {
        id: 1,
        name: 'Wishlist 1',
      },
      {
        id: 2,
        name: 'Wishlist 2',
      },
      {
        id: 3,
        name: 'Wishlist 3',
      },
      {
        id: 4,
        name: 'Wishlist 4',
      },
      {
        id: 5,
        name: 'Wishlist 5',
      },
      {
        id: 6,
        name: 'Wishlist 6',
      },
      {
        id: 7,
        name: 'Wishlist 7',
      },
      {
        id: 8,
        name: 'Wishlist 8',
      },
      {
        id: 9,
        name: 'Wishlist 9',
      },
      {
        id: 10,
        name: 'Wishlist 10',
      },
      {
        id: 11,
        name: 'Wishlist 11',
      },
      {
        id: 12,
        name: 'Wishlist 12',
      },
    ]
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
