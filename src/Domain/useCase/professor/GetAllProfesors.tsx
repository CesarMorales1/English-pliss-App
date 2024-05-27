import {professorImplement} from "../../../Data/repositories/profesor";
import { Teacher } from "../../entities/Teacher"; 

const {getProfessors} = new professorImplement();

export const GetAllProfessorsAuthUseCase = async() =>
    {
        const informacion = await getProfessors();
        // console.log(informacion);
        return informacion;   
    }