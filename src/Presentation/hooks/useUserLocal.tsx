import { useEffect, useState } from "react";
import { getUserLocalUseCase } from "../../Domain/useCase/userLocal/getUserLocal";
import { User } from "../../Domain/entities/User";

export const useUserLocal = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    getUserSession();
  }, []);

  const getUserSession = async () => {
    const fetchedUser = await getUserLocalUseCase();
    setUser(fetchedUser);
  };

  return {
    user,
    getUserSession,
    setUser, // Asegurarse de que getUserSession sea parte del objeto retornado
  };
};
