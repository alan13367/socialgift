<script>
export default {
  name: 'ChatContainer',
  props: {},
  data() {
    return {
      messages: [],
      selectedFriendId: '',
    };
  },
  methods: { 
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
        user_id_recived: this.selectedFriendId,
      };
      const response = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(data),
      });
      if (response.ok) {
        this.newMessageText = '';
        this.getMessages(this.selectedFriendId);
      } else {
        console.error('Error sending message:', response.status);
      }
    },
    async getMessages(id) {
      this.selectedFriendId = id;
      const url = `https://balandrau.salle.url.edu/i3/socialgift/api/v1/messages/${id}`;
      const headers = {
        'accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json',
      };
      try {
        const response = await fetch(url, { headers });
        if (response.ok) {
          const json_response = await response.json();
          if (json_response) {
            this.messages = json_response
              .sort((a, b) => a.id - b.id)
              .map((message) => ({ 
                text: message.content,
                outgoing: message.user_id_send !== this.selectedFriendId 
                }));
          } else {
            console.error('Error: Messages data is missing');
            console.error(response);
          }
        } else {
          console.error('Error calling API:', response.status);
        }
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
    },
  },
  created() {
    emitter.on('getMessages', this.getMessages);
  },
  destroyed() {
    emitter.off('getMessages', this.getMessages);
  },
};
</script>


<template>
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
      <button @click="sendMessage()">Send</button>
    </div>
  </div>
</template>
