"use client";

import { tweet } from "@/app/data/tweet";
import { TweetItem } from "../tweet/tweet-item";
import { useEffect } from "react";
import { useTweetProfile } from "@/hooks/useTweetProfile";
import { Spinner } from "../ui/spinner";

export const ProfileFeed = ({ slug }: { slug: string }) =>{
    const { tweets, loading, error, fetchTweets } = useTweetProfile();

    useEffect(()=>{
        fetchTweets(slug);
    },[slug]);


    return(
        <div>
            {tweets && tweets.map((tweet)=>(
                <>
                    <TweetItem tweet={tweet}/>
                </>
            ))}

            {loading && (
                <Spinner/>
            )}

            {tweets && tweets.length === 0 &&(
                <div className="text-center text-gray-500 py-10">Nenhum post encontrado</div>
            )}

            {!tweets && !error && !loading && (
                <div className="text-center text-gray-500 py-10">Nenhum post encontrado</div>
            )}
        </div>
    );
}