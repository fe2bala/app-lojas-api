import { ShopService } from 'src/Services/shop.service';
import { Controller, Get,Request } from '@nestjs/common';
import { setAuthorizationHeader } from 'src/Services/api';


@Controller()
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Get('shop')
  async getAll(@Request() req) {
    
    setAuthorizationHeader(req.headers['authorization'])
    return await this.shopService.getAll();
  }
}