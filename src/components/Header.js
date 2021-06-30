import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import { AccessTime, Search, HelpOutline } from '@material-ui/icons';
const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderLeftAvatar />
        <AccessTime />
      </HeaderLeft>
      <HeaderSearch>
        <Search />
        <input type="text" placeholder="search" />
      </HeaderSearch>
      <HeaderRight>
        <HelpOutline />
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
const HeaderRight = styled.div`
  flex: 0%.3;
  display: flex;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;
const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  display: flex;
  padding: 0 50px;
  color: grey;
  border: 1px gray solid;
  input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: 0;
    color: white;
  }
`;
const HeaderContainer = styled.div`
  display: flex;
  /* background-color: red; */
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 10px 0;
  color: white;
  background-color: var(--slack-color);
  /* position: fixed; */
`;
const HeaderLeft = styled.div`
  flex: 0.3;
  /* background-color: red; */
  display: flex;
  align-items: center;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 40px;
  }
`;
const HeaderLeftAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
