//track controller
import { Controller } from '@nestjs/common';
import { TrackService } from '../service/track.service';
import { Track } from '../entities/track.entity';
import { Crud, CrudController } from '@nestjs-library/crud';

@Controller('tracks')
@Crud({ entity: Track })
export class TrackController implements CrudController<Track> {
  constructor(public readonly crudService: TrackService) {}
}
