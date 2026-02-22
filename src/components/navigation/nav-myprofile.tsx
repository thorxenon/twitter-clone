"use client"

import Link from "next/link"
import { useEffect } from "react";
import { useUser } from "@/contexts/user-context";
import { userService } from "@/services/user-service";

type UserInfoProps = {
    userInfoData:{
        slug: string;
        name: string;
        role: {
            name: string;
        },
        avatar: string;
    }
}

export const NavMyProfile = () =>{

    const { userInfo, setError, setUserData, setLoading, loading } = useUser();

    useEffect(() =>{
        const getUserInfo = async() =>{
            try{
                const response = await userService();
                setLoading(true);

                if(response.status !== 200){
                    setError('Erro ao buscar informações do usuário');
                    setLoading(false);
                    throw new Error('Erro ao buscar informações do usuário');
                }

                setLoading(false);
                setUserData(response.data);
                setError(null);
            }catch(error: any){
                setError(error);
                console.error("Erro ao buscar informações do usuário:", error);
            }
        }

        getUserInfo();
    }), [setError, setLoading, setUserData];


    return(
        <div className="flex items-center">
            {loading && <div className="w-4 h-4 border-t-2 border-r-2 border-blue-500 rounded-full animate-spin mr-2"></div>}

            {!loading && userInfo && (
                <>
                    <div className="size-10 mr-2 rounded-full overflow-hidden">
                        <Link href={`/${userInfo.slug}`}>
                            <img src={userInfo.avatar} alt={userInfo.name} className="size-full"/>
                        </Link>
                    </div>

                    <div className="flex-1 overflow-hidden">
                        <Link href={`/${userInfo.slug}`} className="block truncate">
                            {userInfo.name}
                        </Link>

                        <div className="text-sm text-gray-400 block truncate">@{userInfo.slug}</div>
                    </div>
                </>
            )}
        </div>
    )
}