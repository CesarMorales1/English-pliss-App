// userHasRoleUseCase.ts

import { UserHasRoleRepositoryImplement } from "../../../Data/repositories/UserHasRoleRepositoryImpl";
import { UserHasRole } from "../../entities/userHasRole";

const userHasRoleRepository = new UserHasRoleRepositoryImplement();

const createUserHasRole = async (userHasRole: UserHasRole) => {
  try {
    return await userHasRoleRepository.createUserHasRole(userHasRole);
  } catch (error) {
    throw new Error("Error creating user role association: " + error);
  }
};

export default createUserHasRole; // Exporta la función como valor predeterminado
