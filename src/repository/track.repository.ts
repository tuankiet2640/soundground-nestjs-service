//track repository

import { Repository } from 'typeorm';
import { Track } from '../entities/track.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TrackRepository extends Repository<Track> {
  async findTracksByPlaylistId(playlistId: number): Promise<Track[]> {
    return this.createQueryBuilder('track')
      .leftJoin('track.playlists', 'playlist')
      .where('playlist.playlistId = :playlistId', { playlistId })
      .getMany();
  }
}
