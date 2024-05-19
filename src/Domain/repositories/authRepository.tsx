import { ResponseApi } from "../../Data/sources/remote/api/models/responseApi";
import { User } from "../entities/User";
export interface AuthRepository {
  login(email: string, password: string): Promise<ResponseApi>;
  register(user: User): Promise<ResponseApi>;
}
