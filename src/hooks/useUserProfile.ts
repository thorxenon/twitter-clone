import { userProfileService } from "@/services/user-profile-service";
import { useCallback, useState } from "react";

type UserProfileData = {
     slug: string;
    avatar: string;
    cover: string;
    followers: number;
    following: number;
    bio: string | null;
    link: string | null;
    name: string;
    birth_date: string;
    createdAt: string;
    tweetCount: number;
}

export const useUserProfile = () => {
    const [ userProfileData, setUserProfileData ] = useState<UserProfileData | null>(null);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState<string | null>(null);

    const fecthUserProfileData = useCallback(async (slug: string) => {
        try{
            setLoading(true);
            const response = await userProfileService(slug);

            if(response.status === 200){
                setError(null);
                setUserProfileData(response.data);
                setLoading(false);
            }else{
                setLoading(false);
                setUserProfileData(null);
                setError("Failed to fetch user profile data");
            }
        }catch(error){
            setError("Failed to fetch user profile data "+ error);
            setLoading(false);
            setUserProfileData(null);
        }
    },[]);

    return{
        userProfileData,
        loading,
        error,
        fecthUserProfileData
    }
}