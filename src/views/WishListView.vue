<template>
  <div class="gift-list">
    <div class="title-search">
      <h1>Wishlist</h1>
    </div>
    <div class="search-bar">
      <input type="text" v-model="searchQuery" placeholder="Search for gifts...">
      <button class="search-button" @click="search">Search</button>
    </div>
    <div class="gifts">
      <div v-for="gift in filteredGifts" :key="gift.id" class="gift-container">
        <div class="gift">
          <img :src="gift.photo" alt="Gift image">
          <div class="gift-info">
            <h3>{{ gift.name }}</h3>
          </div>
          <button v-if="gift.booked === 0" class="giftbutton" @click="giftIt(gift)">Gift it</button>
          <p v-else class="reserved-text">Reservado</p>
        </div>
        <div class="gift-details" v-show="gift.showDetails">
          <p>Description: {{ gift.description }}</p>
          <p>Price: {{ gift.price }}</p>
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
      searchResults: []
    }
  },
  created() {
    this.getGiftsList();
  },
  methods: {
    async getGiftsList() {
      const wishlistId = localStorage.getItem('wishlistId');
      const url = `https://balandrau.salle.url.edu/i3/socialgift/api/v1/wishlists/${wishlistId}`;
      const headers = {
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      };

      try {
        const response = await fetch(url, { headers });

        if (response.ok) {
          const data = await response.json();
          this.GiftsList = data.gifts.map(gift => ({
            id: gift.id,
            image: gift.product_url,
            name: '',
            photo: '',
            booked: gift.booked
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
    async giftIt(gift) {
      const url = `https://balandrau.salle.url.edu/i3/socialgift/api/v1/gifts/${gift.id}/book`;
      const headers = {
        'accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      };

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: headers
        });

        if (response.ok) {
          console.log('Gift booked successfully:', gift.id);

        } else {
          console.error('Error booking gift:', response.status, response.statusText);

        }
      }
      catch (error) {
        console.error('Error booking gift:', error);

      }
    },
    async search() {

    },
    async deletereserved(gift) {

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

.giftbutton {
  background-color: #7C3AED;
  padding-right: 10px;
}

.search-button {
  background-color: #A33DA5;
}

.reserved-text {
  color: red;
  font-weight: bold;
}</style>
  