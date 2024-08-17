import ColorBox from "@/components/ColorBox";
import GlobalStyles from "@/components/GlobalStyles";
import { Link, useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, SafeAreaView, Text, StyleSheet, FlatList } from "react-native";

const App = () => {
  const colors = [
    { colorName: "Base03", hexCode: "#002b36" },
    { colorName: "Base02", hexCode: "#073642" },
    { colorName: "Base01", hexCode: "#586e75" },
    { colorName: "Base00", hexCode: "#657b83" },
    { colorName: "Base0", hexCode: "#839496" },
    { colorName: "Base1", hexCode: "#93a1a1" },
    { colorName: "Base2", hexCode: "#eee8d5" },
    { colorName: "Base3", hexCode: "#fdf6e3" },
    { colorName: "Yellow", hexCode: "#b58900" },
    { colorName: "Orange", hexCode: "#cb4b16" },
    { colorName: "Red", hexCode: "#dc322f" },
    { colorName: "Magenta", hexCode: "#d33682" },
    { colorName: "Violet", hexCode: "#6c71c4" },
    { colorName: "Blue", hexCode: "#268bd2" },
    { colorName: "Cyan", hexCode: "#2aa198" },
    { colorName: "Green", hexCode: "#859900" },
  ];
  const [u, setU] = useState<boolean>(false);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: true });
  }, [navigation]);

  return (
    <SafeAreaView style={GlobalStyles.androidSafeArea}>
      <View
        style={{
          flex: 1,
        }}
      >
        <FlatList
          data={colors}
          // horizontal={true}
          // scrollEnabled={true}
          keyExtractor={(item) => item.hexCode}
          renderItem={({ item }) => (
            <ColorBox color={item.colorName} hexCode={item.hexCode} />
          )}
          extraData={u}
          ListHeaderComponent={() => (
            <View>
              <Text style={styles.a}>Here are some colors...</Text>
            </View>
          )}
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
  b: {
    flexDirection: "row",
    flex: 1,
  },
});
export default App;
