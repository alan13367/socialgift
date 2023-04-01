<template>
  <header>
    <!-- Aquí va el contenido de tu header -->
    <nav>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Acerca de</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
/* Aquí van los estilos de tu header */
header {
  background-color: #333;
  color: #fff;
  padding: 1em;
}
nav {
  display: flex;
  justify-content: space-between;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 1em;
}
a {
  color: #fff;
  text-decoration: none;
}
</style>


