import { Module } from '@nestjs/common';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { AuthController } from 'src/Controllers/auth.controller'
import { ShopController } from 'src/Controllers/shop.controller';
import { ScheduleController } from 'src/Controllers/schedule.controller';
import { AuthService } from 'src/Services/auth.service';
import { ShopService } from 'src/Services/shop.service';
import { ScheduleService } from 'src/Services/schedule.service';

@Module({
  imports: [],
  controllers: [AppController, AuthController, ShopController, ScheduleController],
  providers: [AppService, AuthService, ShopService, ScheduleService],
})
export class AppModule {}
