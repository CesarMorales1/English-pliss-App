import React, {useEffect, useState} from 'react'
import { loginAuthCase } from '../../../Domain/useCase/auth/loginAuth';
import { ToastAndroid } from 'react-native';
import { saveUserLocalUseCase } from '../../../Domain/useCase/userLocal/saveUserLocal';
import { getUserLocalUseCase } from '../../../Domain/useCase/userLocal/getUserLocal';
import { useUserLocal } from '../../hooks/useUserLocal';
 const HomeViewModel = () => {
    const [errorMessage,setErrorMessage] = useState('');
    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const {user,getUserSession} = useUserLocal();
    // console.log(`Usuario de session: ${JSON.stringify(user)}`);

    const onChange = (property:string, value: any) => {
        setValues({...values, [property]:value});
    }

    const login = async () => 
        {
            if(isValidForm())
                {
                    const response = await loginAuthCase(values.email,values.password);
                    if(!response.success)
                        {
                            ToastAndroid.show(response.message,ToastAndroid.LONG);
                        }else
                        {
                            await saveUserLocalUseCase(response.data);
                            getUserSession();

                        }
                }
        }

    const isValidForm = ():boolean => 
    {
        if(!values.email)
            {
               setErrorMessage('Email cant be empty')
               return false; 
            }
        if(!values.password)
            {
                setErrorMessage('password cant be empty');
                return false;                
            }
        return true
    }
    return {
        ...values,
        onChange,
        login,
        errorMessage,
        user
    }
}

export default HomeViewModel;