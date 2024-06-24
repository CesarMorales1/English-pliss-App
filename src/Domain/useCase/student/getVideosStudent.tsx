import {VideoClassRepositoryImpl} from "../../../Data/repositories/videosRepository";

const {getVideos} = new VideoClassRepositoryImpl();

export const getVideosUseCase = async (idCourse: string) => 
    {
        return await getVideos(idCourse);
    }