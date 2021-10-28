import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from 'src/Services/auth.service';


@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('token')
  async token(@Body() authDto) {
    return await this.authService.token(authDto.username,authDto.password);
  }
}