import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Keyboard } from 'react-native';
import Menu from './Menu';


export default function Layout({ children, selected }: { children: React.ReactNode, selected: "first" | "second" | "third" }) {

  const [isKeyboardVisible, setisKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setisKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setisKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      {children}
      {!isKeyboardVisible && <Menu selected={selected} />}
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});