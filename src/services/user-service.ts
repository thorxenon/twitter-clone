import apiClient from "@/apis/twitter-api"

export const userService = async() =>{
    try{
        const request = await apiClient.get("/users/me");
        return {
            status: request.status,
            data: request.data
        }
    }catch(error){
        console.error("Erro ao buscar usuário:", error);
        throw error;
    }
}