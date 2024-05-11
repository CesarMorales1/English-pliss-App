export interface User
{
    id_user?      : string;
    full_name: string;
    email:     string;
    numero:    string;
    password:  string;
    session_token?: string;
}