"use client"

import { User } from "@/app/types/User"
import Link from "next/link"
import { Button } from "./Button"
import { useState } from "react"

type Props={
    user:User
}

export const RecommendationItem = ({ user }: Props) =>{

    const [ following, setFollowing ] = useState(false);

    const handleFollowBtn = () =>{
        setFollowing(true);
    }

    return(
        <div className="flex items-center">
            <div className="size-10 mr-2 rounded-full overflow-hidden">
                <Link href={`/${user.nickname}`}>
                    <img src={user.avatar} alt={user.name} />
                </Link>
            </div>

            <div className="flex-1 overflow-hidden">
                <Link
                    href={`/${user.nickname}`}
                    className="block truncate"
                >
                    {user.name}
                </Link>
                <div className="truncate text-sm text-gray-400">
                    @{user.nickname}
                </div>
            </div>
            <div className="pl-2 w-20">
                {!following &&
                    <Button
                    label="seguir"
                    onClick={handleFollowBtn}
                    size={3}
                />
                }
            </div>
        </div>
    )
};

export const RecommendationSkeleton = () =>{
    return(
        <div className="flex items-center animate-pulse">
            <div className="size-10 rounded-full mr-2 bg-gray-600 transition"></div>
            <div className="flex-1 flex flex-col gap-1">
                <div className="bg-gray-600 w-3/4 h-4"></div>
                <div className="bg-gray-600 w-1/4 h-4"></div>
            </div>
        </div>
    )
}