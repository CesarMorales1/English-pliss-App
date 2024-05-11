import React, {useEffect, useState} from 'react'
import { loginAuthCase } from '../../../Domain/useCase/auth/loginAuth';
import { ToastAndroid } from 'react-native';
import { saveUserUseCase } from '../../../Domain/useCase/userLocal/saveUser';
import { getUserUseCase } from '../../../Domain/useCase/userLocal/getUser';
import { useUserLocal } from '../../hooks/useUserLocal';
 const HomeViewModel = () => {
    const [errorMessage,setErrorMessage] = useState('');
    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const {user} = useUserLocal();
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
                            await saveUserUseCase(response.data);
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