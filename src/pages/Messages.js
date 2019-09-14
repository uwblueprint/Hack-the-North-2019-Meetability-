//Messages.js
import React from 'react';
import { getThreads } from '../redux/selectors/thread'
//import { } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';
//import { } from '../redux/selectors';
//import { } from '../redux/actions';
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Page from '../components/Page';
// import InboxContainer from '../components/InboxContainer';
import ConversationContainer from '../components/ConversationContainer';
import ReplyMessageContainer from '../components/ReplyMessageContainer';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { getAllUsers, getUser } from '../redux/selectors';
import { fetchThread } from '../redux/actions';
// import { red } from '@material-ui/core/colors';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    }
}));


export default function Messages() {
    const dispatch = useDispatch();
    const classes = useStyles();
    const threads = useSelector(getThreads);
    const all_users = useSelector(getAllUsers)
    const current_user = useSelector(getUser);

    
    const threadTabs = Object.keys(threads).map(function(key, index) {
        const users = threads[key].users
        //The 2nd person in the conversation (not yourself)
        const otherUser = users.filter( id => all_users[id].username !== current_user.username)[0]
        const otherUsername = all_users[otherUser].username;
        const handleFetchThread = () => {
            dispatch(fetchThread(key));

        };

        return (
            <Tab
              key={index}
              label={otherUsername}
              onClick={handleFetchThread}/>
          );
      });

    return (
        <Page title="Messages" borderless>
             <Tabs
            orientation="vertical"
            variant="scrollable"
            className={classes.tabs}
            style={{
                position:"fixed",
                height: "100%",
                width:"15%",
                margin: "0px",
                background: "#2b2a2a",
                overflow: "hidden",
                color:"white",
            }}
            > 
                {threadTabs}       
            </Tabs>
            <div style={{textAlign: "center", float:"right", width:"85%"}}>
                <ConversationContainer/>
                <ReplyMessageContainer style={{margin:"100px"}}/>
            </div>
        </Page>
    );
}
        
