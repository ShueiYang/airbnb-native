import { MaterialIcons } from '@expo/vector-icons';
import { useIsFocused } from "@react-navigation/native";
import {
   Text,
   View,
   Image,
   TouchableOpacity,
   SafeAreaView,
   TextInput,
   ActivityIndicator  
} from "react-native";
import useHomeStyles from "../styles/registerStyle";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useEffect, useState } from 'react';


export default function ProfileScreen({ userToken, setToken }) {

  const { styles } = useHomeStyles();
  const isFocused = useIsFocused();

  const user = JSON.parse(userToken);
  const [ email, setEmail ] = useState("");
  const [ username, setUsername ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ loading, setLoading ] = useState(true);
  


  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch(`https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/${user.id}`, {
          headers: {
            "Authorization": `Bearer ${user.token}`
            }
        })
        const data = await response.json();
        setEmail(data.email)
        setUsername(data.username)
        setDescription(data.description)
        setLoading(false)
      } catch (err) {
        console.log(err)
      }    
    }
    if(isFocused) {
      getUser();
    }    
  }, [isFocused]);

  if(loading) 
    return (
      <View style={styles.load}> 
        <ActivityIndicator size="large" color="#f43f5e" />
      </View>
    )

  return (
    <SafeAreaView  style={styles.container}>
      <KeyboardAwareScrollView  style={styles.regForm}>
        <View style={styles.userPic}>
          <Image source={require("../assets/Mistweaver.png")} style={styles.avatar}/>
          <View style={styles.avatarIcon}>
            <TouchableOpacity>
              <MaterialIcons name="image" size={28} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcons name="photo-camera" size={28} color="black" />
            </TouchableOpacity>
          </View>
        </View> 

        <View style={styles.inputForm2}>
          <TextInput 
            style={styles.input}
            placeholder="email" 
            onChangeText={(text)=> {setEmail(text)}}
            value={email}
          />
          <TextInput 
            style={styles.input}
            placeholder="username" 
            onChangeText={(text)=> {setUsername(text)}}
            value={username}
          />
          <TextInput 
            style={styles.inputDesc}
            multiline={true}
            numberOfLines={5}
            onChangeText={(text)=> {setDescription(text)}}
            value={description}
            placeholder="Describe yourself in a few words..." 
          />      
        
            {/* <View style={styles.load}>
              <ActivityIndicator size="large" color="#f43f5e"/>
            </View> */}           
        </View>
        
        <View style={styles.editBtn}>
          {/* <Text style={styles.error}>{errorMessage && errorMessage}</Text> */}
          <TouchableOpacity 
            style={styles.btn}
            title="Update"
            // disabled={loading && true} 
            // onPress={async () => {
            //   // const userToken = "secret-token";
            //   // setToken(userToken);
            //   handleSignUp();
            // }}
          >
            <Text style={styles.textBtn}>Update</Text>
          </TouchableOpacity> 

          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              setToken(null);
            }}
          >
            <Text style={styles.textBtn}>Log out</Text>
          </TouchableOpacity>
        </View>   
      </KeyboardAwareScrollView >
    </SafeAreaView >
  );
}
