import apiClient from "@/apis/twitter-api";

export const likeService = async(tweeId: number) =>{
    try{
        const request = await apiClient.post(`/tweets/${tweeId}/like`);

        return{
            data: request.data,
            status: request.status
        }
    }catch(error){
        console.error("Error liking the tweet:", error);
        throw error;
    }
}