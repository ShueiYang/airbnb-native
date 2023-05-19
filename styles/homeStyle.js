import Constants from "expo-constants";
import { StyleSheet } from "react-native";
import { useWindowDimensions } from "react-native";


function useHomeStyles () {

    const { width, height } = useWindowDimensions();

    const styles = StyleSheet.create({
    
        container: {
            flex: 1,
            width, 
            marginTop: Constants.statusBarHeight,
            // alignItems: "center",
            // justifyContent: "center",
        },
        scroll: {
            width: "100%",
            paddingHorizontal: "5%",
            alignItems: "center",
        },
        loader: {
           flex: 1,
           justifyContent: "center",
        },
        imgIco: {
            width: 30,
            height: 40,
            resizeMode: "contain",
        },
        img: {
            width: width,
            height: 200
        },
        annonce: {
            width: "100%",
            alignItems: "center",
        },
        frame: {
            position: "absolute",
            alignItems: "center",
            width: 95,
            paddingHorizontal: 5, 
            paddingVertical: 10,
            backgroundColor: "#111827",
            left: "5%",
            bottom : "5%", 
        },
        price: {
           fontSize: 20, 
           color: "white",
        },
        desc: {
            marginTop: 20,
            fontSize: 20,
        },
        rating: {
            flexDirection: "row",
            marginTop: 10, 
            alignItems: "center",
        },
        section: {
            width: "75%",
            alignItems: "flex-start",
            height: 100,
        },
        avatar: {
            width: 75,
            height: 75,
            borderRadius: 100,
        },
        bloc2: {
            width: "100%",
            marginLeft: "5%",
            marginRight: "5%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        },
        reviews: {
           marginLeft: 10, 
        },
        user: {
            width: "25%",
            alignItems: "center",
        },
        flat: {
          width: "100%",  
        },
        line: {
            backgroundColor: "#9ca3af",
            height: 1,
            marginTop: 10,
            marginBottom: 20,
        },
        detail: {
            alignItems: "center",
        },
        text: {
            width: "90%",
            fontWeight: 500,
        },
        room: {
            paddingHorizontal: "2%"
        },
        slide: {
            width: width,
            height: 245
        },
        carrousel: {
            height: 245
        },
        dot: {
            backgroundColor:"#a1a1aa", 
            width: 14, 
            height: 14,       
            borderRadius: 100, 
            marginLeft: 6, 
            marginRight: 6, 
            marginTop: 3, 
            marginBottom: "-4%",
        },
        activeDot: {
            backgroundColor:"white", 
            width: 14, 
            height: 14,       
            borderRadius: 100, 
            marginLeft: 6, 
            marginRight: 6, 
            marginTop: 3, 
            marginBottom: "-4%",
        },
        more: {
            marginTop: 10,
            paddingHorizontal: "7%",
            flexDirection: "row",
            gap: 10,
            alignItems: "center"
        },
        show: {
            color: "#4b5563",
        },
        mapContainer: {
            flex: 1,
            marginTop: 15,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
        },
        map: {
            height: 300,
            width: "100%",
        },
        mapAround: {
            width,
            height,
        }
    })

    return {
        styles
    }

}
export default useHomeStyles;