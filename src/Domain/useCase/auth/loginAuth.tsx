import { AuthRepositoryImplement } from "../../../Data/repositories/AuthRepository";


const {login} = new AuthRepositoryImplement();

export const loginAuthCase = async(email: string, password: string) => 
{
    return await login(email,password);
}