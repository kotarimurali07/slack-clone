import React, { useState } from 'react';
import styled from 'styled-components';
import { db } from '../config/firebaseConfig';
import { Button } from '@material-ui/core';
import firebase from 'firebase';
const ChatInput = ({ channelId, channelName, chatRef }) => {
  console.log(channelId);
  const [input, setInput] = useState('');
  const sendMessage = (e) => {
    e.preventDefault();
    if (!channelId) {
      return false;
    }
    db.collection('rooms').doc(channelId).collection('messages').add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: 'murali',
      userImage:
        'https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    });
    chatRef.current.scrollIntoView({
      behavior: 'smooth',
    });
    setInput('');
  };
  return (
    <ChatInputContainer>
      {/* <h1>heloo</h1> */}
      <form action="">
        <input
          value={input}
          type="text"
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          Send
        </Button>
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;
const ChatInputContainer = styled.div`
  border-radius: 20px;
  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }
  > form > input {
    width: 60%;
    bottom: 30px;
    position: fixed;
    bottom: 30px;
    border: 1px solid gray;
    padding: 20px;
    outline: none;
    border-radius: 20px;
    font-size: 19px;
    /* background-color: red; */
    font-family: cursive;
  }
  > form > Button {
    display: none !important ;
  }
`;
