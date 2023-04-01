<template>

  <body>
    <header>
      <h1>Nombre de la lista seleccionada</h1>
      <div class="search-bar">
        <input type="text" placeholder="Buscar">
        <button><img src="lupa.png" alt="Buscar"></button>
      </div>
    </header>
    <main>
      <ol>
        <li>
          <div class="product">
            <img src="regalo.png" alt="Regalo">
            <div class="details">
              <h2>Nombre del producto</h2>
              <p>Descripción del producto</p>
            </div>
            <button>Regalar</button>
          </div>
        </li>
        <!-- Se agregarán más elementos de la lista aquí -->
      </ol>
    </main>
  </body>



</template>
  

  <script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
}
</script>