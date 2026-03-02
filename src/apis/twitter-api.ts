import axios from 'axios';
import Cookies from 'js-cookie';

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_TWITTER_API_BASE_URL,
    headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

axiosInstance.interceptors.request.use(
    async (config) =>{
        const token = Cookies.get('auth_token');
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
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log('Usuário não autorizado. Deslogando...');
      Cookies.remove('auth_token');
      Cookies.remove('user_info');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;