<template>
  <div class="manage-friends">
    <header>
      <h1>Amigos</h1>
      <div class="search-bar">
        <input type="text" placeholder="Buscar">
        <button><img src="lupa.png" alt="Buscar"></button>
      </div>
    </header>
    <main>
      <div class="friend-list">
        <div class="friend-item" v-for="friend in friends" :key="friend.id">
          <img src="amigos.png" alt="Amigos">
          <div class="friend-details">
            <h2>{{ friend.name }}</h2>
          </div>
          <button>Editar</button>
        </div>
      </div>
    </main>
    
  </div>
</template>
<script>
import Header from "@/components/Header.vue";

export default {
  name: "ManageFriends",
  components: {
    Header,

  },
  data() {
    return {
      friends: [
        {
          id: 1,
          name: "Juan Perez",
        },
        {
          id: 2,
          name: "Maria Gomez",
        },
        {
          id: 3,
          name: "Pedro Rodriguez",
        },
        {
          id: 4,
          name: "Ana Garcia",
        },
      ],
    };
  },
};
</script>
<style >
.manage-friends {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 24px;
}

.search-bar {
  display: flex;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 8px;
  padding: 8px;
}

input[type="text"] {
  border: none;
  flex: 1;
  margin-right: 8px;
}

button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}

main {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.friend-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.friend-item {
  width: calc(50% - 12px);
  margin-bottom: 24px;
  display: flex;
  align-items: center;
}

.friend-item img {
  margin-right: 16px;
  height: 48px;
  width: 48px;
}

.friend-details {
  display: flex;
  flex-direction: column;
}

h2 {
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  color: #333;
}

button {
  border: none;
  background-color: #007bff;
  color: #fff;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
}
</style>