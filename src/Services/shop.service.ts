import { response } from 'express';
import { Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import api from './api';



@Injectable()
export class ShopService {     

    async getAll() {
        
        return api.get(
        `lojas`).then(response=> {
            return response.data;
        }).catch(error=> {
            console.log(error.response)
            if (error?.response?.status == 401) {
                throw new UnauthorizedException();
            }
            throw new InternalServerErrorException();
        });
    }
      
}