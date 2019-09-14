//ConversationContainer.js
import React, { Fragment, useState } from 'react';
//import { } from '@reach/router';
//import { useDispatch, useSelector } from 'react-redux';
//import { } from '../redux/selectors';
//import { } from '../redux/actions';
//import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import MessageContainer from '../components/MessageContainer';
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
    const data = useState(["More messages", "Even more", "Even more"])[0]
    const messages = data.map((message, i) => {
        return (
          <MessageContainer
            key={i}
            message={message.message}/>
        );
      });

    return (
        <Fragment>
            <div className='messages' id='messageList'>
                { messages }
            </div>
        </Fragment>
    );
}
        
