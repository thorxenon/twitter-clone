import { tweetService } from "@/services/tweet-service";
import { useCallback, useMemo, useState } from "react"

type User = {
    slug: string;
    avatar: string;
    name: string;
}

type Tweet = {
    id: number;
    user: User;
    body: string;
    likes: any[];
    image: string | null;
    createdAt: string;
}

export const useTweet = () => {
    const [tweets, setTweets] = useState<Tweet[] | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const getTweets = useCallback(async(hashtag: string)=>{
        try{
            setLoading(true);
            setError(null);
            const data = await tweetService(hashtag);
            setTweets(data?.data || null);
        }catch(err){
            setError("Failed to fetch tweets");
            setTweets(null);
        } finally {
            setLoading(false);
        }
    },[]);


    return{
        tweets,
        loading,
        error,
        getTweets
    }
}