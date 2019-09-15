//HooksMapContainer.js
import React, { useState } from 'react';
import { navigate } from '@reach/router';
import { useSelector } from 'react-redux';
import { getAllUsers } from '../redux/selectors';
//import { } from '../redux/actions';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const useStyles = makeStyles(theme => ({
    map: {
    position: 'absolute',
    width: '50%',
    height: '90%'
  }
}));

export function MapContainer({ google }) {

    const classes = useStyles();
    const allUsers = useSelector(getAllUsers);

    const [state, setState] = useState({
        activeMarker: {},
        selectedPlace: {},
        showingInfoWindow: false
    });

    const onMarkerClick = (props, marker) => {
        setState({
            activeMarker: marker,
            selectedPlace: props,
            showingInfoWindow: true
        });
    };

    const onInfoWindowClose = () => {
        setState({
            activeMarker: null,
            showingInfoWindow: false
        });
    };

    const onMapClicked = () => {
        if (state.showingInfoWindow)
            setState({
                activeMarker: null,
                showingInfoWindow: false
            });
    };

    const allUserMarkers = allUsers && Object.keys(allUsers)
    .filter(key => allUsers[key].coords)
    .map((key, i) => {
        const item = allUsers[key];
        const itemCoords = { lat: item.coords[0], lng: item.coords[1] };

        return (
            <Marker onClick={onMarkerClick}
            name={item.username} 
            position={itemCoords}
            key={i}
            user_id={key} />
        )
    })

    return (
        <div className={classes.map}>
        <Map centerAroundCurrentLocation google={google} onClick={onMapClicked}>

                {allUserMarkers}

            <InfoWindow marker={state.activeMarker}
          visible={state.showingInfoWindow}
          onClose={onInfoWindowClose}>
                <div>{state.selectedPlace && state.selectedPlace.name}</div>
            </InfoWindow>
        </Map>
        </div>
    );

}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDOBBn3EkNgWjlVhR4MdghUn1SBhoFeFaE")
})(MapContainer);
//<h4>{state.selectedPlace && state.selectedPlace.name}</h4>