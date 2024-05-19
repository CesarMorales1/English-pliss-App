import { Role } from "../../Domain/entities/Role";
import { RoleRepository } from "../../Domain/repositories/RoleRepository";
import { ApiIngles } from "../apiIngles";
import { AxiosError } from "axios";

export class RoleRepositoryImplement implements RoleRepository {
  async getRoles(): Promise<Role[]> {
    try {
      // Realiza una solicitud GET para obtener los roles desde la API
      const response = await ApiIngles.get<Role[]>("/rol");
      // Retorna los datos de roles obtenidos de la respuesta
      return Promise.resolve(response.data);
    } catch (error) {
      // Maneja los errores de la solicitud
      let e = error as AxiosError;
      console.log(`Error: ${JSON.stringify(e.response?.data)}`);
      // Retorna el error para que pueda ser manejado por el llamador
      return Promise.reject(e.response?.data);
    }
  }
}
