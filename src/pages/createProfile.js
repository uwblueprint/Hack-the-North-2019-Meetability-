//createProfile.js
import React, {} from 'react';
import './createProfile.css';
//import { } from '@reach/router';
//import { useDispatch, useSelector } from 'react-redux';
//import { } from '../redux/selectors';
//import { } from '../redux/actions';
import {ReactComponent as CancelIcon} from './caretaker.svg';
import {ReactComponent as SavedIcon} from './individual.svg';
import {ReactComponent as SearchIcon} from './org.svg';
import {Card, CardText, CardBody} from 'reactstrap';

/*
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    }
}));
*/


export default function CreateProfile() {

    //const dispatch = useDispatch();
    //const classes = useStyles();

    return (
           <div className="welcome-page">
              <div className="welcome-row-content">
                  <div className="welcome-row-title">
                      <h2>
                        Welcome
                      </h2>
                      <div className='welcome-message'>What category do you fall into?</div>
                  </div>
                  <div className="column welcome-col">
                      <a href="Organization" className="stretched-link">
                          <Card className="welcome-card" variant="top">
                              <SearchIcon className="icon-picture"/>
                              <CardBody>
                                  <CardText>
                                      Organization
                                  </CardText>
                              </CardBody>
                          </Card>
                      </a>
                 </div>
                 <div className="column welcome-col">
                     <a href="Individual" className="stretched-link">
                         <Card className="welcome-card" variant="top">
                             <SavedIcon className="icon-picture"/>
                             <CardBody>
                                 <CardText>
                                     Individual
                                 </CardText>
                             </CardBody>
                         </Card>
                     </a>
                 </div>
                 <div className="column welcome-col">
                     <a href="CareTaker" className="stretched-link">
                         <Card className="welcome-card" variant="top">
                             <CancelIcon className="icon-picture"/>
                             <CardBody>
                                 <CardText>
                                     Caretaker
                                 </CardText>
                             </CardBody>
                         </Card>
                     </a>
                 </div>
              </div>
           </div>
        );
}
        
