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

export const CustomTextArea = ({

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
          style={styles.textArea}
          placeholder={placeholder}
          keyboardType={keyboardType}
          value={value}
          onChangeText={ text => onChangeText(property, text) }
          secureTextEntry={secureTextEntry}
          multiline={true}
          numberOfLines={4}
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
  textArea: {
    height: 100,
    flex : 1,
    textAlignVertical: 'top',
    padding: 10,
    borderColor:MyColors.background,
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 16,
  },
})