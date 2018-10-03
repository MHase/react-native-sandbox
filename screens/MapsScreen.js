import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Marker } from 'react-native-maps';
import MapView from 'react-native-map-clustering';

export default class MapsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  _regionFrom(lat, lon, distance) {
    // distance = distance / 2
    // const circumference = 40075
    // const oneDegreeOfLatitudeInMeters = 111.32 * 1000
    // const angularDistance = distance / circumference
    //
    // const latitudeDelta = distance / oneDegreeOfLatitudeInMeters
    // const longitudeDelta = Math.abs(Math.atan2(Math.sin(angularDistance) * Math.cos(lat), Math.cos(angularDistance) - Math.sin(lat) * Math.sin(lat)))
    //
    // return result = {
    //   latitude: lat,
    //   longitude: lon,
    //   latitudeDelta,
    //   longitudeDelta
    // }
    const oneDegreeOfLatitudeInMeters = 111.32 * 1000;

    const latitudeDelta =distance / oneDegreeOfLatitudeInMeters;
    const longitudeDelta = distance / (oneDegreeOfLatitudeInMeters * Math.cos(lat * (Math.PI / 180)));

    return result = {
      latitude: lat,
      longitude: lon,
      latitudeDelta,
      longitudeDelta,
    }
  }

  render() {
    return (
      <View style={{ flex: 1}}>
        <MapView
          provider='google'
          style={{ flex: 1 }}
          mapType='standard'
          region={{latitude: 52.5, longitude: 19.2,
             latitudeDelta: 8.5, longitudeDelta: 8.5}}
          initialRegion={this._regionFrom(52.228921, 21.010380, 1500)}
          rotateEnabled={false}
          pitchEnabled={false}
        >
          <Marker coordinate={{ latitude: 52.228921, longitude: 21.010300 }} />
          <Marker coordinate={{ latitude: 52.228921, longitude: 21.020980 }} />
        </MapView>
      </View>
    );
  }
}
