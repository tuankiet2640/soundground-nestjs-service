import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Track } from '../entities/track.entity';
import { CrudService } from '@nestjs-library/crud';
@Injectable()
export class TrackService extends CrudService<Track> {
  constructor(
    @InjectRepository(Track)
    private trackRepository: Repository<Track>,
  ) {
    super(trackRepository);
  }
  findAll(): Promise<Track[]> {
    return this.trackRepository.find();
  }
}
