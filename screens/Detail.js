// screens/Detail.js
import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Image, Button } from "react-native";
/* import Button from "../components/Button"; */

function Detail({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [bilar, setbilar] = useState([]);

  if (isLoading == true) {
    fetch("https://elated-ox-lab-coat.cyclic.app/bilar")
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
        setbilar(json);
        console.log(json)
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  return (
    <View style={styles.container}>
     
      <Text style={styles.text}>Bilar på lager</Text>
      {isLoading == true && <Text>Loading...</Text>}

      {bilar.map((bil, _id) => (
   
        <Button title = {bil.brand} style= {styles.text} key={_id} onPress = {() => alert(bil.brand + bil.color)}>
          {bil._id}
        </Button>
        
      ))}
{/*       <Button label="Go to bil" />
      <Button label="Välj bil" /> */}
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          backgroundColor: "white",
          width: 250,
        }}
        defaultValue="Lägg in en bil"
      />
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
  text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  textInput: {
    height: 40,
    borderColor: "#333333",
    borderRadius: 5,
    borderWidth: 2,
    backgroundColor: "#ffffff",
  },
});
export default Detail;
