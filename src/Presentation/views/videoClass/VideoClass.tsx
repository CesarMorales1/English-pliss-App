import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import { fetchClassInfo, fetchVideoInfo } from './ViewModel'; 
import CommentsScreen from './commentsScreen/CommentsScreen';
import styles from './Styles';
import ResourcesScreen from './resourcesScreen/ResourcesScreen';

export default function VideoClassScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [selectedView, setSelectedView] = useState('classes');
  const [classInfo, setClassInfo] = useState<any>(null);
  const [videoInfo, setVideoInfo] = useState<any>(null);

  useEffect(() => {
    const fetchClassAndVideoInfo = async () => {
      try {
        const classData = await fetchClassInfo();
        const videoData = await fetchVideoInfo();
        setClassInfo(classData);
        setVideoInfo(videoData);
      } catch (error) {
        console.error('Error fetching class and video info:', error);
      }
    };

    fetchClassAndVideoInfo();
  }, []);

  const changeView = (view:string) => {
    setSelectedView(view);
  };

  const renderSelectedView = () => {
    if (selectedView === 'classes') {
      return (
        <View>
          <Text>Vista de Clases</Text>
        </View>
      );
    } else if (selectedView === 'comments') {
      return (
        <CommentsScreen />
      );
    } else if (selectedView === 'resources') {
      return (
        <ResourcesScreen />
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        <View style={styles.videoWrapper}>
          {videoInfo && ( // Verifica si la información del video está disponible
            <Video
              ref={video}
              style={styles.video}
              source={{
                uri: videoInfo?.uri,
              }}
              useNativeControls
              resizeMode={ResizeMode.CONTAIN}
              isLooping
              onPlaybackStatusUpdate={status => setStatus(status)}
            />
          )}
        </View>
      </View>

      <View style={styles.listContainer}>
        <Text style={styles.className}>{classInfo?.name}</Text>
        <Text style={styles.classDescription}>{classInfo?.description}</Text>
        <Text style={styles.aboutClass}>{classInfo?.about}</Text>
        <Text style={styles.classText}>{classInfo?.details}</Text>

        <View style={styles.buttonAndViewContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => changeView('classes')}>
              <Text style={styles.button}>Classes</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeView('comments')}>
              <Text style={styles.button}>Comments</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeView('resources')}>
              <Text style={styles.button}>Resources</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.selectedViewContainer}>
            {renderSelectedView()}
          </View>
        </View>
      </View>
    </View>
  );
}
