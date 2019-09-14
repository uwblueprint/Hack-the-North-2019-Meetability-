//Page.js
import React, { } from 'react';
//import { } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';
import { getTitle } from '../redux/selectors';
import { setTitle } from '../redux/actions';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const styledBy = (property, mapping) => props => mapping[props[property]];

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: styledBy('borderless', {
            default: theme.spacing(4),
            true: 0
        }),
        padding: 0
    }
}));

// const borderlessStyles = {
//     padding: 0
// }

export default function Page({ title, children, borderless }) {

    const dispatch = useDispatch();
    const classes = useStyles();

    const storeTitle = useSelector(getTitle);

    if (storeTitle !== title) dispatch(setTitle(title));

    return (
        <Container maxWidth={borderless ? false : "sm"} className={classes.root} borderless>
            {children}
        </Container>
    );
}

