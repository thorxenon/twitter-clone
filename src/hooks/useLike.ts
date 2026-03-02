import { likeService } from "@/services/like-service";
import { useCallback, useState } from "react"
import { toast } from "sonner";

export const useLike = (tweetId: number, isLikedByUser: boolean) => {
    const [ loading, setLoading ] = useState<boolean>(false);
    const [ error, setError ] = useState<string | null>(null);
    const [ isLiked, setIsLiked ] = useState<boolean>(isLikedByUser);

    const fetchLike = useCallback(async ()=>{
        
        try{
            setLoading(true);
            const response = await  likeService(tweetId);
            if(response.status !== 204){
                toast.error("Error liking the tweet. Please try again.");
                setError("Error liking the tweet. Please try again.");
                setLoading(false);
            }

            setLoading(false);
            setError(null);
            setIsLiked(!isLikedByUser);
        }catch(error){
            console.error("Error liking the tweet:", error);
            toast.error("Error liking the tweet. Please try again.");
        }
    },[tweetId]);


    return{
        fetchLike,
        loading,
        error,
        isLiked
    }
}