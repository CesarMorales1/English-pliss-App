import { AxiosError } from "axios";
import { Teacher } from "../../Domain/entities/Teacher";
import {ProfesorRepository} from "../../Domain/repositories/profesorRepository"
import { ResponseApi } from "../sources/remote/api/models/responseApi";
import { ApiIngles } from "../apiIngles";

export class professorImplement implements ProfesorRepository
{
    async getProfessors(): Promise<any> {
        try {
            const registeredProfessors = await ApiIngles.get<ResponseApi>('/profesor/');
            return Promise.resolve(registeredProfessors.data.data);
        } catch (error) {
            let e = (error as AxiosError)
            console.log(`Error: ${JSON.stringify(e.response?.data)}`);
            const apiError: ResponseApi = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }
}