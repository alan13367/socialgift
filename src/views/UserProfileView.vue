<script>
export default {
  name: "Profile",
  data() {
    return {
      id: localStorage.getItem("id"),
      profileData: null,
      wishlistItems: [],
    };
  },
  mounted() {
    this.fetchProfileData();
  },
  methods: {
    fetchProfileData() {
      const id = localStorage.getItem("id");
      const url = `https://balandrau.salle.url.edu/i3/socialgift/api/v1/users/${id}`;
      const token = localStorage.getItem("token");

      fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then(response => {
          console.error(response); // Mostrar información de la respuesta HTTP en la consola
          return response.json();
        })
        .then(data => {
          console.error(data); 
          console.error(data.id);
          console.error(data.name);
          console.error(data.last_name);
          console.error(data.image);
          console.error(data.email);
          this.profileData = data;
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>

<template>
  <div>
    <h2>Perfil</h2>
    <div class="user-info">
      <img :src="profileData && profileData.image" alt="Foto de perfil" class="user-image" />
      <h3 class="user-name">{{ profileData && profileData.name }} {{ profileData && profileData.last_name }}</h3>
      <button v-if="151 !== profileData?.id">Send Friend request</button>
    </div>
    <div class="wishlist">
      <h4>WishList</h4>
      <div class="wishlist-buttons">
        <button class="wishlistbtn" v-for="item in wishlistItems" :key="item.id">{{ item.name }}</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
main {
  position: relative;
  width: 100%;
  height: 100%;
}

.user-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.user-info button {
  background-color: #A33DA5;
  color: #fff;
  padding: 8px 16px;
  border-radius: 40px;
  cursor: pointer;
}

.user-image{
  display: flex;
  height: 40px;
  max-width: 50%; 
  object-fit: cover; 
  margin-right: 1rem;
}

.user-name {
  max-height: 50%;
}

.user-actions {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 50%;
}

.wishlist {
  display: flex;
  flex-direction: column;
}

.wishlistbtn {
  background-color: #A33DA5;
  color: #fff;
  padding: 8px 16px;
  border-radius: 40px;
  cursor: pointer;
}

.wishlist-buttons {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
</style>


