<template>
  <div class="app-container">
    <div class="friend-list">
      <div class="friend-item" v-for="friend in friends" :key="friend.id">
        <img :src="friend.image" alt="Amigos">
        <h3>{{ friend.name + ' ' + friend.last_name }}</h3>
      </div>
    </div>
    <div class="chat-container">
      <div class="chat-messages">
        <div class="message" v-for="message in messages" :class="{'outgoing': message.outgoing, 'incoming': !message.outgoing}">
          <div class="message-bubble">
            <p>{{ message.text }}</p>
          </div>
        </div>
      </div>
      <div class="chat-input">
        <input type="text" v-model="newMessageText" placeholder="Type your message here..." />
        <button @click="sendMessage">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      friends: [],
      newMessageText: '',
      messages: [],
    };
  },
  created() {
    this.getFriends();
  },
  methods: {
    async getFriends() {
      const url = 'https://balandrau.salle.url.edu/i3/socialgift/api/v1/friends';
      const headers = {
        'accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json',
      };
      const response = await fetch(url, { headers });
      if (response.ok) {
        const json_response = await response.json();
        if (json_response) {
          this.friends = json_response;
        } else {
          console.error('Error: Friends data is missing');
          console.error(response);
        }
      } else {
        console.error('Error calling API:', response.status);
      }
    },
    async sendMessage() {
      const url = 'https://balandrau.salle.url.edu/i3/socialgift/api/v1/messages';
      const headers = {
        'accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json',
      };
      const data = {
        content: this.newMessageText,
        user_id_send: localStorage.getItem('id'),
        user_id_recived: 202,
      };
      const response = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(data),
      });
      if (response.ok) {
        this.newMessageText = '';
        this.getMessages();
      } else {
        console.error('Error sending message:', response.status);
      }
    },
    async getMessages() {
      const url = 'https://balandrau.salle.url.edu/i3/socialgift/api/v1/messages/202';
      const headers = {
        'accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
      };
      const response = await fetch(url, { headers });
      if (response.ok) {
        const json_response = await response.json();
        if (json_response) {
          this.messages = json_response
            .sort((a, b) => a.id - b.id)
            .map((message) => ({ text: message.content }));
        } else {
          console.error('Error: Messages data is missing');
          console.error(response);
        }
      } else {
        console.error('Error calling API:', response.status);
      }
    },
  },
};
</script>


  
<style scoped>
.app-container {
  display: flex;
  height: 100vh;
  width: 100%;
}

.friend-list {
  width: 200px;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
}

.chat-container {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.chat-header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #000;
  height: 60px;
  font-size: 24px;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
}

.message {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  flex-direction: row-reverse;
}

.message-bubble {
  max-width: 70%;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
}

.outgoing .message-bubble {
  background-color: #A33DA5;
  margin-left: auto;
}

.incoming .message-bubble {
  background-color: #E94AEC;
  margin-right: auto;
}

.chat-input {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f0f0f0;
}

.chat-input input {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
}

.chat-input button {
  background-color: #A33DA5;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
}
</style>

  