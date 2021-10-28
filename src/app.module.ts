import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './controllers/auth.controller'
import { ShopController } from './Controllers/shop.controller';
import { ScheduleController } from './Controllers/schedule.controller';
import { AuthService } from './Services/auth.service';
import { ShopService } from './Services/shop.service';
import { ScheduleService } from './Services/schedule.service';

@Module({
  imports: [],
  controllers: [AppController, AuthController, ShopController, ScheduleController],
  providers: [AppService, AuthService, ShopService, ScheduleService],
})
export class AppModule {}
