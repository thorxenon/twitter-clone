import { useRouter, usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

type UserInfoProps = {
    id: number;
    slug: string;
    name: string;
    role: {
        name: string;
    },
    avatar: string;
}

type AuthContextData = {
    userInfo: UserInfoProps | null;
    loading: boolean;
    setUserData: (userInfo: UserInfoProps | null) => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
    error: string | null;
}

const UserContext = createContext<AuthContextData|undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [ userInfo, setUserInfo ] = useState<UserInfoProps | null>(null);
    const [ loading, setLoading ] = useState<boolean>(true);
    const [ error, setError ] = useState<string | null>(null);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() =>{
        const loadUserInfo = () =>{
            const storedUserInfo = localStorage.getItem('user_info');
            if(storedUserInfo){
                setUserInfo(JSON.parse(storedUserInfo));
            } else {
                setUserInfo(null);
                router.replace("/signin");
            }
        }
        loadUserInfo();
    },[router, pathname]);

    const setUserData = async (userData: UserInfoProps | null): Promise<void> =>{
        try{
            setUserInfo(userData);
            localStorage.setItem('user_info', JSON.stringify(userData));
        }catch(error){
            throw new Error('Erro ao definir dados do usuário: ' + error);
        }
    }


    return(
        <UserContext.Provider
        value={{
            userInfo,
            loading,
            setLoading,
            setError,
            error,
            setUserData,
        }}>
            {children}
        </UserContext.Provider>
    )
};

export const useUser = () =>{
    const context = useContext(UserContext);

    if(!context){
        throw new Error('useUser deve ser usado dentro de um UserProvider');
    }

    return context;
}