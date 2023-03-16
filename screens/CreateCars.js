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
function CreateCars({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [cars, setCars] = useState([]);

  const [carId, setCarId] = useState("");
  const [reg, setReg] = useState("");
  const [color, setColor] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [year, setYear] = useState("");
  const [status, setStatus] = useState(null);

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

  /* CREATE bil */
  function createBil(reg, color, brand, model, price, year) {
    fetch(`https://elated-ox-lab-coat.cyclic.app/bilar/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reg: reg,
        color: color,
        brand: brand,
        model: model,
        price: price,
        year: year,
      }),
    })
      .then((response) => response.json())
      /* Response när annons postats */
      .then(() => setStatus("Create was successfull"))
      .then((responseJson) => {
        console.log(responseJson);

        /*        alert(
          "YOU HAVE SUCCESSFULLY CREATED AN AD WITH ID: " +
            JSON.stringify(responseJson._id)
        ); */
        setLoading(false);
        setCars(responseJson);
      })

      .catch((error) => {
        console.log(error);
      });
    //Check for reg TextInput
    if (!reg.trim()) {
      alert("Please Enter Reg Number");
      return;
    }
    //Check for the Email TextInput
    if (!color.trim()) {
      alert("Please Enter Color");
      return;
    }
    if (!brand.trim()) {
      alert("Please Enter Brand");
      return;
    }
    //Check for the Email TextInput
    if (!model.trim()) {
      alert("Please Enter Model");
      return;
    }
    if (!price.trim()) {
      alert("Please Enter Price");
      return;
    }
    //Check for the Email TextInput
    if (!year.trim()) {
      alert("Please Enter Year");
      return;
    }
    //Checked Successfully
    //Do whatever you want
/*     alert("Success"); */
  }

  return (
    <SafeAreaView>
      <Text>{status}</Text>
      <View style={styles.buttonContainerAction}>
        <TouchableOpacity
          style={styles.buttonCreateAction}
          onPress={() => createBil(reg, color, brand, model, price, year)}
        >
          <Text style={styles.buttonLabelCreateAction}>CREATE CAR AD</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputFields}>
        <TextInput
          placeholder="Reg"
          style={styles.input}
          value={reg}
          onChangeText={(value) => setReg(value)}
        />
        <TextInput
          placeholder="brand"
          style={styles.input}
          value={brand}
          onChangeText={(value) => setBrand(value)}
        />
        <TextInput
          placeholder="model"
          style={styles.input}
          value={model}
          onChangeText={(value) => setModel(value)}
        />
        <TextInput
          placeholder="price"
          style={styles.input}
          value={price}
          onChangeText={(value) => setPrice(value)}
        />
        <TextInput
          placeholder="year"
          style={styles.input}
          value={year}
          onChangeText={(value) => setYear(value)}
        />

        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

export default CreateCars;
