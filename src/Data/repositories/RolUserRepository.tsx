/* RolUserRepository.tsx */
import { ResponseApi } from "../../Data/sources/remote/api/models/responseApi";
import { ApiIngles } from "../../Data/apiIngles";

export class UserRoleRepository {
  async assignUserRole(userId: number, roleId: number): Promise<ResponseApi> {
    try {
      // Realiza la solicitud al backend para asignar el rol al usuario
      const response = await ApiIngles.post("/user_has_rol", {
        userId: userId,
        roleId: roleId,
      });
      return Promise.resolve(response.data);
    } catch (error) {
      // Manejo de errores
      return Promise.reject(error);
    }
  }
}
