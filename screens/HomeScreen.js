import React, {useContext} from 'react';
import {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import FormButton from '../components/FormButton';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Marker} from 'react-native-maps';

export default class HomeScreen extends Component {
  state = {
    coordinate: {
      latitude: 24.861813916777354,
      longitude: 67.07325196870403,
    },
     
    marginBottom: 1,
  };

  render() {
    let {latitude, longitude} = this.state.coordinate;
    // console.log(this.state.coordinate)
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={[styles.map, {marginBottom: this.state.marginBottom}]}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          showsUserLocation
          showsMyLocationButton={true}
          onPress={e => {
            this.setState({
              coordinate: e.nativeEvent.coordinate,
            });
          }}
          onRegionChangeComplete={(region) =>
            this.setState({
              coordinate: region,
            })
          }
          onMapReady={() => {
            this.setState({marginBottom: 0});
          }}>
          <Marker
            coordinate={{
              latitude,
              longitude,
            }}
            // title={marker.title}
            // description={marker.description}
          />
        </MapView>
      </View>
    );
  }
}

// export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    // justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
