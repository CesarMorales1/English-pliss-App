import { UserLocalRepositoryImpl } from "../../../Data/repositories/UserLocalRepository";
import { User } from "../../entities/User";

const {saveUserInformation} = new UserLocalRepositoryImpl();

export  const saveUserUseCase = async (user: User) => 
    {
        return await saveUserInformation(user);
    }