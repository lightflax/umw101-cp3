import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Alert, Button, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";

function MyPost({navigation}) {
  const [posts, setPosts] = useState([]);

  const [text, onChangeText] = useState("någon text");
  

  useEffect(() => {
    fetch("https://elated-ox-lab-coat.cyclic.app/bilar")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.ScrollView}>
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeText}
        value={text}
      />
          <Button
        title="Create new"
        onPress={() => navigation.navigate('CreateNew')} />

        {posts.map((post) => {
          return (
            <Text key={post.poster} style={styles.poster}>
             
             {"\n"}
              {"\n"}
              <Text key={post.id} style={styles.postBody}>ID: {post._id}</Text>
              {"\n"}
              
              <Text key={post.brand} style={styles.postBody}>Brand: {post.brand}</Text>
              {"\n"}
              <Text key={post.color} style={styles.postBody}>Color: {post.color}</Text>
              {"\n"}
              <Text key={post.model} style={styles.postBody}>Model: {post.model}</Text>
              {"\n"}
              <Text key={post.reg} style={styles.postBody}>Reg: {post.reg}</Text>
              {"\n"}
              <Text key={post.year} style={styles.postBody}>Year: {post.year}</Text>
              {"\n"}
              <Text key={post.price} style={styles.postBody}>Price: {post.price}</Text>
              {"\n"}
              {"\n"}
              <Button key={post}
                style={styles.button}
                color={'#bc0010'}
                title="Delete"
                onPress={() => alert("Du tryckte på delete")}
              />
               <Button key={post.update}
                style={styles.button}
                color={'#104abc'}
                title="Update"
                onPress={() => alert("Du tryckte på update")}
              />
                  {"\n"}
              {"\n"}
        </Text>
        
            
          );
        })}
   </ScrollView>
    </SafeAreaView>
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
        backgroundColor: 'pink',
        marginHorizontal: 20,
      },
    button: {
      backgroundColor: "#fff",
      height: 20,
      width: 40,
  },

    poster: {
        marginVertical: 1,
        borderTopColor: '#737373',
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


