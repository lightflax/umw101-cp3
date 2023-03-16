//App.js

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';

import CreateCars from './screens/CreateCars';
import DeleteCars from './screens/DeleteCars';
import GetCars from './screens/GetCars';
import UpdateCars from './screens/UpdateCars';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Hem" component={Home}  />
        <Stack.Screen name="DeleteCars" component={DeleteCars} />
      <Stack.Screen name="GetCars" component={GetCars} />

      <Stack.Screen name="CreateCars" component={CreateCars} />
    <Stack.Screen name="UpdateCars" component={UpdateCars} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
