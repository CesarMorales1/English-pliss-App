import React, {useState} from 'react'
import { loginAuthCase } from '../../../Domain/useCase/auth/loginAuth';
import { ToastAndroid } from 'react-native';

 const HomeViewModel = () => {
    const [errorMessage,setErrorMessage] = useState('');
    const [values, setValues] = useState({
        email: '',
        password: '',
    });
    const onChange = (property:string, value: any) => {
        setValues({...values, [property]:value});
    }

    const login = async () => 
        {
            if(isValidForm())
                {
                    const response = await loginAuthCase(values.email,values.password);
                    console.log(`response ${JSON.stringify(response)}`);
                    if(!response.success)
                        {
                            ToastAndroid.show(response.message,ToastAndroid.LONG);
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
        errorMessage
    }
}

export default HomeViewModel;