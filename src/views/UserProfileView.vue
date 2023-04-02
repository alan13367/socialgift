<template>
  <div>
    <h2>Perfil</h2>
    <div>
      <div>
        <img src="@/assets/Imagenes/userimage.png" alt="Foto de perfil" />
        <h3> Nombre Usuario Completo</h3>
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

<style>

</style>



  