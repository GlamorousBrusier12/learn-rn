import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Details = () => {
  const params = useLocalSearchParams();
  const pageStlyle = {
    backgroundColor: params.pageColor,
  };

  return (
    <View style={[pageStlyle, style.container]}>
      <Stack.Screen
        options={{
          title: params.colorName + " page",
        }}
      />
      <Text
        style={{
          color: params.color,
        }}
      >
        {" "}
        {params.name}'s Details tab in {params.color} page
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Details;
