//SignIn.js
import React, { useState } from 'react';
import { redirect} from '@reach/router';
import { useDispatch } from 'react-redux';
//import { } from '../redux/selectors';
import { createUserWithEmailPassword } from '../redux/actions';
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

export default function SignUp() {

    const classes = useStyles();

    const dispatch = useDispatch();

    const [state, setState] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.value });
    };

    const handleCreateUser = () => {
        dispatch(createUserWithEmailPassword(state));
        //this.setState({"redirect": true});
    }
    
    //if (this.state.redirect){
    //    return <Redirect to="createProfile" />
    //}
    
    return (
        <Page title="Sign Up">
            <Grid container spacing={2}>
            <Grid item xs={12}>
                    <TextField label="Username"
                        variant="outlined"
                        value={state.username}
                        onChange={handleChange('username')}
                        fullWidth
                        className={classes.textField}
                    />
                </Grid>
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
                        className={classes.createButton}
                        onClick={handleCreateUser}
                    >Sign Up</Button>
                </Grid>
            </Grid>
        </Page>
    );
}

