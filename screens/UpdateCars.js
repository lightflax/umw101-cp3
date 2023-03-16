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
function UpdateCars({ navigation }) {
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
  /* UPDATE bil */
  function updateBil(id, reg, color, brand, model, price, year) {
    fetch(`https://elated-ox-lab-coat.cyclic.app/bilar/${id}`, {
      method: "PUT",
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
      .then((responseJson) => {
        console.log(responseJson);
        setLoading(false);
        setCars(responseJson);
      })

      .catch((error) => {
        console.log(error);
      });
  }
  const renderItem = (data) => {
    return (
      <TouchableOpacity style={styles.list}>
        <Text style={styles.listText}>{data.item._id}</Text>
        <Text style={styles.listText}>{data.item.brand}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView>
    <View style={styles.buttonContainerAction}>
        <TouchableOpacity
          style={styles.buttonUpdateAction}
          onPress={() =>
            updateBil(carId, reg, color, brand, model, price, year)
          }
        >
          <Text style={styles.buttonLabelUpdateAction}>UPDATE CAR AD</Text>
        </TouchableOpacity>
      </View>

      <View>
        <FlatList
          data={cars}
          renderItem={(item) => renderItem(item)}
          keyExtractor={(item) => item.id}
        />
        {isLoading && (
          <View style={styles.loader}>
            <ActivityIndicator size="large" color="blue" />
          </View>
        )}
      </View>
      <TextInput
        placeholder="Bil Id"
        style={styles.input}
        value={carId}
        onChangeText={(value) => setCarId(value)}
      />
      <TextInput
        placeholder="Reg"
        style={styles.input}
        value={reg}
        onChangeText={(value) => setReg(value)}
      />
      <TextInput
        placeholder="Color"
        style={styles.input}
        value={color}
        onChangeText={(value) => setColor(value)}
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
    </SafeAreaView>
  );
}

export default UpdateCars;
