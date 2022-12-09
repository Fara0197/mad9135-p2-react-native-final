import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
//touchable opacity: makes whatever the view is, to respond properly to the user touch (use instead of View)

export default function UserItem({ user, onPress }) {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TouchableOpacity style={styles.card} onPress={onPress}>
        {/* //after some testing,the image api no longer work */}
         {/* <Image 
            style={{ width: 20, height: 20 }}
            source={{ uri: `${user.thumbnail.lqip}` }}
          ></Image> */}
          <Text style={{ fontSize: 20, fontWeight: "bold", padding: 5 }}>
            title: {user.title}
          </Text>

          <Text style={{ fontSize: 12, fontWeight: "bold", padding: 5 }}>
           type: {user.artwork_type_title}
          </Text>

          <Text style={{ fontSize: 12, padding: 5 }}>
           department: {user.department_title}
          </Text>

          <Text style={{ fontSize: 10, fontWeight: "light", padding: 5 }}>
            by: {user.artist_title}
          </Text>

          <Text style={{ fontSize: 8, fontWeight: "light", padding: 5 }}>
           date: {user.date_display}
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 10,
    backgroundColor: "#f2e9e4",
  },
});
