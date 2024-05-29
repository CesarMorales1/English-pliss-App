import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  ToastAndroid,
} from "react-native";
import { RoundedButton } from "../../../../Presentation/components/RoundedButton";
import useViewModel from "./ViewModel";
import { CustomTextInput } from "../../../components/CustomTextInput";
import styles from "./Styles";
import { ModalPickImage } from "../../../components/modalPickImage";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../../App";
import { MyColors } from "../../../theme/AppTheme";

interface Props
  extends StackScreenProps<RootStackParamList, "UpdateProfileScreen"> {}

export default function UpdateProfileScreen({ navigation, route }: Props) {
  const {
    full_name,
    numero,
    onChange,
    onChangeInfoUpdate,
    register,
    errorMessage,
    loadingElement,
    pickImage,
    takePhoto,
    user,
  } = useViewModel();

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (errorMessage) {
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  }, [errorMessage]);

  useEffect(() => {
    onChangeInfoUpdate(user?.full_name ?? "", user?.numero ?? "");
  }, [user]);

  const handleUpdate = async () => {
    await register();
    navigation.navigate("ProfileInfoScreenEdit"); // Redirige al usuario después de la actualización
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../../assets/background-login.png")}
        style={styles.imageBackground}
      />

      <View style={styles.form}>
        <ScrollView>
          <Text style={styles.formText}>Actualizar perfil</Text>

          <Text style={styles.formTextTitleInput}>Nombre completo</Text>
          <CustomTextInput
            image={require("../../../../../assets/my_user.png")}
            placeholder="Nombre completo"
            keyboardType="default"
            value={full_name}
            property="full_name"
            onChangeText={onChange}
          />

          <Text style={styles.formTextTitleInput}>Número de teléfono</Text>
          <CustomTextInput
            image={require("../../../../../assets/phone.png")}
            placeholder="(+12) 345-67890"
            keyboardType="numeric"
            value={numero}
            property="numero"
            onChangeText={onChange}
          />

          <View>
            <RoundedButton text="Actualizar" onPress={handleUpdate} />
          </View>
        </ScrollView>
      </View>

      <ModalPickImage
        openGallery={pickImage}
        openCamera={takePhoto}
        setModalUseState={setModalVisible}
        modalUseState={modalVisible}
      />

      {loadingElement && (
        <ActivityIndicator
          style={styles.loading}
          size="large"
          color={MyColors.primaryClasses}
        />
      )}
    </View>
  );
}
