import React from 'react'
import { View, StyleSheet } from 'react-native'

import Menu from './Menu'

export default function Layout({ children }: React.PropsWithChildren) {

  const [selected, setSelected] = React.useState<'first' | 'second' | 'third'>("first")

  return (
    <View style={styles.container}>
      { children }
      <Menu selected={selected} setSelected={setSelected} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  }
})