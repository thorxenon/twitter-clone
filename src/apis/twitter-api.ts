import axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_TWITTER_API_BASE_URL,
    headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

// const apiClient = setupCache(axiosInstance);

axiosInstance.interceptors.request.use(
    async (config) =>{
        const token = localStorage.getItem('token');
        if(token){
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },
    (error) =>{
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Se a resposta for sucesso, apenas a retorna
    return response;
  },
  (error) => {
    // Exemplo: se o erro for 401, desloga o usuário
    if (error.response && error.response.status === 401) {
      console.log('Usuário não autorizado. Deslogando...');
      // useAuth.getState().logout();
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;