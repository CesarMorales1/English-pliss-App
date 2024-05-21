import React, { useEffect } from "react";
import { ScrollView, Text, ToastAndroid, View, Image } from "react-native";
import { RoundedButton } from "../../../Presentation/components/RoundedButton";
import RolesViewModel from "./Viewmodel";
import styles from "./Styles";
import { Picker } from "@react-native-picker/picker";

export default function RoleScreen() {
  const {
    roles,
    users,
    selectedRole,
    selectedUser,
    onChange,
    register,
    errorMessage,
  } = RolesViewModel();

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
      {/* FORMULARIO */}
      <View style={styles.form}>
        <ScrollView>
          <Text style={styles.formText}>Select Role</Text>

          {/* Select Rol */}
          <View style={styles.formSelect}>
            <Picker
              style={styles.formPicker}
              selectedValue={selectedRole}
              onValueChange={(itemValue) => onChange("selectedRole", itemValue)}
            >
              <Picker.Item
                label="Selecciona un Rol"
                value={null}
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

          <Text style={styles.formText}>Select User</Text>

          {/* Select User */}
          <View style={styles.formSelect}>
            <Picker
              style={styles.formPicker}
              selectedValue={selectedUser}
              onValueChange={(itemValue) => onChange("selectedUser", itemValue)}
            >
              <Picker.Item
                label="Selecciona un Usuario"
                value={null}
                style={styles.titlePickerItem}
              />
              {users.map((user) => (
                <Picker.Item
                  key={user.id_user}
                  label={user.full_name}
                  value={user.id_user}
                />
              ))}
            </Picker>
          </View>

          {/* BOTON */}
          <View>
            <RoundedButton text="Register" onPress={() => register()} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
