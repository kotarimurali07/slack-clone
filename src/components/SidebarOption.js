import React from 'react';
import { db } from '../config/firebaseConfig';
import styled from 'styled-components';
import { enterRoom } from '../features/appSlice';
import { useDispatch } from 'react-redux';
const SidebarOption = ({ Icon, title, AddChannelOption, id }) => {
  const dispatch = useDispatch();
  const addChannel = () => {
    const channelName = prompt('pleaze enter the user name');
    if (channelName) {
      db.collection('rooms').add({
        name: channelName,
      });
    }
  };
  const selectChannel = () => {
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
    }
  };
  return (
    <SidebarOptionContainer
      onClick={AddChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize="small" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span>
          {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
};

export default SidebarOption;
const SidebarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;
  padding: 5px;
  > h3 {
    padding-left: 7px;
    font-weight: 500;
  }
  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }
  > h3 > span {
    padding: 15px;
  }
`;
const SidebarOptionChannel = styled.h3`
  padding: 10px 0;
  font-weight: 300;
`;
