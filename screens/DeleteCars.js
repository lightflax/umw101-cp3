import React, { Component, useState } from "react";
import axios from "axios";
import { Dimensions, ScrollView, SafeAreaView } from "react-native";
const deviceHeight = Dimensions.get("screen").height;
import Delete from "./DeleteAzios";
import { styles } from "../Style";
import FlatListSeparator from "../components/FlatListSeparator";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MyModalChoice from "../components/MyModalChoice";
import MyModal from "../components/MyModal";

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
  Modal,
  Pressable,
} from "react-native";

/* GET alla bilar */
function DeleteCars({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [cars, setCars] = useState([]);
  const [carId, setCarId] = useState("");
  const [status, setStatus] = useState(null);

  const [isModalVisible, setModalVisible] = useState(false);

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

      /* Response när annons deletats */
      .then(() => setStatus("Delete was successfull"))
      .then((responseJson) => {
        console.log(responseJson);
        setLoading(false);
        setCars(responseJson);
      })
      .catch((error) => {
        console.log(error);
      });
    /* Modal------------------ */
  }
  const onModal = () => {
    setModalVisible(true);
  };

  const onModalClose = () => {
    setModalVisible(false);
  };

  const MyModal = ({ isVisible, onClose }) => {
    return (
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View style={styles.modalContent}>
          <View style={styles.modalTitleContainer}>
            <Text style={styles.modalTitle}>{status}</Text>
            <Pressable onPress={onClose}>
              <MaterialIcons name="close" color="#fff" size={22} />
            </Pressable>
          </View>
          <TouchableOpacity
            style={styles.buttonView}
            onPress={() => navigation.navigate("GetCars")}
          >
            <MaterialIcons name="home" color="#fff" size={48}></MaterialIcons>
            <Text>Home</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  };

  /* --------------------------------- */
  const renderItem = (data) => {
    return (
      <View style={styles.list}>
        {/* Selectable gör så att det går att kopiera ID:et för användaren */}
        <Text style={styles.listText} selectable={true}>
          {data.item._id}
        </Text>
        <Text style={styles.listText}>{data.item.brand}</Text>
      </View>
    );
  };
  <FlatListSeparator />;
  return (
    <SafeAreaView style={styles.saView}>
      {/* Modal---------- */}

      <MyModal isVisible={isModalVisible} onClose={onModalClose} text={status}>
        <MyModalChoice></MyModalChoice>
      </MyModal>

      {/* --------------------- */}

      {/* Här har vi textfältet */}
      <TextInput
        placeholder="Car Id"
        style={styles.input}
        value={carId}
        onChangeText={(value) => setCarId(value)}
      />
      {/* Här är en container för delete "knappen" */}
      <View style={styles.buttonContainerAction}>
        {/* Touch..gör så att den "dimmar till" vid trycket */}
        <TouchableOpacity
          style={styles.buttonDeleteAction}
          onPress={() => {
            deleteCar(carId);
            onModal();
          }}
        >
          <Text style={styles.buttonLabelDeleteAction}>DELETE AD BY ID</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        /* Flatlist mappar json. removeClipp behövs för att kunna kopiera id:ed på mobilen */
        removeClippedSubviews={false}
        data={cars}
        ItemSeparatorComponent={FlatListSeparator}
        renderItem={(item) => renderItem(item)}
        keyExtractor={(item) => item.id}
      />
      {/* Här är laddningssnurran */}
      {isLoading && (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      )}
    </SafeAreaView>
  );
}

export default DeleteCars;
