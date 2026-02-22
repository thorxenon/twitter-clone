import apiClient from "@/apis/twitter-api";

export const suggestionService = async () =>{
    try{
        const request = await apiClient.get('/suggestions');

        return{
            status: request.status,
            data: request.data
        }
    }catch(error){
        throw new Error("Failed to fetch suggestions: " + error);
    }
}