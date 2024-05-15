import React from 'react'
import { removeUserLocalUseCase } from '../../../../Domain/useCase/userLocal/removeUserLocal'


export const ProfileInfoViewModel = () => {
  
    const removeSession = async () => 
        {
            await removeUserLocalUseCase();
        }

    return {removeSession}
}

export default ProfileInfoViewModel;
