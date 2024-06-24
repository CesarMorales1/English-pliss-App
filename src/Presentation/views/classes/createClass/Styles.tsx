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
        width: 140,
        height: 140,
        marginTop: 5,
      },
      /* AQUI COMIENZA STYLES FORMULARIO---------------------------------------- */
      form: {
        width:'100%',
        height: '72%',
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
    logoImage:{
        width:100,
        height: 100,
        justifyContent:'center',
    },
    logoText: {
        color: MyColors.primary,
        textAlign: 'center',
        justifyContent:'center',
        marginTop: 3,
        fontSize:18,
        fontWeight: 'bold',
    },
    formTextTitleInput:{
        marginTop: 18,//MARGEN ENTRE CADA INPUT CON TITULO
        color: MyColors.primary,
        fontSize: 15,
    },
    spice:{
        margin: 20,
    }

});

export default CreateClassStyles;

