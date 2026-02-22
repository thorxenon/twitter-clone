"use client";

import { user } from "@/app/data/user"
import { RecommendationItem, RecommendationSkeleton } from "./recommendation-item"
import { useEffect } from "react"
import { useSuggestion } from "@/hooks/useSuggestion"

export const RecommendationArea = () =>{
    const { suggestions, loading, error, getSuggestions } = useSuggestion();

    useEffect(() => {
        getSuggestions();
    }, [getSuggestions]);
    
    return(
        <div className="bg-gray-700 rounded-3xl">
            <h2 className="text-xl p-6">Quem seguir</h2>

            <div className="flex flex-col gap-4 p-6 pt-0">
                {!loading && !error && suggestions && suggestions.map((suggestion) =>(
                    <RecommendationItem user={suggestion} />
                ))}
                
                {loading && (
                    <>
                        <RecommendationSkeleton />
                    </>
                )}
                
            </div>
        </div>
    )
}