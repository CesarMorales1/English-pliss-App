// userHasRole.repository.ts

import { UserHasRole } from "../entities/userHasRole";

export interface UserHasRoleRepository {
  createUserHasRole(userHasRole: UserHasRole): Promise<void>;
}
