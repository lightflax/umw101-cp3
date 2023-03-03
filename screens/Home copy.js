// screens/Home.js

import React from "react";
import { Button, StyleSheet, View, Text, Image } from "react-native";


const PlaceholderImage = require('../assets/icon-384x384.png');




function Home({navigation}) {
  
return(
    <View style={styles.container}>
        <Image source={PlaceholderImage} style={styles.image} />
        <Text style={styles.text}>Martins Bilar</Text>
        <Button
        title="Go to my post"
        onPress={() => navigation.navigate('MyPost')} />
    </View>
);    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        color: '#101010',
        fontSize: 24,
        fontWeight: 'bold',
    },
    image: {
      width: 250,
      height: 250,
    }
  });
export default Home;