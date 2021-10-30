import { Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import api from 'src/Services/api';
import { JSEncrypt } from 'nodejs-jsencrypt';

@Injectable()
export class AuthService {
    
    private _jsEncrypt: JSEncrypt;

    get JSEncrypt(): JSEncrypt {
        if (this._jsEncrypt) {
          return this._jsEncrypt;
        }
        this._jsEncrypt = new JSEncrypt();
        this._jsEncrypt.setPublicKey('MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDVTUS+4BhoQ/s4ukE/8Hu1n4UK9UbRNnrsSxfkiagb5oSzVnt3igDJSz8JH18pYrkL40pEaGqqxIaDozJke8APiHJRzn8FS9psH2PfdTnsmXGGuQfnrlSjYHBIsmghX2uLSoSy4NgPOgitUsjLPrSsCPsyT14LA0vc+UbVG7J8zQIDAQAB');
        return this._jsEncrypt;
    }

    async token(username: string, password: string) {
        return api.post(
        `autenticacao/token`, {
            username: this.JSEncrypt.encrypt(username),
            password: this.JSEncrypt.encrypt(password)
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