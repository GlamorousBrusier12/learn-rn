import React, { useState } from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";

interface ColorBoxProps {
  color: String;
  hexCode: String;
  children?: React.ReactNode;
}

const ColorBox: React.FC<ColorBoxProps> = ({ color, hexCode }) => {
  const [num, setNum] = useState<Number>(0);
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
    <View style={[styles.colorContainer, boxColor]}>
      <Text style={textColor} onPress={() => setNum(num + 1)}>
        Hello world {color} X {num}
      </Text>
    </View>
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
  },
});

export default ColorBox;
