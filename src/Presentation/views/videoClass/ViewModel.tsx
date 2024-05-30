

import { useState,useEffect } from "react";
import { useUserLocal } from "../../hooks/useUserLocal";
import { ClassProps } from "../../components/ClassList";
import { getVideosUseCase } from '../../../Domain/useCase/student/getVideosStudent'
import { Video } from '../../../Domain/entities/Video'
import { getVideosUseCaseProfesor } from "../../../Domain/useCase/professor/GetVideosProfessor";

export default function useViewModel()
{
  // // Simulación de datos de clase
// const classData = {
//   title: 'Class 02 Level A2',
//   description: '1h 14min · 24 Lessons',
//   about: 'About Class',
//   details: 'Today we will talk about the verb to be ... At the end we will see some colloquial phrases',
// };

  // Simulación de datos de video
  const videoData = {
    uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
  };

    // Función para obtener información de la clase desde el backend
    //  async function fetchClassInfo() {
    //   // Simulación de una llamada a una API o consulta a la base de datos
    //   return new Promise((resolve) => {
    //     setTimeout(() => {
    //       resolve(classData);
    //     }); // Simula un retraso en la obtención de datos
    //   });
    // }
    
    // Función para obtener información del video desde el backend
     async function fetchVideoInfo() {
      // Simulación de una llamada a una API o consulta a la base de datos
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(videoData);
        }); // Simula un retraso en la obtención de datos
      });
    }

  const {getUserSession,user}  = useUserLocal();
  const [classesToShow,setClasses]   = useState<ClassProps[]>([]);
  const [teacher, setTeacher] = useState(false)

  useEffect(() => {
    if (user) {
        if(Number(user.id_rol) === 2)
            {
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

  return {user,classesToShow,teacher,fetchVideoInfo}
}
  