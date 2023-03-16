import React, { Component, useState } from "react";
import {styles} from "../Style";

import {
  View,
Dimensions,
w,
} from "react-native";


const deviceHeight = Dimensions.get("screen").height;

const FlatListSeparator = () => {
    return (
        <View style={{
            height: 10,
            width: "100%",
            backgroundColor: "rgba(0,0,0,0.1)",
        }}
        />
    );
}
export default FlatListSeparator;