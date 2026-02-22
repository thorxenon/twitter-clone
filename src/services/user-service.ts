import apiClient from "@/apis/twitter-api"

export const userService = async() =>{

    const getUserLoggedInfo = async() =>{
        try{
            const request = await apiClient.get("/users/");
            return request.data;
        }catch(error){
            console.error("Erro ao buscar usuário:", error);
            throw error;
        }
    }

    return{
        getUserLoggedInfo
    }
}