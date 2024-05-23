import React, { useState } from 'react';
import { View, Button, StyleSheet, ScrollView, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Video } from 'expo-av';
import Layout from '../../../components/Layout';
import styles  from './Styles';
import { RoundedButton } from '../../../components/RoundedButton';
import { CustomTextInputSimple } from '../../../components/CustomTextInputSimple';
import useViewModel from './ViewModel';
import { CustomTextArea } from '../../../components/CustomTextArea';
import FileInput from '../../../components/CustomFileInput';
import SwitchComponent from '../../../components/CustomSwitch';
import { CustomTextInput } from '../../../components/CustomTextInput';


const CreateClass = () => {
  const [videoUri, setVideoUri] = useState<string | null>(null);
  const {full_name, email, password, onChange, register, errorMessage, pickImage,image}= useViewModel();

  const pickVideo = async () => {
    console.log("Seleccionando video...");
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    console.log("Estado de permisos:", status);
    if (status !== 'granted') {
      alert('Se requieren permisos para acceder a la biblioteca de medios.');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    //console.log("Resultado de la selección de video:", result);

    if (!result.canceled) {
      if ('assets' in result && Array.isArray(result.assets) && result.assets.length > 0 && 'uri' in result.assets[0]) {
        //console.log("URI del video seleccionado:", result.assets[0].uri); 
        setVideoUri(result.assets[0].uri);
      } else {
        //console.log("No se pudo encontrar la URI del video en el objeto result.");
      }
    }
  };

  return (
  <Layout>
    <View style={styles.container}>
    <View style={styles.button}>
      <Button title="Seleccionar Video" onPress={pickVideo} />
      {videoUri && (
        <Video
          source={{ uri: videoUri }}
          rate={1.0}
          volume={1.0}
          isMuted={false} //MUTEADO
          shouldPlay={false} //COMO UNA FOTO O PARADO
          isLooping
          style={styles.video}
          positionMillis={1000} // Mostrar solo la vista previa del primer segundo
          onLoad={() => console.log("El video se cargó correctamente")}
        />
      )}
      </View>
      
    </View>
    {/* COMIENZA FORMULARIO */}
    <View style={styles.form}>    
      <ScrollView>
            <Text style={styles.formText}>Add new class</Text>

            {/* COMIENZA PRIMER INPUT */}
            <Text style={styles.formTextTitleInput}>Class name</Text>

            <CustomTextInputSimple
            placeholder='Example: Class 02 Level A2'
            keyboardType='default'
            value={full_name}
            property='class_name'
            onChangeText={onChange}
            />

{/*             <CustomTextInput
            image={require('../../../../../assets/my_user.png')}
            placeholder='Full name'
            keyboardType='default'
            value={full_name}
            property='full_name'
            onChangeText={onChange}
            /> */}

            {/* COMIENZA SEGUNDO INPUT */}
            <Text style={styles.formTextTitleInput}>Class description</Text>

            <CustomTextArea
            placeholder='Example: Today we will talk about the...'
            keyboardType='default'
            value={email}
            property='email'
            onChangeText={onChange}
            />

            {/* COMIENZA TERCER INPUT */}
            <Text style={styles.formTextTitleInput}>Class Resource</Text>
            <FileInput/>

            {/* COMIENZA CUARTO INPUT */}
            <Text style={styles.formTextTitleInput}>Comments</Text>
            <SwitchComponent/>
      
            {/* COMIENZA BOTON */}
            <View>
              {/* <RoundedButton text='Sign up' onPress={() => register()} /> */}
            </View>
      </ScrollView>
    </View>
  </Layout>
  );
};

export default CreateClass;
