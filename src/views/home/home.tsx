import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TextInput, ToastAndroid, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import { RoundedButton } from '../../components/RoundedButton';
import { MyColors } from '../../theme/AppTheme';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';

export const HomeScreen = () => {

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/background-login.png')}
        style={styles.imageBackground}
      />
  
      {/* LOGO SUPERIOR CENTRAL */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>EnglishPlis</Text>
      </View>
  
      {/* COMIENZA FORMULARIO */}
      <View style={styles.form}>
  
        <Text style={styles.formText}>Login</Text>
  
        {/* COMIENZA PRIMER INPUT */}
        <Text style={styles.formTextTitleInput}>Your Email</Text>
  
        <View style={styles.formInput}>
          <Image
            source={require('../../../assets/user.png')}
            style={styles.formIcon}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder='example@gmail.com'
            keyboardType='email-address'
          />
        </View>
  
        {/* COMIENZA SEGUNDO INPUT */}
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
  
        {/* COMIENZA BOTON */}
        <View>
          <RoundedButton text='Get in' onPress={() => ToastAndroid.show('HOLA', ToastAndroid.SHORT)} />
        </View>
  
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
        height: '55%',
        backgroundColor: MyColors.secondary,
        position:'absolute',//se coloca encima del fondo
        bottom:0,//cero es igual a la posicion mas abajo que hay
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        padding:30,
    },
    formText: {
        fontWeight:'bold',
        fontSize:33,
        paddingBottom: 10,
    },
    formIcon:{
        width :25,
        height :25,
        marginTop: 10,
    },
    formTextTitleInput:{
        marginTop: 30,
        color: MyColors.primary,
    },
    formInput: {
        flexDirection:'row',
        marginTop: 10,
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
        marginTop:30,
    },
    formSignUptext2:{
        fontStyle:'italic',
        color: MyColors.primary,
        borderBottomWidth:1,
        borderBottomColor: MyColors.primary,
        fontWeight:'bold',
        marginLeft: 10,
    },
    logoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        top:'15%',
    },
    logoImage:{
        width:100,
        height: 100,
    },
    logoText: {
        color: MyColors.primary,
        textAlign: 'center',
        marginTop: 10,
        fontSize:20,
        fontWeight: 'bold',
    },
    
    });
