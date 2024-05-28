import React, { useContext } from "react";
import { useUserLocal } from "../../../hooks/useUserLocal";
import { removeUserLocalUseCase } from "../../../../Domain/useCase/userLocal/removeUserLocal";
/* import { RemoveUserLocalUseCase } from '../../../../Domain/useCases/userLocal/RemoveUserLocal';
import { UserContext } from '../../../context/UserContext';
 */
const ProfileInfoViewModel = () => {
  /*   const { user, removeUserSession } = useContext(UserContext); */

  const { user } = useUserLocal();

  const removeSession = async () => {
    await removeUserLocalUseCase();
  };

  return { removeSession, user };
};

export default ProfileInfoViewModel;
