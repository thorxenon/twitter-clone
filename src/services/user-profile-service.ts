import apiClient from "@/apis/twitter-api";

export const userProfileService = async (slug: string) => {
    try{
        const request = await apiClient.get(`/users/${slug}`);

        return{
            status: request.status,
            data: request.data
        }
    }catch(error){
        throw new Error("Failed to fetch user profile data "+ error);
    }
}