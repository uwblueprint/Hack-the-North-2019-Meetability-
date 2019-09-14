//App.js
import './App.css';
import React, { Fragment, useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Router } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, getTitle } from './redux/selectors';
import { fetchUser } from './redux/actions';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';
import CreateProfile from './pages/createProfile';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  }
}));

export default function App() {

  const dispatch = useDispatch();
  const classes = useStyles();
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
          <Navbar />
          <Router>
            <SignIn path="signin"/>
            <SignUp path="signup"/>
            <CreateProfile path="createProfile"/>
            {user && <Home path="/"/>}
            <NotFound default/>
          </Router>
        </div>
    </Fragment>
  );
}

