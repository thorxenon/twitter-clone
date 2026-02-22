import apiClient from  "@/apis/twitter-api";


export const tweetService = async (hashtag: string)=>{
    try{
        if(!hashtag) return;

        const request = await apiClient.get(`/tweets?hashtag=${hashtag}`);
        return{
            data: request.data,
            status: request.status
        }
    }catch(err){
        throw new Error("Error fetching tweets");
    }
}