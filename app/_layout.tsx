import { Stack } from "expo-router";
import { Text } from "react-native";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#6c71c4",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "my home",
        }}
      />
      <Stack.Screen
        options={{
          title: "My details",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          // headerTitle: (props) => {
          //   console.log("props:::", props);
          //   return <Text> {props.color} </Text>;
          // },
        }}
        name="details"
      />
    </Stack>
  );
}
