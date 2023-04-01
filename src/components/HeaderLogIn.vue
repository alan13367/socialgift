<template>
  <header>
    <nav class="left-nav">
      <img src="logo.png" alt="Logo de la empresa">
      <ul>
        <li><a href="#">Aniversario</a></li>
        <li><a href="#">Cumpleaños</a></li>
        <li><a href="#">Otros</a></li>
      </ul>
    </nav>
    <nav class="right-nav">
      <button>Sign In</button>
      <button>Sign Up</button>
    </nav>
  </header>
</template>
<style scoped>
header {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2% 5%;
  position: absolute;
  width: 100%;
  height: 97px;
  left: 0px;
  top: -9px;
  border-bottom: 5px solid #000000;
  flex-wrap: wrap;
}

.left-nav {
  display: flex;
  flex-direction: row;
  justify-content: flex-start; 
  padding: 0px;
  gap: 2%;
  height: 57px;
  flex-basis: 70%;
  background: #FFFFFF;
}


.right-nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 2%;
  height: 32px;
  flex-basis: 30%;
}

img {
  width: 15%;
  height: 100%;
  background: url(logo.png);
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 85%;
}

li {
  list-style: none;
  margin: 0;
  padding: 0;
  margin-right: 2%;
}

a {
  width: 100%;
  height: 20px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  font-feature-settings: 'liga' off;
  color: #111827;
}

button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  width: 45%;
  height: 32px;
  /* Primary/600 */
  background: #7C3AED;
  border-radius: 8px;
}
</style>