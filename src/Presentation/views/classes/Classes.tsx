import { useRef, useState } from 'react'
import { 
  View, ScrollView, 
  Text, StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native'

import ClassList from '../../components/ClassList'

import { MyColors } from '../../theme/AppTheme'

const screenWidth = Dimensions.get("screen").width

const classes = [
  { id: "01", title: "Welcome to the course", viewed: true, duration: "06:10" },
  { id: "02", title: "Verb To-Be English Plis", viewed: true, duration: "06:10" },
  { id: "03", title: "Sentences", viewed: true, duration: "06:10" },
  { id: "04", title: "Simple present", viewed: false, duration: "06:10" },
  { id: "05", title: "Simple past", viewed: false, duration: "06:10" },
  { id: "06", title: "Simple future", viewed: false, duration: "06:10" },
]

interface ClassesScreenProps {
  route: {
    params: {
      isTeacher: boolean
    };
  };
}

export default function Classes({ route }: ClassesScreenProps) {

  const [xPosition, setXPosition] = useState(0)

  const { isTeacher } = route.params;
  

  const scrollViewRef = useRef<ScrollView>(null)

  const ScrollTo = (xPosition: number) => {
    scrollViewRef.current?.scrollTo({ 
      x: xPosition,
      animated: true
    })
    setXPosition(xPosition)
  }

  const onEndScroll = (e: any) => {
    const xPosition = e.nativeEvent.contentOffset.x
    
    if(xPosition >= screenWidth / 2) {
      ScrollTo(screenWidth * 2)
      setXPosition(screenWidth * 2)
    } else {
      ScrollTo(0)
      setXPosition(0)
    }
    
  }

  return (
    <View style={styles.container}>

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

        <View style={styles.classesContainer}>
          <ClassList classes={classes} isTeacher={isTeacher} />
        </View>

        <View style={[styles.classesContainer, { display: isTeacher ? 'none' : 'flex' }]}>
          <ClassList classes={classes.filter(classItem => classItem.viewed)} />
        </View>

      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
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
