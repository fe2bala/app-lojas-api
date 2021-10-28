import { ScheduleService } from 'src/Services/schedule.service';
import { Body, Controller, Request, Post } from '@nestjs/common';
import { setAuthorizationHeader } from 'src/Services/api';


@Controller()
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Post('schedule')
  async Search(@Request() req, @Body() filterDto) {
    
    setAuthorizationHeader(req.headers['authorization'])
    console.log(filterDto)
    return await this.scheduleService.search(filterDto);
  }
  @Post('schedule/status')
  async GetStatus(@Request() req) {
    
    setAuthorizationHeader(req.headers['authorization'])
    return await this.scheduleService.getStatus();
  }
}