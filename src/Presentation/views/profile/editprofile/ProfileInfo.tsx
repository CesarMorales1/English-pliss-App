import { StackScreenProps, StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect } from "react";
import { View, Text, Button, Image, Pressable } from "react-native";
import useViewModel from "./ViewModel";
import styles from "./Styles";
import { useNavigation } from "@react-navigation/native";
import { RoundedButton } from "../../../components/RoundedButton";
import { RootStackParamList } from "../../../../../App";
import Layout from "../../../components/Layout";

export const ProfileInfoScreenEdit = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { user, removeUserSession } = useViewModel();

  useEffect(() => {
    if (user?.id_user === "") {
      navigation.navigate("HomeScreen");
    }
  }, [user]);

  return (
    <Layout selected="third">
      <View style={styles.container}>
        <Image
          source={require("../../../../../assets/background-login.png")}
          style={styles.imageBackground}
        />

        <Pressable
          style={styles.logout}
          onPress={() => {
            removeUserSession();
          }}
        >
          <Image
            source={require("../../../../../assets/logout.png")}
            style={styles.logoutImage}
          />
        </Pressable>

        {/*  <Pressable style={styles.change} onPress={() => {}}>
          <Image
            source={require("../../../../../assets/exchange.png")}
            style={styles.logoutImage}
          />
        </Pressable> */}

        <View style={styles.logoContainer}>
          {user?.image !== "" && (
            <Image source={{ uri: user?.image }} style={styles.logoImage} />
          )}
        </View>

        <View style={styles.form}>
          <View style={styles.formInfo}>
            <Image
              source={require("../../../../../assets/user.png")}
              style={styles.formImage}
            />
            <View style={styles.formContent}>
              <Text>{user?.full_name}</Text>
              <Text style={styles.formTextDescription}>Nombre del usuario</Text>
            </View>
          </View>

          <View style={{ ...styles.formInfo, marginTop: 25 }}>
            <Image
              source={require("../../../../../assets/email.png")}
              style={styles.formImage}
            />
            <View style={styles.formContent}>
              <Text>{user?.email}</Text>
              <Text style={styles.formTextDescription}>Correo electronico</Text>
            </View>
          </View>

          <View style={{ ...styles.formInfo, marginTop: 25, marginBottom: 70 }}>
            <Image
              source={require("../../../../../assets/phone.png")}
              style={styles.formImage}
            />
            <View style={styles.formContent}>
              <Text> {user?.numero}</Text>
              <Text style={styles.formTextDescription}>Telefono</Text>
            </View>
          </View>

          <RoundedButton
            onPress={() => {
              navigation.navigate("UpdateProfileScreen");
            }}
            text="ACTUALIZAR INFORMACION"
          />
        </View>
      </View>
    </Layout>
  );
};
