import React, { useEffect, useState } from 'react';
import {
  View, TouchableOpacity,
  StyleSheet,
  Text, // Import Text para mostrar mensajes de carga o errores
  ActivityIndicator // Import ActivityIndicator para mostrar un indicador de carga
} from 'react-native';
import { MyColors } from '../theme/AppTheme';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faVideo } from '@fortawesome/free-solid-svg-icons/faVideo';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { useUserLocal } from '../hooks/useUserLocal';
import { VideoClassRepositoryImpl } from '../../Data/repositories/videosRepository';
import { Video } from '../../Domain/entities/Video';

import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../App'; 

const videoRepository = new VideoClassRepositoryImpl();

export default function Menu({ selected = "first" }: { selected: "first" | "second" | "third" }) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { getUserSession, user } = useUserLocal();
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState<string | null>(null); // Estado de error

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        await getUserSession();
        const videosResponse = await videoRepository.getVideosLocal();
        console.log('Videos fetched:', videosResponse); // Añadido para depuración
        if (videosResponse.success) {
          setVideos(videosResponse.data);
        } else {
          setError('No videos available');
        }
      } catch (err) {
        setError('Error loading videos');
      } finally {
        setLoading(false); // Finaliza el estado de carga
      }
    };

    fetchVideos();
  }, []);

  // Muestra la lista de clases si es profesor o es estudiante
  const onClassesPressed = () => {
    // Verifica el rol del usuario
    const isTeacher = Number(user?.id_rol) === 2;
    navigation.navigate("ClassesScreen", { isTeacher });
  }

  const onVideoPressed = () => {
    if (videos.length > 0) {
      const videoAVer = videos[0];
      console.log('Navigating with video:', videoAVer); // Añadido para depuración
      navigation.navigate("VideoClassScreen", {
        videTitle: videoAVer.titulo,
        videoDescription: videoAVer.detail_video,
        videoDuration: videoAVer.duration_video
      });
    } else {
      console.log('No videos available');
    }
  }

  const onProfilePressed = () => {
    navigation.navigate("ProfileInfoScreenEdit");
  }

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={MyColors.primary} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClassesPressed}>
        <FontAwesomeIcon icon={faHome} color={selected === "first" ? '#fff' : "#999"} size={30} />
      </TouchableOpacity>

      <TouchableOpacity onPress={onVideoPressed} disabled={videos.length === 0}>
        <FontAwesomeIcon icon={faVideo} color={selected === "second" ? '#fff' : "#999"} size={30} />
      </TouchableOpacity>

      <TouchableOpacity onPress={onProfilePressed}>
        <FontAwesomeIcon icon={faUser} color={selected === "third" ? '#fff' : "#999"} size={30} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    margin: 0,
    backgroundColor: MyColors.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: MyColors.background
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: MyColors.background
  }
});
