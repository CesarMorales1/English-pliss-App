import { MyColors } from '../../../theme/AppTheme';
import { Platform, StyleSheet } from 'react-native';


const ClassesScreen = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        padding:20,
    },
    containerRow:{
        flexDirection:'row',
    },
    userImage:{
        height:55,
        width:55,
    },
    textUser:{
        fontSize:18,
        marginLeft:10,
    },
    textMins:{
        fontSize:17,
        color:MyColors.grey,
        marginLeft:10,
        marginRight:140,
    },
    containerComment:{
        flex:1,
    },
    textComment:{
        fontSize:17,
        marginTop: -28,
        marginLeft: 65,
        color:MyColors.grey,
    },
    img: {
        height:18,
        width:18,
    },
    containerSendComment: {
        flexDirection:'row',
        width: '100%',
        backgroundColor: 'white',
        borderTopWidth: 0.2,
        shadowColor: 'blue',
        padding: 10,
    },
    containerr: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderWidth: 0.2,
        borderColor:'grey',
      },
      image: {
        width: 35,
        height: 35,
        marginRight: 10,
      },
      input: {
        flex: 1,
        marginRight: 10,
        borderWidth: 1,
        borderColor: MyColors.background,
        borderRadius: 10,
        paddingHorizontal: 10,
        padding:8,
      },
      buttonImage: {
        width: 30,
        height: 30,
      },
  });

export default ClassesScreen;