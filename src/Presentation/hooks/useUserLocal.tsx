import React, {useEffect, useState} from "react";
import { getUserUseCase } from "../../Domain/useCase/userLocal/getUser";
import { User } from "../../Domain/entities/User";

export const useUserLocal = () => 
    {
        const [user,setUser] = useState<User>();
        useEffect(() => {
            getUserSession();
        },[])
    
        const getUserSession = async () => 
            {
                const user = await getUserUseCase();
                setUser(user)
            }

        return {user}
    }