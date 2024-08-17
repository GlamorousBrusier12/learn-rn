import { StyleSheet, Platform, StatusBar } from "react-native";

export default StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    marginTop: StatusBar.currentHeight || 0,
  },
});
