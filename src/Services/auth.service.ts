import { Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import api from 'src/Services/api';


@Injectable()
export class AuthService {
    


    async token(username: string, password: string) {
        return api.post(
        `autenticacao/token`, {
        username: username,
        password: password
        }).then(response=> {
            return response.data;
        }).catch(error=> {
            console.log(error.toJSON());
            if (error?.response?.status == 401) {
                throw new UnauthorizedException();
            }
            throw new InternalServerErrorException();
        });
    }
      
}