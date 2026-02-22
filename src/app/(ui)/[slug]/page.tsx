"use client";

import { ProfileFeed } from "@/components/profile/profile-feed";
import { Button } from "@/components/ui/Button";
import { GeneralHeader } from "@/components/ui/general-header";
import { useUser } from "@/contexts/user-context";
import { useUserProfile } from "@/hooks/useUserProfile";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect } from "react";

export default function Page({ params: { slug } }: { params: { slug: string } }) {
    const { userInfo } = useUser();
    const { userProfileData, loading, error, fecthUserProfileData } = useUserProfile();
    const isMe = slug === userInfo?.slug;

    useEffect(() =>{
        fecthUserProfileData(slug);
    },[slug]);

    return(
        <div>
            <GeneralHeader backHrf="/">
                <div className="font-bold text-lg">{userInfo?.name}</div>
                <div className="text-xs">{userProfileData?.tweetCount} {userProfileData?.tweetCount ?  userProfileData?.tweetCount > 1 ? "posts" : "post" : "Você ainda não tem nenhum post"}</div>
            </GeneralHeader>
            <section className="border-b-2 border-gray-900">
                <div
                    className="bg-gray-500 h-28 bg-no-repeat bg-cover bg-center"
                    style={{ backgroundImage: `url(${userProfileData?.cover})` }}
                ></div>
                <div className="flex justify-between items-end">
                    <img src={userProfileData?.avatar} alt={userProfileData?.name} className="-mt-12 size-24 rounded-full"/>
                    <div className="w-32">
                        {isMe ? (
                            <Link href={`/${userProfileData?.slug}/edit`}>
                                <Button size={2} label="Editar Perfil" />
                            </Link>
                            
                        ): (
                            <Button size={2} label="Seguir" />
                        )}
                    </div>
                </div>
                    
                <div className="px-6 mt-4">
                    <div className="text-xl font-bold">{userProfileData?.name}</div>
                    <div className="text-gray-500">@{userProfileData?.slug}</div>
                    <div className="py-5 text-lg text-gray-500">{userProfileData?.bio}</div>

                    {userProfileData?.link && (
                        <div className="flex gap-2 items-center">
                            <FontAwesomeIcon icon={faLink} className="size-5"/>
                            <Link className="text-blue-300" target="_blank" href={userProfileData?.link}>{userProfileData?.link}</Link>
                        </div>
                    )}

                    <div className="my-5 flex gap-6">
                        <div className="text-xl text-gray-500"><span className="text-white">{userProfileData?.following}</span> Seguindo</div>
                        <div className="text-xl text-gray-500"><span className="text-white">{userProfileData?.followers}</span> Seguindores</div>
                    </div>
                </div>
                
            </section>

            <ProfileFeed slug={slug}/>
        </div>
    )
}