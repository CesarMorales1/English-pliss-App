import { MyColors } from '../../../Presentation/theme/AppTheme';
import { StyleSheet } from 'react-native'
   

const HomeStyles = StyleSheet.create({
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

export default HomeStyles;
    