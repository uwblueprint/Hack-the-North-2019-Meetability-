//Individual.js
import React, {} from 'react';
//import { } from '@reach/router';
//import { useDispatch, useSelector } from 'react-redux';
//import { } from '../redux/selectors';
//import { } from '../redux/actions';
//import { makeStyles } from '@material-ui/core/styles';
import {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import { auth, db } from '../utils/firebase';
import Page from '../components/Page';

/*
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    }
}));
*/

export default class Individual extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: []
        };
    }

    //const dispatch = useDispatch();
    //const classes = useStyles();
    
    componentWillMount = () => {
        
        let storageDB = db.collection("admin").doc(
            "signup-form"
        );
        this.setState({"Number": 9})
        
        storageDB.get().then(function(doc) {
            if (doc.exists) {
                let q = [];
                Object.keys(doc.data().questions).map(function(keyName, keyIndex) {
                    console.log(keyName);
                    q.push(keyName);
                  // use keyName to get current key's name
                  // and a[keyName] to get its value
                })
                this.setState({"questions": q});
            }
            
        }.bind(this)).catch(function(error) {
            console.log("Error getting document:", error);
        });
    }
    
    saveAndContinue
    
    render() {
        
        
        this.items = this.state.questions.map((item, key) =>
            <div>
                <h1 key={item}>{item}</h1>
                <input
                    type="text"
                    value={item}
                    onChange={this.handleChange}
                />
            </div>
        );
        return (
            <div>
                <Page title="Individual">
                    <Typography align="center" variant="h2" component="h2">This is a new page called Individual.</Typography>
                    {this.items}
                </Page>
                <a href="home" class="stretched-link">
                    <button href="/" onClick={this.saveAndContinue}>Save and Continue</button>
                </a>
            </div>
        );
    }
}
        
