import { Role } from "../../entities/Role";
import { RoleRepository } from "../../repositories/RoleRepository";

export class GetRolesUseCase {
  private roleRepository: RoleRepository;

  constructor(roleRepository: RoleRepository) {
    this.roleRepository = roleRepository;
  }

  async execute(): Promise<Role[]> {
    return await this.roleRepository.getRoles();
  }
}
