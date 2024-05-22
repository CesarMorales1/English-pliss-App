import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View, ActivityIndicator, ToastAndroid } from 'react-native';
import { RoundedButton } from '../../../Presentation/components/RoundedButton';
import useViewModel from './ViewModel';
import { CustomTextInput } from '../../components/CustomTextInput';
import styles from './Styles';
import { ModalPickImage } from '../../components/modalPickImage';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import { MyColors } from '../../theme/AppTheme';
import { Picker } from '@react-native-picker/picker';

interface Props extends StackScreenProps<RootStackParamList, "RegisterScreen"> { };

export default function RegisterScreen({ navigation, route }: Props) {
  const { full_name, email, numero, password, confirmPassword, onChange, register, errorMessage, loadingElement, pickImage, takePhoto, user, roles,image,id_rol} = useViewModel();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (errorMessage) {
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  }, [errorMessage]);

  useEffect(() => {
    console.log(JSON.stringify(user));
    if (user?.id_user && user?.session_token) {
      navigation.replace('ClassesScreen', { isTeacher: true });
    }
  }, [user]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../assets/background-login.png')}
        style={styles.imageBackground}
      />

      {/* LOGO SUPERIOR CENTRAL */}
      <View style={styles.logoContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          {image === "" ?
            <Image
              source={require("../../../../assets/user_image.png")}
              style={styles.logoImage}
            /> :
            <Image
              source={{ uri: image }}
              style={styles.logoImage}
            />
          }
        </TouchableOpacity>
        <Text style={styles.logoText}>Select a picture</Text>
      </View>

      {/* COMIENZA FORMULARIO */}
      <View style={styles.form}>
        <ScrollView>
          <Text style={styles.formText}>Sign Up!</Text>

          {/* Select Rol */}
          <View style={styles.formSelect}>
            <Image
              style={styles.formIcon}
              source={require("../../../../assets/user.png")}
            />
            <Picker
              style={styles.formPicker}
              selectedValue={id_rol}
              onValueChange={(itemValue) => onChange("id_rol", itemValue)}
            >
              <Picker.Item
                label="Select a Role"
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

          {/* COMIENZA SEGUNDO INPUT */}
          <Text style={styles.formTextTitleInput}>Full name</Text>
          <CustomTextInput
            image={require('../../../../assets/my_user.png')}
            placeholder='Full name'
            keyboardType='default'
            value={full_name}
            property='full_name'
            onChangeText={onChange}
          />

          {/* COMIENZA TERCER INPUT */}
          <Text style={styles.formTextTitleInput}>Email</Text>
          <CustomTextInput
            image={require('../../../../assets/email.png')}
            placeholder='example@gmail.com'
            keyboardType='email-address'
            value={email}
            property='email'
            onChangeText={onChange}
          />

          {/* COMIENZA CUARTO INPUT */}
          <Text style={styles.formTextTitleInput}>Your phone number</Text>
          <CustomTextInput
            image={require('../../../../assets/phone.png')}
            placeholder='(+12) 345-67890'
            keyboardType='numeric'
            value={numero}
            property='numero'
            onChangeText={onChange}
          />

          {/* COMIENZA QUINTO INPUT */}
          <Text style={styles.formTextTitleInput}>Password</Text>
          <CustomTextInput
            image={require('../../../../assets/password.png')}
            placeholder='More than 8 characters'
            keyboardType='default'
            secureTextEntry={true}
            value={password}
            property='password'
            onChangeText={onChange}
          />

          {/* COMIENZA SEXTO INPUT */}
          <Text style={styles.formTextTitleInput}>Confirm password</Text>
          <CustomTextInput
            image={require('../../../../assets/confirm_password.png')}
            placeholder='Confirm password'
            keyboardType='default'
            secureTextEntry={true}
            value={confirmPassword}
            property='confirmPassword'
            onChangeText={onChange}
          />

          {/* COMIENZA BOTON */}
          <View>
            <RoundedButton text='Sign up' onPress={() => register()} />
          </View>
        </ScrollView>
      </View>

      <ModalPickImage
        openGallery={pickImage}
        openCamera={takePhoto}
        setModalUseState={setModalVisible}
        modalUseState={modalVisible}
      />

      {loadingElement &&
        <ActivityIndicator
          style={styles.loading}
          size="large"
          color={MyColors.primaryClasses}
        />
      }
    </View>
  );
}