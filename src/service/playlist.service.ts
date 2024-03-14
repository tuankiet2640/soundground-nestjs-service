//playlist service
import { Injectable } from "@nestjs/common";
import { Playlist } from "../entities/playlist.entity";
import { CrudService } from "@nestjs-library/crud";
import { InjectRepository } from '@nestjs/typeorm';
import { Track } from "../entities/track.entity";
import { Repository } from "typeorm";

@Injectable()
export class PlaylistService extends CrudService<Playlist> {
  constructor(
    @InjectRepository(Track)
    private playlistRepository: Repository<Playlist>,
  ) {
    super(playlistRepository);
  }
}
