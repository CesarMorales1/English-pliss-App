import { Role } from "../../Domain/entities/Role";
import { RoleRepository } from "../../Domain/repositories/RoleRepository";
import { ApiIngles } from "../apiIngles";
import { AxiosError } from "axios";

export class RoleRepositoryImplement implements RoleRepository {
  async getRoles(): Promise<Role[]> {
    try {
      const response = await ApiIngles.get<Role[]>("/rol");
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log(`Error: ${JSON.stringify(e.response?.data)}`);
      return Promise.reject(e.response?.data);
    }
  }
}
