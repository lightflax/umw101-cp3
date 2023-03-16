import React, { Component, useState } from "react";
import { styles } from "../Style";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
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
  Pressable,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Modal
} from "react-native";
import FlatListSeparator from "../components/FlatListSeparator";

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

  const [dataSource, setDataSource] = useState([]);

  if (isLoading == true) {
    fetch("https://elated-ox-lab-coat.cyclic.app/bilar")
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        setTimeout(() => {
          setLoading(false);
          setCars(responseJson);
        }, 2000);
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
  /* Flatlist funktion */

/*   const renderItem = (data) => {
    return (
      <TouchableOpacity style={styles.list}>
        <Text style={styles.listText}>{data.item._id}</Text>
        <Text style={styles.listText}>{data.item.brand}</Text>
      </TouchableOpacity>
    );
  }; */

/*   <FlatListSeparator />; */

  return (
    <SafeAreaView style={styles.saView}>
      <View style={styles.buttonContainerBig}>
        <TouchableOpacity
          style={styles.buttonView}
          onPress={() => navigation.navigate("ViewCars")}
        >
          <Text style={styles.buttonLabelView}>VIEW CAR ADS</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainerBig}>
        <TouchableOpacity
          style={styles.buttonDelete}
          onPress={() => navigation.navigate("DeleteCars")}
        >
          <Text style={styles.buttonLabelDelete}>DELETE CAR ADS</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainerBig}>
        <TouchableOpacity
          style={styles.buttonCreate}
          onPress={() => navigation.navigate("CreateCars")}
        >
          <Text style={styles.buttonLabelCreate}>CREATE CAR ADS</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainerBig}>
        <TouchableOpacity
          style={styles.buttonUpdate}
          onPress={() => navigation.navigate("UpdateCars")}
        >
          <Text style={styles.buttonLabelUpdate}>UPDATE CAR ADS</Text>
        </TouchableOpacity>
      </View>

{/*       <FlatList
        data={cars}
        ItemSeparatorComponent={FlatListSeparator}
        renderItem={(item) => renderItem(item)}
        keyExtractor={(item) => item.id}
      />
      {isLoading && (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      )} */}
    </SafeAreaView>
  );
}

export default GetCars;
