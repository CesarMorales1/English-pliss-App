import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/Presentation/views/home/home";
import RegisterScreen from "./src/Presentation/views/register/Register";
import ClassesScreen from "./src/Presentation/views/classes/Classes";
import VideoClassScreen from "./src/Presentation/views/videoClass/VideoClass";

import { MenuProvider } from "react-native-popup-menu";
import { ProfileUserScreen } from "./src/Presentation/views/profile/info/profileInfo";

export type RootStackParamList = {
  //aqui definimos que tipos de datos van a recibir esas pantallas
  HomeScreen: undefined;
  RegisterScreen: undefined;
  ClassesScreen: { isTeacher: boolean };
  ProfileInfoScreen: undefined;
  VideoClassScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <MenuProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
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
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          {/* LLAMADO AL REGISTER */}
          {
            <Stack.Screen
              name="RegisterScreen"
              component={RegisterScreen}
              options={{
                headerShown: true,
                title: "Sign Up",
              }}
            />
          }
          {/* LLAMADO A CLASES */}
          <Stack.Screen name="ClassesScreen" component={ClassesScreen} />

          {/* LLAMADO A Perfil colocar aqui TODO:lo de alexandraa*/}
          <Stack.Screen
            name="ProfileInfoScreen"
            component={ProfileUserScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </MenuProvider>
  );
};

export default App;
