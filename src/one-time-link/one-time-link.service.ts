import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OneTimeLink } from './one-time-link.entity';
import { CreateLinkDto } from './dto/create-link.dto';

@Injectable()
export class OneTimeLinkService {
  constructor(
    @InjectRepository(OneTimeLink)
    private oneTimeLinkRepository: Repository<OneTimeLink>,
  ) { }

  async create(createLinkDto: CreateLinkDto): Promise<string> {
    const { value } = createLinkDto;
    const link = this.oneTimeLinkRepository.create({ value });
    await this.oneTimeLinkRepository.save(link);
    return link.id;
  }

  async getLinkValue(id: string): Promise<string> {
    const link = await this.oneTimeLinkRepository.findOne({
      where: { id, isActive: true },
    });

    if (!link) {
      throw new NotFoundException('Link not found or has already been used.');
    }

    link.isActive = false;
    await this.oneTimeLinkRepository.save(link);

    return link.value;
  }
}
