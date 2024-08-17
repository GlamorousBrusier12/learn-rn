import { Link, useNavigation } from "expo-router";
import React, { useState } from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";

interface ColorBoxProps {
  color: String;
  hexCode: String;
  children?: React.ReactNode;
  colorName: String;
}

const ColorBox: React.FC<ColorBoxProps> = ({ color, hexCode }) => {
  const [num, setNum] = useState<Number>(0);
  const navigation = useNavigation();
  const boxColor: { backgroundColor: String } = {
    backgroundColor: hexCode,
  };

  const textColor: { color: String } = {
    color:
      parseInt(hexCode.replace("#", ""), 16) > 0xffffff / 1.1
        ? "black"
        : "white",
  };

  return (
    // <Link
    //   href={{
    //     pathname: "/details",
    //     params: {
    //       name: "naveen",
    //       pageColor: hexCode,
    //       color: textColor.color,
    //       colorName: color,
    //     },
    //   }}
    //   style={styles.colorContainer}
    // >
    <View style={[styles.colorContainer, boxColor]}>
      <Text
        style={textColor}
        onPress={() =>
          navigation.navigate("details", {
            name: "naveen",
            pageColor: hexCode,
            color: textColor.color,
            colorName: color,
          })
        }
      >
        Hello world {color}
      </Text>
    </View>
    // </Link>
  );
};

const styles = StyleSheet.create({
  colorContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: 5,
    borderRadius: 5,
    marginHorizontal: 10,
    width: 350,
  },
});

export default ColorBox;
