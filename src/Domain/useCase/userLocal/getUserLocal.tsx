import { UserLocalRepositoryImpl } from "../../../Data/repositories/UserLocalRepository";
import { User } from "../../entities/User";

const userRepository = new UserLocalRepositoryImpl();

export const getUserLocalUseCase = async (): Promise<User | null> => {
  return await userRepository.getUserInformation();
};
