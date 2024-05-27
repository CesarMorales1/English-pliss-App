import {
  View, TouchableOpacity,
  StyleSheet
} from 'react-native'

import { MyColors } from '../theme/AppTheme'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome'
import { faVideo } from '@fortawesome/free-solid-svg-icons/faVideo'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'

import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App'; 

import { useNavigation, NavigationProp } from '@react-navigation/native'


interface Props extends StackScreenProps<RootStackParamList>{};

export default function Menu(
  { 
    selected = "first" 
  }: 
  { selected: "first" | "second" | "third"
  }
) {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  //mUESTRA LA LISTA DE CLASES SI ES PROFESOR O ES ESTUDIANTE 
  const onClassesPressed = () => {
    navigation.navigate("ClassesScreen", { isTeacher: true })

    //TODO: AQUI QUITAR PARA DESPLEGAR LA VISTA DE EDIT PERMISOS
    // Forma de ir a la vista de editar rol

    // navigation.navigate("EditRole", {
    //   userInfo: {
    //     name: "Daniel",
    //     email: "daniel2004@gmail.com",
    //     phone: "+58412-1234567",
    //     rol: "teacher"
    //   }
    // })
    
  }
  
  const onVideoPressed = () => {
    navigation.navigate("VideoClassScreen")
  }

  const onProfilePressed = () => {
    navigation.navigate("ProfileInfoScreenEdit")
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClassesPressed}>
        <FontAwesomeIcon icon={faHome} color={ selected == "first" ? '#fff' : "#999"} size={30} />
      </TouchableOpacity>

      <TouchableOpacity onPress={onVideoPressed}>
        <FontAwesomeIcon icon={faVideo} color={ selected == "second" ? '#fff' : "#999"} size={30} />
      </TouchableOpacity>

      <TouchableOpacity onPress={onProfilePressed}>
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