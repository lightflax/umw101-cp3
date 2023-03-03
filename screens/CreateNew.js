import { useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput, Image, Button, Platform, ScrollView } from "react-native";
import Axios from "axios";


const baseUrl = "https://elated-ox-lab-coat.cyclic.app/bilar/";


function CreateNew(){

const [reg, setReg] = useState("");
const [color, setColor] = useState("");
const [brand, setBrand] = useState("");
const [model, setModel] = useState("");
const [price, setPrice] = useState("");
const [year, setYear] = useState("");
const [isLoading, setIsLoading] = useState(false);



const onChangeRegHandler = (reg) => {
  setReg(reg);
};

const onChangeColorHandler = (color) => {
  setColor(color);
};

const onChangeBrandHandler = (brand) => {
  setBrand(brand);
};

const onChangeModelHandler = (model) => {
  setModel(model);
};
const onChangePriceHandler = (price) => {
  setPrice(price);
};

const onChangeYearHandler = (year) => {
  setYear(year);
};
/* Submithandler------------------------------ */

const onSubmitFormHandler = async (event) => {
  if (!reg.trim() || !color.trim() || !brand.trim() || !model.trim() || !price.trim() || !year.trim()) {
    alert("Fälten är inte korrekt ifyllda!");
    return;
  }
  setIsLoading(true);
  try {
    const response = await Axios.post(`${baseUrl}/`, {
    reg,
    color,
      brand,
      model,
      price,
      year,
    });
    if (response.status === 201) {
      alert(` You have created: ${JSON.stringify(response.data)}`);
      setIsLoading(false);
      setReg('');
      setColor('');
      setBrand('');
      setModel('');
      setPrice('');
      setYear('');

    } else {
      console.log(error.response)
      throw new Error("An error has occurred");
  
    }
  } catch (error) {
    alert("An error has occurred");
    setIsLoading(false);
  
  }
};




  return(
    <ScrollView contentContainerStyle={styles.container}>
    <View>
      <View style={styles.wrapper}>
    
          <Text> Creat car ad </Text>
  
      </View>
     
      <View style={styles.wrapper}>
        <TextInput
          placeholder="Reg"
          placeholderTextColor="#111111"
          style={styles.input}
          value={reg}
          editable={!isLoading}
          onChangeText={onChangeRegHandler}
        />
      </View>
      <View style={styles.wrapper}>
        <TextInput
          placeholder="Color"
          placeholderTextColor="#111111"
          style={styles.input}
          value={color}
          editable={!isLoading}
          onChangeText={onChangeColorHandler}
        />
      </View>
      <View style={styles.wrapper}>
        <TextInput
          placeholder="Brand"
          placeholderTextColor="#111111"
          style={styles.input}
          value={brand}
          editable={!isLoading}
          onChangeText={onChangeBrandHandler}
        />
      </View>
      <View style={styles.wrapper}>
        <TextInput
          placeholder="Model"
          placeholderTextColor="#111111"
          style={styles.input}
          value={model}
          editable={!isLoading}
          onChangeText={onChangeModelHandler}
        />
       </View>
      <View style={styles.wrapper}>
        <TextInput
          placeholder="Price"
          placeholderTextColor="#111111"
          style={styles.input}
          value={price}
          editable={!isLoading}
          onChangeText={onChangePriceHandler}
        />
      </View>
      <View style={styles.wrapper}>
        <TextInput
          placeholder="Year"
          placeholderTextColor="#111111"
          style={styles.input}
          value={year}
          editable={!isLoading}
          onChangeText={onChangeYearHandler}
        />
      </View>
      <View>
        <Button
          title="Submit"
          onPress={onSubmitFormHandler}
          style={styles.submitButton}
          disabled={isLoading}
        />
        </View>
      </View>

  </ScrollView>

)}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  formHeading: {
    color: "#000",
  },
  wrapper: {
    marginBottom: 15,
  },
  input: {
    borderWidth: 2,
    borderColor: "grey",
    minWidth: 200,
    textAlignVertical: "center",
    paddingLeft: 10,
    borderRadius: 20,
    color: "#000",
  },
  submitButton: {
    backgroundColor: "gray",
    padding: 100,
  },
})

export default CreateNew;
