import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Track } from '../entities/track.entity';
import { TrackRepository } from '../repository/track.repository';
@Injectable()
export class TrackService {
  constructor(
    @InjectRepository(Track)
    private trackRepository: Repository<Track>,
    private trackRepo: TrackRepository,
  ) {}
  findAll(): Promise<Track[]> {
    return this.trackRepository.find();
  }
}
