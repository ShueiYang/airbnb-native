import useHomeStyles from "../styles/homeStyle";
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import {  
  Text, 
  View,
  Image,
  TouchableOpacity,  
} from "react-native";


const Room = ({ room }) => {

  // console.log("test", room);
  const navigation = useNavigation();    
  const { styles } = useHomeStyles();  
  const arrays = Array.from({ length: 5 }); 


  return (

  <TouchableOpacity
    onPress={() => {
      navigation.navigate("Room", { id: room._id});
    }}
  >
    <View style={styles.annonce}>
      <View style={styles.annonce}>
        <Image source={{ uri: room.photos[0].url }} style={styles.img} />
        <View style={styles.frame}>
          <Text style={styles.price}>{`${room.price} €`}</Text>
        </View>
      </View>

      <View style={styles.bloc2}>
        <View style={styles.section}>
          <Text numberOfLines={1} style={styles.desc}>
            {room.title}
          </Text>

          <View style={styles.rating}>
            {arrays.map((_, index) => {
              const color =
                index < room.ratingValue ? "#facc15" : "#9ca3af";
              return <Entypo key={index} name="star" size={24} color={color} />;
            })}
            <Text style={styles.reviews}>{`${room.reviews} reviews`}</Text>
          </View>
        </View>

        <View style={styles.user}>
          <Image
            source={{ uri: room.user.account.photo.url }}
            style={styles.avatar}
          />
        </View>
      </View>
    </View>
    </TouchableOpacity>
  );
};

export default Room;
