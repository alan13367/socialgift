<template>
    <div class="gift-list">
      <div class="search-bar">
        <input type="text" v-model="searchQuery" placeholder="Search for gifts...">
        <button @click="search">Search</button>
      </div>
      <div class="gifts">
        <div v-for="gift in filteredGifts" :key="gift.id" class="gift-container">
          <div class="gift">
            <img :src="gift.image" alt="Gift image">
            <div class="gift-info">
              <h3>{{ gift.name }}</h3>
              <button @click="giftIt(gift)">Gift it</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        gifts: [
          {
            id: 1,
            name: 'Gift 1',
            image: 'gift1.png',
          },
          {
            id: 2,
            name: 'Gift 2',
            image: 'gift2.png',
          },
          {
            id: 3,
            name: 'Gift 3',
            image: 'gift3.png',
          },
        ],
        searchQuery: '',
      }
    },
    methods: {
      giftIt(gift) {
        // Add gift giving logic here
      },
      search() {
        // Add search logic here
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
  }
  .gifts {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%; /* Set the gift container to take up the full width of the parent container */
  }
  .gift-container {
    margin: 10px; /* Add margin to create space between gifts */
  }
  .gift {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    background-color: #A33DA5;
    color: white;
    border-radius: 5px;
    width: 100%; /* Set the gift container to take up the full width of the gift container */
  }
  .gift img {
    width: 80px;
    height: 80px;
    margin-right: 10px;
  }
  .gift-info {
    flex-grow: 1; /* Make the gift info container expand to fill the available horizontal space */
  }
  .gift-info h3 {
    margin: 0;
  }
  .gift-info button {
    background-color: white;
    color: #A33DA5;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
  }
  </style>
  