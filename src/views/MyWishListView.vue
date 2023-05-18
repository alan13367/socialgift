<template>
  <div class="gift-list">
    <div class="title-search">
      <h1>My Wishlist</h1>
      <div class="search-bar">
        <input type="text" v-model="searchQuery" placeholder="Search for gifts...">
        <button class="search-button" @click="search">Search</button>
      </div>
    </div>
    <div class="gifts">
      <div v-for="gift in filteredGifts" :key="gift.id" class="gift-container">
        <div class="gift">
          <img :src="gift.image" alt="Gift image">
          <div class="gift-info">
            <h3>{{ gift.name }}</h3>
          </div>
          <button class="sharebtn" @click="share(gift)"> <img src="src/assets/Imagenes/share.png" alt=""></button>
          <button class="deletebtn" @click="deleteGift(gift)"> <img src="src/assets/Imagenes/bin.png" alt=""></button>
          <button class="addbtn" @click="addGift(gift)">Agregar</button>
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
      gifts: [],
      searchQuery: '',
      wishlistId: null,
    }
  },
  props: {
    selectedWishlistId: {
      type: Number,
      required: true
    },
  },
  mounted() {
    console.log('Selected Wishlist ID:', this.selectedWishlistId);
    this.fetchWishlist();
  },
  created() {
    emmiter.on('wishlistSelected', (wishlistId) => {
      this.selectedWishlistId = wishlistId;
      this.fetchWishlist();
      console.error('Selected Wishlist ID:', this.selectedWishlistId);
    });
  },
  methods: {
    async fetchWishlist() {
      try {
        const wishlistId = localStorage.getItem('wishlistId');
        const response = await fetch(
          `https://balandrau.salle.url.edu/i3/socialgift/api/v1/wishlists/${wishlistId}`,
          {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
              
              password: this.password
            })
          },

        );

        const data = await response.json();
        console.error(data);
      } catch (error) {
        console.error(error);
      }
    },
    addGift(gift) {
      const searchUrl = `https://balandrau.salle.url.edu/i3/mercadoexpress/api/v1/products/search?s=${this.searchQuery}`;
      fetch(searchUrl, {
        headers: {
          'accept': 'application/json'
        }
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Error en la búsqueda del producto');
          }
        })
        .then(data => {
          if (data && Array.isArray(data) && data.length > 0) {
            const selectedProduct = data[0];
            const postUrl = 'https://balandrau.salle.url.edu/i3/socialgift/api/v1/gifts';
            const postData = {
              wishlist_id: this.wishlistId,
              product_url: selectedProduct.link,
              priority: 33
            };
            fetch(postUrl, {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(postData)
            })
              .then(response => {
                if (response.ok) {
                  console.log('Gift added successfully');

                } else {
                  throw new Error('Error al agregar el regalo');
                }
              })
              .catch(error => console.log(error));
          } else {
            throw new Error('No se encontraron productos');
          }
        })
        .catch(error => console.log(error));
    },

    search() {
      const searchUrl = `https://balandrau.salle.url.edu/i3/mercadoexpress/api/v1/products/search?s=${this.searchQuery}`;
      fetch(searchUrl, {
        headers: {
          'accept': 'application/json'
        }
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Error en la búsqueda del producto');
          }
        })
        .then(data => {
          console.log(data);

          this.gifts = data;
        })
        .catch(error => console.log(error));
    }
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
</style>
  