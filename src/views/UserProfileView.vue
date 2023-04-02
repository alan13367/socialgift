<template>
  <main>
  <div>
    <h2>Perfil</h2>
    <div class="user-info">
      <div class="user-details">
        <img src="@/assets/Imagenes/userimage.png" alt="Foto de perfil" class="user-image" />
        <h3 class="user-name">Nombre Usuario Completo</h3>
      </div>
      <div class="user-actions">
        <button>Send Friend request</button>
        <div class="wishlist">
          <h4>WishList</h4>
          <div class="wishlist-buttons">
            <button v-for="item in wishlistItems" :key="item.id">{{ item.name }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </main>
</template>

<style>
main {
  width: 100%;
  height: 100%;
}

.user-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.user-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 50%;
  width: 90%;
  max-height: 50vh;
}

.user-image {
  height: 90%;
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

.wishlist-buttons {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
</style>




  