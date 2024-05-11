export interface User
{
    id?      : string;
    full_name: string;
    email:     string;
    numero:    string;
    password:  string;
    session_token?: string;
}