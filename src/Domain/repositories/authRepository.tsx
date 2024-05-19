import { ResponseApi } from '../../Data/sources/remote/api/models/responseApi'
import {User} from '../entities/User'
import * as ImagePicker from "expo-image-picker"
export interface AuthRepository
{
    login(email:string, password:string) : Promise<ResponseApi>;
    register(user: User) : Promise<ResponseApi>;
    registerWithImage(user: User,file: ImagePicker.ImagePickerAsset) : Promise<ResponseApi>;
}