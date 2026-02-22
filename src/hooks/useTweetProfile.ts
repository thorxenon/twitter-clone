import { useCallback, useState } from "react"
import apiClient from "@/apis/twitter-api";
import { tweetUserProfileService } from "@/services/tweet-user-profile";

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

export const useTweetProfile = () => {
    const [ tweets, setTweets ] = useState<Tweet[] | null>(null);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState<string | null>(null);

    const fetchTweets = useCallback(async (slug: string) => {
        try{
            setLoading(true);
            const response = await tweetUserProfileService(slug);

            if(response.status !== 200){
                setError("Failed to fetch tweets");
                setTweets(null);
                setLoading(false);
            }

            setError(null);
            setTweets(response.data);
            setLoading(false);
        }catch(error){
            setError("Failed to fetch user profile data "+ error);
            setLoading(false);
            setTweets(null);
        }
    },[]);

    return{
        tweets,
        loading,
        error,
        fetchTweets
    }
}