/* eslint-disable prettier/prettier */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
  OneToMany,
  BaseEntity, JoinColumn
} from "typeorm";
import { AppUser } from './app-user.entity';
import { Playlist } from "./playlist.entity";
import { Comment } from "./comment.entity";

@Entity({ schema: 'soundground', name: 'track' })
export class Track extends BaseEntity{
  @PrimaryGeneratedColumn('increment', { name: 'track_id' })
  trackId: number;

  @Column({ name: 'title', length: 255 })
  title: string;

  @Column({ name: 'upload_date', type: 'timestamp' })
  uploadDate: Date;

  @Column({ name: 'artwork', length: 255 })
  artwork: string;

  @Column({ name: 'genre', length: 255 })
  genre: string;

  @Column({ name: 'plays_count' })
  playsCount: number;

  @Column({ name: 'audio_path', length: 255 })
  audioPath: string;

  @Column({ name: 'status', length: 50 })
  status: string;

//user create tracks
  @ManyToOne(() => AppUser, (user) => user.tracks)
  @JoinColumn({ name: 'user_id' })
  user: AppUser;

  //tracks and playlists
  @ManyToMany(() => Playlist, (playlist) => playlist.tracks)
  @JoinTable({ name: 'playlist_track',
    joinColumn: { name: 'track_id', referencedColumnName: 'trackId' },
    inverseJoinColumn: { name: 'playlist_id', referencedColumnName: 'playlistId' },
  })
  playlists: Playlist[];

  // liked tracks relation
  @ManyToMany(() => AppUser, (user) => user.likedTracks)
  @JoinTable({ name: 'track_like',
    joinColumn: { name: 'track_id', referencedColumnName: 'trackId' },
    inverseJoinColumn: { name: 'user_id', referencedColumnName: 'userId' },
  })
  likes: AppUser[];

  // reposts relation here
  @ManyToMany(() => AppUser, (user) => user.repostedTracks)
  @JoinTable({ name: 'track_repost',
    joinColumn: { name: 'track_id', referencedColumnName: 'trackId' },
    inverseJoinColumn: { name: 'user_id', referencedColumnName: 'userId' },
  })
  reposts: AppUser[];

  //comments relation here
  @OneToMany(() => Comment, (comment) => comment.track)
  comments: Comment[];


}
