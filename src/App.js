//App.js
import './App.css';
import React, { Fragment, useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Router } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, getTitle } from './redux/selectors';
import { fetchUser } from './redux/actions';
import Navbar from './components/Navbar';
import InfoModal from './components/InfoModal';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';
import Splash from './pages/Splash';
import CreateProfile from './pages/createProfile';
import CreateEvent from './pages/createEvent';
import Org from './pages/Org';
import CareTaker from './pages/CareTaker';
import Individual from './pages/Individual';
import Messages from './pages/Messages';
import UserDetail from './pages/UserDetail';

/*
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  }
}));
*/

export default function App() {

  const dispatch = useDispatch();
  //const classes = useStyles();
  const title = useSelector(getTitle);
  const user = useSelector(getUser);

  //fetch current user
  useEffect(() => dispatch(fetchUser()), [dispatch]);

  return (
    <Fragment>
        <div className="App">
          <Helmet>
            <title>{title}</title>
          </Helmet>
          <InfoModal/>
          <Navbar />
          <Router>
            <SignIn path="signin"/>
            <SignUp path="signup"/>
            <CreateProfile path="createProfile"/>
            <CreateEvent path="createEvent"/>
            <Org path="Organization"/>
            <CareTaker path="CareTaker"/>
            <Individual path="Individual"/>
            <Home path="home"/>
            <Messages path="messages"/>
            {user && <Home path="/"/>}
            {!user && <Splash path="/"/>}
            <UserDetail path="users/:selected_user_id" />
            <Splash path="/splash"/>
            <NotFound default/>
          </Router>
        </div>
    </Fragment>
  );
}

