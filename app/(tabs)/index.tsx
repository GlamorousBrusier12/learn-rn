import ColorBox from "@/components/ColorBox";
import GlobalStyles from "@/components/GlobalStyles";
import React, { useState } from "react";
import { View, SafeAreaView, Text, StyleSheet, FlatList } from "react-native";

const App = () => {
  const colors = [
    "pink",
    "cyan",
    "magenta",
    "orange",
    "green",
    "yellow",
    "violet",
  ];
  const [u, setU] = useState<boolean>(false);
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
        <FlatList
          data={colors}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <ColorBox color={item} />}
          extraData={u}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 2,
    paddingTop: 25,
    paddingHorizontal: 10,
    justifyContent: "center",
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
