//track controller
import { Controller, Get } from '@nestjs/common';
import { TrackService } from '../service/track.service';
import { Track } from '../entities/track.entity';

@Controller('tracks')
export class TrackController {
  constructor(private trackService: TrackService) {}

  @Get()
  findAll(): Promise<Track[]> {
    return this.trackService.findAll();
  }
}
