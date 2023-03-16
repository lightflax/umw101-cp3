import { useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput, Image, Button, Platform, ScrollView } from "react-native";
import Axios from "axios";


const baseUrl = "https://elated-ox-lab-coat.cyclic.app/bilar/id";


function Delete(){
const [_id, setId] = useState("");
const [reg, setReg] = useState("");
const [color, setColor] = useState("");
const [brand, setBrand] = useState("");
const [model, setModel] = useState("");
const [price, setPrice] = useState("");
const [year, setYear] = useState("");
const [isLoading, setIsLoading] = useState(false);

const onChange_IdHandler = (_id) => {
  setId(_id);
};

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
  if (!reg.trim() || !_id.trim()|| !color.trim() || !brand.trim() || !model.trim() || !price.trim() || !year.trim()) {
    alert("Fälten är inte korrekt ifyllda!");
    return;
  }
  setIsLoading(true);
  try {
    const response = await Axios.post(`${baseUrl}/id`, {
      _id,
    reg,
    color,
      brand,
      model,
      price,
      year,
    });
    if (response.status === 200) {
      alert(` YOU HAVE SUCCESSFULLY CREATED AN AD WITH ID: ${JSON.stringify(response.data._id)}`);
      setIsLoading(false);
      setId('');
      setReg('');
      setColor('');
      setBrand('');
      setModel('');
      setPrice('');
      setYear('');

    } else {
      console.log(error.response)
      throw new Error("1.An error has occurred");
  
    }
  } catch (error) {
    alert("2.An error has occurred");
    setIsLoading(false);
  
  }
};




  return(
   <View style={styles.wrapper}>
    
          <Text>Det här är dit{_id}</Text>
  
      </View>
     
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

export default Delete;
