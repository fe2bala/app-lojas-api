import { BadRequestException, InternalServerErrorException, MethodNotAllowedException, UnauthorizedException } from "@nestjs/common";
import axios from "axios"
import * as https  from 'https'

const api = axios.create({
    baseURL: 'https://tecnica.homolog.ituran.com.br/api/',
    httpsAgent: new https.Agent({  
        rejectUnauthorized: false
      })
});
api.interceptors.response.use((response) => {
    // Do something with response data
    return response;
  },(error) => {
    // Do something with response error
    const errorJson= error.toJSON()
    console.log(errorJson);
    
    // You can even test for a response code 
    // and try a new request before rejecting the promise
    let errorMessage = '';
    if (errorJson.description && errorJson.status && errorJson.message) {
      // server-side error
      console.log(`Error Code: ${errorJson.status}\nMessage: ${errorJson.message}\nError: ${errorJson.error}`);
      errorMessage = "Falha de conexão com o servidor";
    }
    if ([401].indexOf(errorJson.status) !== -1) {
        throw new UnauthorizedException("Acesso não autorizado.");
    }
  
    if ([400].indexOf(errorJson.status) !== -1) {
      throw new BadRequestException("Erro na requisição.");
    }
  
    if ([405].indexOf(errorJson.status) !== -1) {
      throw new MethodNotAllowedException("Acesso a função não permitido.");
    }
  
    if ([500].indexOf(errorJson.status) !== -1) {
        errorMessage = "Falha na operação."
        if (errorJson.error && errorJson.error.length > 0)
        errorMessage += ` ${errorJson.error}`;

        throw new InternalServerErrorException(errorMessage);
    }
    throw new InternalServerErrorException(errorJson, "Erro no Servidor");
  });

export function setAuthorizationHeader(token: string){
    api.defaults.headers['Authorization'] = `${token}`
};

export default api;