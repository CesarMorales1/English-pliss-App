// UserRoleRepository.ts
export interface UserRoleRepository {
  assignUserRole(userId: number, roleId: number): Promise<void>;
}
