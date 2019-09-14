//Page.js
import React, { } from 'react';
//import { } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';
import { getTitle } from '../redux/selectors';
import { setTitle } from '../redux/actions';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(4)
    }
}));

export default function Page({ title, children }) {

    const dispatch = useDispatch();
    const classes = useStyles();

    const storeTitle = useSelector(getTitle);

    if (storeTitle !== title) dispatch(setTitle(title));

    return (
        <Container maxWidth="sm" className={classes.root}>
            {children}
        </Container>
    );
}

