<template>
  <header>
    <nav>
      <div class="menu">
        <RouterLink to="/">
          <img src="logo.png" alt="Logo de la empresa" />
        </RouterLink>
        <div class="menu-links">
          <RouterLink to="/" class="menu-link" >
            Emular Login (No estara en el final)
          </RouterLink>
        </div>
      </div>
      
    </nav>
  </header>
</template>

<script >
  export default {
    data() {
      return {
        
      }
    },
    methods: {
      changeHeader() {
        
      }
    }
  }
  </script>


<style scoped>
header {
    border-bottom: 2px solid #000000;
    background-color: #ffffff;
    width: 100%;
    z-index: 1;
  }
  nav {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    background-color: #ffffff
  }
img {
    height: 50px;
    padding-right: 1%;
  }

  .menu {
    display: flex;
    align-items: center;
    height: 80%;
    width: 80%;
  }

  .menu-links {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 80%;
  }

  menu-link {
    font-family: 'Inter';
    font-style: semibold;
    font-weight: 100;
    font-size: 18;
    color: #000000;
    text-decoration: none;
    padding-bottom: 1%;
    border-bottom: 2px solid transparent;
  }



</style>
