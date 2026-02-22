import apiClient from '@/apis/twitter-api';

export const feedService = async () => {
  try{
    const request = await apiClient.get('/feed');

    return{
        data: request.data,
        status: request.status
    }
  }catch(error){
    throw new Error("Failed to fetch feed data: " + error);
  }
}