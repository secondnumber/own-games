import React from 'react';
import classes from './Map.module.scss';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import LoaderContainer from '../Loader/LoaderContainer';

const MyMap = (props) => {
  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
  };

  return (
    <div className={classes.container}>
      <Map
        containerStyle={containerStyle}
        google={props.google}
        defaultCenter={props.mymap.mapCenter}
        defaultZoom={props.mymap.mapZoom}
        styles={props.mymap.mapStyle}
      >
        <Marker position={{ lat: 25.791949, lng: -80.193596 }} />
      </Map>
    </div>
  );
};

const Loading = (props) => (
  <div className={classes.loader}>
    <LoaderContainer />
  </div>
);

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDyjNJJI9xzHvd7Ud79BYZhF86KMt3BvE8',
  LoadingContainer: Loading,
})(MyMap);