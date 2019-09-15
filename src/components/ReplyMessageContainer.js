//ReplyMessageContainer.js
import React, { Fragment } from 'react';
//import { } from '@reach/router';
import { useDispatch } from 'react-redux';
import { } from '../redux/selectors';
import { sendMessage } from '../redux/actions';
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

    const dispatch = useDispatch();
    //const classes = useStyles();

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }
    
    const handleKeyUp = (event) => {
        if (event.keyCode === 13){
            sendMessage()
        }
    }
    const handleSendMessage = () => {
        const textField = document.getElementById("message-text-field")
        const message = textField.value
        if (message === "") { return }
        dispatch(sendMessage(message));
        textField.value = ''
        sleep(100).then(() => {
            document.getElementById("messageList").scrollTop = document.getElementById("messageList").scrollHeight
          })
    }

    return (
        <Fragment>
            <div style={{width:"75%" ,position: "absolute", bottom: "5px", background:"#f2f2f2", marginLeft:"10px"}} onKeyUp={(event) => handleKeyUp(event)}>
                <TextField id="message-text-field" placeholder="Reply to message..." fullWidth="true" variant="outlined" >
                </TextField>
            </div>
            <div style={{position:"absolute", bottom: "5px", right:"45px", borderRadius:"100px", padding: "10px"}}>
                <Button variant="outlined" style={{}} onClick={handleSendMessage} >
                    Send
                </Button>
            </div>
        </Fragment>
    );
}
        
