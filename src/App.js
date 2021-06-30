import React from 'react';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';
import styled from 'styled-components';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './config/firebaseConfig';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Header from './components/Header';
function App() {
  const [user, loading] = useAuthState(auth);
  console.log(user);
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Switch>
                <Route path="/" exat>
                  <Chat />
                </Route>
              </Switch>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
