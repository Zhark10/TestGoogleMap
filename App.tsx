import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import MapView, { Marker, AnimatedRegion } from 'react-native-maps';

const screen = Dimensions.get('window');

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

interface Props { }
interface State {
  members: any
}

export default class App extends Component<Props, State> {

  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0,
            longitudeDelta: 0.0,
          }}
            showsUserLocation={true}
            showsCompass={true}
            zoomControlEnabled={true}
            showsTraffic={true}
        >
          <Marker
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324
            }}
            title={"Здесь я"}
            description={"Но где карта-то, блин!?"}
          />
        </MapView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    display: 'flex'
  },
  bubble: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
    marginRight: 20,
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
    marginBottom: 400,
  },
  members: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 10,
  },
  member: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 20,
    height: 30,
    marginTop: 10,
  },
  memberName: {
    marginHorizontal: 10,
  },
  avatar: {
    height: 30,
    width: 30,
    borderRadius: 15,
  }
});