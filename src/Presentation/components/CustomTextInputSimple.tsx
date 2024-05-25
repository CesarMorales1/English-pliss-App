import React from 'react'
import { View, TextInput, StyleSheet, KeyboardTypeIOS, KeyboardType } from 'react-native'
import { MyColors } from '../theme/AppTheme'

interface Props {
  placeholder:string,
  value:string,
  keyboardType:KeyboardType,
  secureTextEntry?:boolean,
  property:string,
  onChangeText: (property:string,value:any) => void

}

export const CustomTextInputSimple = ({
  placeholder,
  value,
  keyboardType,
  secureTextEntry=false,
  property,
  onChangeText

}:Props) => {
  return (
      <View style={styles.formInput}>

        <TextInput
          style={styles.formTextInput}
          placeholder={placeholder}
          keyboardType={keyboardType}
          value={value}
          onChangeText={ text => onChangeText(property, text) }
          secureTextEntry={secureTextEntry}
        />
      </View>
  )
}

const styles = StyleSheet.create({
  formTextTitleInput:{
      marginTop: 15,
      color: MyColors.primary,
  },
  formInput: {
      flexDirection:'row',
      marginTop: 3,
  },
  formTextInput: {
      flex : 1,
      borderWidth: 1,
      borderColor: MyColors.background,
      borderRadius: 10,
      padding:8,
      marginLeft: 0,
  },
})