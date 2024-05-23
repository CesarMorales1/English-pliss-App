// Domain/repositories/RoleRepository.ts
import { Role } from "../entities/Role";

export interface RoleRepository {
  getRoles(): Promise<Role[]>;
}
