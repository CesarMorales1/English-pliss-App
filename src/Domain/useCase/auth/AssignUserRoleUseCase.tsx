// AssignUserRoleUseCase.ts

import { UserRoleRepository } from "../../repositories/UserRoleRepository";

export class AssignUserRoleUseCase {
  constructor(private userRepository: UserRoleRepository) {}

  async execute(userId: number, roleId: number): Promise<void> {
    await this.userRepository.assignUserRole(userId, roleId);
  }
}
