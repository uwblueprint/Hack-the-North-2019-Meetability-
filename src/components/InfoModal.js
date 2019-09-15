//InfoModal.js
import React, { Fragment } from 'react';
//import { } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';
import { getLoading, getWarning } from '../redux/selectors';
import { setLoading, setWarning } from '../redux/actions';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
    content: {
        minWidth: '20vh',
    }
}));

export default function InfoModal() {

    const dispatch = useDispatch();
    const classes = useStyles();

    const loading = useSelector(getLoading);
    const warning = useSelector(getWarning);

    const show = Boolean(loading || warning);
    const handleClose = () => loading ? dispatch(setLoading()) : dispatch(setWarning());

    return (
        <Fragment>
            <Dialog open={show} onClose={handleClose}>
                <DialogContent dividers  className={classes.content}>
                    {warning ? warning : <CircularProgress style={{margin: 'auto'}}/>}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Close</Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}

