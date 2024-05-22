import { userLocalInformation } from "../../Domain/repositories/userLocalRepository";
import { localStorage } from "../sources/local/localStorage";
import { User } from "../../Domain/entities/User";
import { ApiIngles } from "../apiIngles";
import { AxiosError } from "axios";

export class UserLocalRepositoryImpl implements userLocalInformation {
  async saveUserInformation(user: User): Promise<void> {
    const { save } = localStorage();
    await save("user", JSON.stringify(user));
  }

  async getUserInformation(): Promise<User> {
    const { getItem } = localStorage();
    const data = await getItem("user");
    return JSON.parse(data as any);
  }

  async removeUser(): Promise<void> {
    const { removeUser } = localStorage();
    await removeUser("user");
  }

  async getUser(): Promise<User[]> {
    try {
      const response = await ApiIngles.get<User[]>("/usersget");
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log(`Error: ${JSON.stringify(e.response?.data)}`);
      return Promise.reject(e.response?.data);
    }
  }
}
