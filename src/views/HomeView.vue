<template>
 
    <Header />
  <main>
    <img src="imagen1.jpg" alt="Descripción de la imagen 1">
    <img src="imagen2.jpg" alt="Descripción de la imagen 2">
  </main>
    <Footer />
 
</template>

<script>
import Header from "@/components/HeaderLogIn.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
}
</script>