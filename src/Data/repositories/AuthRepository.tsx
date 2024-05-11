import { AxiosError } from "axios";
import { User } from "../../Domain/entities/User";
import { AuthRepository } from "../../Domain/repositories/authRepository";
import { ApiIngles } from "../apiIngles";
import { ResponseApi } from "../sources/remote/api/models/responseApi";

export class AuthRepositoryImplement implements AuthRepository
{
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