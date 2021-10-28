import { ShopService } from 'src/Services/shop.service';
import { Body, Controller, Get,Post,Request } from '@nestjs/common';
import { setAuthorizationHeader } from 'src/Services/api';


@Controller()
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Get('shop')
  async getAll(@Request() req) {
    
    setAuthorizationHeader(req.headers['authorization'])
    return await this.shopService.getAll();
  }
  @Post('shop/period')
  async GetShopPeriod(@Request() req, @Body() filterDto) {
    
    setAuthorizationHeader(req.headers['authorization'])
    console.log(filterDto)
    return await this.shopService.getShopPeriod(filterDto);
  }
}