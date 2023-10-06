import { View, Text } from 'react-native';
import React from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { GiftedChat } from 'react-native-gifted-chat';
import { firebaseConfig } from '../firebaseConfig';

export default function ChatScreen() {
  const ChatScreen = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
      // Load chat messages from Firebase Firestore
      // Update the 'messages' state with the fetched messages
    }, []);

    const onSend = (newMessages = []) => {
      // Send a new message to Firebase Firestore
      // Update 'messages' state with the new message
    };

    return (
      <>
        <View style={{ flex: 1, backgroundColor: red }}>
          <Text>Chat Here</Text>
        </View>

        <GiftedChat
          messages={messages}
          onSend={(newMessages) => onSend(newMessages)}
          user={{ _id: auth().currentUser.uid }}
        />
      </>
    );
  };
}
