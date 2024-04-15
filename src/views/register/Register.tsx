import React from 'react'
import { Image, ScrollView, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import { RoundedButton } from '../../components/RoundedButton';
import { MyColors } from '../../theme/AppTheme';
import { StyleSheet } from "react-native";


export default function RegisterScreen() {
  return (  
      <View style={styles.container}>
        <Image
          source={require('../../../assets/background-login.png')}
          style={styles.imageBackground}
        />
    
        {/* LOGO SUPERIOR CENTRAL */}
        <View style={styles.logoContainer}>
          <Image
            source={require("../../../assets/user_image.png")}
            style={styles.logoImage}
          />
          <Text style={styles.logoText}>Select a picture</Text>
        </View>
    
        {/* COMIENZA FORMULARIO */}
          <View style={styles.form}>    
            <Text style={styles.formText}>Sign Up!</Text>

            {/* COMIENZA SGUNDO INPUT */}
            <Text style={styles.formTextTitleInput}>Full name</Text>

            <View style={styles.formInput}>
              <Image
              source={require('../../../assets/my_user.png')}
              style={styles.formIcon}
              />
              <TextInput
              style={styles.formTextInput}
              placeholder='example@gmail.com'
              keyboardType='email-address'
              />
            </View>

            {/* COMIENZA TERCER INPUT */}
            <Text style={styles.formTextTitleInput}>Email</Text>

            <View style={styles.formInput}>
              <Image
              source={require('../../../assets/email.png')}
              style={styles.formIcon}
              />
              <TextInput
              style={styles.formTextInput}
              placeholder='example@gmail.com'
              keyboardType='email-address'
              />
            </View>

            {/* COMIENZA CUARTO INPUT */}
            <Text style={styles.formTextTitleInput}>Your phone number</Text>

            <View style={styles.formInput}>
              <Image
              source={require('../../../assets/phone.png')}
              style={styles.formIcon}
              />
              <TextInput
              style={styles.formTextInput}
              placeholder='example@gmail.com'
              keyboardType='email-address'
              />
            </View>

            {/* COMIENZA QUINTO INPUT */}
            <Text style={styles.formTextTitleInput}>Password</Text>
      
            <View style={styles.formInput}>
              <Image
                source={require('../../../assets/password.png')}
                style={styles.formIcon}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder='More than 8 characters'
                keyboardType='default'
                secureTextEntry={true}
              />
            </View>

            {/* COMIENZA SEXTO INPUT */}
            <Text style={styles.formTextTitleInput}>Confirm password</Text>

            <View style={styles.formInput}>
              <Image
              source={require('../../../assets/confirm_password.png')}
              style={styles.formIcon}
              />
              <TextInput
              style={styles.formTextInput}
              placeholder='More than 8 characters'
              keyboardType='default'
              secureTextEntry={true}
              />
            </View>
      
            {/* COMIENZA BOTON */}
            <View>
              <RoundedButton text='Sign up' onPress={() => ToastAndroid.show('HOLA', ToastAndroid.SHORT)} />
            </View>
      
          </View>
      </View> 
  );        
}      
    
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: MyColors.tertiary,
  },
  imageBackground:{
      width:'100%',
      height: '100%',
      opacity:0.8,
      bottom:'30%',//que tenga un margen hacia abajo de un 30% 
  },
  form: {
      width:'100%',
      height: '78%',
      backgroundColor: MyColors.secondary,
      position:'absolute',//se coloca encima del fondo
      bottom:0,//cero es igual a la posicion mas abajo que hay
      borderTopLeftRadius:40,
      borderTopRightRadius:40,
      padding:30,
      paddingTop:20,
  },
  formText: {
      fontWeight:'bold',
      fontSize:28,
      //paddingBottom: 10,
  },
  formIcon:{
      width :25,
      height :25,
      marginTop: 10,
  },
  formTextTitleInput:{
      marginTop: 15,
      color: MyColors.primary,
  },
  formInput: {
      flexDirection:'row',
      marginTop: 3, //MARGEN ENTRE YOUR EMAIL Y EL INPUT CON ICONO
  },
  formTextInput: {
      flex : 1,
      borderWidth: 1,
      borderColor: MyColors.background,
      borderRadius: 10,
      padding:8,
      marginLeft: 15,
  },
  formSignUp: {
      flexDirection: 'row',
      justifyContent: 'center',
      //marginTop:5,
  },
  formSignUptext2:{
      fontStyle:'italic',
      color: MyColors.primary,
      borderBottomWidth:1,
      borderBottomColor: MyColors.primary,
      fontWeight:'bold',
      //marginLeft: 10,
  },
  logoContainer: {
      position: 'absolute',
      alignSelf: 'center',
      alignItems: 'center',
      top:'2%',
  },
  logoImage:{
      width:100,
      height: 100,
  },
  logoText: {
      color: MyColors.primary,
      textAlign: 'center',
      marginTop: 3,
      fontSize:20,
      fontWeight: 'bold',
  },
  
});
