//UsersList.js
import React, { Fragment, useState } from 'react';
//import { } from '@reach/router';
import { useSelector } from 'react-redux';
import { getAllUsers, getFriends, getFollowers } from '../redux/selectors';
//import { } from '../redux/actions';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    }
}));

export default function UserListTabs() {

    //const dispatch = useDispatch();
    const [value, setValue] = useState(0);
    const classes = useStyles();

    const all_users = useSelector(getAllUsers);
    const friends = useSelector(getFriends);
    const followers = useSelector(getFollowers);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const getUserList = (users = {}, index) => {

        const usersArray = Object.values(users);

        const listItems = usersArray.map((item, i) => {

            return (
                <ListItem button key={i}>
                    <ListItemText primary={`${item.username}`}/>
                </ListItem>
            )
        });

        return (
            <List hidden={index !== value}>{listItems}</List>
        );
    }

    return (
        <Fragment>
            <div ClassName={classes.root}>
                <AppBar position="static">
                    <Tabs value={value} centered onChange={handleChange}>
                        <Tab label="Item One" />
                        <Tab label="Item Two" />
                        <Tab label="Item Three" />
                    </Tabs>
                </AppBar>
                {getUserList(all_users, 0)}
                {getUserList(friends, 1)}
                {getUserList(followers, 2)}
            </div>
        </Fragment>
    );
};

