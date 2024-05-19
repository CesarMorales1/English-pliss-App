import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { RoundedButton } from "../../../Presentation/components/RoundedButton";
import useViewModel from "./ViewModel";
import { CustomTextInput } from "../../components/CustomTextInput";
import styles from "./Styles";

export default function RegisterScreen() {
  const {
    full_name,
    email,
    numero,
    password,
    confirmPassword,
    onChange,
    register,
    errorMessage,
    pickImage,
    image,
    roles,
    selectedRoleId,
    setSelectedRoleId,
  } = useViewModel();

  useEffect(() => {
    if (errorMessage) {
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  }, [errorMessage]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/background-login.png")}
        style={styles.imageBackground}
      />

      <View style={styles.logoContainer}>
        <TouchableOpacity onPress={() => pickImage()}>
          {image === "" ? (
            <Image
              source={require("../../../../assets/user_image.png")}
              style={styles.logoImage}
            />
          ) : (
            <Image source={{ uri: image }} style={styles.logoImage} />
          )}
        </TouchableOpacity>
        <Text style={styles.logoText}>Select a picture</Text>
      </View>

      <View style={styles.form}>
        <ScrollView>
          <Text style={styles.formText}>Sign Up!</Text>

          <View style={styles.formSelect}>
            <Image
              style={styles.formIcon}
              source={require("../../../../assets/user.png")}
            />
            <Picker
              style={styles.formPicker}
              selectedValue={selectedRoleId}
              onValueChange={(itemValue) => setSelectedRoleId(itemValue)}
            >
              <Picker.Item
                label="Selecciona un Rol"
                value={null}
                enabled={false}
                style={styles.titlePickerItem}
              />
              {roles.map((role) => (
                <Picker.Item
                  key={role.id_rol}
                  label={role.name_rol}
                  value={role.id_rol}
                />
              ))}
            </Picker>
          </View>

          <Text style={styles.formTextTitleInput}>Full name</Text>
          <CustomTextInput
            image={require("../../../../assets/my_user.png")}
            placeholder="Full name"
            keyboardType="default"
            value={full_name}
            property="full_name"
            onChangeText={onChange}
          />

          <Text style={styles.formTextTitleInput}>Email</Text>
          <CustomTextInput
            image={require("../../../../assets/email.png")}
            placeholder="example@gmail.com"
            keyboardType="email-address"
            value={email}
            property="email"
            onChangeText={onChange}
          />

          <Text style={styles.formTextTitleInput}>Your phone number</Text>
          <CustomTextInput
            image={require("../../../../assets/phone.png")}
            placeholder="(+12) 345-67890"
            keyboardType="numeric"
            value={numero}
            property="numero"
            onChangeText={onChange}
          />

          <Text style={styles.formTextTitleInput}>Password</Text>
          <CustomTextInput
            image={require("../../../../assets/password.png")}
            placeholder="More than 8 characters"
            keyboardType="default"
            secureTextEntry={true}
            value={password}
            property="password"
            onChangeText={onChange}
          />

          <Text style={styles.formTextTitleInput}>Confirm password</Text>
          <CustomTextInput
            image={require("../../../../assets/confirm_password.png")}
            placeholder="Confirm password"
            keyboardType="default"
            secureTextEntry={true}
            value={confirmPassword}
            property="confirmPassword"
            onChangeText={onChange}
          />

          <View>
            <RoundedButton text="Sign up" onPress={() => register()} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
