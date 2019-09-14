//NotFound.js
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

export default function NotFound() {

    //const dispatch = useDispatch();
    //const classes = useStyles();

    return (
        <Page title="Not Found">
            <Typography align="center" variant="h2" component="h2">This page does not exist.</Typography>
        </Page>
    );
}
        
