//track controller
import { Controller, Get } from '@nestjs/common';
import { TrackService } from '../service/track.service';
import { Track } from '../entities/track.entity';
import { Crud, CrudController, CrudService } from "@nestjs-library/crud";

@Controller('tracks')
@Crud({ entity: Track })
export class TrackController implements CrudController<Track>{
  constructor(private trackService: TrackService) {}

  @Get()
  findAll(): Promise<Track[]> {
    return this.trackService.findAll();
  }

  crudService: CrudService<Track>;
}
