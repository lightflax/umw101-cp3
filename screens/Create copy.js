import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Image, Button } from "react-native";
import React from 'react';


function Create(){
   fetch("https://elated-ox-lab-coat.cyclic.app/bilar/add", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        reg: reg,
        color: color,
        brand: brand,
        model: model,
        price: price,
        year: year,
      }),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(JSON.stringify(responseData));
      })
      .done();
   
   return(
<View style={styles.container}>

   <TextInput style={{height: 40}} value={id} placeholder="Id" />create
</View>
   )
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
export default Create;