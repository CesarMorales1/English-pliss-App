import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TextInput, ToastAndroid, TouchableOpacity } from 'react-native'
import { RoundedButton } from '../../../Presentation/components/RoundedButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import useViewModel from './ViewModel'
import { CustomTextInput } from '../../components/CustomTextInput';
import styles from "./Styles";

export const HomeScreen = () => {

  const {email,password, onChange} = useViewModel();

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../assets/background-login.png')}
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
        image={require('../../../../assets/user.png')}
        placeholder='example@gmail.com'
        keyboardType='email-address'
        property='email'
        onChangeText={onChange}
        value={ email }
        />
  
        {/* COMIENZA SEGUNDO INPUT */}
        <Text style={styles.formTextTitleInput}>Password</Text>
        
        <CustomTextInput
        image={require('../../../../assets/password.png')}
        placeholder='More than 8 characters'
        keyboardType='default'
        property='password'
        onChangeText={onChange}
        value={ password }
        secureTextEntry={ true }
        />
  
        {/* COMIENZA BOTON */}
        <View>
          {/* MOSTRAR CON UN ALERT EL VALOR DE LOS INPUTS */}
          <RoundedButton text='Get in' onPress={ () => ToastAndroid.show('Email: '+ email + ' Password: '+ password, ToastAndroid.SHORT)} />
        </View>


          {/* MOSTRAR EN LA TERMINAL EL VALOR DE LOS INPUTS */}
{/*         <View>
          <RoundedButton text='Get in' onPress={() =>{
            console.log ('Email '+ email);
            console.log ('Password '+ password);
          }} />
        </View> */}
  
        {/* COMIENZA TEXTO FINAL */}
        <View style={styles.formSignUp}>
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={styles.formSignUptext2}>Sign up!</Text>
          </TouchableOpacity>
        </View>
  
      </View>
    </View>
  );        
}      
 