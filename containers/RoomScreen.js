import useHomeStyles from "../styles/homeStyle";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import RoomDetail from "../components/RoomDetail";
import { AntDesign } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";

import {  
    Text, 
    View,
    SafeAreaView,
    ActivityIndicator,
    TouchableOpacity,
    ScrollView
} from "react-native";


export default function RoomScreen() {

    const { styles } = useHomeStyles();
    const { params } = useRoute();
    const [ room, setRoom ] = useState({});
    const [ loading, setLoading ] = useState(true);
    const [ visible, setVisible ] = useState(false);
    
    // const [latitude, setLatitude] = useState(null);
    // const [longitude, setLongitude] = useState(null);

    function toggleDetail () {
        setVisible(!visible)
    }

    useEffect(() => {
      const controller = new AbortController();
      const { signal } = controller;
  
      async function getRoom() {      
        try { 
          const response = await fetch(`https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/rooms/${params.id}`, {signal})
          const data = await response.json();
          setRoom(data)
          setLoading(false);
        } catch (err) {
          console.log(err);
        }
      }
      getRoom();
  
      return () => {
        controller.abort();
      }
    }, []);

   

 
    if(loading) 
      return (
        <View style={styles.loader}> 
          <ActivityIndicator size="large" color="#f43f5e" />
        </View>
      )
    
    return (
      <ScrollView style={styles.container}>
        <View style={styles.room}>
            <RoomDetail  room={room} />
            <View style={styles.detail}>
                <Text numberOfLines={visible ? 0 : 3} style={styles.text} >
                    {room.description}
                </Text>
            </View>
        </View>

        <TouchableOpacity
            onPress={toggleDetail}
        >
        <View style={styles.more}>   
           <Text style={styles.show}>{`Show ${visible? "less" : "more"}`}</Text>
           <AntDesign name={visible? "caretup" : "caretdown"} size={14} color="#4b5563"/>
        </View>       
        </TouchableOpacity> 

        <View style={styles.mapContainer} >
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 48.856614,
                    longitude: 2.3522219,
                    latitudeDelta: 0.2,
                    longitudeDelta: 0.2,
                }}
                showsUserLocation
            >
             </MapView>
        </View>        
      </ScrollView>
    );
  }