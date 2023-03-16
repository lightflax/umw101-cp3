import React, { Component, useState } from "react";
import axios from "axios";
import { Dimensions, ScrollView, SafeAreaView } from "react-native";
const deviceHeight = Dimensions.get("screen").height;

import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from "react-native";

function Home({ navigation }) {
  const PlaceholderImage = require("../assets/icon-384x384.png");

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
        }, 500);
      })
      .catch((error) => {
        console.log(error);
      });
  }


  const FlatListSeparator = () => {
    return (
        <View style={{
            height: 1,
            width: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
        }}
        />
        );
      }

  const renderItem = (data) => {
    return (
   
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>{data.item.reg}</Text>
        <Text style={styles.text}>{data.item.color}</Text>
        <Text style={styles.text}>{data.item.brand}</Text>
    </SafeAreaView>

    );
  };
  return (
  
    <View style={styles.container}>

{/* Show car ad button */}
      <TouchableOpacity
        style={styles.buttonShow}
        onPress={() => {
          goForAxios();
        }}
      >
        <Text style={styles.buttonText}>Show car ads</Text>
      </TouchableOpacity>

{/* Create car ad button */}

      <TouchableOpacity
        style={styles.buttonCreate}
        onPress={() => navigation.navigate("CreateNew")}
      >
        <Text style={styles.buttonText}>Create car ad</Text>
      </TouchableOpacity>

      {/* -------------------------------------- */}
      <View style={styles.item}>
        <FlatList
 
          data={axiosData}
          ItemSeparatorComponent={FlatListSeparator}
          renderItem={(item) => renderItem(item)}
          keyExtractor={(item) => item._id.toString()}
        />
      </View>

      {/* Loading snurran------------------------- */}
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
/*     margin: 5, */
/*    paddingVertical: 75, */


  },
/*   ScrollView: {
    paddingVertical: 10,
    paddingTop: 5,

  }, */

/*   list: {
    paddingVertical: 4,
    margin: 5,

    borderRadius: 8
  }, */
  text: {
    color: "#101010",
    fontSize: 24,
    fontWeight: "bold",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  buttonCreate: {
    width: "100%",
    height: 150,
    marginTop: 20,
    backgroundColor: "green",
    textAlign: "center",
    paddingTop: 60,
    borderRadius: 8,
  },
  buttonShow: {
    width: "100%",
    height: 150,
    marginTop: 10,
    backgroundColor: "#6c90d6",
    textAlign: "center",
    paddingTop: 60,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 26,
    textAlign: "center",
  },


  item: {
    flex:1,
   textAlign: "center",
    padding: 10,
    marginVertical: 50,
    borderRadius: 8,
    width: "100%",
  },

  /*
  text: {
      color: '#101010',
      fontSize: 24,
      fontWeight: 'bold',
  },
  image: {
    width: 250,
    height: 250,
  }
  */
  buttonContainer: {
    width: 250,
    height: 70,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
},
button: {
    borderRadius: 8,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff'
},
buttonIcon: {
    paddingRight: 8,
},
buttonLabel: {
    color: '#000',
    fontSize: 16,
},
});

export default Home;
