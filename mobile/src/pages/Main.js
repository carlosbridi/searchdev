import React, {useState, useEffect} from 'react';
import MapView, {Marker, Callout} from 'react-native-maps';
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity } from 'react-native';
import {requestPermissionsAsync, getCurrentPositionAsync} from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons'


function Main({navigation}) {
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
    <>
      <MapView initialRegion={currentRegion} style={styles.map}> 
        <Marker coordinate={{ latitude: -26.820001, longitude: -49.2769641 }}>
          <Image style={styles.avatar} souce={{uri: 'https://avatars0.githubusercontent.com/u/7713044'}} />
        
          <Callout onPress={() => {
            navigation.navigate('Profile', {github_username: 'carlosbridi'})
          }}>
            <View style={styles.callout}>
              <Text style={styles.devName}>Carlos Bridi</Text>
              <Text style={styles.devBio}>Teste 1238391289382981392132</Text>
              <Text style={styles.devTechs}>React, ReactNaatic</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
      <View style={styles.searchForm}>
          <TextInput style={styles.searchInput}
            placeholder="Buscar devs por techs"
            placeholderTextColor="#999"
            autoCapitalize="words"
            autoCorrect={false}
            />

          <TouchableOpacity onPress={() => {}} style={styles.loadButton}>
            <MaterialIcons name="my-location" size={20} color="#FFF" />
          </TouchableOpacity>

      </View>
    </>

  );
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
  },
  callout: {
    width: 260,
  },
  devName:{
    fontWeight: 'bold',
    fontSize: 16
  },

  devBio: {
    color: '#666',
    marginTop: 5
  },

  devTechs: {
    marginTop: 5
  },

  searchForm: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    zIndex: 5,
    flexDirection: 'row'

  },

  searchInput: {
    flex: 1,
    height: 50,
    backgroundColor: '#FFF',
    color: '#333',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4
    },
    elevation: 1
  },

  loadButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#8E4Dff',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15
  }

})

export default Main;