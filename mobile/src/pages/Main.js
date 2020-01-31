import React, {useState, useEffect} from 'react';
import MapView, {Marker, Callout} from 'react-native-maps';
import { StyleSheet, Image, View, Text } from 'react-native';
import {requestPermissionsAsync, getCurrentPositionAsync} from 'expo-location';

function Main() {
  const [currentRegion, setCurrentRegion] = useState(null)

  useEffect(() => {
    async function loadInitialPosition(){
      const { granted } = await requestPermissionsAsync();

      if (granted){
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const {latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        })
      }

    }
    loadInitialPosition();
  }, [])

  if (!currentRegion){
    return null;
  }

  return (
    <MapView initialRegion={currentRegion} style={styles.map}> 
      <Marker coordinate={{ latitude: -26.820001, longitude: -49.2769641 }}>
        <Image style={styles.avatar} souce={{uri: 'https://avatars0.githubusercontent.com/u/7713044?s=460&v=4'}} />
      
        <Callout>

        </Callout>
      
      </Marker>
    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 4,
    borderWidth: 4,
    borderColor: '#FFF'
  }
})

export default Main;