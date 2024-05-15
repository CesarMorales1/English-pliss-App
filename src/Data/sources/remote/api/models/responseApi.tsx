export interface ResponseApi
{
    message: string;
    success: boolean;
    data?:    any,
    error?:  any,
}

//si quisiera que fuera opcional el tipo seria any