import { StyleSheet } from "react-native";
import { MyColors } from "../../theme/AppTheme";

const RegisterStyles = StyleSheet.create({
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
        marginTop: 18,//MARGEN ENTRE CADA INPUT CON TITULO
        color: MyColors.primary,
        fontSize: 15,
    },
    formInput: {
        flexDirection:'row'
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
    loading:
    {
        position: 'absolute',
        bottom: 0,
        top: 0,
        right: 0,
        left: 0,
    },
    formSelect: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 30,
        marginBottom: 5,
      },
      formPicker: {
        flex: 1,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "red",
        backgroundColor: "white",
        height: 40,
      },
      titlePickerItem: {
        borderRadius: 10,
        borderWidth: 1,
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
      }
    
});

export default RegisterStyles;
