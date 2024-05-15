import { User } from "../entities/User"
export interface userLocalInformation
{
    saveUserInformation(user: User): Promise<void>;
    getUserInformation() : Promise<User>;
    removeUser() : Promise<void>;
}