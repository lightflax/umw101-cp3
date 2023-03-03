import React, { Component, useState } from "react";
import axios from "axios";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";

function MyPost() {
  const [loading, setLoading] = useState(false);
  const [fromFetch, setFromFetch] = useState(false);
  const [fromAxios, setFromAxios] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [axiosData, setAxiosData] = useState(null);

  function goForAxios() {
    setFromFetch(false);
    setLoading(true);

    axios
      .get("https://elated-ox-lab-coat.cyclic.app/bilar")
      .then((response) => {
        console.log("getting data from axios", response.data);
        setTimeout(() => {
          setLoading(false);
          setAxiosData(response.data);
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const renderItem = (data) => {
    return (
      <TouchableOpacity style={styles.list}>
        <Text style={styles.text}>{data.item.reg}</Text>
        <Text style={styles.text}>{data.item.color}</Text>
        <Text style={styles.text}>{data.item.brand}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.parentContainer}>
      <View style={{ margin: 18 }}>
        <Button
          title={"Click using axios"}
          onPress={() => {
            goForAxios();
          }}
          color="green"
        />
      </View>

      <FlatList
        data={axiosData}
        renderItem={(item) => renderItem(item)}
        keyExtractor={(item) => item.brand.toString()}
      />

      {loading && (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0c9" />
          <Text style={{ fontSize: 16, color: "red" }}>Loading Data...</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6c90d6",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: "#fff",
    height: 20,
    width: 40,
  },

  poster: {
    marginVertical: 1,
    borderTopColor: "#737373",
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  postBody: {
    color: "#fff",
  },

  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  textInput: {
    height: 40,
    borderColor: "#333333",
    borderRadius: 5,
    borderWidth: 2,
    backgroundColor: "#ffffff",
    marginBottom: 30,
  },
});

export default MyPost;
