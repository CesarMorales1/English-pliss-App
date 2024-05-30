import { useEffect, useRef, useState } from 'react'
import { ScrollView, Dimensions } from 'react-native'
import { useUserLocal } from '../../hooks/useUserLocal'
import { getVideosUseCase } from '../../../Domain/useCase/student/getVideosStudent'
import {getVideosUseCaseProfesor} from "../../../Domain/useCase/professor/GetVideosProfessor"
import { Video } from '../../../Domain/entities/Video'
import { VideoClassRepositoryImpl } from '../../../Data/repositories/videosRepository'
import { User } from '../../../Domain/entities/User'
const videoRepository = new VideoClassRepositoryImpl();

const screenWidth = Dimensions.get("screen").width

// Define el tipo ClassProps
interface ClassProps {
    id: string;
    title: string;
    viewed: boolean;
    duration: string;
    description: string;
}

export default function useViewModel() {
    const { getUserSession, user } = useUserLocal();
    const [xPosition, setXPosition] = useState(0);
    const [classes, setClasses] = useState<ClassProps[]>([]);
    const scrollViewRef = useRef<ScrollView>(null);

    const fetchAndStoreVideos = async (user: User) => {
      try {
        await videoRepository.fetchAndSaveVideos(user.id_user!);
        // const storedVideos = await videoRepository.getVideosLocal();
      } catch (error) {
        console.error('Error fetching and storing videos:', error);
      }
    };

    useEffect(() => {
        if (user) {
            if(Number(user.id_rol) === 2)
                {
                  fetchAndStoreVideos(user)
                    getVideosUseCaseProfesor(user.id_user!)
                    .then((result) => result.data)
                    .then((fetchedVideos: Video[]) => 
                      {

                        const transformedClasses = fetchedVideos.map((video: Video) => (
                          {
                            id: video.id_video,
                            title: video.titulo,
                            viewed: true,
                            duration: video.duration_video,
                            description: video.detail_video
                          }));
                          setClasses(transformedClasses);
                      })
                    .catch(error => console.error('Error al obtener videos: ', error))
                    return;
                }
            
            getVideosUseCase(user.idCourse)
                .then((result) => result.data)
                .then((fetchedVideos: Video[]) => 
                  {
                    const transformedClasses = fetchedVideos.map((video: Video) => (
                      {
                        id: video.id_video,
                        title: video.titulo,
                        viewed: true,
                        duration: video.duration_video,
                        description: video.detail_video
                      }));
                      setClasses(transformedClasses);
                  })
                .catch(error => console.error('Error al obtener videos: ', error))
        }
    }, [user]);

    const ScrollTo = (xPosition: number) => {
        scrollViewRef.current?.scrollTo({ 
            x: xPosition,
            animated: true
        });
        setXPosition(xPosition);
    }

    const onEndScroll = (e: any) => {
        const xPosition = e.nativeEvent.contentOffset.x;

        if (xPosition >= screenWidth / 2) {
            ScrollTo(screenWidth * 2);
            setXPosition(screenWidth * 2);
        } else {
            ScrollTo(0);
            setXPosition(0);
        }
    }

    return { xPosition, setXPosition, scrollViewRef, ScrollTo, onEndScroll, classes };
}
