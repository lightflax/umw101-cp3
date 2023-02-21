// screens/Detail.js
import React, {useState} from "react";
import { Button, StyleSheet, View, Text } from "react-native";


function Detail({navigation}) {
  const[isLoading, setLoading] = useState(true)
  const[bilar, setbilar] = useState ([]);
  if(isLoading == true){

  fetch('http://localhost:9000/bilar')
  .then(response => response.json())
  .then(json => {
    console.log(json.bilar);
    setLoading(false);
    setbilar(json.bilar);

  })
  .catch(error => {
    console.error(error);
  });
}
return(
    <View style={styles.container}>
        <Text style={styles.text}>Detail Screen</Text>
        {isLoading == true && <Text>Loading...</Text>}
        {bilar.map((bil, index) => (
          <Text key={index}>{bil.brand}</Text>
        ))}
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
export default Detail;