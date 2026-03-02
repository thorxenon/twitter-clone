"use client";

import { useEffect } from "react";
import { TweetItem } from "../tweet/tweet-item";
import { useFeed } from "@/hooks/useFeed";

export const HomeFeed = () => {
  const { feed, loading, error, getFeed } = useFeed();

  useEffect(() => {
    getFeed();
  }, [getFeed]);

  if (loading) {
    return <div className="p-4 text-center">Carregando feed...</div>;
  }

  if (error) {
    return <div className="p-4 text-center text-red-500">{error}</div>;
  }

  return (
    <div>
      {(!feed || !feed.tweets || feed.tweets.length === 0) ? (
        <div className="p-4 text-center text-zinc-500">Nenhum tweet encontrado.</div>
      ) : (
        feed.tweets.map((tweet) => (
          <div key={tweet.id}>
            <TweetItem key={tweet.id} tweet={tweet} />
          </div>
        ))
      )}
    </div>
  );
};