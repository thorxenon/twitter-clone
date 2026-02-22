"use client"

import { useAuth } from "@/contexts/auth-context";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const NavLogout = () =>{
    const { logout } = useAuth();

    const router = useRouter();

    const handleClick = () =>{
        toast.success('Você optou por fazer logout.');

        setTimeout(() => {
            logout();
            router.replace('/signin');
        }, 800);
    }

    return(
        <div
            onClick={handleClick}
            className={`
                cursor-pointer
                flex flex-items-center
                gap-6 py-3
                opacity-50
                hover:opacity-100              
            `}
        >
            <FontAwesomeIcon icon={faArrowRightFromBracket} className="size-6"/>
            <div className="text-lg">Sair</div>
        </div>
    );
}

export default NavLogout;