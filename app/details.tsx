import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type DetailsProps = {
  name: String;
  children?: React.ReactNode;
};
const Details = () => {
  const params = useLocalSearchParams();
  const pageStlyle = {
    backgroundColor: params.pageColor,
  };

  console.log(params);
  return (
    <View style={[pageStlyle, style.container]}>
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
