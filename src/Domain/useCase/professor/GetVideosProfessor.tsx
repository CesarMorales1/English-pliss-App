import {VideoClassRepositoryImpl} from "../../../Data/repositories/videosRepository";

const {getTeacherVideos} = new VideoClassRepositoryImpl();

export const getVideosUseCaseProfesor = async (idTeacher: string) => 
    {
        return await getTeacherVideos(idTeacher);
    }