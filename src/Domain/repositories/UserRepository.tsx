import { ResponseApi } from "../../Data/sources/remote/api/models/responseApi";
import { User } from "../entities/User";

export interface UserRepository {
  update(user: User, userId: number): Promise<ResponseApi>;
}
