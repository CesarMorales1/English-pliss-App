import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen } from './src/views/home/home';
import RegisterScreen from './src/views/register/Register';
import ClassesScreen from './src/views/classes/Classes'

import { MenuProvider } from 'react-native-popup-menu'

export type RootStackParamList = {
  //aqui definimos que tipos de datos van a recibir esas pantallas
  HomeScreen: undefined,
  RegisterScreen: undefined,
  ClassesScreen: { isTeacher: boolean }
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <MenuProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          {/* LLAMADO AL LOGIN */}
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
          />
          {/* LLAMADO AL REGISTER */}
          {<Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            headerShown: true,
            title:'Sign Up'
          }}
          />}
          {/* LLAMADO A CLASES */}
          <Stack.Screen
            name="ClassesScreen"
            component={ClassesScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </MenuProvider>
  );
};

export default App;