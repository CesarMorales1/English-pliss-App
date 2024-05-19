import { UserRoleRepository } from "../../Domain/repositories/UserRoleRepository";
import { ApiIngles } from "../apiIngles";

export class UserRoleRepositoryImpl implements UserRoleRepository {
  async assignUserRole(userId: number, roleId: number): Promise<void> {
    try {
      await ApiIngles.post("/user_has_rol", {
        userId: userId,
        roleId: roleId,
      });
    } catch (error) {
      console.error("Error assigning user role:", error);
      throw error; // Re-lanzar el error para que el llamador pueda manejarlo
    }
  }
}
