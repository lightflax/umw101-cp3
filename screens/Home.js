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

function Home({navigation}) {
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
        }, 200);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const renderItem = (data) => {
    return (
      <TouchableOpacity style={styles.list}>
        <Text style={styles.text}>Brand: {data.item.brand}</Text>
        <Text style={styles.text}>Color: {data.item.color}</Text>
        <Text style={styles.text}>Reg: {data.item.reg}</Text>
        <Text style={styles.text}>Model: {data.item.model}</Text>
        <Text style={styles.text}>Price: {data.item.price}</Text>
        <Text style={styles.text}>Year: {data.item.year}</Text>
        <Button color={"#10008a"}
  title="Update"
  onPress={() => navigation.navigate('Update')} />
        <Button color={"#bc0010"}
  title="Delete"
  onPress={() => navigation.navigate('Delete')} />
       </TouchableOpacity>
   
    );
  };
  return (
    <View style={styles.parentContainer}>
      <View style={{ margin: 18 }}>
     
        <Button style={styles.buttonBig}
          title={"Klicka för att kolla bilar"}
          onPress={() => {
            goForAxios();
          }}
          color="#6c90d6"
        />
         <Button style={styles.buttonBig} color={"#4b8938"}
  title="Create new"
  onPress={() => navigation.navigate('CreateNew')} />
      </View>

      <FlatList
        data={axiosData}
        renderItem={(item) => renderItem(item)}
        keyExtractor={(item) => item._id.toString()}
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
    parentContainer: {
      alignContent: 'center',
        justifyContent: 'center',
    },
    text:{
        fontSize:18,
        textAlign:'center',
        paddingTop:10,
        color: "#fff"
    },
    container: {
        backgroundColor: "#6c90d6",
      
    },
    loader: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    list: {
        paddingVertical: 8,
        margin: 5,
        backgroundColor: "#6c90d6",
        textAlign: "center"
    },
    buttonBig: {
      backgroundColor: "#fff",
      height: 20,
      width: 40,
    }
});

export default Home;
