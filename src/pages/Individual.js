//Individual.js
import React, { useState } from 'react';
//import { } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';
import { getSignUpFormData } from '../redux/selectors';
//import { } from '../redux/actions';
//import { makeStyles } from '@material-ui/core/styles';
import {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import { db } from '../utils/firebase';
import Page from '../components/Page';
import { getUser } from '../redux/selectors';

/*
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    }
}));
*/

export default function Individual() {

    
    const [state, setState] = useState({
        questions: []
    });
    
    const sign_up_form = useSelector(getSignUpFormData);
    
    const questions = sign_up_form.questions;
    
    console.log(sign_up_form);
    
    let items = state.questions.map((item, key) =>
        <div>
            <h1 key={item}>{item}</h1>
            <input
                type="text"
                value={item}
                onChange={this.handleChange}
            />
        </div>
    );
    const saveAndContinue = () => {
        //do something
    }
        
        
        return (
            <div>
                <Page title="Individual">
                    <Typography align="center" variant="h2" component="h2">This is a new page called Individual.</Typography>
                    {items}
                </Page>
                <a href="home" class="stretched-link">
                    <button href="/" onClick={saveAndContinue}>Save and Continue</button>
                </a>
            </div>
        );
}

