import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Image,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
} from "react-native";
import { RoundedButton } from "../../../Presentation/components/RoundedButton";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../App";
import useViewModel from "./ViewModel";
import { CustomTextInput } from "../../components/CustomTextInput";
import styles from "./Styles";

interface Props extends StackScreenProps<RootStackParamList, "HomeScreen"> {}

export const HomeScreen = ({ navigation, route }: Props) => {
  // Parte de Alex verificar si es prof o estudiante

  const onSubmito = () => {
    return navigation.navigate("ClassesScreen", {
      isTeacher: true,
    });
  };

  const { email, password, onChange, errorMessage, login, user } =
    useViewModel();

  useEffect(() => {
    if (errorMessage) {
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  }, [errorMessage]);

  useEffect(() => {
    if (user?.id_user && user?.session_token && user.id_user !== "") {
      //TODO: Aqui colocar el nombre de la vista
      const isTeacher = Number(user.id_rol) === 1? false : true;
      navigation.replace("ClassesScreen",{isTeacher: isTeacher});
      // navigation.replace('ProfileInfoScreens');
    }
  }, [user]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/background-login.png")}
        style={styles.imageBackground}
      />

      {/* LOGO SUPERIOR CENTRAL */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../../assets/logo.png")}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>EnglishPlis</Text>
      </View>

      {/* COMIENZA FORMULARIO */}
      <View style={styles.form}>
        <Text style={styles.formText}>Login</Text>

        {/* COMIENZA PRIMER INPUT */}
        <Text style={styles.formTextTitleInput}>Your Email</Text>

        <CustomTextInput
          image={require("../../../../assets/user.png")}
          placeholder="example@gmail.com"
          keyboardType="email-address"
          property="email"
          onChangeText={onChange}
          value={email}
        />

        {/* COMIENZA SEGUNDO INPUT */}
        <Text style={styles.formTextTitleInput}>Password</Text>

        <CustomTextInput
          image={require("../../../../assets/password.png")}
          placeholder="More than 8 characters"
          keyboardType="default"
          property="password"
          onChangeText={onChange}
          value={password}
          secureTextEntry={true}
        />

        {/* COMIENZA BOTON */}
        <View>
          {/* MOSTRAR CON UN ALERT EL VALOR DE LOS INPUTS */}
          <RoundedButton text="Get in" onPress={() => login()} />
        </View>

        {/* COMIENZA TEXTO FINAL */}
        <View style={styles.formSignUp}>
          <Text>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <Text style={styles.formSignUptext2}>Sign up!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
