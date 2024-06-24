import {Video} from "../entities/Video";
import { ResponseApi } from "../../Data/sources/remote/api/models/responseApi";

export interface videoRepository
{
    getVideos(id_course:string) : Promise<ResponseApi>;
    getTeacherVideos(idTeacher:string) : Promise<ResponseApi>;
}