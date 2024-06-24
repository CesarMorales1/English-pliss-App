import React from 'react';
import { 
  View, ScrollView, 
  Text, TouchableOpacity,
  Dimensions
} from 'react-native'

import ClassList from '../../components/ClassList'
import Layout from '../../components/Layout'
import { MyColors } from '../../theme/AppTheme'
import { styles } from './Styles'
import useViewModel from './ViewModel'
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../App';

const screenWidth = Dimensions.get("screen").width

//Propiedades de la vista params recibe parametros de is teacher 
interface ClassesScreenProps {
  route: {
    params: {
      isTeacher: boolean
    };
  };
}

export default function Classes({ route }: ClassesScreenProps) {
 const { isTeacher } = route.params;
 const { xPosition, setXPosition, scrollViewRef, ScrollTo, onEndScroll, classes } = useViewModel();
 const navigation = useNavigation<NavigationProp<RootStackParamList>>();  // Tipar correctamente el hook useNavigation

  return (
    <Layout selected='first'>
      <View style={styles.main}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>
            Classes
          </Text>
          <TouchableOpacity style={[styles.addButton, { display: !isTeacher ? 'none': 'flex' }]}
          onPress={() => navigation.navigate('CreateClass')}>
            <Text style={styles.addButtonText}>
              +
            </Text>
          </TouchableOpacity>
        </View>

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
