import React from 'react';
import styled from 'styled-components';
import slack from '../logo/slack.svg';
import { Button } from '@material-ui/core';
import { auth, provider } from '../config/firebaseConfig';
const Login = () => {
  const sign = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img src={slack} alt="slack" />
        <h1>Sign in to the Slack</h1>
        <Button onClick={sign}>Sign in with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
};

export default Login;
const LoginContainer = styled.div`
  /* background-color: #f8f8f8; */
  background-color: #36c5f0;
  height: 100vh;
  display: grid;
  place-items: center;
`;
const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;

  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }
  > h1 {
    font-family: cursive;
  }
  > Button {
    margin-top: 50px;
    color: white;
    font-family: cursive;
    text-transform: inherit !important;
    background-color: #e01e5a !important;
  }
`;
