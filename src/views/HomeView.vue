<template>
  <div>
    <Header />
    <main>
      <img src="@/assets/logo.png" alt="Vue logo" />
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </main>
    
  </div>
</template>

<script>
import Header from "@/components/HeaderLogIn.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "View",
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>


</style>