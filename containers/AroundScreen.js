import { useNavigation } from "@react-navigation/native";
import useHomeStyles from "../styles/homeStyle";
import { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const AroundScreen = () => {

  const { styles } = useHomeStyles();
  const navigation = useNavigation();

  const [ coordinates, setCoordinates ] = useState({
    latitude: 48.856614,
    longitude: 2.3522219,
  });
  const [ rooms, setRooms ] = useState([]);


  useEffect(() => {
    async function askPermissionToGetInfos() {
      const { status } = await Location.requestForegroundPermissionsAsync()
      let query = "";

      if (status === "granted") {
        const { coords } = await Location.getCurrentPositionAsync();

        setCoordinates({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
        query = `?latitude=${coords.latitude}&longitude=${coords.longitude}`;

      } else {
        alert("Permission denied")
      }

    try {
      const response = await fetch(
        `https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/rooms/around${query}`
      )
      const data = await response.json();
      setRooms(data);          
      
    } catch (err) {
      console.log(err)
      alert("Error occurr");
    } 
  }
    askPermissionToGetInfos();
  }, []);


  return (
    <MapView
      style={styles.mapAround}
      initialRegion={{
          latitude: 48.856614,
          longitude: 2.3522219,
          latitudeDelta: 0.2,
          longitudeDelta: 0.2,
      }}
      showsUserLocation
    >
    {rooms.map(room => {
      return (
        <Marker 
          key={room._id}
          coordinate={{
            latitude: room.location[1],
            longitude: room.location[0],
          }}
          onPress={()=> {
            navigation.navigate("Room", { id: room._id });
          }}
        
        />
      )
    })}
    </MapView>
  )
}

export default AroundScreen;

