<template>
  <body>
  <div>
    <h2>Solicitudes</h2>
    <div>
      <input type="text" placeholder="Buscar..." />
      <i class="fas fa-search"></i>
    </div>
    <div>
      <div>
        <h3>Solicitudes pendientes</h3>
        <ul>
          <li v-for="request in pendingRequests" :key="request.id">
            <button @click="acceptRequest(request)">Aceptar</button>
            <span>{{ request.name }}</span>
          </li>
        </ul>
      </div>
      <div>
        <h3>Envíos pendientes</h3>
        <ul>
          <li v-for="request in pendingSends" :key="request.id">
            <button @click="markAsPending(request)">Pendiente</button>
            <span>{{ request.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  </body>
</template>


<script>
import Header from "@/components/Header.vue";


export default {
  components: {
    Header,
  },
}
</script>


