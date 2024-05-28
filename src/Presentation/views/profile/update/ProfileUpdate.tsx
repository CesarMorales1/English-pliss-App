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
import { Picker } from "@react-native-picker/picker";
import { Teacher } from "../../../../Domain/entities/Teacher";
import { Course } from "../../../../Domain/entities/Course";

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
    roles,
    teachers,
    courses,
    image,
    id_rol,
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
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../../assets/background-login.png")}
        style={styles.imageBackground}
      />

      {/* LOGO SUPERIOR CENTRAL */}
      <View style={styles.logoContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          {image === "" ? (
            <Image source={{ uri: user?.image }} style={styles.logoImage} />
          ) : (
            <Image source={{ uri: image }} style={styles.logoImage} />
          )}
        </TouchableOpacity>
        <Text style={styles.logoText}>Select a picture</Text>
      </View>

      {/* COMIENZA FORMULARIO */}
      <View style={styles.form}>
        <ScrollView>
          <Text style={styles.formText}>Sign Up!</Text>

          {/* COMIENZA SEGUNDO INPUT */}
          <Text style={styles.formTextTitleInput}>Full name</Text>
          <CustomTextInput
            image={require("../../../../../assets/my_user.png")}
            placeholder="Full name"
            keyboardType="default"
            value={full_name}
            property="full_name"
            onChangeText={onChange}
          />

          {/* COMIENZA CUARTO INPUT */}
          <Text style={styles.formTextTitleInput}>Your phone number</Text>
          <CustomTextInput
            image={require("../../../../../assets/phone.png")}
            placeholder="(+12) 345-67890"
            keyboardType="numeric"
            value={numero}
            property="numero"
            onChangeText={onChange}
          />

          {/* COMIENZA BOTON */}
          <View>
            <RoundedButton text="Sign up" onPress={() => register()} />
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
