import React, { useEffect, useState } from "react";
import { Role } from "../../../Domain/entities/Role";
import { RoleRepositoryImplement } from "../../../Data/repositories/RoleRepositoryImplement";
import { GetRolesUseCase } from "../../../Domain/useCase/auth/GetRolesUseCase";
import { User } from "../../../Domain/entities/User";
import { GetUsersUseCase } from "../../../Domain/useCase/auth/GetUsersUseCase";
import { UserLocalRepositoryImpl } from "../../../Data/repositories/UserLocalRepository";
import { UserHasRoleRepositoryImplement } from "../../../Data/repositories/UserHasRoleRepositoryImpl";
import createUserHasRole from "../../../Domain/useCase/auth/userHasRoleUseCase";

import { UserHasRole } from "../../../Domain/entities/userHasRole";

const RolesViewModel = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [roles, setRoles] = useState<Role[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchRolesAndUsers = async () => {
      try {
        const roleRepository = new RoleRepositoryImplement();
        const getRolesUseCase = new GetRolesUseCase(roleRepository);
        const roles = await getRolesUseCase.execute();
        setRoles(roles);

        const userRepository = new UserLocalRepositoryImpl();
        const getUsersUseCase = new GetUsersUseCase(userRepository);
        const users = await getUsersUseCase.execute();
        setUsers(users);
      } catch (error) {
        console.error("Error fetching roles or users:", error);
        setErrorMessage("Error fetching roles or users");
      }
    };
    fetchRolesAndUsers();
  }, []);

  const onChange = (property: string, value: any) => {
    if (property === "selectedRole") {
      setSelectedRole(value);
    } else if (property === "selectedUser") {
      setSelectedUser(value);
    }
  };

  const register = async () => {
    if (selectedRole && selectedUser) {
      console.log("Selected Role ID:", selectedRole);
      console.log("Selected User ID:", selectedUser);
      try {
        const userHasRole: UserHasRole = {
          id: "", // Si se genera automáticamente en la base de datos, puede ser un string vacío
          id_user: selectedUser,
          id_rol: selectedRole,
        };

        await createUserHasRole(userHasRole); // Utiliza la función directamente

        setErrorMessage("");
        console.log("Asociación usuario-rol registrada exitosamente");
      } catch (error) {
        console.error("Error al registrar la asociación usuario-rol:", error);
        setErrorMessage("Error al registrar la asociación usuario-rol");
      }
    } else {
      setErrorMessage("Please select both a role and a user");
    }
  };

  return {
    roles,
    users,
    selectedRole,
    selectedUser,
    onChange,
    register,
    errorMessage,
  };
};

export default RolesViewModel;
