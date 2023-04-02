<template>
  <div>
    <h2>Perfil</h2>
    <div>
      <div>
        <img :src="userImageUrl" alt="Foto de perfil" />
        <h3>{{ userFullName }}</h3>
      </div>
      <div>
        <button>Send Friend request</button>
        <div class="wishlist">
          <div v-for="item in wishlistItems" :key="item.id">
            <h4>WishList</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>




  