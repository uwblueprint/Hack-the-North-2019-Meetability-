//MessageContainer.js
// import React, {Fragment} from 'react';
import React, { useState } from 'react';
//import { } from '@reach/router';
//import { useDispatch, useSelector } from 'react-redux';
//import { } from '../redux/selectors';
//import { } from '../redux/actions';
//import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { SnackbarContent } from '@material-ui/core';

/*
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1x,
    }
}));
*/

export default function MessageContainer() {
    //const dispatch = useDispatch();
    //const classes = useStyles();
    const message = useState("I'm a message!")[0]
    const username = useState("Santos")[0]
    return ( 
        <div style={{margin:"0px",padding:"0px 10px 10px 10px", textAlign:"left"}}>
            <Typography style={{marginLeft: "12px",marginBottom:"-10px" ,fontSize: "12px", color:"gray"}}>
                {username}
            </Typography>
             <SnackbarContent message={message} style={{width:"20px", margin: "10px"}}>
        </SnackbarContent>
      </div>
    );
}
        
