import React, { Component, useState } from "react";
import {styles} from "../Style";

import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  Pressable,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from "react-native";


const deviceHeight = Dimensions.get("screen").height;

function Home({ navigation }) {
  return (
  <View style={styles.container}>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('GetCars')}>
                <Text style={styles.buttonLabel}>GET CAR ADS</Text>
            </TouchableOpacity>
        </View>
  </View>
  );
}


export default Home;
