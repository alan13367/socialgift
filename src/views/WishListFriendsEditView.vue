<template>

  <body>
    
    <header />
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

  <footer />  

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