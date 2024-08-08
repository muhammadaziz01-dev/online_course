import  request  from "../config";

import { Request } from "@interface";


const auth:Request={
    signin: (data)=> request.post("/auth/login",data),
    signup: (data)=> request.post("/auth/register",data),
}


export { auth }