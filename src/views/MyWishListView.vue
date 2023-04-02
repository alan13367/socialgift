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
            <button class = "sharebtn" @click="share(gift)"> <img src="src/assets/Imagenes/share.png" alt="" ></button>
            <button class = "deletebtn" @click="deleteGift(gift)"> <img src="src/assets/Imagenes/bin.png" alt="" ></button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script scoped>
  export default {
    data() {
      return {
        gifts: [
          {
            id: 1,
            name: 'Gift 1',
            image: 'src/assets/Imagenes/gift.jpg',
          },
          {
            id: 2,
            name: 'Gift 2',
            image: 'src/assets/Imagenes/gift.jpg',
          },
          {
            id: 3,
            name: 'Gift 3',
            image: 'src/assets/Imagenes/gift.jpg',
          },
          {
            id: 4,
            name: 'Gift 4',
            image: 'src/assets/Imagenes/gift.jpg',
          },
          {
            id: 5,
            name: 'Gift 5',
            image: 'src/assets/Imagenes/gift.jpg',
          },
        ],
        searchQuery: '',
      }
    },
    methods: {
      share(gift) {
        // Add gift sharing logic here
      },
      deleteGift(gift) {
        // Add gift deleting logic here
      },
      search() {
        // Add search logic here
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

  .title-search{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
}
.gift button{
  background-color: transparent;
  padding: 10px;
}

.search-button{
  background-color:#A33DA5;
}


.sharebtn :hover{
  background-color: #E94AEC;
  border: none;
  border-radius: 10px;
}

.deletebtn :hover{
  background-color: red;
  border: none;
  border-radius: 10px;
}

.gift button img {
  width: 30px;
  height: 30px;
}


  
  </style>
  