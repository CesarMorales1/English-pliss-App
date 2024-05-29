import React, { useEffect, useState, useContext } from "react";
import { ApiIngles } from "../../../../Data/apiIngles";
import * as ImagePicker from "expo-image-picker";
import { saveUserLocalUseCase } from "../../../../Domain/useCase/userLocal/saveUserLocal";
import { useUserLocal } from "../../../hooks/useUserLocal";
import { UpdateUserUseCase } from "../../../../Domain/useCase/user/UpdateUser";
import { User } from "../../../../Domain/entities/User";
import { UserContext } from "../../../context/UserContext";

const UpdateProfileViewModel = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [values, setValues] = useState({
    full_name: "",
    numero: "",
  });
  const { saveUserSession } = useContext(UserContext);

  const [loadingElement, setLoadingElement] = useState(false);
  const { user, getUserSession } = useUserLocal();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
      base64: true,
    });

    if (!result.canceled) {
      onChange("image", result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
      base64: true,
    });

    if (!result.canceled) {
      onChange("image", result.assets[0].uri);
    }
  };

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const onChangeInfoUpdate = (
    full_name: string | undefined,
    numero: string | undefined
  ) => {
    setValues({ ...values, full_name: full_name ?? "", numero: numero ?? "" });
  };

  const register = async () => {
    if (isValidForm() && user && user.id_user) {
      // Asegúrate de que user.id_user tenga un valor definido
      setLoadingElement(true);
      const updatedUser: User = {
        ...user,
        ...values,
      };
      const apiResponse = await UpdateUserUseCase(
        updatedUser,
        parseInt(user.id_user, 10)
      ); // Parsea user.id_user a number
      setLoadingElement(false);
      if (apiResponse.success) {
        console.log("Actualización exitosa", apiResponse.data);
        /* await saveUserLocalUseCase(apiResponse.data);
        getUserSession(); */
        saveUserSession(apiResponse.data);
      } else {
        setErrorMessage(JSON.stringify(apiResponse.message));
      }
    }
  };

  const isValidForm = (): boolean => {
    if (!values.full_name) {
      setErrorMessage("El nombre completo no puede estar vacío");
      return false;
    }
    if (isNaN(Number(values.numero)) || !values.numero) {
      setErrorMessage("Por favor ingrese un número válido");
      return false;
    }

    return true;
  };

  return {
    ...values,
    onChange,
    onChangeInfoUpdate,
    register,
    errorMessage,
    pickImage,
    takePhoto,
    user,
    loadingElement,
  };
};

export default UpdateProfileViewModel;
