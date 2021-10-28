import { response } from 'express';
import { Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import api from 'src/Services/api';



@Injectable()
export class ScheduleService {     

    async search(filter) {
        
        return api.post(
        `agendamento`, filter).then(response=> {
            console.log('response:')
            console.log(response.data)
            
            return response.data;
        }).catch(error=> {
            console.log('error:')
            console.log(error?.status)
            if (error?.response?.status == 401) {
                throw new UnauthorizedException();
            }
            throw new InternalServerErrorException();
        });
    }
      
}