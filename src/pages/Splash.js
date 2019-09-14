//Splash.js
import React, {} from 'react';
//import { } from '@reach/router';
//import { useDispatch, useSelector } from 'react-redux';
//import { } from '../redux/selectors';
//import { } from '../redux/actions';
//import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Page from '../components/Page';

/*
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    }
}));
*/

export default function Splash() {

    //const dispatch = useDispatch();
    //const classes = useStyles();

    return (
        <Page title="Splash">
            <Typography align="center" variant="h2" component="h2">Welcome to Meetability!</Typography>
        </Page>
    );
}
        
