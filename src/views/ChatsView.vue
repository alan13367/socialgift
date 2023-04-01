<template>
    <div class="app-container">
      <div class="friends-container">
        <friend-list :friends="friends" @select-friend="selectFriend"/>
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
          <input type="text" v-model="newMessageText" placeholder="Type your message here...">
          <button @click="sendMessage">Send</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import FriendList from '../components/FriendList.vue';

  export default {
    data() {
      return {
        friends: [
        { name: 'Friend 1' },
        { name: 'Friend 2' },
        { name: 'Friend 3' }
      ],
      selectedFriend: null,
        messages: [
          {
            text: "Hello there!",
            outgoing: true
          },
          {
            text: "Hi, how are you?",
            outgoing: false
          },
          {
            text: "I'm doing well, thanks. How about you?",
            outgoing: true
          },
          {
            text: "I'm good too, thanks for asking.",
            outgoing: false
          },
          {
            text: "Great to hear!",
            outgoing: true
          },
          {
            text: "Yeah, so what's up?",
            outgoing: false
          },
          {
            text: "Not much, just working on this chat app.",
            outgoing: true
          },
          {
            text: "Cool, it looks nice!",
            outgoing: false
          },
          {
            text: "Thanks, I appreciate it!",
            outgoing: true
          }
        ],
        newMessageText: ""
      };
    },
    methods: {
      sendMessage() {
        if (this.newMessageText.trim() !== "") {
          this.messages.push({
            text: this.newMessageText,
            outgoing: true
          });
          this.newMessageText = "";
        }
      },
    selectFriend(friend) {
      this.selectedFriend = friend;
      // load chat messages for selected friend
    }
    }
  };
  </script>
  
  <style>
  .app-container {
  display: flex;
  height: 100vh;
  width: 100%;
}

.friends-container {
  width: 200px;
  background-color: #f0f0f0;
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

  