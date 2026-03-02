"use client"

import { useLike } from "@/hooks/useLike";
import { formatRelative } from "@/utils/format-relative";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faRetweet, faHeart as faHeartFilled } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";

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
    likeCount: number;
    isLikedByUser: boolean;
    commentsCount: number;
    retweetCount: number;
}

type Props = {
    tweet: Tweet;
    hideComments?: boolean;
}

export const TweetItem = ({ tweet, hideComments }: Props) =>{
    const [ liked, setLiked ] = useState(tweet.isLikedByUser);
    const [ likeCount, setLikeCount ] = useState(tweet.likeCount);
    const { fetchLike } = useLike(tweet.id, tweet.isLikedByUser);

    const handleLikeButton = () =>{
        setLiked(!liked);
        setLikeCount(prev => liked ? prev - 1 : prev + 1);
        fetchLike();
    }

    const handleCommentButton = ()=>{

    }

    const handleRetweetButton = () =>{

    }

    const handleRedirectToTweetIdPage = () =>{
        window.location.href = `/tweet/${tweet.id}`;
    }

    return(
        <div className="flex gap-2 p-6 border-b-2 border-gray-900">
            <div>
                <Link href={`/${tweet.user.slug}`}>
                    <img
                        src={tweet.user.avatar}
                        alt={tweet.user.slug}
                        className="size-10 rounded-full"
                    />
                </Link>
            </div>
            <div className="flex-1">
                <div className="flex-wrap items-center gap-x-3">
                    <div className="font-bold text-lg">
                        <Link href={`/${tweet.user.slug}`}>{tweet.user.slug}</Link>
                    </div>
                    <div className="text-xs text-gray-500">@{tweet.user.slug} - {formatRelative(tweet.createdAt)}</div>
                </div>
                <div onClick={handleRedirectToTweetIdPage} className="py-4 text-lg">{tweet.body}</div>
                {tweet.image && (
                    <div className="w-full">
                        <img
                            src={tweet.image}
                            className="w-full rounded-2xl"
                        />
                    </div>
                )}

                <div
                    className="flex mt-6 text-gray-500"
                >
                    {!hideComments && (
                        <div className="flex-1">
                            <Link href={`/tweet/${tweet.id}`}>
                                <div className="inline-flex items-center gap-2 cursor-pointer" onClick={handleCommentButton}>
                                    <FontAwesomeIcon icon={faComment} className="size-6" />
                                    <div className="">{tweet.commentsCount}</div>
                                </div>
                            </Link>
                        </div>
                    )}
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 cursor-pointer" onClick={handleRetweetButton}>
                            <FontAwesomeIcon icon={faRetweet} className="size-6" />
                            <div className="">{tweet.retweetCount}</div>
                        </div>
                    </div>

                    <div className="flex-1">
                        <div
                            className={`inline-flex items-center gap-2 cursor-pointer ${liked ? 'text-red-400 transition-colors duration-300': 'text-gray-500'}`}
                            onClick={handleLikeButton}
                        >
                            <FontAwesomeIcon icon={liked ? faHeartFilled : faHeart} className="size-6" />
                            <div className="">{likeCount}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}