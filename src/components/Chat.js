import React, { useRef, useEffect } from 'react';
import ChatInput from './ChatInput';
import { StarBorder, InfoOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectRoomId } from '../features/appSlice';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { db } from '../config/firebaseConfig';
import Message from './Message';
const Chat = () => {
  const chatRef = useRef(null);
  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(
    roomId && db.collection('rooms').doc(roomId)
  );
  const [roomMessage, loading] = useCollection(
    roomId &&
      db
        .collection('rooms')
        .doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
  );
  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }, [roomId, loading]);
  // console.log(roomDetails?.data());
  // console.log(roomMessage);
  return (
    <ChatContainer>
      {roomMessage && roomDetails && (
        <>
          <Header>
            <HeaderLeft>
              <h4>
                <strong>{roomDetails?.data().name}</strong>
                <StarBorder />
              </h4>
            </HeaderLeft>
            <HeaderRight>
              <p>
                <InfoOutlined />
                Details
              </p>
            </HeaderRight>
          </Header>
          <ChatMessages>
            {roomMessage?.docs.map((doc) => {
              const { message, user, userImage, timestamp } = doc.data();
              return (
                <Message
                  message={message}
                  key={doc.id}
                  user={user}
                  userImage={userImage}
                  timestamp={timestamp}
                />
              );
            })}
            <ChatBottom ref={chatRef} />
          </ChatMessages>

          <ChatInput
            chatRef={chatRef}
            channelId={roomId}
            channelName={roomDetails?.data().name}
          />
        </>
      )}
    </ChatContainer>
  );
};

export default Chat;
const ChatMessages = styled.div``;
const ChatBottom = styled.div`
  padding-bottom: 200px;
`;
const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  > p > .MuiSvgIcon-root {
    margin-right: 5px;
    font-size: 16px;
  }
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  > h4 {
    display: flex;
    text-transform: lowercase;
  }
  > h4 > .MuiSvgIcon-root {
    margin-left: 10px;
    font-size: 18px;
    /* background-color: red; */
  }
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;
const ChatContainer = styled.div`
  flex: 0.9;
  /* background-color: red; */
  flex-grow: 1px;
  overflow-y: auto;
`;
