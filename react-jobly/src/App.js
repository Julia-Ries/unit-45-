import React, { useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import JoblyApi from './api';
import './App.css';
import AppRoutes from './routes-nav/AppRoutes'
import Navigation from './routes-nav/Navigation';
import useLocalStorage from './hooks/useLocalStorage';
import jwt from "jsonwebtoken";
import LoadingSpinner from "./common/LoadingSpinner";
import UserContext from './auth/UserContext';

export const TOKEN_STORAGE_ID = "jobly-token";



function App() {
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  const [currentUser, setCurrentUser] = useState(null);
  const [applicationIds, setApplicationIds] = useState(new Set ([]));
  const [infoLoaded, setInfoLoaded] = useState(false);


  useEffect(function loadUserInfo(){
    async function getCurrentUser (){
    if (token) {
      try {
        let {username} = jwt.decode(token);
        JoblyApi.token = token;
        let currentUser = await JoblyApi.getCurrentUser(username);
        setCurrentUser=currentUser;
        setApplicationIds(new Set(currentUser.applications));
      } catch (err){
        setCurrentUser(null);
      }
    }
      setInfoLoaded(true);
    }
    setInfoLoaded(false);
    getCurrentUser();
  }, [token]);

  async function signup(signupData){
    try {
      let token = await JoblyApi.signup(signupData);
      setToken(token);
      return {success: true}
    } catch(err) {
      return {success: false, errors}
    }
  }

  async function logout(){
    setCurrentUser(null);
    setToken(null);
  }

  async function login(loginData){
    try {
      let token = await JoblyApi.login(loginData);
      setToken(token);
      return {success: true}
    } catch (err){
      return {success: false, errors}
    }
  }

  function hasAppliedToJob(id) {
    return applicationIds.has(id);
  }

  function applyToJob(id) {
    if (hasAppliedToJob(id)) return;
    JoblyApi.applyToJob(currentUser.username, id);
    setApplicationIds(new Set([...applicationIds, id]));
  }

  if (!infoLoaded) return <LoadingSpinner />;



  return (
    <BrowserRouter>
      <UserContext.Provider
          value={{ currentUser, setCurrentUser, hasAppliedToJob, applyToJob }}>
        <div className="App">
          <Navigation logout={logout} />
          <Routes login={login} signup={signup} />
        </div>
      </UserContext.Provider>
    </BrowserRouter>
);
}


export default App;
