//App.js

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import CreateNew from './screens/CreateNewAxios';
import Delete from './screens/DeleteAzios';
import Update from './screens/update';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Hem" component={Home}  />
        <Stack.Screen name="CreateNew" component={CreateNew} />
        <Stack.Screen name="Delete" component={Delete} />
        <Stack.Screen name="Update" component={Update} />
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
