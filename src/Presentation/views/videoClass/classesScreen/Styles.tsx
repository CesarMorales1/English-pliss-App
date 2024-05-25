import { MyColors } from '../../../theme/AppTheme';
import { StyleSheet } from 'react-native';


const ClassStyles = StyleSheet.create({
    listContainer: {
        width: "100%",
        marginTop: 15,
    },
    menuStyles: {
        width: 100,
    },

    listItem: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
        marginHorizontal:10,
        
    },

    listElipse: {
        width: "10%"
    },

    img: {
        margin: 10
    },

    listId: {
        fontSize: 25,
        width: "10%",
        color: "#B8B8D2"
    },

    listDetailsContainer: {
        width: "55%",
        marginRight: 20
    },

    listDetails: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },

    listDetailsTitle: {
        fontSize: 20
    },

    listDuration: {
        color: "#DC05FF"
    }
})

export default ClassStyles;