<template>
  <div class="wishlist-list">
    <div class="title-search">
      <h1>My Wishlists</h1>
      <div class="search-bar">
        <input type="text" v-model="searchQuery" placeholder="Search for wishlists...">
        <button class="search-button" @click="search">Search</button>
      </div>
      <div class="create-wishlist">
        <router-link :to="'/createwishlist'">
          <button class="create-button">Create Wishlist</button>
        </router-link>
        <div class="create-wishlist">
  <router-link :to="'/createwishlist'">
    <button class="create-button">Create Wishlist</button>
  </router-link>
  <div v-if="showCreateForm">
    <h2>Create Wishlist</h2>
    <form @submit="submitCreateForm">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="newWishlist.name" required>
      <label for="description">Description:</label>
      <input type="text" id="description" v-model="newWishlist.description" required>
      <label for="end_date">End Date:</label>
      <input type="date" id="end_date" v-model="newWishlist.end_date" required>
      <button type="submit">Create</button>
    </form>
  </div>
</div>
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
      chunkedWishlists: [],
    showCreateForm: false, 
    newWishlist: { 
      name: '',
      description: '',
      end_date: ''
    }
  }
},
    
  created() {
    this.getWishlists()
  },
  methods: {

    async submitCreateForm(event) {
    event.preventDefault();

    const url = 'https://balandrau.salle.url.edu/i3/socialgift/api/v1/wishlists';
    const headers = {
      'accept': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUxLCJlbWFpbCI6InBydWViYUBwcnVlYmEuY29tIiwiaWF0IjoxNjgzMzk1OTEzfQ.ryUPGXJICNSOKMbyBbusVLa5oWCXiT43JbM0xwj-8KM',
      'Content-Type': 'application/json'
    };

    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(this.newWishlist)
    });

    if (response.ok) {
      console.log('Wishlist created successfully');
      this.newWishlist.name = '';
      this.newWishlist.description = '';
      this.newWishlist.end_date = '';
      this.showCreateForm = false;
    } else {
      console.error('Error creating wishlist:', response.status);
    }
  },
    async getWishlists() {
      const url = ' https://balandrau.salle.url.edu/i3/socialgift/api/v1/wishlists'
      const headers = {
        'accept': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUxLCJlbWFpbCI6InBydWViYUBwcnVlYmEuY29tIiwiaWF0IjoxNjgzMzk1OTEzfQ.ryUPGXJICNSOKMbyBbusVLa5oWCXiT43JbM0xwj-8KM',
        'Content-Type': 'application/json'
      }
      const response = await fetch(url, { headers })
      if (response.ok) {
        const json_response = await response.json()
        console.log(json_response)
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
    .create-wishlist {
      display: flex;
      justify-content: flex-end;
      width: 80%;
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
  