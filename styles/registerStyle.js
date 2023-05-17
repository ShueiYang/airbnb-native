import Constants from "expo-constants";
import { StyleSheet } from "react-native";
import { useWindowDimensions } from "react-native";



function useStyles () {

    const { height } = useWindowDimensions();

    const styles = StyleSheet.create({
    
        container: {
            flex: 1,
            // marginTop: Constants.statusBarHeight,
            height: height,
            // gap: 20,
            // alignItems: "center",
            // justifyContent: "center",
          },
        form: {
            flex: 1,
            justifyContent: "space-around",
            alignItems: "center",
        },
        logo: {
            alignItems: "center",
        },
        img: {
            width: 80,
            height: 90,
            marginTop: 25,
            resizeMode: "contain",
        },
        text: {
            fontSize: 20,
            marginTop: 10,
            fontWeight: "bold",
            color: "#44403c",
        },
        inputForm1: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            
            gap: 25,
        },
        inputForm2: {
            flex: 1,
            justifyContent: "flex-start",
            marginTop: 10,
            alignItems: "center",
            width: "100%",
            gap: 15,
        },
        input: {
            borderBottomWidth: 1, 
            borderBottomColor: "#f43f5e",    
            width: "80%",
            height: 40,  
        },
        inputDesc: {
            width: "80%",
            height: 100,
            marginTop: 20,
            borderWidth: 1,
            borderColor: "#f43f5e", 
            textAlignVertical: "top",
            padding: 5,
        },
        signBtn: {
            height: 100,
            marginVertical: 35,
            alignItems: "center",
            gap:15,
        },
        btn: {
            alignItems: "center",
            justifyContent: "center",
            width: 180,
            height:45,
            padding: 5,
            borderWidth: 2,
            borderColor: "#f43f5e",
            borderRadius: 50,
        },
        textBtn: {
           fontSize: 18, 
        },
        regForm: {
            flex: 1,     
        },
        error: {
            color: "#dc2626",
            fontSize: 15,
        },
        pwform: {
            flex: 1,
            alignItems: "center",
            width: "100%",
            height: 80,
            marginTop: 10,
            gap: 15, 
        },
        load: {
            width: "100%",
            height: 80,
            marginTop: 5,
            justifyContent: "center",
        },
        pw1: {
            flex: 1,
            alignItems: "center",
            width: "80%",
            height: 40,    
        },
        inputPw: {
            borderBottomWidth: 1, 
            borderBottomColor: "#f43f5e",    
            width: "100%",
            height: "100%",  
        },
        eyes: {
            position: "absolute",
            right: 10,
        }   
    })

    return {
        styles
    }

}
export default useStyles;