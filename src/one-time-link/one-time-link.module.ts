import { Module } from '@nestjs/common';
import { OneTimeLinkService } from './one-time-link.service';
import { OneTimeLinkController } from './one-time-link.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OneTimeLink } from './one-time-link.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OneTimeLink])],
  providers: [OneTimeLinkService],
  controllers: [OneTimeLinkController],
})
export class OneTimeLinkModule { }
