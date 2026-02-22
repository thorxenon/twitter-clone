"use client";

import { TweetItem } from "@/components/tweet/tweet-item";
import { GeneralHeader } from "@/components/ui/general-header";
import { useTweet } from "@/hooks/useTweet";
import { redirect } from "next/navigation";
import { useEffect } from "react";

type Props={
    searchParams: {
        hashtag: string | undefined;
    }
}

export default function Page({ searchParams }: Props) {
    if(!searchParams.hashtag) redirect('/');
    const { tweets, loading, error, getTweets } = useTweet();

    useEffect(()=>{
        getTweets(searchParams.hashtag!);
    },[searchParams.hashtag]);

    return(
        <div>
            <GeneralHeader backHrf="/">
                <h1 className="text-xl font-bold">#{searchParams.hashtag}</h1>
                <p className="text-sm text-gray-500">Posts = {tweets?.length || 0}</p>
            </GeneralHeader>

            <div className="border-t-2 border-gray-500">
                {loading && (
                    <div className="flex items-center justify-center h-32">
                        <p className="text-gray-500">Loading...</p>
                    </div>
                )}
                {!tweets && (
                    <div className="flex items-center justify-center h-32">
                        <p className="text-gray-500">{error || "No tweets found"}</p>
                    </div>
                )}


                {tweets && tweets.map((tweet)=>(
                    <div key={tweet.id}>
                        <TweetItem tweet={tweet}/>
                    </div>
                ))}

            </div>
        </div>
    )
}