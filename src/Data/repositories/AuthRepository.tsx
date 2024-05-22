import { AxiosError } from "axios";
import { User } from "../../Domain/entities/User";
import { AuthRepository } from "../../Domain/repositories/authRepository";
import { ApiIngles, ApiInglesForImage } from "../apiIngles";
import { ResponseApi } from "../sources/remote/api/models/responseApi";
import { ImagePickerAsset } from "expo-image-picker";
import mime from "mime";



export class AuthRepositoryImplement implements AuthRepository
{  
    async registerWithImage(user: User, file: ImagePickerAsset): Promise<any> {
        try {
            const data = new FormData();
            data.append('image',JSON.stringify(file));
            data.append('user', JSON.stringify(user));

            const response = await ApiInglesForImage.post<ResponseApi>('/auth/registerWithImage', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            return Promise.resolve(response.data);
        } catch (error) { 
            console.log(error);
            let e = (error as AxiosError);
            if (e.response?.data) {
                try {
                    const apiError = e.response.data;
                    console.log(apiError);
                } catch (parseError) {
                    console.error("Error al analizar la respuesta del servidor:", parseError);
                    const genericError: ResponseApi = { message: "Error inesperado del servidor", success: false };
                    return Promise.resolve(genericError);
                }
            } else {
                const networkError: ResponseApi = { message: "No hay respuesta del servidor", success: false };
                return Promise.resolve(networkError);
            }
        }
    }

    

    async register(user: User): Promise<ResponseApi>
    {
        try {

            const response = await ApiIngles.post<ResponseApi>('/auth/register',user);
            return Promise.resolve(response.data)
        } catch (error) {
            let e = (error as AxiosError)
            console.log(`Error: ${JSON.stringify(e.response?.data)}`);
            const apiError: ResponseApi = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }

    async login(email: string, password: string): Promise<ResponseApi>
    {
        try {

            const response = await ApiIngles.post<ResponseApi>('/auth/login',{email,password});
            return Promise.resolve(response.data)
        } catch (error) {
            let e = (error as AxiosError)
            console.log(`Error: ${JSON.stringify(e.response?.data)}`);
            const apiError: ResponseApi = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }
}