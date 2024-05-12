import { UserLocalRepositoryImpl } from "../../../Data/repositories/UserLocalRepository";
import { User } from "../../entities/User";

const {getUserInformation} = new UserLocalRepositoryImpl();

export  const getUserUseCase = async () => 
    {
        return await getUserInformation();
    }