import { UserLocalRepositoryImpl } from "../../../Data/repositories/UserLocalRepository";
import { User } from "../../entities/User";

const {removeUser} = new UserLocalRepositoryImpl();

export  const removeUserLocalUseCase = async () => 
    {
        return await removeUser();
    }