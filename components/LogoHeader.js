import useHomeStyles from "../styles/homeStyle";

import { View, Image } from "react-native";

const LogoHeader = () => {

  const { styles } = useHomeStyles();  

  return (
    <View style={styles.logo}>
        <Image source={require("../assets/ABNB.png")} style={styles.imgIco}/>   
    </View>
  )
}

export default LogoHeader;