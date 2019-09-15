//SignIn.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../redux/selectors';
import { updateUser } from '../redux/actions';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@reach/router';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Page from '../components/Page';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';

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
        date: new Date()
    });

    const user = useSelector(getUser);

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.value });
    };

    const handleCreateEvent = () => {
        const userEvents = user.events || [];
        dispatch(updateUser({
            events: [...userEvents, {...state, date: state.date.toISOString()}]
        }));
    }
    
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
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid item xs={12}>
                        <KeyboardDatePicker
                            style={{marginRight: '30px'}}
                            margin="normal"
                            id="date-picker-dialog"
                            label="Date picker dialog"
                            format="MM/dd/yyyy"
                            value={state.date}
                            onChange={val => setState({...state, date: val})}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                        <KeyboardTimePicker
                            margin="normal"
                            id="time-picker"
                            label="Time picker"
                            value={state.date}
                            onChange={val => setState({...state, date: val})}
                            KeyboardButtonProps={{
                                'aria-label': 'change time',
                            }}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
                <Grid item xs={12}>
                    <Button variant='contained'
                        color='primary'
                        fullWidth
                        className={classes.createButton}
                        onClick={handleCreateEvent}
                        component={Link}
                        to={"/home"}
                    >Create Event</Button>
                </Grid>
            </Grid>
        </Page>
    );
}

