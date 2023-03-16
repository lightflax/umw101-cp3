import React, { Component, useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { styles } from "../Style";
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
  Modal,
} from "react-native";
import FlatListSeparator from "./FlatListSeparator";

function MyModal({ isVisible, children, onClose, status }) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>
        <View style={styles.modalTitleContainer}>
          <Text style={styles.modalTitle}></Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" color="#fff" size={22} />
          </Pressable>
        </View>
        
        <Pressable onPress={() => navigation.navigate("GetCars")}>
          <MaterialIcons name="home" color="#fff" size={48}></MaterialIcons>
        </Pressable>
      </View>
    </Modal>
  );
}
export default MyModal;
