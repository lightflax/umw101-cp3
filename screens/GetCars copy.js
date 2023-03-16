import React, { Component, useState } from "react";
import {styles} from "../Style";
import {
  Dimensions,
  ScrollView,
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  StatusBar,
  Button,
  Pressable
} from "react-native";
const deviceHeight = Dimensions.get("screen").height;


/* GET alla bilar */
function GetCars({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [cars, setCars] = useState([]);

  const [carId, setCarId] = useState("");
  const [reg, setReg] = useState("");
  const [color, setColor] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [year, setYear] = useState("");

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
  /* GET bil */
  function getBil(id) {
    fetch(`https://elated-ox-lab-coat.cyclic.app/bilar/${id}`)
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

 
  return (
    <ScrollView>
      <View >
        {/*   <Button title="Get By Id" onPress={() => getBil(carId)} /> */}
        <Button title="Delete By Id" color={'red'} onPress={() => navigation.navigate('DeleteCars')} />
        <Button title="Create Cars" color={'green'} onPress={() => navigation.navigate('CreateCars')} />
        <Button title="Update Cars" color={'lightblue'} onPress={() => navigation.navigate('UpdateCars')} />
        <StatusBar style="auto" />
      </View>

      {isLoading == true && <Text>Loading...</Text>}
      {cars.map((car, index) => (
        <View style={styles.posts}>
          <Text key={index}>{car._id}</Text>
          <Text key={index}>{car.brand}</Text>
        </View>
      ))}
    </ScrollView>
  );
}



export default GetCars;
