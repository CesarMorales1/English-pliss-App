import { useEffect, useRef, useState } from 'react'
import { ScrollView, Dimensions } from 'react-native'
import { useUserLocal } from '../../hooks/useUserLocal'
import { getVideosUseCase } from '../../../Domain/useCase/student/getVideosStudent'
import { Video } from '../../../Domain/entities/Video'

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

    useEffect(() => {
        if (user) {
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
