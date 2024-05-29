import React, {useState} from "react";
import { ApiIngles } from "../../../../Data/apiIngles";
import { RegisterAuthUseCase } from "../../../../Domain/useCase/auth/registerAuth";
import * as ImagePicker from "expo-image-picker"

 const RegisterViewModel = () => {
    const [errorMessage,setErrorMessage] = useState('');
    const [values, setValues] = useState({
        class_name: '',
        class_description: '',
        class_resource: '',
        allowComment: false,
    });


    const onChange = (property:string, value: any) => {
        setValues({...values, [property]:value});
    }


    const isValidForm = (): boolean => 
        {
            if(!values.class_name)
                {
                    setErrorMessage("Class name can't be empty");
                    return false;
                }
            if(!values.class_description)
                {
                    setErrorMessage("Class description can't be empty");
                    return false;
                }
            if(!values.class_resource)
                {
                    setErrorMessage("class resource can't be empty");
                    return false;
                }
            return true;
        }

    return {
        ...values,
        onChange,
        errorMessage,
    }
}

export default RegisterViewModel;