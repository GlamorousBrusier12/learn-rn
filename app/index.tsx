import ColorBox from "@/components/ColorBox";
import GlobalStyles from "@/components/GlobalStyles";
import { Link, useNavigation } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import {
  RefreshControl,
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";
// import { RefreshControl } from "react-native-gesture-handler";

type colorsType = {
  colorName: String;
  hexCode: String;
};
const App = () => {
  const [u, setU] = useState<boolean>(false);
  const [colors, setColors] = useState<colorsType[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const navigation = useNavigation();

  const getColors = useCallback(async () => {
    let result = await fetch(
      "https://color-palette-api.kadikraman.vercel.app/palettes",
    );

    result = await result.json();

    setColors(result[0].colors);
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setColors([]);
    getColors();
    setRefreshing(false);
  }, []);

  useEffect(() => {
    getColors();
  }, []);

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
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
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
