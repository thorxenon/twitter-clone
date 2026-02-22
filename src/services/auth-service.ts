import { loginSchema } from "@/schemas/login-schema";
import apiClient from "@/apis/twitter-api";

export const loginService = async(slug: string, password: string) =>{
    if(!slug || !password){
        throw new Error('Slug e senha são obrigatórios');
    }
   try{
    const request = await apiClient.post("/auth/login", { slug, password });

    return{
        data: request.data,
        status: request.status
    }
   }catch(error){
    console.error("Erro no login:", error);
    throw error;
   }
}