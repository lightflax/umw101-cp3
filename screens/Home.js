// screens/Home.js

import React from "react";
import { Button, StyleSheet, View, Text } from "react-native";


function Home({navigation}) {
return(
    <View style={styles.container}>
        <Text style={styles.text}>Hemma Screen</Text>
        <Button
        title="Go to details"
        onPress={() => navigation.navigate('Detail')} />
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
        fontWeight: 'bold'
    }
  });
export default Home;