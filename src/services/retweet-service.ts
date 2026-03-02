import apiClient from "@/apis/twitter-api";

export const retweetService = async(tweetId: number) =>{
    try{
        const request = await apiClient.post(`/tweets/${tweetId}/retweet`);

        return{
            data: request.data,
            status: request.status
        }
    }catch(error){
        console.error("Error retweeting the tweet:", error);
        throw error;
    }
}