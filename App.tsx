import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/Presentation/views/home/home";
import RegisterScreen from "./src/Presentation/views/register/Register";
import ClassesScreen from "./src/Presentation/views/classes/Classes";
import VideoClassScreen from "./src/Presentation/views/videoClass/VideoClass";
import CreateClass from "./src/Presentation/views/classes/createClass/createClass";
import EditRole from "./src/Presentation/views/permissions/editRole/EditRole";

import { MenuProvider } from "react-native-popup-menu";
import { ProfileUserScreens } from "./src/Presentation/views/profile/info/profileInfo";
import RoleScreen from "./src/Presentation/views/roles/Roles";
import { ProfileInfoScreenEdit } from "./src/Presentation/views/profile/editprofile/ProfileInfo";
import UpdateProfileScreen from "./src/Presentation/views/profile/update/ProfileUpdate";
import { UserProvider } from "./src/Presentation/context/UserContext";

export type RootStackParamList = {
  //aqui definimos que tipos de datos van a recibir esas pantallas
  HomeScreen: undefined;
  RegisterScreen: undefined;
  ClassesScreen: { isTeacher: boolean };
  ProfileInfoScreens: undefined;
  VideoClassScreen: {videTitle:string,videoDescription:string,videoDuration:string};
  RoleScreen: undefined;
  ProfileInfoScreenEdit: undefined;
  CreateClass: undefined;
  UpdateProfileScreen: undefined;
  EditRole: {
    userInfo: {
      name: string;
      email: string;
      phone: string;
      rol: "admin" | "student" | "teacher";
    };
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <MenuProvider>
      <NavigationContainer>
        <UserState>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
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
            {/* LLAMADO AL VIDEO */}
            {
              <Stack.Screen
                name="VideoClassScreen"
                component={VideoClassScreen}
                options={{
                  headerShown: true,
                  title: "VideoClassScreen",
                }}
              />
            }
            {/* LLAMADO A EDICIÓN PERFILES */}
            {
              <Stack.Screen
                name="ProfileInfoScreenEdit"
                component={ProfileInfoScreenEdit}
                options={{
                  headerShown: true,
                  title: "VideoClassScreen",
                }}
              />
            }

            {
              <Stack.Screen
                name="UpdateProfileScreen"
                component={UpdateProfileScreen}
                options={{
                  headerShown: true,
                  title: "Update",
                }}
              />
            }

            {/* LLAMADO A Roles */}
            {
              // <Stack.Screen
              //   name="RoleScreen"
              //   component={RoleScreen}
              //   options={{
              //     headerShown: true,
              //     title: "Sign Up",
              //   }}
              // />
            }
            {/* LLAMADO A CLASES */}
            <Stack.Screen name="ClassesScreen" component={ClassesScreen} />
            {/* LLAMADO A Crear Clase */}
            <Stack.Screen name="CreateClass" component={CreateClass} />

            {/* LLAMADO A Perfil colocar aqui TODO:lo de alexandraa*/}
            <Stack.Screen
              name="ProfileInfoScreens"
              component={ProfileUserScreens}
            />
            {/* LLAMADO AL EDITAR ROL */}
            <Stack.Screen
              name="EditRole"
              component={EditRole}
              options={{
                headerShown: true,
              }}
            />
          </Stack.Navigator>
        </UserState>
      </NavigationContainer>
    </MenuProvider>
  );
};
const UserState = ({ children }: any) => {
  return <UserProvider>{children}</UserProvider>;
};
export default App;
