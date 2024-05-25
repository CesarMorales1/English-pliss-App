import { MyColors } from '../../theme/AppTheme';
import { StyleSheet } from 'react-native';

const VideoClassStyles = StyleSheet.create({
    container: {
        flex: 0.9,
    },
// se creo para acomodar el contenedor 
    classesContainer: {
        width: "110%",
      
    },
    videoContainer: {
        flex: 3, // 30% de la pantalla
        backgroundColor: MyColors.background,

        
    },
    listContainer: {
        flex: 7, // 70% de la pantalla
        backgroundColor: MyColors.secondary,
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
    },
    className: {
        marginTop: 15,
        marginLeft: 20,
        fontWeight:'bold',
        fontSize: 26,
        //backgroundColor: MyColors.primary,
    },
    classDescription:{
        marginLeft: 20,
        fontSize:14,
        color: MyColors.grey
    },
    aboutClass:{
        marginTop: 6,
        marginLeft: 20,
        fontWeight:'bold',
        fontSize:23,
    },
    classText:{
        marginLeft: 20,
        marginRight: 20,
        fontSize:17,
        color: MyColors.grey
    },
    videoWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    video: {
        width: '100%',
        height: '100%',
    },
    button: {
        borderBottomWidth:2,
        borderBottomColor: MyColors.primary,
        paddingVertical: 8,
        paddingHorizontal: 8,
        fontSize: 17,
    },
    buttonAndViewContainer: {
        flexDirection: 'column', // Alinear elementos verticalmente
        flex: 1, // Ocupar todo el espacio disponible
        marginTop: 5, // Espacio entre los botones y la vista seleccionada
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
    },
    selectedViewContainer: {
        flex: 1, // Ocupar todo el espacio disponible
      }
});

export default VideoClassStyles;