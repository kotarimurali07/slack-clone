import React from 'react';
import styled from 'styled-components';
const Message = ({ message, user, userImage, timestamp }) => {
  console.log(timestamp);
  const time = Date.now();
  const presentime = new Date(time);
  return (
    <MessageContainer>
      <img src={userImage} alt="" />
      <MessageInfo>
        <h4>
          {user}
          {/* <span>timestamp </span> */}
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  );
};

export default Message;
const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  > img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;
const MessageInfo = styled.div`
  padding-left: 10px;
  > h4 {
    font-family: cursive;
    font-weight: 1000;
  }
  > p {
    font-family: cursive;
    font-weight: 200;
  }
  > h4 > span > {
    color: red;
    font-weight: 300;
    margin-left: 4px;
    font-size: 10px;
    font-family: cursive;
  }
`;
