import { User } from "../../entities/User";
import { userLocalInformation } from "../../repositories/userLocalRepository";

export class GetUsersUseCase {
  private userRepository: userLocalInformation;

  constructor(userRepository: userLocalInformation) {
    this.userRepository = userRepository;
  }

  async execute(): Promise<User[]> {
    return await this.userRepository.getUser();
  }
}
