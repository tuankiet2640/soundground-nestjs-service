import { Controller } from "@nestjs/common";
import { PlaylistService } from "../service/playlist.service";
import { Playlist } from "../entities/playlist.entity";
import { Crud, CrudController } from "@nestjs-library/crud";

@Controller('playlists')
@Crud({ entity: Playlist })
export class PlaylistController implements CrudController<Playlist> {
  constructor(public readonly crudService: PlaylistService) {
  }
}