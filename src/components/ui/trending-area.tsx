"use client"

import { useEffect } from "react"
import { TrendingItem, TrendingItemSkeleton } from "./trending-item"
import { useTrendings } from "@/hooks/useTrending"

export const TrendingArea = () =>{
    const { trendings, error, loading, getTrendings } = useTrendings();

    useEffect(() => {
        getTrendings();
    }, [getTrendings]);
    
    return(
        <div className="bg-gray-700 rounded-3xl">
            <h2 className="text-xl p-6 ">Oque está acontecendo</h2>

            <div className="flex flex-col gap-4 p-6 pt-0">
                {trendings && trendings.map((trending: any, index: number) => (
                    <TrendingItem key={index} label={trending.hashtag} count={trending.count}/>
                ))}

                {!trendings && loading && (
                    <>
                        <TrendingItemSkeleton/>
                        <TrendingItemSkeleton/>
                        <TrendingItemSkeleton/>
                        <TrendingItemSkeleton/>
                    </>
                )}
            </div>
        </div>
    )
}