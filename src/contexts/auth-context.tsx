import Cookies from 'js-cookie';
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
            const storedToken = Cookies.get('auth_token');
            if(storedToken){
                setToken(storedToken);
            } 
        }
        loadToken();
    },[router, pathname]);

    const login = async (token: string): Promise<void> =>{
        setToken(token);
        Cookies.set('auth_token', token, { expires: 7, path: '/' }); // Expires in 7 days
    }

    const logout = async() => {
        setToken(null);
        Cookies.remove('auth_token');
        localStorage.removeItem('user_info');
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