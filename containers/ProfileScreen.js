import { useRoute } from "@react-navigation/core";
import { Text, View } from "react-native";

export default function ProfileScreen({userToken}) {
  const { params } = useRoute();
  const user = JSON.parse(userToken)
  console.log("USER", user);

  return (
    <View>
      <Text>user id : {user.id}</Text>
    </View>
  );
}
