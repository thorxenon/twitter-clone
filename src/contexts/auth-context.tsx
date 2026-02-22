import { useRouter, usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

type AuthContextData = {
    token: string | null;
    login: (token: string) => void;
    logout: () => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
    error: string | null;
    isLoggedIn: boolean;
}

const AuthContext = createContext<AuthContextData|undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [ token, setToken ] = useState<string | null>(null);
    const [ loading, setLoading ] = useState<boolean>(true);
    const [ error, setError ] = useState<string | null>(null);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() =>{
        const loadToken = () =>{
            const storedToken = localStorage.getItem('token');
            if(storedToken){
                setToken(storedToken);
                if(pathname === '/signin'){
                    router.replace('/home');
                }

                if(pathname === '/signup'){
                    router.replace('/home');
                }
            } else {
                router.replace("/signin");
            }
            setLoading(false);
        }
        loadToken();
    },[router, pathname]);

    const login = async (token: string): Promise<void> =>{
        try{
            setToken(token);
            localStorage.setItem('token', token);
        }catch(error){

        }
    }

    const logout = async() => {
        try{
            setToken(null);
            localStorage.removeItem('token');
        }catch(error){
            throw new Error('Erro ao fazer login'+ error);
        }
    }


    return(
        <AuthContext.Provider
        value={{
            isLoggedIn: !!token,
            token,
            login,
            setLoading,
            setError,
            error,
            loading,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () =>{
    const context = useContext(AuthContext);

    if(!context){
        throw new Error('useAuth deve ser usado dentro de um AuthProvider');
    }

    return context;
}