import { user } from "@/app/data/user";
import { Button } from "@/components/ui/Button";
import { GeneralHeader } from "@/components/ui/general-header";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Page() {
    const isMe = true;

    return(
        <div>
            <GeneralHeader backHrf="/">
                <div className="font-bold text-lg">{user.name}</div>
                <div className="text-xs">{user.postCount} {user.postCount ?  user.postCount > 1 ? "posts" : "post" : "Você ainda não tem nenhum post"}</div>
            </GeneralHeader>
            <section className="border-b-2 border-gray-900">
                <div
                    className="bg-gray-500 h-28 bg-no-repeat bg-cover bg-center"
                    style={{ backgroundImage: `url(${user.cover})` }}
                ></div>
                <div className="flex justify-between items-end">
                    <img src={user.avatar} alt={user.name} className="-mt-12 size-24 rounded-full"/>
                    <div className="w-32">
                        {isMe ? (
                            <Link href={`/${user.nickname}/edit`}>
                                <Button size={2} label="Editar Perfil" />
                            </Link>
                            
                        ): (
                            <Button size={2} label="Seguir" />
                        )}
                    </div>
                </div>
                    
                <div className="px-6 mt-4">
                    <div className="text-xl font-bold">{user.name}</div>
                    <div className="text-gray-500">@{user.nickname}</div>
                    <div className="py-5 text-lg text-gray-500">{user.bio}</div>

                    {user.link && (
                        <div className="flex gap-2 items-center">
                            <FontAwesomeIcon icon={faLink} className="size-5"/>
                            <Link className="text-blue-300" target="_blank" href={user.link}>{user.link}</Link>
                        </div>
                    )}

                    <div className="my-5 flex gap-6">
                        <div className="text-xl text-gray-500"><span className="text-white">99</span> Seguindo</div>
                        <div className="text-xl text-gray-500"><span className="text-white">99</span> Seguindores</div>
                    </div>
                </div>
                
            </section>
        </div>
    )
}