"use client"

import Link from "next/link"
import { useEffect } from "react";
import { useUser } from "@/contexts/user-context";
import { userService } from "@/services/user-service";
import { Spinner } from "../ui/spinner";

export const NavMyProfile = () =>{

    const { userInfo, setError, setUserData, setLoading, loading } = useUser();

    useEffect(() =>{
        const getUserInfo = async() =>{
            if (!userInfo) {
                try{
                    setLoading(true);
                    const response = await userService();

                    if(response.status !== 200){
                        setError('Erro ao buscar informações do usuário');
                        throw new Error('Erro ao buscar informações do usuário');
                    }

                    setUserData(response.data);
                    setError(null);
                }catch(error: any){
                    setError(error.message);
                    console.error("Erro ao buscar informações do usuário:", error);
                } finally {
                    setLoading(false);
                }
            }
        }

        getUserInfo();
    }, [userInfo, setUserData, setError, setLoading]);


    return(
        <div className="flex items-center">
            {loading && (
               <Spinner/>
            )}

            {!loading && userInfo && (
                <>
                    <div className="size-10 mr-2 rounded-full overflow-hidden">
                        <Link href={`/${userInfo.slug}`}>
                            <img src={userInfo.avatar} alt={userInfo.name} className="size-full object-cover"/>
                        </Link>
                    </div>

                    <div className="flex-1 overflow-hidden">
                        <Link href={`/${userInfo.slug}`} className="block truncate font-bold">
                            {userInfo.name}
                        </Link>

                        <div className="text-sm text-gray-400 block truncate">@{userInfo.slug}</div>
                    </div>
                </>
            )}
        </div>
    )
}