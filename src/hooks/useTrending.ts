import { trendingsService } from "@/services/trending-service";
import { useCallback, useState } from "react";

export const useTrendings = () =>{
    const [trendings, setTrendings] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const getTrendings = useCallback(async() =>{
        try{
            setLoading(true);
            const response = await trendingsService();

            if(response.status !== 200){
                setError("Failed to fetch trendings");
                setLoading(false);
                throw new Error("Failed to fetch trendings");
            }

            setTrendings(response.data);
        }catch(error: any){
            setError(error.message || "Failed to fetch trendings");
        }finally{
            setLoading(false);
        }
    }, []);

    return {
        trendings,
        loading,
        error,
        getTrendings
    }
}