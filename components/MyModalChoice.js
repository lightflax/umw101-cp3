import React, { Component, useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { styles } from "../Style";
import { View, Text, Pressable, FlatList, Modal, Platform, navigation } from "react-native";
import FlatListSeparator from "./FlatListSeparator";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


function MyModalChoice({ onSelect, onCloseModal,navigation }) {

  return (
<View>
    <Pressable onPress={() => navigation.navigate('GetCars')}>
    <MaterialIcons name="home" color="#fff" size={48}></MaterialIcons>
    </Pressable>
</View>
  );
}
export default MyModalChoice;
