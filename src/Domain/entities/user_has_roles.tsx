// UserRepository.ts
export interface UserRepository {
  assignUserRole(userId: number, roleId: number): Promise<void>;
}
