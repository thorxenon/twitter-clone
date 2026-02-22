"use client";

import { useAuth } from "@/contexts/auth-context";
import { useUser } from "@/contexts/user-context";
import { redirect } from "next/navigation";
import { toast } from "sonner";

export default function Page(){
    const { userInfo } = useUser();
    const { logout } = useAuth();

    if(!userInfo){
        toast.info('Deslogando...');

        setTimeout(() =>{
            logout();
            redirect('/login');
        }, 800);
    }
    redirect('/'+userInfo?.slug);
}