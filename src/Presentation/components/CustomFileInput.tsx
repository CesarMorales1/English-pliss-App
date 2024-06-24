import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, Image, KeyboardType, ImageSourcePropType } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { MyColors } from '../theme/AppTheme';

interface Props {
  image: ImageSourcePropType;
  placeholder: string;
  value: string;
  keyboardType: KeyboardType;
  secureTextEntry?: boolean;
  property: string;
  onChangeText: (property: string, value: any) => void;
}

const FileInput: React.FC<Props> = ({ image, placeholder, value, keyboardType, secureTextEntry = false, property, onChangeText }) => {
  const [class_name, setFileName] = useState('');
  const [fileUri, setFileUri] = useState<string | null>(null); // Estado para guardar el URI del archivo

  const handleFilePicker = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: '*/*', // Permite seleccionar cualquier tipo de archivo
      });

      if (!result.canceled) {
        const { name, uri } = result.assets[0]; // Accede a name y uri del resultado
        setFileName(name); // Almacena el nombre del archivo
        setFileUri(uri); // Almacena el URI del archivo
        onChangeText(property, uri); // Llama a onChangeText para actualizar el estado en el componente padre
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
        placeholder={placeholder}
        value={class_name || value} // Muestra el nombre del archivo seleccionado o el valor inicial
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        editable={false}
      />

      {fileUri ? (
        <Text style={styles.fileUri}></Text>
      ) : null}
      <TouchableOpacity onPress={handleFilePicker}>
        <Image
          source={image}
          style={styles.iconContainer}
        />
      </TouchableOpacity>
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
    width: 35,
    height: 35,
  },
  fileUri: {
    marginTop: 10,
    color: MyColors.primary,
    fontSize: 12,
    paddingRight: 10,
  },
});

export default FileInput;
