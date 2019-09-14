//ReplyMessageContainer.js
import React, { Fragment } from 'react';
//import { } from '@reach/router';
//import { useDispatch, useSelector } from 'react-redux';
//import { } from '../redux/selectors';
//import { } from '../redux/actions';
//import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
/*
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    }
}));
*/

export default function ReplyMessageContainer() {

    //const dispatch = useDispatch();
    //const classes = useStyles();

    return (
        <Fragment>
            <div style={{width:"75%" ,position: "absolute", bottom: "5px", background:"#f2f2f2", marginLeft:"10px"}}>
                <TextField placeholder="Reply to message..." fullWidth="true" variant="outlined">
                </TextField>
            </div>
            <div style={{position:"absolute", bottom: "5px", right:"45px", borderRadius:"100px", padding: "10px"}}>
                <Button variant="outlined" style={{}}>
                    Send
                </Button>
            </div>

        </Fragment>
    );
}
        
