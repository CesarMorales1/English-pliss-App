// UserHasRoleRepositoryImpl.ts

import { AxiosError } from "axios";

import { UserHasRoleRepository } from "../../Domain/repositories/UserHasRoleRepository";
import { ApiIngles } from "../apiIngles";
import { ResponseApi } from "../sources/remote/api/models/responseApi";
import { UserHasRole } from "../../Domain/entities/userHasRole";

export class UserHasRoleRepositoryImplement implements UserHasRoleRepository {
  async createUserHasRole(userHasRole: UserHasRole): Promise<void> {
    try {
      await ApiIngles.post("/user_has_rol", userHasRole);
    } catch (error) {
      let e = error as AxiosError;
      console.log(`Error: ${JSON.stringify(e.response?.data)}`);
      throw new Error("Error creating user has role");
    }
  }
}
