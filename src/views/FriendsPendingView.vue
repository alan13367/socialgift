<template>
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
</template>

<script>
export default {
  name: 'friendsPending',
  props: {
    pendingRequests: {
      type: Array,
      required: true,
    },
    pendingSends: {
      type: Array,
      required: true,
    },
  },
  methods: {
    acceptRequest(request) {
      // Lógica para aceptar una solicitud.
    },
    markAsPending(request) {
      // Lógica para marcar una solicitud como pendiente.
    },
  },
};
</script>

<style>
/* Estilos para el componente friendsPending */
</style>


