import React, { Component, useState } from "react";
import axios from "axios";
import { Dimensions, ScrollView, SafeAreaView } from "react-native";
const deviceHeight = Dimensions.get("screen").height;
import Delete from "./DeleteAzios";
import { styles } from "../Style";



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
  StatusBar,
} from "react-native";

/* GET alla bilar */
function DeleteCars({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [cars, setCars] = useState([]);
  const [carId, setCarId] = useState("");

  if (isLoading == true) {
    fetch("https://elated-ox-lab-coat.cyclic.app/bilar")
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        setLoading(false);
        setCars(responseJson);
      })

      .catch((error) => {
        console.log(error);
      });
  }
  /* DELETE bil */
  function deleteCar(id) {
    fetch(`https://elated-ox-lab-coat.cyclic.app/bilar/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        setLoading(false);
        setCars(responseJson);
        })

      .catch((error) => {
        console.log(error);
      });
   /*    alert("YOU HAVE SUCCESSFULLY DELETED AD ID: "+ JSON.stringify(responseJson._id)); */



  }

  return (
    <ScrollView>
      <View style={styles.inputFields}>
        <StatusBar style="auto" />
      </View>
      <TextInput
        placeholder="Car Id"
        style={styles.input}
        value={carId}
        onChangeText={(value) => setCarId(value)}
      />
      <Button style={styles.buttonDelete} color={'red'} title="Delete By Id" onPress={() => deleteCar(carId)} />
      {isLoading == true && <Text>Loading...</Text>}
      {cars.map((bil, index) => (
        <View style={styles.posts}>
          <Text key={index}>{bil._id}</Text>
          <Text key={index}>{bil.brand}</Text>
        </View>
      ))}
    
    </ScrollView>
  );
}


export default DeleteCars;
