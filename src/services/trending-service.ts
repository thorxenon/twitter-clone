import apiClient from "@/apis/twitter-api";

export const trendingsService = async () =>{
    try{
        const request = await apiClient.get('/trends');

        return{
            status: request.status,
            data: request.data
        }
    }catch(error){
        throw new Error("Failed to fetch trendings: " + error);
    }
}