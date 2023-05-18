import useHomeStyles from "../styles/homeStyle";
import { Entypo } from '@expo/vector-icons';
import Swiper from 'react-native-swiper'

import {  
  Text, 
  View,
  Image,
} from "react-native";


const RoomDetail = ({ room }) => {

 
  const { styles } = useHomeStyles();  
  const arrays = Array.from({ length: 5 }); 

  return (

    <View style={styles.annonce}>
      <View style={styles.carrousel}>
        <Swiper
            dot={<View style={styles.dot}/>}
            activeDot={<View style={styles.activeDot}/>}
        >         
        { room.photos.map(photo => {
            return (
              <Image 
                key={photo.picture_id}
                source={{ uri: photo.url }} 
                style={styles.slide} 
              />
            )
        })}         
        </Swiper>
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
  );
};

export default RoomDetail;