import React from "react";
import { removeUserLocalUseCase } from "../../../../Domain/useCase/userLocal/removeUserLocal";
import { useUserLocal } from "../../../hooks/useUserLocal";

export const ProfileInfoViewModel = () => {
  const { user } = useUserLocal();

  const removeSession = async () => {
    await removeUserLocalUseCase();
  };

  return { removeSession, user };
};

export default ProfileInfoViewModel;
