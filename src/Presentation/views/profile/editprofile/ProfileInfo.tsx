import { StackScreenProps, StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect } from "react";
import { View, Text, Button, Image, Pressable } from "react-native";
import useViewModel from "./ViewModel";
import styles from "./Styles";
import { useNavigation } from "@react-navigation/native";
import { RoundedButton } from "../../../components/RoundedButton";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RootStackParamList } from "../../../../../App";
import Layout from '../../../components/Layout'

export const ProfileInfoScreenEdit = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  /* const { user, removeUserSession } = useViewModel(); */

  /*  useEffect(() => {
    if (user.id === "") {
      navigation.replace("HomeScreen");
    }
  }, [user]); */

  return (
    <Layout selected='third'>
    <View style={styles.container}>
      <Image
        source={require("../../../../../assets/background-login.png")}
        style={styles.imageBackground}
      />

      <Pressable
        style={styles.logout}
        onPress={() => {
          /*  removeUserSession(); */
        }}
      >
        <Image
          source={require("../../../../../assets/logout.png")}
          style={styles.logoutImage}
        />
      </Pressable>

      <Pressable style={styles.change} onPress={() => {}}>
        <Image
          source={require("../../../../../assets/exchange.png")}
          style={styles.logoutImage}
        />
      </Pressable>

      <View style={styles.logoContainer}>
        {/*  {user?.image !== "" && (
          <Image source={{ uri: user?.image }} style={styles.logoImage} />
        )} */}
        <Image
          source={require("../../../../../assets/user.png")}
          style={styles.logoImage}
        />
      </View>

      <View style={styles.form}>
        <View style={styles.formInfo}>
          <Image
            source={require("../../../../../assets/user.png")}
            style={styles.formImage}
          />
          <View style={styles.formContent}>
            <Text>
              {/* {user?.name} {user?.lastname} */}
              Emmanuel Chacon
            </Text>
            <Text style={styles.formTextDescription}>Nombre del usuario</Text>
          </View>
        </View>

        <View style={{ ...styles.formInfo, marginTop: 25 }}>
          <Image
            source={require("../../../../../assets/email.png")}
            style={styles.formImage}
          />
          <View style={styles.formContent}>
            <Text>{/* {user?.email} */} emmanuelechra@gmail.com</Text>
            <Text style={styles.formTextDescription}>Correo electronico</Text>
          </View>
        </View>

        <View style={{ ...styles.formInfo, marginTop: 25, marginBottom: 70 }}>
          <Image
            source={require("../../../../../assets/phone.png")}
            style={styles.formImage}
          />
          <View style={styles.formContent}>
            <Text>{/* {user?.phone} */} 04269279316</Text>
            <Text style={styles.formTextDescription}>Telefono</Text>
          </View>
        </View>

        <RoundedButton onPress={() => {}} text="ACTUALIZAR INFORMACION" />
      </View>
    </View>
    </Layout>
  );
};

{
  /* <Button 
  onPress={() => {
    removeSession();
    navigation.navigate('HomeScreen');
  }}
  title='Cerrar sesion'
/> */
}
