import { retweetService } from "@/services/retweet-service";
import { useCallback } from "react"

export const useRetweet = (tweetId: number) =>{
    const fetchLike = useCallback(async() =>{
        try {
            const response = await retweetService(tweetId);
        } catch (error) {
            
        }
    },[tweetId]);
}