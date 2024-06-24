import { ResponseApi } from "../../Data/sources/remote/api/models/responseApi";
import { Teacher } from "../entities/Teacher";

export interface ProfesorRepository
{
    getProfessors() : Promise<ResponseApi>;
}