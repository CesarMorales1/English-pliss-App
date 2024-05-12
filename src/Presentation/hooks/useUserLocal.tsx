import React, {useEffect, useState} from "react";
import { getUserLocalUseCase } from "../../Domain/useCase/userLocal/getUserLocal";
import { User } from "../../Domain/entities/User";

export const useUserLocal = () => 
    {
        const [user,setUser] = useState<User>();
        useEffect(() => {
            getUserSession();
        },[])
    
        const getUserSession = async () => 
            {
                const user = await getUserLocalUseCase();
                setUser(user)
            }

        return {
            user,
            getUserSession
        }
    }