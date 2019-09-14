//Navbar.js
import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, getTitle } from '../redux/selectors';
import { logoutUser } from '../redux/actions';
import { Link } from '@reach/router';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function DropdownLinks() {

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <Fragment>
            <IconButton edge="start" className={classes.menuButton} color="inherit" onClick={handleClick}>
                <MenuIcon />
            </IconButton>
            <Menu
                id={'test'}
                getContentAnchorEl={null}
                anchorEl={anchorEl}
                anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
                transformOrigin={{vertical: 'top', horizontal: 'center'}}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem component={Link} to="/">Home</MenuItem>
                <MenuItem component={Link} to="/messages">Messages</MenuItem>

            </Menu>
        </Fragment>
    );
}

function SignInButtons() {
    return (
        <Fragment>
            <Button color="inherit" component={Link} to='/signin'>Sign In</Button>
            <Button color="inherit" component={Link} to='/signup'>Sign Up</Button>
        </Fragment>
    );
}

function SignOutButtons() {

    const dispatch = useDispatch();
    const handleSignOut = () => dispatch(logoutUser());

    return (
        <Fragment>
            <Button color="inherit" onClick={handleSignOut} component={Link} to='/signin'>Sign Out</Button>
        </Fragment>
    );
}

export default function Navbar() {

    const classes = useStyles();

    const user = useSelector(getUser);
    const title = useSelector(getTitle);

    return (
        <AppBar position="static">
            <Toolbar>
                <DropdownLinks />
                <Typography variant="h6" className={classes.title}>{title}</Typography>
                {!user && <SignInButtons />}
                {user && <SignOutButtons />}
            </Toolbar>
        </AppBar>
    );
}
