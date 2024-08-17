import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

interface ColorBoxProps {
  color: String;
  children?: React.ReactNode;
}

const ColorBox: React.FC<ColorBoxProps> = ({ color }) => {
  const [num, setNum] = useState<Number>(0);
  const boxColor: { backgroundColor: String } = {
    backgroundColor: color,
  };

  return (
    <View style={[styles.colorContainer, boxColor]}>
      <Text
        style={{
          color: "white",
        }}
        onPress={() => setNum(num + 1)}
      >
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
