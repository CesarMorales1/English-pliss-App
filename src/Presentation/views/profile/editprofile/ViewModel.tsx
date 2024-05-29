import React, { useContext } from "react";
import { useUserLocal } from "../../../hooks/useUserLocal";
import { removeUserLocalUseCase } from "../../../../Domain/useCase/userLocal/removeUserLocal";
import { getUserLocalUseCase } from "../../../../Domain/useCase/userLocal/getUserLocal";
import { UserContext } from "../../../context/UserContext";

const ProfileInfoViewModel = () => {
  /*   const { user, setUser } = useUserLocal();

  const removeSession = async () => {
    await removeUserLocalUseCase();
  };

  const loadUser = async () => {
    const loadedUser = await getUserLocalUseCase();
    setUser(loadedUser);
  }; */
  const { setUser } = useUserLocal();
  const removeSession = async () => {
    await removeUserLocalUseCase();
  };
  const { user } = useContext(UserContext);

  return { user, removeSession };
};

export default ProfileInfoViewModel;
