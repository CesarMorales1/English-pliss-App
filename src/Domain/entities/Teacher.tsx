import { Course } from "./Course";

export type Teacher = {
    id_teacher: Number;
    id_user: string
    full_name: string;
    courses: Course[];
  };
  