import axios from "axios";
import {videoRepository} from "../../Domain/repositories/videoRepository";
import { ResponseApi } from "../sources/remote/api/models/responseApi";
import { ApiIngles, ApiInglesForImage } from "../apiIngles";
import { Video } from "../../Domain/entities/Video";

export class VideoClassRepositoryImpl implements videoRepository
{
    async getVideos(id_course: string): Promise<any> {
        try {
            const response = await ApiIngles.get<Video[]>(`/videos/${id_course}`);
            return Promise.resolve(response.data);
        } catch (error) {
            
        }
    }
}