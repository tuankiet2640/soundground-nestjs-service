//playlist service
import { Injectable } from '@nestjs/common';
import { Playlist } from '../entities/playlist.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PlaylistService {
  constructor(
    @InjectRepository(Playlist)
    private playlistRepository: Repository<Playlist>,
  ) {}

  findAll(): Promise<Playlist[]> {
    return this.playlistRepository.find();
  }
}
