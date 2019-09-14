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

export default function CreateEvent() {

    const classes = useStyles();

    const dispatch = useDispatch();

    const [state, setState] = useState({
        name: '',
        description: '',
        location: '',
        timestamp: ''
    });

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.value });
    };

    const handleCreateEvent = () => {
        // dispatch(createUserWithEmailPassword(state));
        console.log("TODO: handleCreateEvent");
        //this.setState({"redirect": true});
    }
    
    //if (this.state.redirect){
    //    return <Redirect to="createProfile" />
    //}
    
    return (
        <Page title="Create Event">
            <Grid container spacing={2}>
            <Grid item xs={12}>
                    <TextField label="Event Name"
                        variant="outlined"
                        value={state.name}
                        onChange={handleChange('name')}
                        fullWidth
                        className={classes.textField}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Description"
                        variant="outlined"
                        value={state.description}
                        onChange={handleChange('description')}
                        fullWidth
                        className={classes.textField}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Location"
                        variant="outlined"
                        value={state.location}
                        onChange={handleChange('location')}
                        fullWidth
                        className={classes.textField}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Timestamp"
                        variant="outlined"
                        value={state.timestamp}
                        onChange={handleChange('timestamp')}
                        fullWidth
                        className={classes.textField}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant='contained'
                        color='primary'
                        fullWidth
                        className={classes.createButton}
                        onClick={handleCreateEvent}
                    >Create Event</Button>
                </Grid>
            </Grid>
        </Page>
    );
}

