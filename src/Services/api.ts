import axios from "axios"
import * as https  from 'https'

const api = axios.create({
    baseURL: 'https://apps.homolog.ituran.com.br/tecnica/',
    httpsAgent: new https.Agent({  
        rejectUnauthorized: false
      })
});

export function setAuthorizationHeader(token: string){
    api.defaults.headers['Authorization'] = `${token}`
};

export default api;