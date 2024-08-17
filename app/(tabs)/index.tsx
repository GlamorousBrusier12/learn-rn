import GlobalStyles from "@/components/GlobalStyles";
import React from "react";
import { View, SafeAreaView, Text, StyleSheet } from "react-native";

const App = () => {
  return (
    <SafeAreaView style={GlobalStyles.androidSafeArea}>
      <View
        style={{
          flex: 1,
        }}
      >
        <View>
          <Text style={styles.a}>Here are some colors...</Text>
        </View>
        <View style={[styles.colorContainer, styles.pink]}>
          <Text
            style={{
              color: "white",
            }}
          >
            Hello world pink
          </Text>
        </View>
        <View style={[styles.colorContainer, styles.cyan]}>
          <Text
            style={{
              color: "white",
            }}
            onPress={() => {
              alert("hello naveen");
            }}
          >
            Hello world cyan
          </Text>
        </View>
        <View style={[styles.colorContainer, styles.magenta]}>
          <Text
            style={{
              justifyContent: "center",
              color: "white",
            }}
          >
            Hello world Magenta
          </Text>
        </View>
        <View style={[styles.colorContainer, styles.orange]}>
          <Text
            style={{
              justifyContent: "center",
              color: "white",
            }}
          >
            Hello world Orange
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pink: {
    backgroundColor: "pink",
  },
  cyan: {
    backgroundColor: "#2aa198",
  },
  magenta: {
    backgroundColor: "#d33682",
  },
  orange: {
    backgroundColor: "#cb4b16",
  },
  container: {
    alignItems: "center",
    margin: 2,
    paddingTop: 25,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  colorContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: 5,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  a: {
    marginLeft: 10,
    fontWeight: "bold",
    paddingTop: 20,
    paddingHorizontal: 20,
    fontSize: 18,
  },
});
export default App;
