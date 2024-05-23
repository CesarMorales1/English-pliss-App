import { AuthRepositoryImplement } from "../../../Data/repositories/AuthRepository";
import { User } from "../../entities/User";
import * as ImagePicker from "expo-image-picker"

const {registerWithImage} = new AuthRepositoryImplement();

export const  RegisterWithImageUseCase = async(user: User, file: ImagePicker.ImagePickerAsset) =>
{
    return await registerWithImage(user,file);
}