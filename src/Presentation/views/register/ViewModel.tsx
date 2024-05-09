import React, {useState} from "react";
import { ApiIngles } from "../../../Data/apiIngles";
import { RegisterAuthUseCase } from "../../../Domain/useCase/auth/registerAuth";


 const RegisterViewModel = () => {
    const [errorMessage,setErrorMessage] = useState('');
    const [values, setValues] = useState({
        full_name: '',
        email: '',
        numero: '',
        password: '',
        confirmPassword: '',
    });
    const onChange = (property:string, value: any) => {
        setValues({...values, [property]:value});
    }
    const register = async () =>{
        if(isValidForm())
            {
                const apiResponse = await RegisterAuthUseCase(values);
                console.log(`Result: ${JSON.stringify(apiResponse)}`);
            }
            
    }

    const isValidForm = (): boolean => 
        {
            if(!values.full_name)
                {
                    setErrorMessage("Fullname can't be empty");
                    return false;
                }
            if(isNaN(Number(values.numero)) || !values.numero)
                {
                    setErrorMessage('Please enter a valid Number');
                    return false;
                }
            if(!values.password || !values.confirmPassword)
                {
                    setErrorMessage("Password can't be empty");
                    return false;
                }
            if(values.password !== values.confirmPassword)
                {
                    setErrorMessage('The passwords are not equal');
                    return false;
                }
            if(!values.email)
                {
                    setErrorMessage("email can't be empty");
                    return false;
                }
            return true;
        }

    return {
        ...values,
        onChange,
        register,
        errorMessage
    }
}

export default RegisterViewModel;