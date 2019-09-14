//Home.js
import React, { } from 'react';
//import { } from '@reach/router';
// import { useSelector } from 'react-redux';
// import { getUser } from '../redux/selectors';
import { } from '../redux/actions';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Page from '../components/Page';
import UserListTabs from '../components/UserListTabs';
import MapContainer from '../components/MapContainer';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: 0,
        margin: 0
    }
}));

export default function Home() {

    //const dispatch = useDispatch();
    const classes = useStyles();

    // const user = useSelector(getUser);

    return (
        <Page title="Home" ClassName={classes.root} borderless>
            <Grid container className={classes.root} spacing={0}>
                <Grid item xs={12} sm={6}>
                    <UserListTabs />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <MapContainer />
                </Grid>
            </Grid>
        </Page>
    );
}
