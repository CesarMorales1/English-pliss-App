import axios,{AxiosError} from "axios";
import {videoRepository} from "../../Domain/repositories/videoRepository";
import { ResponseApi } from "../sources/remote/api/models/responseApi";
import { ApiIngles, ApiInglesForImage } from "../apiIngles";
import { Video } from "../../Domain/entities/Video";
import { localStorage } from "../sources/local/localStorageVideo";

export class VideoClassRepositoryImpl implements videoRepository
{

    async saveVideos(videos: Video[]): Promise<void>
    {
        const {save} = localStorage();
        await save('videos',videos);
    }

    async getVideosLocal(): Promise<ResponseApi>
    {
        const {getItem} = localStorage();
        const data = await getItem("videos");
        return data? data: [];
    }

    async fetchAndSaveVideos(idCourse: string): Promise<void> {
        try {
          const response = await ApiIngles.get<Video[]>(`/videos/teacher/${idCourse}`);
          const videos = response.data;
          await this.saveVideos(videos);
        } catch (error) {
          let e = error as AxiosError;
          console.log(`Error: ${JSON.stringify(e.response?.data)}`);
          return Promise.reject(e.response?.data);
        }
      }

    async getVideos(id_course: string): Promise<any> {
        try {
            const response = await ApiIngles.get<Video[]>(`/videos/${id_course}`);
            return Promise.resolve(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    async getTeacherVideos(idTeacher: string): Promise<any>
    {
        try
        {
            const response = await ApiIngles.get<Video[]>(`/videos/teacher/${idTeacher}`);
            return Promise.resolve(response.data);
        }catch(error)
        {
            console.log(error);
        }
    }
}