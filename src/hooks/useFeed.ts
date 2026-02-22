import { feedService } from "@/services/feed-service";
import { useCallback, useState } from "react"

type Tweet = {
    id: number;
        user:{
            slug: string;
            avatar: string;
            name: string
        };
        body: string;
        image: string | null;
        createdAt: string;
        likes: any[];
}

type FeedDataProps = {
    tweets: Tweet[];
    page: number;
}

export const useFeed = () =>{

    const [ feed, setFeed ] = useState<FeedDataProps | null>(null);
    const [ loading, setLoading ] = useState<boolean>(false);
    const [ error, setError ] = useState<string | null>(null);

    const getFeed = useCallback(async() =>{
        try{
            setLoading(true);
            const response = await feedService();

            if(response.status !== 200){
                setLoading(false);
                setFeed(null);
                setError("Failed to fetch feed");
            }

            setFeed(response.data);
            setError(null);
            setLoading(false);
        }catch(error){
            setError("Failed to fetch feed");
        }
    },[]);

    return{
        feed,
        loading,
        error,
        getFeed
    }
}