<template>
  <div class="gift-list">
    <div class="title-search">
      <h1>My Wishlist</h1>
    </div>
    <div class="search-bar">
      <input type="text" v-model="searchQuery" placeholder="Search for gifts...">
      <button class="search-button" @click="search">Search</button>
    </div>
    <div id="searchResults" class="search-results" v-show="searchResults.length > 0">
      <ul>
        <li v-for="result in searchResults" :key="result.id">
          <span>{{ result.name }}</span>
          <button @click="addToWishlist">Agregar</button>
        </li>
      </ul>
    </div>
    <div class="gifts">
      <div v-for="gift in GiftsList" :key="gift.id" class="gift-container">
        <div class="gift">
          <img :src="gift.photo" alt="Gift image">
          <div class="gift-info">
            <h3>{{gift.name }}</h3>
          </div>
          <button class="sharebtn" @click="share(gift)"> <img src="src/assets/Imagenes/share.png" alt=""></button>
          <button class="deletebtn" @click="deleteGift(gift)"> <img src="src/assets/Imagenes/bin.png" alt=""></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      GiftsList: [],
      searchQuery: '',
      searchResults: [],
    }
  },
  created() {
    this.getgiftslist();
  },
  methods: {
    async getgiftslist() {
      const wishlist_id = localStorage.getItem('wishlistId');
      const url = `https://balandrau.salle.url.edu/i3/socialgift/api/v1/wishlists/${wishlist_id}`;
      const headers = {
        'accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
      const response = await fetch(url, { headers })
      if (response.ok) {
        const data = await response.json();
        this.GiftsList = data.gifts.map(gift => ({
          id: gift.id,
          image: gift.product_url,
          
        }));
        this.GiftsList.forEach(async element => {
          console.log(element);
           
            const url = `${element.image}`;
            const headers = {
              'accept': 'application/json'
            };
            
            const response = await fetch (url, {
              method: 'GET',
              headers: headers
            });
            console.log(response);
            if (response.ok) {
              const product = await response.json();
              console.log(product);
              element.name = product.name;
              element.photo = product.photo;
            } else {
              console.error('Error al realizar la búsqueda');
            }
          
        });
        console.error('Gifts list:', this.GiftsList);
      } else {
        console.error('Error retrieving gifts list:', response.status, response.statusText);
      }
    },
    async search() {
      if (this.searchQuery.trim() === '') {
        this.searchResults = [];
        return;
      }

      const url = `https://balandrau.salle.url.edu/i3/mercadoexpress/api/v1/products/search?s=${this.searchQuery}`;
      const headers = {
        'accept': 'application/json'
      };

      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: headers
        });

        if (response.ok) {
          const data = await response.json();
          this.searchResults = data.slice(0, 10);
        } else {
          console.error('Error al realizar la búsqueda');
        }
      } catch (error) {
        console.error('Error al realizar la búsqueda:', error);
      }
    },
    async addToWishlist(result) {
      console.log('Add to wishlist:', product);


    },
  },

  computed: {
    filteredGifts() {
      return this.gifts.filter(gift => gift.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
    },
  },
} 
</script>
  
<style>
.gift-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.search-bar {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  position: relative;
}

.gifts {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
}

.gift-container {
  margin: 10px;
}

.gift {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #A33DA5;
  color: white;
  border-radius: 5px;
  width: 100%;
}

.gift img {
  width: 80px;
  height: 80px;
  margin-right: 10px;
  padding: 10px;
}

.gift-info {
  flex-grow: 1;
}

.gift-info h3 {
  margin: 0;
}

.title-search {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
}

.gift button {
  background-color: transparent;
  padding: 10px;
}

.search-button {
  background-color: #A33DA5;
}


.sharebtn :hover {
  background-color: #E94AEC;
  border: none;
  border-radius: 10px;
}

.deletebtn :hover {
  background-color: red;
  border: none;
  border-radius: 10px;
}

.gift button img {
  width: 30px;
  height: 30px;
}

.search-results {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  max-height: 200px;
  overflow-y: auto;
  z-index: 1;
}

.search-results ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.search-results li {
  padding: 5px;
}

.search-results button {
  margin-left: 10px;
}
</style>
  