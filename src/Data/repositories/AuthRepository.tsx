import { AxiosError } from "axios";
import { User } from "../../Domain/entities/User";
import { AuthRepository } from "../../Domain/repositories/authRepository";
import { ApiIngles, ApiInglesForImage } from "../apiIngles";
import { ResponseApi } from "../sources/remote/api/models/responseApi";
import { ImagePickerAsset } from "expo-image-picker";
import mime from "mime";

const createBlobFromUri = async (uri: any) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    return blob;
  };

export class AuthRepositoryImplement implements AuthRepository
{  
    async registerWithImage(user: User, file: ImagePickerAsset): Promise<any> {
        try {
            // Crear FormData
            const data = new FormData();
            const fileBlob = await createBlobFromUri(file.uri);
            const fileName = file.uri.split('/').pop();
            const fileType = mime.getType(file.uri);
            
            data.append('image', fileBlob, fileName);
            data.append('user', JSON.stringify(user));
            console.log(data);
            
            // Enviar solicitud
            const response = await ApiInglesForImage.post<ResponseApi>('/auth/registerWithImage', data);

            // Devolver respuesta
            return Promise.resolve(response.data);
        } catch (error) { 
            console.log(error);
            // Asegurarse de que el error tenga una respuesta válida
            let e = (error as AxiosError);
            if (e.response?.data) {
                try {
                    // Intentar analizar la respuesta de error como JSON
                    const apiError  =  e.response.data;
                    console.log(apiError);
                } catch (parseError) {
                    // Si la respuesta no es JSON, devolver un error genérico
                    console.error("Error al analizar la respuesta del servidor:", parseError);
                    const genericError: ResponseApi = { message: "Error inesperado del servidor", success: false };
                    return Promise.resolve(genericError);
                }
            } else {
                // Manejar casos donde no hay respuesta del servidor
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