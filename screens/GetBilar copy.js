import React, { Component, useState } from "react";
import axios from "axios";
import { Dimensions, ScrollView, SafeAreaView } from "react-native";
const deviceHeight = Dimensions.get("screen").height;
import Delete from "./DeleteAzios";

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
  StatusBar
} from "react-native";

/* GET alla bilar */
function GetBilar({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [cars, setBilar] = useState([]);

  const [bilId, setBilId] = useState("");
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
        setBilar(responseJson);
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
        setBilar(responseJson);
      })

      .catch((error) => {
        console.log(error);
      });
  }
  /* DELETE bil */
  function deleteBil(id) {
    fetch(`https://elated-ox-lab-coat.cyclic.app/bilar/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        setLoading(false);
        setBilar(responseJson);
      })

      .catch((error) => {
        console.log(error);
      });
  }
  /* UPDATE bil */
  function updateBil(id, reg, color, brand, model, price, year) {
    fetch(`https://elated-ox-lab-coat.cyclic.app/bilar/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({reg: reg},{color: color},{brand: brand},{model :model}, {price: price}, {year: year})
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        setLoading(false);
        setBilar(responseJson);
      })

      .catch((error) => {
        console.log(error);
      });
  }
    /* CREATE bil */
    function createBil(reg, color, brand, model, price, year) {
      fetch(`https://elated-ox-lab-coat.cyclic.app/bilar/${id}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({reg: reg},{color: color},{brand: brand},{model :model}, {price: price}, {year: year})
      })
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          setLoading(false);
          setBilar(responseJson);
        })
  
        .catch((error) => {
          console.log(error);
        });
    }
  return (
    <ScrollView>


<View style={styles.inputFields}>
      <TextInput placeholder='Bil Id' style={styles.input} value={bilId} onChangeText={(value) => setBilId(value)} /> 
      <TextInput placeholder='Reg' style={styles.input} value={reg} onChangeText={(value) => setReg(value)} /> 
      <TextInput placeholder='Color' style={styles.input} value={color} onChangeText={(value) => setColor(value)} /> 
      <TextInput placeholder='brand' style={styles.input} value={brand} onChangeText={(value) => setBrand(value)} /> 
      <TextInput placeholder='model' style={styles.input} value={model} onChangeText={(value) => setModel(value)} /> 
      <TextInput placeholder='price' style={styles.input} value={price} onChangeText={(value) => setPrice(value)} /> 
      <TextInput placeholder='year' style={styles.input} value={year} onChangeText={(value) => setYear(value)} /> 

      <Button title="Get By Id" onPress={() => getBil(bilId)} />
      <Button title="Delete By Id" onPress={() => deleteBil(bilId)} />
      <Button title="Update By Id" onPress={() => updateBil(bilId, reg, color, brand, model, price, year)} />
      <Button title="Create" onPress={() => createBil(reg, color, brand, model, price, year)} />
      <StatusBar style="auto" />
      </View>

      
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
   /*  justifyContent: "center", */
 
  },
  posts: {
    backgroundColor: "blue",
  
    marginBottom: 10,
  },
  inputFields: {
    backgroundColor: "red",

    marginBottom: 10,
  },

 buttonText: {
    color: "#fff",
    fontSize: 26,
    textAlign: "center",
  },

  item: {
    flex: 1,
    textAlign: "center",
    padding: 10,
    marginVertical: 50,
    borderRadius: 8,
    width: "100%",
  },
  input: {
    /*  alignSelf: "stretch", */
    margin: 8,
    padding: 15,
    borderWidth: 2,
    borderRadius: 4,
  },
});

export default GetBilar;
