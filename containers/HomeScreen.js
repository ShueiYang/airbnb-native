
import { useEffect, useState } from "react";
import useHomeStyles from "../styles/homeStyle";
import Room from "../components/Room";
import {  
  Text, 
  View,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
} from "react-native";


export default function HomeScreen({token}) {

  const { styles } = useHomeStyles();

  const [ rooms, setRooms ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    async function getRooms() {      
      try { 
        const response = await fetch("https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/rooms", {signal})
        const data = await response.json();
        setRooms(data)
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    getRooms();

    return () => {
      controller.abort();
    }
  }, []);

  // console.log("DATA", rooms);

  if(loading) 
    return (
      <View style={styles.loader}> 
        <ActivityIndicator size="large" color="#f43f5e" />
      </View>
    )
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scroll}> 
        <FlatList
          style={styles.flat} 
          data={rooms}
          keyExtractor={room => room._id}
          renderItem={({item}) => {
            return (
              <Room  room={item}/>
            )
          }}
          ItemSeparatorComponent={()=> <Text style={styles.line}></Text> }
        />  
      </View>
    </SafeAreaView>
  );
}
