import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthUse from '../ShardHook/AuthUse';

const axiosCreate = axios.create({
    baseURL: 'http://localhost:5000'
})
const AxiosSecuire = () => {
    const navigate = useNavigate();
    const { signOutUser } = AuthUse()
    axiosCreate.interceptors.request.use((config) => {
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`
        return config
    }, (err) => {
        return Promise.reject(err);
    })
    // interceptors 401 and 402 status
    axiosCreate.interceptors.response.use((response) => {
        return response;
    }, (err) => {
        const status = err.response.status;
        if (status === 401 || status === 403) {
            signOutUser()
            navigate('/login')
        }
       
        return Promise.reject('Status error in the interceptor', status)
    })

    return axiosCreate
};

export default AxiosSecuire;