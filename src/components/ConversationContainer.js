//ConversationContainer.js
import React, { Fragment } from 'react';
//import { } from '@reach/router';
import { useSelector } from 'react-redux';
import { getAllUsers } from '../redux/selectors';
import { getMessages } from '../redux/selectors/thread'

//import { } from '../redux/actions';
//import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SnackbarContent from '@material-ui/core/SnackbarContent';

// import MessageContainer from '../components/MessageContainer';
/*
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    }
}));
*/

export default function ConversationContainer() {

    //const dispatch = useDispatch();
    //const classes = useStyles();
    const all_users = useSelector(getAllUsers)
    // const thread = useSelector(getThread);
    const messages = useSelector(getMessages);
    const messageContainers = messages.map((message, i) => {
        return (
            <div style={{margin:"0px",padding:"0px 100px 10px 10px", textAlign:"left"}}>
                <Typography style={{marginLeft: "12px",marginBottom:"-10px" ,fontSize: "12px", color:"gray"}}>
                    {all_users[message.from].username}
                </Typography>
                <SnackbarContent message={message.content} style={{width:"20px", margin: "10px"}}></SnackbarContent>
            </div>
        );
      });

    return (
        <Fragment>
            <div className='messages' id='messageList'>
                { messageContainers }
            </div>
        </Fragment>
    );
}
        
