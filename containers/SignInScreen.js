import useStyles from "../styles/registerStyle"
import { useNavigation } from "@react-navigation/core";
import { Ionicons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import {
  Text, 
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView 
} from "react-native";
import { useState } from "react";

export default function SignInScreen({ setToken }) {

  const { styles } = useStyles();

  const navigation = useNavigation();
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ errorMessage, setErrorMessage ] = useState(null);
  const [ visible, setVisible ] = useState(false);

  function toggleEye () {
    setVisible(!visible)
  }
  
  async function handleSignIn() {
    try {
      setErrorMessage(null);
      setLoading(true)
      const response = await fetch("https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/log_in", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          email,
          password,
        })
      })
      const data = await response.json();  
      if(response.ok) {
        // const userToken = "secret-token";
        // setToken(userToken);
        // navigation.navigate("Tab");
        alert("signIn sucess!!!")     
      } else if (response.status === 400) {
        setErrorMessage("Please fill all fields")
      } else if (response.status === 401) {
        setErrorMessage("Wrong email or password")
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }


  return (
    <KeyboardAwareScrollView style={styles.container}>
      <SafeAreaView style={styles.form}>
        <View style={styles.logo}>
          <Image source={require("../assets/ABNB.png")} style={styles.img}/>
          <Text style={styles.text}>Sign in </Text>
        </View> 

        <View style={styles.inputForm1}>
          <TextInput 
            style={styles.input}
            placeholder="email"
            onChangeText={(text)=> {
              setEmail(text)
            }}
            value={email} 
          />
          <View style={styles.input}>
            <TextInput
              style={styles.input}
              placeholder="Password" 
              secureTextEntry={visible? false : true}
              onChangeText={(text) => {
                setPassword(text)
              }}
              value={password}    
            />
             <TouchableOpacity style={styles.eyes} onPress={toggleEye}>
              <Ionicons 
                name={visible ? "md-eye-outline" : "md-eye-off-outline"}    
                size={24} 
                color="black" 
              />
             </TouchableOpacity>           
          </View>
        </View>

       {loading && <ActivityIndicator size="large" color="#f43f5e" /> }
       
        <View style={styles.signBtn}>
         <Text style={styles.error}>{errorMessage && errorMessage}</Text>  
          <TouchableOpacity
            style={styles.btn}
            title="Sign in"
            disabled={loading && true}
            onPress={async () => {    
              handleSignIn();
            }}
          >
            <Text style={styles.textBtn}>Sign in</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          >
            <Text>No account ? Register</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}
