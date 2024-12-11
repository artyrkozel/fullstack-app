import { Module } from '@nestjs/common';
import { ConinsService } from './coins.service';
import { ConinsController } from './coins.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule.register({
    timeout: 5000,
    maxRedirects: 5,
    baseURL: 'https://api.coinranking.com/v2',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': 'coinrankinga11477787c556855f29ca63e8de5653944a9fd8f59a4e37d',
    },

  }),],
  controllers: [ConinsController],
  providers: [ConinsService],
})
export class ConinsModule {}
