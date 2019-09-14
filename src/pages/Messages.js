//Messages.js
import React from 'react';

//import { } from '@reach/router';
//import { useDispatch, useSelector } from 'react-redux';
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
// import { red } from '@material-ui/core/colors';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    }
}));


export default function Messages() {
    //const dispatch = useDispatch();
    const classes = useStyles();
    // set the initial state of messages so that it is not undefined on load
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
                <Tab label="Item One"  />
                <Tab label="Item Two" />
                <Tab label="Item Three"  />
                <Tab label="Item Four"  />
                <Tab label="Item Five"  />
                <Tab label="Item Six"  />
                <Tab label="Item Seven"  />
            </Tabs>
            <div style={{textAlign: "center", float:"right", width:"85%"}}>
                <ConversationContainer/>
                <ReplyMessageContainer style={{margin:"100px"}}/>
            </div>
        </Page>
    );
}
        
