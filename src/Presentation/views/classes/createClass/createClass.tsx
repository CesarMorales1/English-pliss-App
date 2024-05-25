import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Video } from 'expo-av';
import Layout from '../../../components/Layout';
import styles from './Styles';
import { RoundedButton } from '../../../components/RoundedButton';
import { CustomTextInputSimple } from '../../../components/CustomTextInputSimple';
import useViewModel from './ViewModel';
import { CustomTextArea } from '../../../components/CustomTextArea';
import FileInput from '../../../components/CustomFileInput';
import SwitchComponent from '../../../components/CustomSwitch';
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from '../../../../../App';

interface Props extends StackScreenProps<RootStackParamList, "CreateClass"> {}


const CreateClass = ({ navigation, route }: Props) => {
  const [videoUri, setVideoUri] = useState<string | null>(null);
  const { class_name, class_description, class_resource, allowComment, onChange, errorMessage } = useViewModel();

  const onSubmito = () => {
    return navigation.navigate('ClassesScreen', {
      isTeacher: true
    });
  };

  const pickVideo = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
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

    if (!result.canceled) {
      if ('assets' in result && Array.isArray(result.assets) && result.assets.length > 0 && 'uri' in result.assets[0]) {
        setVideoUri(result.assets[0].uri);
      }
    }
  };

  return (
    <Layout selected='first'>
      <View style={styles.container}>
        <View style={styles.button}>
          {videoUri ? (
            <TouchableOpacity onPress={pickVideo}>
              <Video
                source={{ uri: videoUri }}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                shouldPlay={false}
                isLooping
                style={styles.video}
                positionMillis={1000}
                onLoad={() => console.log("El video se cargó correctamente")}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={pickVideo}>
              <Image
                source={require("../../../../../assets/VideoFile.png")}
                style={styles.logoImage}
              />
              <Text style={styles.logoText}>Select a video</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={styles.form}>
        <ScrollView>
          <Text style={styles.formText}>Add new class</Text>
          <Text style={styles.formTextTitleInput}>Class name</Text>
          <CustomTextInputSimple
            placeholder='Example: Class 02 Level A2'
            keyboardType='default'
            value={class_name}
            property='class_name'
            onChangeText={onChange}
          />

          <Text style={styles.formTextTitleInput}>Class description</Text>
          <CustomTextArea
            placeholder='Example: Today we will talk about the...'
            keyboardType='default'
            value={class_description}
            property='class_description'
            onChangeText={onChange}
          />

          <Text style={styles.formTextTitleInput}>Class Resource</Text>
          <FileInput
            image={require('../../../../../assets/Add_File.png')}
            placeholder={'Select a resource'}
            keyboardType='default'
            value={class_resource}
            property='class_resource'
            onChangeText={onChange}
          />

          <Text style={styles.formTextTitleInput}>Comments</Text>
          <SwitchComponent
            value={allowComment}
            property="allowComment"
            onChangeText={onChange}
          />

          <View>
            <RoundedButton text='Create class' onPress={onSubmito} />
            <Text style={styles.spice}></Text>
          </View>
        </ScrollView>
      </View>
    </Layout>
  );
};

export default CreateClass;
