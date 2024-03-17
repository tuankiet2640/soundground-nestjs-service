import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppService } from "./app.service";
import { AudioModule } from "./audio/audio.module";
import { TrackController } from "./controller/track.controller";
import { TrackService } from "./service/track.service";
import { Track } from "./entities/track.entity";
import { AppUser } from "./entities/app-user.entity";
import { Playlist } from "./entities/playlist.entity";
import { Comment } from "./entities/comment.entity";
import { PlaylistService } from "./service/playlist.service";
import { PlaylistController } from "./controller/playlist.controller";
import { AppUserService } from "./service/app-user.service";
import { AppUserController } from "./controller/app-user.controller";

@Module({
  imports: [
    AudioModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get<string>('DATABASE_USERNAME'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
        entities: [Track, AppUser, Playlist, Comment],
        synchronize: true,
      }),
    }),
    TypeOrmModule.forFeature([Track, AppUser, Playlist, Comment]),
  ],
  controllers: [TrackController, PlaylistController, AppUserController],
  providers: [AppService, TrackService, PlaylistService, AppUserService],
})
export class AppModule {}
