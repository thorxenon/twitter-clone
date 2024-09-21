"use client"

import Link from "next/link"
import { user } from "@/app/data/user"

export const NavMyProfile = ( ) =>{
    return(
        <div className="flex items-center">
            <div className="size-10 mr-2 rounded-full overflow-hidden">
                <Link href={`/${user.nickname}`}>
                    <img src={user.avatar} alt={user.name} className="size-full"/>
                </Link>
            </div>

            <div className="flex-1 overflow-hidden">
                <Link href={`/${user.nickname}`} className="block truncate">
                    {user.name}
                </Link>

                <div className="text-sm text-gray-400 block truncate">@{user.nickname}</div>
            </div>
        </div>
    )
}