import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { OneTimeLinkService } from './one-time-link.service';
import { CreateLinkDto } from './dto/create-link.dto';

@Controller('one-time-link')
export class OneTimeLinkController {
  constructor(private readonly oneTimeLinkService: OneTimeLinkService) { }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() createLinkDto: CreateLinkDto): Promise<{ id: string }> {
    const id = await this.oneTimeLinkService.create(createLinkDto);
    return { id };
  }

  @Get(':id')
  async getLinkValue(@Param('id') id: string): Promise<{ value: string }> {
    const value = await this.oneTimeLinkService.getLinkValue(id);
    return { value };
  }
}
