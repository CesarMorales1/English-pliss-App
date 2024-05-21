import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import { fetchClassInfo, fetchVideoInfo } from './ViewModel'; 
import CommentsScreen from './commentsScreen/CommentsScreen';
import styles from './Styles';
import ResourcesScreen from './resourcesScreen/ResourcesScreen';
import ClassScreen  from './classesScreen/ClassScreen';
import Layout from '../../components/Layout';


export default function VideoClassScreen() {

  const classes = [
    { id: "01", title: "Welcome to the course", viewed: true, duration: "06:10" },
    { id: "02", title: "Verb To-Be English Plis", viewed: true, duration: "06:10" },
    { id: "03", title: "Sentences", viewed: true, duration: "06:10" },
    { id: "04", title: "Simple present", viewed: false, duration: "06:10" },
    { id: "05", title: "Simple past", viewed: false, duration: "06:10" },
    { id: "06", title: "Simple future", viewed: false, duration: "06:10" },
    { id: "07", title: "Simple future", viewed: false, duration: "06:10" },
    { id: "08", title: "Simple future", viewed: false, duration: "06:10" },
  ]
  

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
        <ScrollView>
          {classes.map((classItem, index) => (
            <ClassScreen key={index} classItem={classItem} isTeacher={true} />
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

    <Layout>   
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

    </Layout> 
  );
}
