<template>
  <div>
    <h2>Perfil</h2>
    <div class="user-info">
        <img src="@/assets/Imagenes/userimage.png" alt="Foto de perfil" class="user-image" />
        <h3 class="user-name">Nombre Usuario Completo</h3>
        <button>Send Friend request</button>
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

<script>
export default {
  name: "Profile",
  data() {
    return {
      wishlistItems: [
        { id: 1, name: "WishList 1" },
        { id: 2, name: "WishList 2" },
        { id: 3, name: "WishList 3" },
        { id: 4, name: "WishList 4" },
        { id: 5, name: "WishList 5" },
        { id: 6, name: "WishList 6" },
        { id: 7, name: "WishList 7" },
        { id: 8, name: "WishList 8" },
        { id: 9, name: "WishList 9" }
      ]
    };
  }
};
</script>
