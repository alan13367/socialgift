<template>
  <div class="gift-list">
    <h2 class="wishlist_name">{{ wishlistName }}</h2>
    <div class="title-search">
      
      <h3 class="description">{{ wishlistdescription }}</h3>
      <div class="wishlist-actions">
        <button class="delete-wishlist-button" @click="confirmDelete">Eliminar lista</button>
        <button class="edit-wishlist-button" @click="editWishlist">Editar lista</button>
      </div>
    </div>
    <div class="search-bar">
      <input type="text" v-model="searchQuery" placeholder="Search for gifts...">
      <button class="search-button" @click="search">Search</button>
    </div>
    <div id="searchResults" class="search-results" v-show="searchResults.length > 0">
      <ul>
        <li class="search-resultsli" v-for="result in searchResults" :key="result.id">
          <span>{{ result.name }}</span>
          <button @click="addToWishlist(result)">Agregar</button>
        </li>
      </ul>
    </div>
    <div class="gifts">
      <div v-for="gift in filteredGifts" :key="gift.id" class="gift-container">
        <div class="gift">
          <img :src="gift.photo" alt="Gift image">
          <div class="gift-info">
            <h3>{{ gift.name }}</h3>
          </div>
          <button class="sharebtn" @click="share(gift)">
            <img src="src/assets/Imagenes/share.png" alt="">
          </button>
          <button class="deletebtn" @click="deleteGift(gift)">
            <img src="src/assets/Imagenes/bin.png" alt="">
          </button>
        </div>
      </div>
    </div>
    <div class="modal" v-if="showConfirmationModal">
      <div class="modal-content">
        <p v-if="!showError">¿Realmente desea eliminar esta lista?</p>
        <p v-if="showError">{{ errorMessage }}</p>
        <div class="modal-actions">
          <button class="modal-button yes" @click="deleteWishlist" v-if="!showError">Sí</button>
          <button class="modal-button yes" @click="redirectToMyWishlists" v-if="showError">Aceptar</button>
          <button class="modal-button no" @click="cancelDelete">No</button>
        </div>
      </div>
    </div>
    <div class="modal" v-if="showEditForm">
      <div class="modal-content">
        <h2>Editar lista</h2>
        <form @submit.prevent="updateWishlist">
          <label for="name">Nombre:</label>
          <input type="text" id="name" v-model="editForm.name" required>
          <label for="description">Descripción:</label>
          <input type="text" id="description" v-model="editForm.description" required>
          <label for="end_date">Fecha de finalización:</label>
          <input type="date" id="end_date" v-model="editForm.end_date" required>
          <div class="modal-actions">
            <button class="modal-button accept" type="submit">Aceptar</button>
            <button class="modal-button cancel" @click="cancelEdit">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import emmiter from '@/plugins/emmiter';
export default {
  data() {
    return {
      GiftsList: [],
      searchQuery: '',
      searchResults: [],
      showConfirmationModal: false,
      showEditForm: false,
      editForm: {
        name: '',
        description: '',
        end_date: ''
      },
      errorMessage: '',
      showError: false

    }
  },
  created() {
    emmiter.on('wishlistSelected', (wishlistId) => {
      this.getGiftsList(wishlistId);
      localStorage.setItem('wishlistId', this.wishlistId);
    });
  },
  methods: {
    async getGiftsList(id) {
      const url = `https://balandrau.salle.url.edu/i3/socialgift/api/v1/wishlists/${id}`;
      const headers = {
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      };

      try {
        const response = await fetch(url, { headers });
        if (response.ok) {
          localStorage.setItem('wishlistId', id);
          const data = await response.json();
          this.wishlistName = data.name;
          this.wishlistdescription = data.description;
          this.GiftsList = data.gifts.map(gift => ({
            id: gift.id,
            image: gift.product_url,
            name: '',
            photo: ''
          }));

          await Promise.all(this.GiftsList.map(async gift => {
            const url = gift.image;
            const headers = {
              'Accept': 'application/json'
            };

            const response = await fetch(url, {
              method: 'GET',
              headers: headers
            });

            if (response.ok) {
              const product = await response.json();
              gift.name = product.name;
              gift.photo = product.photo;
            } else {
              console.error('Error retrieving product:', response.status, response.statusText);
            }
          }));

          console.log('Gifts list:', this.GiftsList);
        } else {
          console.error('Error retrieving gifts list:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error retrieving gifts list:', error);
      }
    },
    async search() {
      if (this.searchQuery.trim() === '') {
        this.searchResults = [];
        return;
      }

      const url = `https://balandrau.salle.url.edu/i3/mercadoexpress/api/v1/products/search?s=${this.searchQuery}`;
      const headers = {
        'Accept': 'application/json'
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
          console.error('Error performing search:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error performing search:', error);
      }
    },
    async addToWishlist(result) {
      const wishlistId1 = localStorage.getItem('wishlistId');
      const url = 'https://balandrau.salle.url.edu/i3/socialgift/api/v1/gifts';
      const headers = {
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      };
      const data = {
        wishlist_id: wishlistId1,
        product_url: `https://balandrau.salle.url.edu/i3/mercadoexpress/api/v1/products/${result.id}`,
        priority: 33
      };

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(data)
        });

        if (response.ok) {
          this.getGiftsList(wishlistId1);
        } else {
          console.error('Error adding gift:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error adding gift to wishlist:', error);
      }
    },
    async deleteGift(gift) {
      const url = `https://balandrau.salle.url.edu/i3/socialgift/api/v1/gifts/${gift.id}`;
      const headers = {
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      };

      try {
        const response = await fetch(url, {
          method: 'DELETE',
          headers: headers
        });

        if (response.ok) {
          const id = localStorage.getItem('wishlistId');
          this.getGiftsList(id);
        } else {
          console.error('Error deleting gift:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error deleting gift:', error);
      }
    },
    confirmDelete() {
      this.showConfirmationModal = true;
    },
    cancelDelete() {
      this.showConfirmationModal = false;
    },
    async deleteWishlist() {
      const wishlistId = localStorage.getItem('wishlistId');
      const url = `https://balandrau.salle.url.edu/i3/socialgift/api/v1/wishlists/${wishlistId}`;
      const headers = {
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      };

      try {
        const response = await fetch(url, {
          method: 'DELETE',
          headers: headers,
        });

        if (response.ok) {
          this.showConfirmationModal = false;
          this.$router.push('/mywishlists');
        } else if (response.status === 500) {
          this.showError = true;
          this.errorMessage = 'La lista tiene regalos asociados. Elimínelos y luego elimine la lista.';
        } else {
          console.error('Error deleting wishlist:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error deleting wishlist:', error);
      }
    },
    editWishlist() {
      this.editForm.name = '';
      this.editForm.description = '';
      this.editForm.end_date = '';
      this.showEditForm = true;
    },
    cancelEdit() {
      this.showEditForm = false;
    },
    async updateWishlist() {
      const wishlistId = localStorage.getItem('wishlistId');
      const url = `https://balandrau.salle.url.edu/i3/socialgift/api/v1/wishlists/${wishlistId}`;
      const headers = {
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      };
      const data = {
        id: wishlistId,
        name: this.editForm.name,
        description: this.editForm.description,
        end_date: this.editForm.end_date
      };

      try {
        const response = await fetch(url, {
          method: 'PUT',
          headers: headers,
          body: JSON.stringify(data)
        });

        if (response.ok) {
          const wishlistIndex = this.GiftsList.findIndex(wishlist => wishlist.id === wishlistId);
          if (wishlistIndex !== -1) {
            this.GiftsList[wishlistIndex].name = updatedWishlist.name;
            this.GiftsList[wishlistIndex].description = updatedWishlist.description;
            this.GiftsList[wishlistIndex].end_date = updatedWishlist.end_date;
          }
          this.showEditForm = false;
          this.getGiftsList(wishlistId);
        } else {
          console.error('Error updating wishlist');
        }
      } catch (error) {
        console.error('Error updating wishlist', error);
      }
    },
    redirectToMyWishlists() {
      this.showError = false;
      this.$router.push('/mywishlists');
    }
  },
  computed: {
    filteredGifts() {
      return this.GiftsList.filter(gift => gift.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }
  }
}
</script>


<style scoped>
.wishlist_name {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
}

.description {
  font-size: 20px;
  margin-top: 10px;
  color: aqua;
  text-align: left;
}
.gift-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  max-height: 350px;
  overflow-y: auto;
  margin-top: 20px;
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
  width: 70px;
  height: 70px;
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

search-results {
  position: absolute;
  top: calc(100% + 10px);
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
  max-height: 200px;
  overflow-y: auto;
}

.search-results li {
  padding: 5px;
}

.search-results button {
  margin-left: 10px;
}

.wishlist-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 20px;
}

.wishlist-actions button {
  margin-left: 10px;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
}

.modal p {
  margin: 0;
  margin-bottom: 10px;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
}

.modal-button {
  margin-left: 10px;
  padding: 5px 10px;
}

.modal-button.yes {
  background-color: #A33DA5;
  color: #fff;
}

.modal-button.no {
  background-color: #ccc;
  color: #000;
}
</style>

