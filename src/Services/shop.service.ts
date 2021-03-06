import { response } from 'express';
import { Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import api from 'src/Services/api';



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
    async getShopPeriod(filter) {
        
        return api.post(
        `lojas/periodos`, filter).then(response=> {
            
            return response.data;
        }).catch(error=> {
            throw error;
        });
    }
      
}