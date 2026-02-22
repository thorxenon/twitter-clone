import { suggestionService } from "@/services/suggestion-service";
import { useCallback, useState } from "react";

export const useSuggestion = () =>{
    const [suggestions, setSuggestions] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const getSuggestions = useCallback(async () =>{
        try{
            setLoading(true);
            const response = await suggestionService();
            
            if(response.status !== 200){
                setError('Erro ao buscar sugestões');
                setLoading(false);
                throw new Error('Erro ao buscar sugestões');
            }

            setSuggestions(response.data);
            setError(null);
            setLoading(false);
        }catch(error){
            setError("Erro ao buscar sugestões: " + error);
        }
    },[]);


    return{
        suggestions,
        loading,
        error,
        getSuggestions
    }
}