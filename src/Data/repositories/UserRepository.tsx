import { AxiosError } from "axios";
import { User } from "../../Domain/entities/User";
import { UserRepository } from "../../Domain/repositories/UserRepository";
import { ApiIngles } from "../apiIngles";
import { ResponseApi } from "../sources/remote/api/models/responseApi";

export class UserRepositoryImpl implements UserRepository {
  async update(user: User, userId: number): Promise<ResponseApi> {
    try {
      const response = await ApiIngles.put<ResponseApi>(
        `/updateUser/${userId}`,
        user
      );
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("ERROR: " + JSON.stringify(e.response?.data));
      const apiError: ResponseApi = JSON.parse(
        JSON.stringify(e.response?.data)
      );
      return Promise.resolve(apiError);
    }
  }
}

/*   async updateWithImage(
    user: User,
    file: ImagePicker.ImagePickerAsset
  ): Promise<ResponseApi> {
    try {
      let data = new FormData();

      // Fetch the Blob from the URI
      const response = await fetch(file.uri);
      const blob = await response.blob();

      // Append the image Blob to the FormData
      data.append("image", blob, file.uri.split("/").pop());

      // Append user data to the FormData
      data.append("user", JSON.stringify(user));

      const apiResponse = await ApiInglesForImage.put<ResponseApi>(
        "/users/update",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      return Promise.resolve(apiResponse.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("ERROR: " + JSON.stringify(e.response?.data));
      const apiError: ResponseApi = JSON.parse(
        JSON.stringify(e.response?.data)
      );
      return Promise.resolve(apiError);
    }
  } */
