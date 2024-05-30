import React from 'react'
import { View, StyleSheet, } from 'react-native'

import ClassItem from './ClassItem'
// Mapea todas las clases se encarga de renderizar todas las clases de la vista 
export interface ClassProps {
  id: string,
  title: string,
  viewed: boolean,
  duration: string,
  description: string
}

export default function ClassList({ classes, isTeacher }: { classes: ClassProps[], isTeacher?: boolean }) {
  return (
    <View style={styles.listContainer}>
      {
        classes.map((classItem: ClassProps, index: number) => (
          <ClassItem 
            classItem={classItem} 
            isTeacher={isTeacher}
            key={index} 
          />
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
    marginTop: 15,
    display: "flex",
    alignItems: "center",
  }
})