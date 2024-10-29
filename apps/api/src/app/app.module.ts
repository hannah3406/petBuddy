import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { configuration } from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 전역으로 설정하여 어디서나 사용 가능
      load: [configuration], // configuration 함수 로드
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
