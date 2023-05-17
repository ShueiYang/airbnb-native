import useStyles from "../styles/registerStyle"
import { useNavigation } from "@react-navigation/core";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import {
  Text, 
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView 
} from "react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";


export default function SignUpScreen({ setToken }) {

  const { styles } = useStyles();

  const navigation = useNavigation();
  const [ form, setForm ] = useState({
    email: "",
    username: "",
    description: "",
    password:"",
  });
  const [ checkPassword, setCheckPassword ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ errorMessage, setErrorMessage ] = useState(null);
  const [ visible, setVisible ] = useState(false);
  const [ visibleCheck, setVisibleCheck ] = useState(false);

  function handleChange(key, value) {
    setForm(prevState => {
      return {
        ...prevState,
        [key]: value
      }
    })
  }
  function toggleEye () {
    setVisible(!visible)
  }
  function toggleEye2 () {
    setVisibleCheck(!visibleCheck)
  }

  async function handleSignUp() {
    const { email, username, password, description } = form;
    try {
      setLoading(true);
      setErrorMessage(null);
      if(password !== checkPassword) {
        return setErrorMessage("Please provide the same password")
      }
      if(!email || !username || !description || !password) {
        return setErrorMessage("Please fill all fields")
      }
      const response = await fetch("https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/sign_up", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(form)
      })
      const data = await response.json();  
      if(response.ok) {
        // const userToken = "secret-token";
        // setToken(userToken);
        // navigation.navigate("Tab");
        alert("signIn sucess!!!")
      } 
        else if (data.error === "Missing parameters") {
        setErrorMessage("Please fill all fields")
      } else {
        setErrorMessage(data.error)
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (

    <KeyboardAwareScrollView style={styles.container}>
      <SafeAreaView style={styles.regForm}>
        <View style={styles.logo}>
          <Image source={require("../assets/ABNB.png")} style={styles.img}/>
          <Text style={styles.text}>Sign up</Text>
        </View> 

        <View style={styles.inputForm2}>
          <TextInput 
            style={styles.input}
            placeholder="email" 
            onChangeText={(text)=> {handleChange("email", text)}}
            value={form.email}
          />
          <TextInput 
            style={styles.input}
            placeholder="username" 
            onChangeText={(text)=> {handleChange("username", text)}}
            value={form.username}
          />
          <TextInput 
            style={styles.inputDesc}
            multiline={true}
            numberOfLines={5}
            onChangeText={(text)=> {handleChange("description", text)}}
            value={form.description}
            placeholder="Describe yourself in a few words..." 
          />      
          { loading ?
            <View style={styles.load}>
              <ActivityIndicator size="large" color="#f43f5e"/>
            </View>
          : <View style={styles.pwform}>
              <View style={styles.pw1}>
                <TextInput
                  style={styles.inputPw}
                  placeholder="Password" 
                  value={form.password}
                  secureTextEntry={!visible && true} 
                  onChangeText={(text)=> {handleChange("password", text)}}        
                />
                <TouchableOpacity style={styles.eyes} onPress={toggleEye}>
                  <Ionicons 
                    name={visible ? "md-eye-outline" : "md-eye-off-outline"}    
                    size={20} 
                    color="black" 
                  />
                </TouchableOpacity> 
              </View> 
              <View style={styles.pw1}> 
                <TextInput
                  style={styles.inputPw}
                  placeholder="confirm password" 
                  value={checkPassword}
                  secureTextEntry={!visibleCheck && true} 
                  onChangeText={(text)=> {setCheckPassword(text)}}    
                />
                <TouchableOpacity style={styles.eyes} onPress={toggleEye2}>
                  <Ionicons 
                    name={visibleCheck ? "md-eye-outline" : "md-eye-off-outline"}    
                    size={20} 
                    color="black" 
                  />
              </TouchableOpacity>  
             </View> 
            </View>
          }        
        </View>
        

        <View style={styles.signBtn}>
          <Text style={styles.error}>{errorMessage && errorMessage}</Text>
          <TouchableOpacity 
            style={styles.btn}
            title="Sign up"
            disabled={loading && true} 
            onPress={async () => {
              // const userToken = "secret-token";
              // setToken(userToken);
              handleSignUp();
            }}
          >
            <Text style={styles.textBtn}>Sign in</Text>
          </TouchableOpacity> 

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SignIn");
            }}
          >
            <Text>Already have an account ? Sign in</Text>
          </TouchableOpacity>
        </View>   
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}
