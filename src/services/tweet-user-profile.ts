import apiClient from "@/apis/twitter-api";

export const tweetUserProfileService = async(slug: string) =>{
    try{
        const response = await apiClient.get(`/users/${slug}/tweets`);

        return{
            status: response.status,
            data: response.data
        }
    }catch(error){
        throw new Error("Failed to fetch tweets: " + error);
    }
}