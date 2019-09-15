//Individual.js
import React, { useState } from 'react';
import { navigate } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';
import { getSignUpFormData } from '../redux/selectors';
import { updateUser } from '../redux/actions';
//import { } from '../redux/actions';
//import { makeStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Page from '../components/Page';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    }
}));


export default function Individual() {
    
    const dispatch = useDispatch();
    const classes = useStyles();

    
    const [state, setState] = useState({});
    
    const sign_up_form = useSelector(getSignUpFormData);
    
    const questions = sign_up_form.questions || {};
    
    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.value });
    };
    
    const items = Object.keys(questions).map((key, i) =>
        <div>
            <h1 key={i}>{questions[key]}</h1>
            <Grid item xs={12}>
                <TextField label={key}
                    variant="outlined"
                    value={state[key] || ''}
                    onChange={handleChange(key)}
                    type=""
                    name=""
                    fullWidth
                    className={classes.textField}
                />
            </Grid>
        </div>
    );
    

    const saveAndContinue = async () => {
        state["type"] = "Individual"
        await dispatch(updateUser({ questions: state }));
        navigate("/");
    }
        
        
        return (
            <div>
                <Page title="Individual">
                    <Typography align="center" variant="h3" component="h3">Please fill in your details!</Typography>
                    <br/>
                    <Grid container spacing={2}>
                        {items}
                        <br/>
                            <Grid item xs={12}>
                                <Button variant='contained'
                                    color='primary'
                                    fullWidth
                                    className={classes.loginButton}
                                    onClick={saveAndContinue}
                                >Save and Continue</Button>
                            </Grid>
                    </Grid>
                </Page>
            </div>
        );
}