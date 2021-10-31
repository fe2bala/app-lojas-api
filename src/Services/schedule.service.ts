import { response } from 'express';
import { Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import api from 'src/Services/api';



@Injectable()
export class ScheduleService {     

    async search(filter) {
        
        return api.post(
        `agendamento`, filter).then(response=> {
            
            return response.data;
        }).catch(error=> {
            throw error
        });
    }
    async getStatus() {
        
        return api.get(
        `agendamento/status`).then(response=> {
            
            return response.data;
        }).catch(error=> {
            throw error;
        });
    }
    
      
}