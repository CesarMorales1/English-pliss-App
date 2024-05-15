import React, {useState} from "react";
import { ApiIngles } from "../../../Data/apiIngles";
import { RegisterAuthUseCase } from "../../../Domain/useCase/auth/registerAuth";
import * as ImagePicker from "expo-image-picker"

 const RegisterViewModel = () => {
    const [errorMessage,setErrorMessage] = useState('');
    const [values, setValues] = useState({
        full_name: '',
        email: '',
        numero: '',
        password: '',
        image: '',
        confirmPassword: '',
    });

    const [file, setFile] = useState<ImagePicker.ImagePickerAsset>();
    const pickImage = async () => 
        {
            let result = await ImagePicker.launchImageLibraryAsync(
                {mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                quality: 1,
            });

            if(!result.canceled)
                {
                    onChange('image',result.assets[0].uri);
                    setFile(result.assets[0]);
                }
        }

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
        errorMessage,
        pickImage
    }
}

export default RegisterViewModel;