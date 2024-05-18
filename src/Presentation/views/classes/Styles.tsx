import {StyleSheet,Dimensions} from 'react-native'
import { MyColors } from '../../theme/AppTheme'
const screenWidth = Dimensions.get("screen").width 

export const styles = StyleSheet.create({
    main: {
      flex: 0.9,
    },
    
    header: {
      padding: 10,
      marginLeft: 10,
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
    },
    
    headerTitle: {
      fontWeight:'700',
      fontSize: 40
    },
  
    addButton: {
      marginHorizontal: 30,
      marginTop: 5,
      width: 35,
      backgroundColor: MyColors.primary,
      padding: 5,
      borderRadius: 100
    },
  
    addButtonText: {
      color: "#fff",
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center"
    },
    
    items: {
      marginTop: 15,
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly"
    },
  
    itemText: {
      fontSize: 20,
      fontWeight: "600"
    },
  
    classesContainer: {
      flex: 1,
      width: screenWidth,
    }
  })