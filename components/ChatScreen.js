import { View, Text } from 'react-native';
import React from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { GiftedChat } from 'react-native-gifted-chat';

export default function ChatScreen() {
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  // Function to send a message

  const sendMessage = (messageText) => {
    const messagesRef = database().ref('messages');
    const newMessageRef = messagesRef.push();
    newMessageRef.set({
      text: messageText,
      timestamp: firebase.database.ServerValue.TIMESTAMP,
    });
  };

  // Function to listen for new messages
  const listenForMessages = () => {
    const messagesRef = database().ref('messages');
    messagesRef.on('child_added', (snapshot) => {
      const message = snapshot.val();
      // Update your state with the new message
    });
  };
  const ChatScreen = () => {
    const [messages, setMessages] = useState([]);

    const onSend = (newMessages = []) => {
      setMessages((prevMessages) =>
        GiftedChat.append(prevMessages, newMessages)
      );
    };
  };

  return (
    <View style={{ flex: 1 }}>
      <GiftedChat
        messages={messages}
        onSend={(newMessages) => onSend(newMessages)}
        user={{ _id: 1 }}
      />
    </View>
  );
}
