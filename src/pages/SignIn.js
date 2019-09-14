//SignIn.js
import React, { useState } from 'react';
import { } from '@reach/router';
import { useDispatch } from 'react-redux';
import { } from '../redux/selectors';
import { loginUserWithEmailPassword } from '../redux/actions';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Page from '../components/Page';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    }
}));

export default function SignIn() {

    const classes = useStyles();

    const dispatch = useDispatch();

    const [state, setState] = useState({
        email: '',
        password: ''
    });

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.value });
    };

    const handleLoginUser = () => {
        dispatch(loginUserWithEmailPassword(state));
    }

    return (
        <Page title="Sign In">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField label="Email"
                        variant="outlined"
                        value={state.email}
                        onChange={handleChange('email')}
                        type="email"
                        name="email"
                        autoComplete="email"
                        fullWidth
                        className={classes.textField}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Password"
                        variant="outlined"
                        value={state.password}
                        onChange={handleChange('password')}
                        type="password"
                        fullWidth
                        className={classes.textField}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant='contained'
                        color='primary'
                        fullWidth
                        className={classes.loginButton}
                        onClick={handleLoginUser}
                    >Sign In</Button>
                </Grid>
            </Grid>
        </Page>
    );
}

