import { useRef, useState } from 'react'
import { 
  View, ScrollView, 
  Text, StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native'

import ClassList from '../../components/ClassList'
import Layout from '../../components/Layout'
import { MyColors } from '../../theme/AppTheme'
import { styles } from './Styles'
import useViewModel from './ViewModel'

const screenWidth = Dimensions.get("screen").width //obtiene el ancho de la pantalla  (obten el ancho de la pantalla)

//simulacion de bd envia los datos al componente ClassList
const classes = [
  { id: "01", title: "Welcome to the course", viewed: true, duration: "06:10" },
  { id: "02", title: "Verb To-Be English Plis", viewed: true, duration: "06:10" },
  { id: "03", title: "Sentences", viewed: false, duration: "06:10" },
  { id: "04", title: "Simple present", viewed: false, duration: "06:10" },
  { id: "05", title: "Simple past", viewed: false, duration: "06:10" },
  { id: "06", title: "Simple future", viewed: false, duration: "06:10" },
  { id: "06", title: "Simple future", viewed: false, duration: "06:10" },
  { id: "06", title: "Simple future", viewed: false, duration: "06:10" },
  { id: "06", title: "Simple future", viewed: false, duration: "06:10" },
  { id: "06", title: "Simple future", viewed: false, duration: "06:10" },
  { id: "06", title: "Simple future", viewed: false, duration: "06:10" },
  { id: "06", title: "Simple future", viewed: false, duration: "06:10" },
  { id: "06", title: "Simple future", viewed: false, duration: "06:10" },
  { id: "06", title: "Simple future", viewed: false, duration: "06:10" },
  { id: "06", title: "Simple future", viewed: false, duration: "06:10" },
  { id: "06", title: "Simple future", viewed: false, duration: "06:10" },
  { id: "06", title: "Simple future", viewed: false, duration: "06:10" },
  { id: "06", title: "Simple future", viewed: false, duration: "06:10" },
  { id: "06", title: "Simple future", viewed: false, duration: "06:10" },
  { id: "06", title: "Simple future", viewed: false, duration: "06:10" },
]

//Propiedades de la vista  params recibe parametros de is teacher 
interface ClassesScreenProps {
  route: {
    params: {
      isTeacher: boolean
    };
  };
}

//Vista en si
export default function Classes({ route }: ClassesScreenProps) {
 const { isTeacher } = route.params;
 const {xPosition,setXPosition,scrollViewRef,ScrollTo,onEndScroll}= useViewModel ()
  return (

    //Etiqueta de Layout para que se mumestre le menu en una vista(colocar el contenido de la vista dentro de layaut ojo el layaout ya trae el menu)
    <Layout>
      <View style={styles.main}>
        {/* TITULO */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>
            Classes
          </Text>
          <TouchableOpacity style={[styles.addButton, { display: !isTeacher ? 'none': 'flex' }]}>
            <Text style={styles.addButtonText}>
              +
            </Text>
        </TouchableOpacity>
        </View>

        {/* CABECERA */}
        <View style={[styles.items, { display: isTeacher ? "none" : "flex" }]}>
          <TouchableOpacity 
            style={
              xPosition === 0 && { 
                borderBottomWidth: 2, 
                borderBottomColor: MyColors.primary 
              }
            }
            onPress={() => ScrollTo(0)}
          >
            <Text style={styles.itemText}>
              All
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={
              xPosition === screenWidth * 2 && { 
                borderBottomWidth: 2, 
                borderBottomColor: MyColors.primary 
              }
            }
            onPress={() => ScrollTo(screenWidth * 2)}
          >
            <Text style={styles.itemText}>
              Videos Viewed
            </Text>
          </TouchableOpacity>
        </View>

        {/* CONTENIDO CON LA LISTA DE LOS DOS TIPOS DE CURSOS */}

        <ScrollView 
          ref={scrollViewRef} 
          horizontal={true}
          onScrollEndDrag={onEndScroll}
        >

          <ScrollView style={styles.classesContainer}>
            <ClassList classes={classes} isTeacher={isTeacher} />
          </ScrollView>

          <ScrollView style={[styles.classesContainer, { display: isTeacher ? 'none' : 'flex' }]}>
            <ClassList classes={classes.filter(classItem => classItem.viewed)} />
          </ScrollView>
        </ScrollView>
      </View> 
    </Layout>

  )
}