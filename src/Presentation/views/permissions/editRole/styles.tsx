import { MyColors } from '../../../theme/AppTheme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        padding:20,
        borderRadius:30,
        margin: 10,
    },
    containerRow:{
        flexDirection:'row',
        alignItems: "center",
        gap: 3
    },
    containerCard: {
        flexDirection:'row',
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        backgroundColor: MyColors.background,
        padding: 15,
        borderRadius: 10,
    },
    containerImg: {
        width: "30%",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center"
    },
    userImage:{
        height:55,
        width:55,
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
        flexDirection: 'column',
        alignItems: "flex-start",
        gap: 5
    },
    textBook:{
        fontSize: 18
    },
    textMins:{
        fontSize:15,
        color:MyColors.grey
    },
    containerComment:{
        flex:1,
    },
    containerRole: {
        backgroundColor: MyColors.roleBackground,
        width: "auto",
        padding: 5,
        paddingHorizontal: 8,
        borderRadius: 20
    },
    role: {
        color: MyColors.role
    },
    subTitle: {
        paddingTop: 20,
        paddingBottom: 10,
        fontSize: 30,
        fontWeight: "600"
    },
    chooseRoleText: {
        color: MyColors.grey,
        fontSize: 20
    },
    accessHeaderContainer: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 3
    },
    accessHeaderTitle: {
        fontSize: 20
    },
    accessItems: {
        paddingHorizontal: 10
    },
    accessItem: {
        color: MyColors.grey
    },
    btnSaveChanges: {
        backgroundColor: MyColors.button,
        padding: 15,
        marginVertical: 30,
        borderRadius: 10
    },
    btnSaveChangesText: {
        color: "white",
        fontSize: 25,
        textAlign: "center"
    }
});

export default styles;