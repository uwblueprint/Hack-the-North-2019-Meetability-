//Home.js
import React, {} from 'react';
//import { } from '@reach/router';
// import { useSelector } from 'react-redux';
// import { getUser } from '../redux/selectors';
import { } from '../redux/actions';
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Page from '../components/Page';
import MapContainer from '../components/MapContainer';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    }
}));

export default function Home() {

    //const dispatch = useDispatch();
    const classes = useStyles();

    // const user = useSelector(getUser);

    return (
        <Page title="Home" ClassName={classes.root}>
            {/* <Typography align="center" variant="h2" component="h2">{`Hello ${user.username}.`}</Typography> */}
            <div style={{position: 'absolute', height: '100%', width: '50%', padding: '0px', margin: '0px', left: '50%', top: '65px'}}>
                <MapContainer />
            </div>
        </Page>
    );
}
