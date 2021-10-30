import axios from "axios"
import * as https  from 'https'

const api = axios.create({
    baseURL: 'https://tecnica.homolog.ituran.com.br/api',
    httpsAgent: new https.Agent({  
        rejectUnauthorized: false
      })
});

export function setAuthorizationHeader(token: string){
    api.defaults.headers['Authorization'] = `${token}`
};

export default api;