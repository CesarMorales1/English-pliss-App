import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { MyColors } from '../theme/AppTheme';

export const FileInput = () => {
  const [fileName, setFileName] = useState('');
  const [fileUri, setFileUri] = useState(''); // Estado para guardar el URI del archivo

  const handleFilePicker = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: '*/*', // Permite seleccionar cualquier tipo de archivo
      });

      if (!result.canceled) {
        const { name, uri } = result.assets[0]; // Accede a name y uri del resultado
        setFileName(name); // Almacena el nombre del archivo
        setFileUri(uri); // Almacena el URI del archivo
      } else {
        console.error('Document picking was canceled');
      }
    } catch (err) {
      console.error('Error picking document: ', err);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Selecciona un archivo"
        value={fileName}
        editable={false}
      />
      <TouchableOpacity  onPress={handleFilePicker}>
        <Image
          source={require('../../../assets/Add_File.png')}
          style={styles.iconContainer}
        />
      </TouchableOpacity>
      {fileUri ? (
        <Text style={styles.fileUri}></Text> // Muestra el URI del archivo seleccionado
      ) : null}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 3,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: MyColors.background,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  input: {
    flex: 1,
    padding: 20,
  },
  iconContainer: {
    marginRight: 15,
    width:35,
    height:35,
  },
  fileUri: {
    marginTop: 10,
    color: 'gray',
    fontSize: 12,
    paddingRight:10,
  },
});

export default FileInput;
