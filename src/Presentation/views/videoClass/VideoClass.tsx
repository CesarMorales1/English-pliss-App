import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
// import { fetchClassInfo, fetchVideoInfo } from './ViewModel'; 
import useViewModel from './ViewModel'; 
import CommentsScreen from './commentsScreen/CommentsScreen';
import styles from './Styles';
import ResourcesScreen from './resourcesScreen/ResourcesScreen';
import ClassScreen  from './classesScreen/ClassScreen';
import Layout from '../../components/Layout';
//TODO: actualizar aqui
type VideoClassScreenRouteProp = RouteProp<RootStackParamList, 'VideoClassScreen'>;
export default function VideoClassScreen() {
  const {classesToShow,user,teacher,fetchVideoInfo} = useViewModel();  
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [selectedView, setSelectedView] = useState('classes');
  // const [classInfo, setClassInfo] = useState<any>(null);
  const [videoInfo, setVideoInfo] = useState<any>(null);
  const route = useRoute<VideoClassScreenRouteProp>();
  const { videTitle,videoDescription,videoDuration } = route.params;
  useEffect(() => {
    const fetchClassAndVideoInfo = async () => {
      try {
  // console.log(idVideo);

        // const classData = await fetchClassInfo();
        const videoData = await fetchVideoInfo();
        // setClassInfo(classData);
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
      
         <ScrollView style={styles.classesContainer}>
          {classesToShow.map((classItem, index) => (
            <ClassScreen key={index} classItem={classItem} isTeacher={teacher} />
          ))}
        </ScrollView>
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

    <Layout selected='second'>   
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
        <Text style={styles.className}>{videTitle}</Text>
        <Text style={styles.classDescription}>{videoDuration}</Text>
        <Text style={styles.aboutClass}>{'About Class'}</Text>
        <Text style={styles.classText}>{videoDescription}</Text>

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

    </Layout>
);
}