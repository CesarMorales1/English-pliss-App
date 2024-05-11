import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen } from './src/Presentation/views/home/home';
import RegisterScreen from './src/Presentation/views/register/Register';
import VideoClassScreen from './src/Presentation/views/videoClass/VideoClass';

export type RootStackParamList = {
  //aqui definimos que tipos de datos van a recibir esas pantallas
  HomeScreen: undefined,
  RegisterScreen: undefined,
  //VideoClassScreen: undefined,
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        {/* LLAMADO AL VIDEO */}
{/*         {<Stack.Screen
          name="VideoClassScreen"
          component={VideoClassScreen}
          options={{
            headerShown: true,
            title: 'VideoClassScreen'
          }}
        />} */}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;