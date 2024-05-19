import React, { useEffect, useState } from "react";
import { Role } from "../../../Domain/entities/Role";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import { RegisterAuthUseCase } from "../../../Domain/useCase/auth/registerAuth";
import { AssignUserRoleUseCase } from "../../../Domain/useCase/auth/AssignUserRoleUseCase";
import { UserRoleRepositoryImpl } from "../../../Data/repositories/UserRoleRepositoryImpl";

const useViewModel = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [values, setValues] = useState({
    full_name: "",
    email: "",
    numero: "",
    password: "",
    image: "",
    confirmPassword: "",
  });
  const [selectedRoleId, setSelectedRoleId] = useState<number | null>(null);
  const [roles, setRoles] = useState<Role[]>([]);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await axios.get("http://192.168.1.104:3000/v1/rol");
        setRoles(response.data);
      } catch (error) {
        console.error("Error fetching roles:", error);
        setErrorMessage("Error fetching roles");
      }
    };
    fetchRoles();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      onChange("image", result.assets[0].uri);
    }
  };

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const register = async () => {
    if (isValidForm()) {
      try {
        const apiResponse = await RegisterAuthUseCase(values);
        if (apiResponse.success) {
          const userId = apiResponse.data?.id; // Obtener el ID del usuario registrado
          if (userId && selectedRoleId) {
            console.log(`User ID: ${userId}, Role ID: ${selectedRoleId}`);
            // Realizar la asignación del rol al usuario
            const assignUserRoleUseCase = new AssignUserRoleUseCase(
              new UserRoleRepositoryImpl()
            );
            await assignUserRoleUseCase.execute(userId, selectedRoleId);
            setErrorMessage("Registration successful");
          } else {
            throw new Error("User ID or selected role ID is missing");
          }
        } else {
          setErrorMessage(apiResponse.message);
        }
      } catch (error) {
        console.error("Error registering user:", error);
        setErrorMessage(
          "An error occurred while registering. Please try again."
        );
      }
    }
  };

  const isValidForm = (): boolean => {
    if (!values.full_name) {
      setErrorMessage("Fullname can't be empty");
      return false;
    }
    if (!values.email) {
      setErrorMessage("Email can't be empty");
      return false;
    }
    if (!values.numero) {
      setErrorMessage("Number can't be empty");
      return false;
    }
    if (isNaN(Number(values.numero))) {
      setErrorMessage("Please enter a valid number");
      return false;
    }
    if (!values.password || values.password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long");
      return false;
    }
    if (values.password !== values.confirmPassword) {
      setErrorMessage("The passwords are not equal");
      return false;
    }
    if (!selectedRoleId) {
      setErrorMessage("Please select a role");
      return false;
    }
    return true;
  };

  return {
    ...values,
    roles,
    selectedRoleId,
    setSelectedRoleId,
    onChange,
    register,
    errorMessage,
    pickImage,
  };
};

export default useViewModel;
