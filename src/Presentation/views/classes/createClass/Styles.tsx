import { MyColors } from '../../../theme/AppTheme';
import { StyleSheet } from "react-native";

const CreateClassStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: MyColors.background,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    button: {
        position: 'absolute',
        alignSelf: 'center',
        alignItems: 'center',
        top:'10%',
    },
    video: {
        width: 300,
        height: 300,
        marginTop: 20,
      },
      /* AQUI COMIENZA STYLES FORMULARIO---------------------------------------- */
      form: {
        width:'100%',
        height: '75%',
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
    formTextTitleInput:{
        marginTop: 18,//MARGEN ENTRE CADA INPUT CON TITULO
        color: MyColors.primary,
        fontSize: 15,
    },

});

export default CreateClassStyles;

