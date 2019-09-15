//Home.js
import React, { } from 'react';
//import { } from '@reach/router';
import { useDispatch } from 'react-redux';
import { } from '../redux/selectors';
import { updateUser } from '../redux/actions';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Page from '../components/Page';
import UserListTabs from '../components/UserListTabs';
import HooksMapContainer from '../components/HooksMapContainer';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: 0,
        margin: 0
    }
}));

export default function Home() {

    const dispatch = useDispatch();
    const classes = useStyles();

    if (navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            pos => {
                dispatch(updateUser({ coords: [pos.coords.latitude, pos.coords.longitude] }));
            },
            err => console.warn(err),
            {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            }
        );
    };

    return (
        <Page title="Home" className={classes.root} borderless>
            <Grid container className={classes.root} spacing={0}>
                <Grid item xs={12} sm={6}>
                    <UserListTabs />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <HooksMapContainer />
                </Grid>
            </Grid>
        </Page>
    );
}
