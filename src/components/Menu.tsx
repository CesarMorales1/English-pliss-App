import {
    View, TouchableOpacity,
    StyleSheet
  } from 'react-native'
  
  import { MyColors } from '../theme/AppTheme'
  
  import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
  import { faHome } from '@fortawesome/free-solid-svg-icons/faHome'
  import { faVideo } from '@fortawesome/free-solid-svg-icons/faVideo'
  import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
  
  export default function Menu(
    { 
      selected = "first", 
      setSelected 
    }: 
    { selected: "first" | "second" | "third", 
      setSelected: Function 
    }
  ) {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setSelected("first")}>
          <FontAwesomeIcon icon={faHome} color={ selected == "first" ? '#fff' : "#999"} size={30} />
        </TouchableOpacity>
  
        <TouchableOpacity onPress={() => setSelected("second")}>
          <FontAwesomeIcon icon={faVideo} color={ selected == "second" ? '#fff' : "#999"} size={30} />
        </TouchableOpacity>
  
        <TouchableOpacity onPress={() => setSelected("third")}>
          <FontAwesomeIcon icon={faUser} color={ selected == "third" ? '#fff' : "#999"} size={30} />
        </TouchableOpacity>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 0.1,
      margin: 0,
      backgroundColor: MyColors.primary,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly"
    }
  })