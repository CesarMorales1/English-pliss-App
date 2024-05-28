import React, { useEffect, useState } from "react";
import { ApiIngles } from "../../../../Data/apiIngles";
import { RegisterAuthUseCase } from "../../../../Domain/useCase/auth/registerAuth";
import { RegisterWithImageUseCase } from "../../../../Domain/useCase/auth/registerWithImageAuth";
import * as ImagePicker from "expo-image-picker";
import { saveUserLocalUseCase } from "../../../../Domain/useCase/userLocal/saveUserLocal";
import { useUserLocal } from "../../../hooks/useUserLocal";
import { Role } from "../../../../Domain/entities/Role";
import { RoleRepositoryImplement } from "../../../../Data/repositories/RoleRepositoryImplement";
import { GetRolesUseCase } from "../../../../Domain/useCase/auth/GetRolesUseCase";
import { Teacher } from "../../../../Domain/entities/Teacher";
import { Course } from "../../../../Domain/entities/Course";

const staticTeachers: Teacher[] = [
  { id_teacher: 1, name_teacher: "Profesor A" },
  { id_teacher: 2, name_teacher: "Profesor B" },
];

const staticCourses: Course[] = [
  { id_course: 1, name_course: "Curso 1" },
  { id_course: 2, name_course: "Curso 2" },
  { id_course: 3, name_course: "Curso 3" },
];
const UpdateProfileViewModel = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [values, setValues] = useState({
    full_name: "",
    email: "",
    numero: "",
    password: "",
    image: "",
    confirmPassword: "",
    id_rol: null, // Agregar id_rol al estado
  });

  const [loadingElement, setloadingElement] = useState(false);
  const [file, setFile] = useState<ImagePicker.ImagePickerAsset>();
  const { user, getUserSession } = useUserLocal();
  const [roles, setRoles] = useState<Role[]>([]);
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const roleRepository = new RoleRepositoryImplement();
        const getRolesUseCase = new GetRolesUseCase(roleRepository);
        const roles = await getRolesUseCase.execute();
        setRoles(roles);
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    };
    fetchRoles();
  }, []);

  useEffect(() => {
    if (values.id_rol === 1) {
      // Si el rol es Profesor
      setTeachers(staticTeachers);
      setCourses(staticCourses);
    } else {
      setTeachers([]);
      setCourses([]);
    }
  }, [values.id_rol]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
      base64: true,
    });

    if (!result.canceled) {
      onChange("image", result.assets[0].uri);
      setFile(result.assets[0]);
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
      setFile(result.assets[0]);
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
    if (isValidForm()) {
      setloadingElement(true);
      const apiResponse = await RegisterWithImageUseCase(values, file!);
      setloadingElement(false);
      if (apiResponse.success) {
        console.log("Aqui la respuesta de la api", apiResponse.data);
        await saveUserLocalUseCase(apiResponse.data);
        getUserSession();
      } else {
        setErrorMessage(JSON.stringify(apiResponse.respuesta));
      }
    }
  };

  const isValidForm = (): boolean => {
    if (!values.full_name) {
      setErrorMessage("Fullname can't be empty");
      return false;
    }
    if (isNaN(Number(values.numero)) || !values.numero) {
      setErrorMessage("Please enter a valid Number");
      return false;
    }
    if (!values.password || !values.confirmPassword) {
      setErrorMessage("Password can't be empty");
      return false;
    }
    if (values.password !== values.confirmPassword) {
      setErrorMessage("The passwords are not equal");
      return false;
    }
    if (!values.email) {
      setErrorMessage("email can't be empty");
      return false;
    }
    if (!values.image) {
      setErrorMessage("Selecciona una imagen");
      return false;
    }
    if (!values.id_rol) {
      setErrorMessage("Selecciona un rol");
      return false;
    }
    return true;
  };

  return {
    ...values,
    roles,
    onChange,
    onChangeInfoUpdate,
    register,
    errorMessage,
    pickImage,
    takePhoto,
    user,
    teachers,
    courses,
    loadingElement,
  };
};

export default UpdateProfileViewModel;
