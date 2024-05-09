import {
  View, TouchableOpacity, Image, Text, StyleSheet
} from 'react-native'

import { ClassProps } from './ClassList'

// Libreria para mostrar menu - editar y eliminar
import { Menu, MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu'

import { MyColors } from '../theme/AppTheme'

export default function ClassItem({ classItem, isTeacher = false }: { classItem: ClassProps, isTeacher?: boolean }) {
  return (
    <View style={styles.listItem} >
      <Menu>
        <MenuTrigger>
          <Image 
            source={require("../../../assets/Ellipsis.png")}
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
          <Text style={styles.listDetailsTitle}>
            {classItem.title}
          </Text> 
          <Image
            style={!classItem.viewed && { display: "none" }}
            source={require("../../../assets/icon-done.png")} 
          />
        </View>
        <Text style={{ color: classItem.viewed ? MyColors.secondaryClasses : MyColors.tertiaryClasses }}>
          { classItem.duration } mins
        </Text>
      </View>
      <TouchableOpacity>
        <Image source={require("../../../assets/play.png")} />
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

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
    marginTop: 15,
    marginHorizontal: 10
  },

  menuStyles: {
    width: 100,
  },
  
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10
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