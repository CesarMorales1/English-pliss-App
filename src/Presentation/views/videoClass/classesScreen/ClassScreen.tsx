import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native'
import { ClassProps } from '../../../components/ClassList'
import { Menu, MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu'
import { MyColors } from '../../../theme/AppTheme'
import { truncateText } from '../../../components/TruncateText';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../../App';
import { useState } from 'react';
import styles from "./Styles";

export default function ClassScreen({ classItem, isTeacher = false }: { classItem: ClassProps, isTeacher?: boolean }) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();  // Tipar correctamente el hook useNavigation
  /* PARA TRUNCAR */
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handlePlayPress = () => {
    navigation.navigate('VideoClassScreen',{videTitle: classItem.title,videoDescription: classItem.description, videoDuration: classItem.duration});
  };

  return (
    <View style={styles.listItem} >
      <Menu>
        <MenuTrigger>
          <Image 
            source={require("../../../../../assets/Ellipsis.png")}
            style={[
              styles.img, 
              { display: isTeacher ? 'flex' : 'none' }
            ]}
          />
        </MenuTrigger>
        <MenuOptions customStyles={menuStyles}>
          <MenuOption value={1} text='Editar' onSelect={() => {}} /> 
          <MenuOption value={2} text='Eliminar' onSelect={() => {}} /> 
        </MenuOptions>
      </Menu>
      <Text style={styles.listId}>
        {classItem.id}
      </Text>
      <View style={styles.listDetailsContainer}>
        <View style={styles.listDetails}>
          <TouchableOpacity onPress={toggleExpand}>
            <Text style={styles.listDetailsTitle}>
              {isExpanded ? classItem.title : truncateText(classItem.title, 10)}
            </Text>
          </TouchableOpacity>
          <Image
            style={!classItem.viewed && { display: "none" }}
            source={require("../../../../../assets/icon-done.png")} 
          />
        </View>
        <Text style={{ color: classItem.viewed ? MyColors.secondaryClasses : MyColors.tertiaryClasses }}>
          {classItem.duration} mins
        </Text>
      </View>
      <TouchableOpacity onPress={handlePlayPress}>
        <Image source={require("../../../../../assets/play.png")} />
      </TouchableOpacity>
    </View>
  )
}

const menuStyles = { 
  optionsContainer: { 
    padding: 5 
  }, 
  optionText: { 
    fontSize: 18, 
    padding: 3 
  } 
}
