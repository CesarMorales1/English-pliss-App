import {userLocalInformation} from "../../Domain/repositories/userLocalRepository";
import { localStorage } from "../sources/local/localStorage";
import {User} from "../../Domain/entities/User";

export class UserLocalRepositoryImpl implements userLocalInformation
{
    async saveUserInformation(user: User) : Promise<void>
    {
        const {save} = localStorage();
        await save('user',JSON.stringify(user));
    }

    async getUserInformation(): Promise<User>
    {
        const {getItem} = localStorage();
        const data = await getItem('user');
        return JSON.parse(data as any);
    }

     async removeUser(): Promise<void> {
        const {removeUser} = localStorage();
        await removeUser('user');
    }
}